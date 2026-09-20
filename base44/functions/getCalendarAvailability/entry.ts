import { createClientFromRequest } from 'npm:@base44/sdk@0.8.44';
import { etDateToUtc } from "../../shared/etTime.ts";

// Consultations are written to the firm's dedicated booking calendar.
const CALENDAR_ID = "info@externaimmigration.com";

export default async function(req) {
  try {
    const body = await req.json();
    const { date } = body;
    if (!date) return Response.json({ error: "Date required" }, { status: 400 });

    const base44 = createClientFromRequest(req);
    const { accessToken } = await base44.asServiceRole.connectors.getConnection("googlecalendar");

    const start = etDateToUtc(date, 9);
    const end = etDateToUtc(date, 19);

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
    for (let h = 9; h < 19; h++) {
      const slotStart = etDateToUtc(date, h);
      const slotEnd = etDateToUtc(date, h + 1);
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