import Reveal from '@/components/site/Reveal';

// Card grid where each card shows a floating heading (the lead) and reveals
// the detail body on hover (desktop). On touch/mobile the body is always visible.
export default function HoverRevealCards({ rows, variant = 'light', columns = 2 }) {
  const dark = variant === 'dark';
  const card = dark
    ? 'border-white/15 bg-white/[.03] hover:border-[#F4EEE2]/40 hover:bg-white/[.06]'
    : 'border-[#1E2A4A]/15 bg-white hover:border-[#B8860B] hover:shadow-[0_18px_50px_-20px_rgba(30,42,74,0.35)]';
  const lead = dark ? 'text-white' : 'text-[#1E2A4A]';
  const body = dark ? 'text-white/60' : 'text-[#1E2A4A]/65';
  const accent = dark ? 'bg-[#F4EEE2]' : 'bg-[#B8860B]';
  const grid = columns === 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2';

  return (
    <div className={`mt-14 grid gap-4 ${grid}`}>
      {rows.map((row, i) => (
        <Reveal key={i}>
          <article className={`group relative h-full border p-7 transition-all duration-300 hover:-translate-y-1 ${card}`}>
            <span className={`absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 ${accent} transition-transform duration-200 group-hover:scale-y-100`} />
            <h3 className={`font-heading text-2xl leading-snug ${lead}`}>{row.lead}</h3>
            <p className={`mt-3 max-w-md overflow-hidden text-base leading-relaxed transition-all duration-300 ${body} max-h-96 opacity-100 lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-96 lg:group-hover:opacity-100`}>{row.body}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}