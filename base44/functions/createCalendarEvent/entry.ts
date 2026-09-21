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

// Consultations are written to the firm's dedicated booking calendar.
const CALENDAR_ID = "info@externaimmigration.com";

function parseTime(timeStr) {
  const m = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!m) return { hour: 9, minute: 0 };
  let h = parseInt(m[1], 10);
  const ap = m[3].toUpperCase();
  if (ap === "PM" && h !== 12) h += 12;
  if (ap === "AM" && h === 12) h = 0;
  return { hour: h, minute: parseInt(m[2], 10) };
}

export default async function(req) {
  try {
    const body = await req.json();
    const { full_name, email, preferred_date, preferred_time, service_tier } = body;
    if (!preferred_date || !preferred_time) return Response.json({ error: "Date and time required" }, { status: 400 });

    const base44 = createClientFromRequest(req);
    const { accessToken } = await base44.asServiceRole.connectors.getConnection("googlecalendar");

    const { hour, minute } = parseTime(preferred_time);
    const start = etDateToUtc(preferred_date, hour, minute);
    const duration = TIER_DURATION_MIN[service_tier] || 60;
    const end = new Date(start.getTime() + duration * 60000);

    // Only a valid client email is invited as an attendee. The consultant owns the booking
    // calendar and sees the event directly, so the calendar's own address is never added
    // (Google rejects it). If the client email is missing or malformed, the event is still
    // created so the consultant has it on their calendar; the client simply gets no invite.
    const emailIsValid = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
    const attendees = emailIsValid ? [{ email: String(email).trim() }] : [];

    const event = {
      summary: `${TIER_LABEL[service_tier] || "Consultation"} — ${full_name}`,
      description: `Client: ${full_name}\nEmail: ${email}\nService: ${TIER_LABEL[service_tier] || service_tier}`,
      start: { dateTime: start.toISOString(), timeZone: "America/New_York" },
      end: { dateTime: end.toISOString(), timeZone: "America/New_York" },
      attendees,
      conferenceData: {
        createRequest: {
          requestId: crypto.randomUUID(),
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      },
    };

    const res = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?conferenceDataVersion=1&sendUpdates=all`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
        body: JSON.stringify(event),
      }
    );
    const data = await res.json();
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