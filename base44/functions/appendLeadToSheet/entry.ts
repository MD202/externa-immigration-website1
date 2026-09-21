import { createClientFromRequest } from 'npm:@base44/sdk@0.8.44';

// Leads (paid / unpaid consultations, contact-us inquiries, WhatsApp captures)
// are appended as rows to the firm's shared Google Sheet.
// Column layout (A-M):
// A Lead ID | B Date Scheduled | C Name | D Phone/WhatsApp | E Email | F Source |
// G Service Needed | H Appointment | I Paid? | J Created Date | K Status |
// L Follow-up Date | M Comments
const SPREADSHEET_ID = "1BklIklUZIbETJh8S88lLyO7WOybSmdCFTNwLCy0Uc5k";
const HEADERS = [
  "Lead ID", "Date Scheduled", "Name", "Phone/WhatsApp", "Email", "Source",
  "Service Needed", "Appointment", "Paid?", "Created Date", "Status",
  "Follow-up Date", "Comments",
];

export default async function(req) {
  try {
    const body = await req.json();
    const {
      leadId, dateScheduled, name, phone, email, source,
      serviceNeeded, appointment, paid, createdDate, status, comments,
    } = body;

    const base44 = createClientFromRequest(req);
    const { accessToken } = await base44.asServiceRole.connectors.getConnection("googlesheets");
    const auth = { Authorization: `Bearer ${accessToken}` };
    const jsonAuth = { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" };

    // Resolve the first sheet's title (it may be renamed from the default "Sheet1").
    const metaRes = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}?fields=sheets.properties(title,index)`, { headers: auth });
    const meta = await metaRes.json();
    const sheetName = meta.sheets?.slice().sort((a, b) => (a.properties.index ?? 0) - (b.properties.index ?? 0))[0]?.properties?.title || "Sheet1";
    const baseRange = `${sheetName}!A1`;

    // Ensure row 1 holds the current header schema; (re)write it if missing or stale.
    const checkRes = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(`${sheetName}!A1:M1`)}`, { headers: auth });
    const checkData = await checkRes.json();
    if (!checkData.values?.[0] || checkData.values[0][0] !== HEADERS[0]) {
      await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(`${sheetName}!A1:M1`)}?valueInputOption=RAW`, {
        method: "PUT", headers: jsonAuth, body: JSON.stringify({ values: [HEADERS] }),
      });
    }

    const row = [
      leadId || "",
      dateScheduled || "",
      name || "",
      phone || "",
      email || "",
      source || "",
      serviceNeeded || "",
      appointment || "",
      paid || "",
      createdDate || "",
      status || "Needs Review",
      "", // Follow-up Date (manual)
      comments || "",
    ];
    const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(baseRange)}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`, {
      method: "POST", headers: jsonAuth, body: JSON.stringify({ values: [row] }),
    });
    const data = await res.json();
    if (!res.ok) {
      console.error("Sheets append error:", data.error?.message);
      return Response.json({ error: data.error?.message || "Sheets error" }, { status: 500 });
    }
    return Response.json({ ok: true, updatedRange: data.updates?.updatedRange });
  } catch (error) {
    console.error("appendLeadToSheet error:", error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
}