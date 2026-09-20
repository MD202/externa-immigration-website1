import { createClientFromRequest } from 'npm:@base44/sdk@0.8.44';
import { etDateToUtc } from "../../shared/etTime.ts";

// Consultations are written to the firm's dedicated booking calendar.
const CALENDAR_ID = "info@externaimmigration.com";

// Available consultation windows (Eastern Time), 1-hour slots.
// Mon-Fri: 6:30 PM - 9:30 PM
// Sat-Sun: 7:00 AM - 9:00 AM and 7:00 PM - 8:30 PM
const WEEKDAY_SLOTS = [[18, 30], [19, 30], [20, 30]];
const WEEKEND_SLOTS = [[7, 0], [8, 0], [19, 0]];

export default async function(req) {
  try {
    const body = await req.json();
    const { date } = body;
    if (!date) return Response.json({ error: "Date required" }, { status: 400 });

    const base44 = createClientFromRequest(req);
    const { accessToken } = await base44.asServiceRole.connectors.getConnection("googlecalendar");

    // Weekday of the requested date in the consultant's timezone.
    const day = new Date(date + "T12:00:00Z").getUTCDay(); // 0=Sun ... 6=Sat
    const isWeekend = day === 0 || day === 6;
    const slotStarts = isWeekend ? WEEKEND_SLOTS : WEEKDAY_SLOTS;

    // FreeBusy window covering the earliest start through the latest slot end.
    const minutes = slotStarts.map(([h, m]) => h * 60 + m);
    const startMin = Math.min(...minutes);
    const endMin = Math.max(...minutes) + 60;
    const start = etDateToUtc(date, Math.floor(startMin / 60), startMin % 60);
    const end = etDateToUtc(date, Math.floor(endMin / 60), endMin % 60);

    const fbRes = await fetch("https://www.googleapis.com/calendar/v3/freeBusy", {
      method: "POST",
      headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
      body: JSON.stringify({ timeMin: start.toISOString(), timeMax: end.toISOString(), items: [{ id: CALENDAR_ID }] }),
    });
    const fbData = await fbRes.json();
    if (!fbRes.ok) {
      console.error("FreeBusy error:", fbData.error?.message);
      return Response.json({ error: fbData.error?.message || "Calendar error" }, { status: 500 });
    }
    const busy = fbData.calendars?.[CALENDAR_ID]?.busy || [];

    const slots = [];
    for (const [h, m] of slotStarts) {
      const slotStart = etDateToUtc(date, h, m);
      const slotEnd = new Date(slotStart.getTime() + 60 * 60 * 1000); // 1 hour
      const isBusy = busy.some((b) => {
        const bStart = new Date(b.start);
        const bEnd = new Date(b.end);
        return slotStart < bEnd && slotEnd > bStart;
      });
      if (!isBusy) {
        slots.push(slotStart.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true, timeZone: "America/New_York" }));
      }
    }
    return Response.json({ slots });
  } catch (error) {
    console.error("getCalendarAvailability error:", error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
}