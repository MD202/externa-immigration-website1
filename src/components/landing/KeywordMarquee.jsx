// Scrolling keyword ticker. The track is tripled so the CSS marquee loop is seamless.
export default function KeywordMarquee({ words, bg = 'bg-[#1E2A4A]', text = 'text-white/80', accent = '#00FF87' }) {
  const track = [...words, ...words, ...words];
  return (
    <div className={`overflow-hidden border-y border-white/10 ${bg} py-4`} aria-hidden="true">
      <div className="marquee-track gap-10 whitespace-nowrap font-heading text-2xl uppercase tracking-[.14em] sm:text-3xl">
        {track.map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className={text}>{w}</span>
            <span style={{ color: accent }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}