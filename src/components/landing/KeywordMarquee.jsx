// Clean, premium single-row ticker. Refined uppercase display type, one
// outlined live badge, accent slash separators — modern without the noise.
export default function KeywordMarquee({ words, bg = 'bg-[#1E2A4A]', accent = '#00FF87', fomo = 'Live · Oct 3' }) {
  const items = [{ text: fomo, kind: 'badge' }, ...words.map((w) => ({ text: w, kind: 'word' }))];
  const track = [...items, ...items, ...items];
  return (
    <div className={`relative overflow-hidden border-y border-white/10 ${bg} py-5`} aria-hidden="true">
      <div className="marquee-track gap-10 whitespace-nowrap sm:gap-14">
        {track.map((item, i) => (
          <span key={i} className="flex items-center gap-10 sm:gap-14">
            {item.kind === 'badge' ? (
              <span className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[.18em]" style={{ borderColor: accent, color: accent }}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />{item.text}
              </span>
            ) : (
              <span className="font-heading text-xl font-medium uppercase tracking-[.2em] text-white/85 sm:text-2xl">{item.text}</span>
            )}
            <span className="text-sm" style={{ color: accent }}>/</span>
          </span>
        ))}
      </div>
    </div>
  );
}