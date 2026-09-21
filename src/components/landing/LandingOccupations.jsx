// Healthcare occupations list with eligibility notes (forest palette).
export default function LandingOccupations({ eyebrow, title, intro, list, notes }) {
  return (
    <section className="bg-white px-5 py-20 lg:px-[8vw] lg:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[.24em] text-[#1E8A70]">{eyebrow}</p>
        <h2 className="mt-4 font-heading text-3xl leading-[1.1] text-[#123B35] sm:text-4xl lg:text-5xl">{title}</h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#202624]/65">{intro}</p>
        <div className="mt-8 flex flex-wrap gap-2.5">
          {list.map((o) => (
            <span key={o} className="border border-[#123B35]/15 bg-[#DDEFE8] px-4 py-2.5 text-sm text-[#123B35]">{o}</span>
          ))}
        </div>
        <div className="mt-8 max-w-3xl space-y-3">
          {notes.map((n, i) => (
            <p key={i} className="text-sm leading-relaxed text-[#202624]/55">{n}</p>
          ))}
        </div>
      </div>
    </section>
  );
}