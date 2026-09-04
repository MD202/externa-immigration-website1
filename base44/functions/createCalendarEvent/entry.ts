import { createClientFromRequest } from 'npm:@base44/sdk@0.8.44';
import { etDateToUtc } from "../../shared/etTime.ts";

const TIER_DURATION_MIN = {
  quick_question: 15,
  full_consultation: 60,
  application_review: 60,
};

const TIER_LABEL = {
  quick_question: "Quick Question",
  full_consultation: "Full Consultation",
  application_review: "Application Review",
};

function parseHour(timeStr) {
  const m = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!m) return 9;
  let h = parseInt(m[1], 10);
  const ap = m[3].toUpperCase();
  if (ap === "PM" && h !== 12) h += 12;
  if (ap === "AM" && h === 12) h = 0;
  return h;
}

export default async function(req) {
  try {
    const body = await req.json();
    const { full_name, email, preferred_date, preferred_time, service_tier } = body;
    if (!preferred_date || !preferred_time) return Response.json({ error: "Date and time required" }, { status: 400 });

    const base44 = createClientFromRequest(req);
    const { accessToken } = await base44.asServiceRole.connectors.getConnection("googlecalendar");

    // Resolve the consultant's own email so the invite goes to both sides.
    let ownerEmail = "";
    try {
      const calRes = await fetch("https://www.googleapis.com/calendar/v3/calendars/primary", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const calData = await calRes.json();
      if (calRes.ok && calData.id) ownerEmail = calData.id;
    } catch (e) {
      console.error("Calendar primary fetch error:", e.message);
    }

    const hour = parseHour(preferred_time);
    const start = etDateToUtc(preferred_date, hour);
    const duration = TIER_DURATION_MIN[service_tier] || 60;
    const end = new Date(start.getTime() + duration * 60000);

    const attendees = [];
    if (email) attendees.push({ email });
    if (ownerEmail && ownerEmail !== email) attendees.push({ email: ownerEmail });

    const buildEvent = (atts) => ({
      summary: `${TIER_LABEL[service_tier] || "Consultation"} — ${full_name}`,
      description: `Client: ${full_name}\nEmail: ${email}\nService: ${TIER_LABEL[service_tier] || service_tier}`,
      start: { dateTime: start.toISOString(), timeZone: "America/New_York" },
      end: { dateTime: end.toISOString(), timeZone: "America/New_York" },
      attendees: atts,
      conferenceData: {
        createRequest: {
          requestId: crypto.randomUUID(),
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      },
    });

    const postEvent = (atts) => fetch(
      "https://www.googleapis.com/calendar/v3/calendars/primary/events?conferenceDataVersion=1&sendUpdates=all",
      {
        method: "POST",
        headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
        body: JSON.stringify(buildEvent(atts)),
      }
    );

    let res = await postEvent(attendees);
    let data = await res.json();
    // If listing the owner as an attendee caused a failure, retry with the client only.
    if (!res.ok && ownerEmail && ownerEmail !== email) {
      console.error("Calendar event with owner attendee failed, retrying client-only:", data.error?.message);
      res = await postEvent(email ? [{ email }] : []);
      data = await res.json();
    }
    if (!res.ok) {
      console.error("Calendar event error:", data.error?.message);
      return Response.json({ error: data.error?.message || "Calendar error" }, { status: 500 });
    }
    const meetLink = data.conferenceData?.entryPoints?.find((p) => p.entryPointType === "video")?.uri;
    return Response.json({ eventId: data.id, htmlLink: data.htmlLink, meetLink });
  } catch (error) {
    console.error("createCalendarEvent error:", error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
}