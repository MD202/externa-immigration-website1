import { createClientFromRequest } from 'npm:@base44/sdk@0.8.44';

// Leads (paid / unpaid consultations, contact-us inquiries, WhatsApp captures)
// are appended as rows to the firm's shared Google Sheet.
// Column layout (A-N):
// A Lead ID | B Date Scheduled | C Name | D Phone/WhatsApp | E Email | F Source |
// G Service Needed | H Appointment | I Paid? | J Created Date | K Status |
// L Follow-up Date | M Comments | N Deadline
const SPREADSHEET_ID = "1BklIklUZIbETJh8S88lLyO7WOybSmdCFTNwLCy0Uc5k";
const HEADERS = [
  "Lead ID", "Date Scheduled", "Name", "Phone/WhatsApp", "Email", "Source",
  "Service Needed", "Appointment", "Paid?", "Created Date", "Status",
  "Follow-up Date", "Comments", "Deadline",
];

export default async function(req) {
  try {
    const body = await req.json();
    const {
      dateScheduled, name, phone, email, source,
      serviceNeeded, appointment, paid, createdDate, status, comments, deadline,
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
    const checkRes = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(`${sheetName}!A1:N1`)}`, { headers: auth });
    const checkData = await checkRes.json();
    const headerRow = checkData.values?.[0] || [];
    if (headerRow[0] !== HEADERS[0] || headerRow.length !== HEADERS.length) {
      await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(`${sheetName}!A1:N1`)}?valueInputOption=RAW`, {
        method: "PUT", headers: jsonAuth, body: JSON.stringify({ values: [HEADERS] }),
      });
    }

    // Auto-number Lead ID: next integer after the highest existing numeric Lead ID in column A.
    const colRes = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(`${sheetName}!A2:A`)}`, { headers: auth });
    const colData = await colRes.json();
    const existing = colData.values || [];
    let maxId = 0;
    for (const r of existing) {
      const v = (r[0] || "").toString().trim();
      if (/^\d+$/.test(v)) {
        const n = parseInt(v, 10);
        if (n > maxId) maxId = n;
      }
    }
    const leadId = String(maxId + 1);

    const row = [
      leadId,
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
      deadline || "",
    ];
    const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(baseRange)}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`, {
      method: "POST", headers: jsonAuth, body: JSON.stringify({ values: [row] }),
    });
    const data = await res.json();
    if (!res.ok) {
      console.error("Sheets append error:", data.error?.message);
      return Response.json({ error: data.error?.message || "Sheets error" }, { status: 500 });
    }
    return Response.json({ ok: true, leadId, updatedRange: data.updates?.updatedRange });
  } catch (error) {
    console.error("appendLeadToSheet error:", error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
}