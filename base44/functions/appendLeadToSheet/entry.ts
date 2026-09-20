import { createClientFromRequest } from 'npm:@base44/sdk@0.8.44';

// Leads (paid / unpaid consultations, contact-us inquiries, WhatsApp captures)
// are appended as rows to the firm's shared Google Sheet.
const SPREADSHEET_ID = "1BklIklUZIbETJh8S88lLyO7WOybSmdCFTNwLCy0Uc5k";
const HEADERS = ["Timestamp", "Source", "First Name", "Last Name", "Email", "Phone", "Looking For", "Urgency", "Notes"];

export default async function(req) {
  try {
    const body = await req.json();
    const { source, firstName, lastName, email, phone, lookingFor, urgency, notes } = body;

    const base44 = createClientFromRequest(req);
    const { accessToken } = await base44.asServiceRole.connectors.getConnection("googlesheets");
    const auth = { Authorization: `Bearer ${accessToken}` };
    const jsonAuth = { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" };

    // Resolve the first sheet's title (it may be renamed from the default "Sheet1").
    const metaRes = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}?fields=sheets.properties(title,index)`, { headers: auth });
    const meta = await metaRes.json();
    const sheetName = meta.sheets?.slice().sort((a, b) => (a.properties.index ?? 0) - (b.properties.index ?? 0))[0]?.properties?.title || "Sheet1";
    const baseRange = `${sheetName}!A1`;

    // Write a header row on the first lead if the sheet is empty.
    const checkRes = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(`${sheetName}!A1:I1`)}`, { headers: auth });
    const checkData = await checkRes.json();
    if (!checkData.values?.[0]?.[0]) {
      await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(baseRange)}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`, {
        method: "POST", headers: jsonAuth, body: JSON.stringify({ values: [HEADERS] }),
      });
    }

    const row = [new Date().toISOString(), source || "", firstName || "", lastName || "", email || "", phone || "", lookingFor || "", urgency || "", notes || ""];
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