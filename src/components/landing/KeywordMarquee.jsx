// Bold modern ticker: two rows scrolling in opposite directions, italic display
// type, neon separators, and FOMO pills interspersed for energy.
export default function KeywordMarquee({ words, bg = 'bg-[#1E2A4A]', accent = '#00FF87', fomo = ['Limited seats', 'Oct 3', 'Live Q&A'] }) {
  const seq = [];
  words.forEach((w, i) => {
    seq.push({ text: w, kind: 'word' });
    if (fomo.length) seq.push({ text: fomo[i % fomo.length], kind: 'fomo' });
  });
  const track = [...seq, ...seq, ...seq];

  const Row = ({ reverse }) => (
    <div className="overflow-hidden">
      <div className="marquee-track gap-8 whitespace-nowrap" style={reverse ? { animationDirection: 'reverse' } : undefined}>
        {track.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            {item.kind === 'fomo' ? (
              <span className="rounded-full px-4 py-1 text-sm font-bold uppercase tracking-[.16em]" style={{ backgroundColor: accent, color: '#0E1B33' }}>{item.text}</span>
            ) : (
              <span className="font-heading text-3xl font-semibold uppercase italic tracking-tight text-white sm:text-4xl lg:text-5xl">{item.text}</span>
            )}
            <span className="text-2xl lg:text-3xl" style={{ color: accent }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`relative overflow-hidden border-y border-white/10 ${bg} py-5`} aria-hidden="true">
      <Row reverse={false} />
      <div className="h-3" />
      <Row reverse={true} />
    </div>
  );
}