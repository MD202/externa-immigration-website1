// Shared helper for America/New_York time conversion (consultant's timezone)
export function etOffsetHours(dateStr) {
  const dtf = new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", timeZoneName: "shortOffset" });
  const parts = dtf.formatToParts(new Date(dateStr + "T12:00:00Z"));
  const tzPart = parts.find((p) => p.type === "timeZoneName");
  const val = (tzPart?.value || "GMT-4").replace("GMT", "");
  return Math.abs(parseInt(val, 10) || 4);
}

export function etDateToUtc(dateStr, hour) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const off = etOffsetHours(dateStr);
  return new Date(Date.UTC(y, m - 1, d, hour + off, 0, 0));
}