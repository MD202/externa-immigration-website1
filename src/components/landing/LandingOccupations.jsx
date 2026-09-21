// Healthcare occupations list with eligibility notes.
export default function LandingOccupations({ eyebrow, title, intro, list, notes }) {
  return (
    <section className="bg-white px-5 py-20 lg:px-[8vw] lg:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#1E2A4A]/65">{intro}</p>
        <div className="mt-8 flex flex-wrap gap-2.5">
          {list.map((o) => (
            <span key={o} className="border border-[#1E2A4A]/15 bg-[#F8FAFC] px-4 py-2.5 text-sm text-[#1E2A4A]/75">{o}</span>
          ))}
        </div>
        <div className="mt-8 max-w-3xl space-y-3">
          {notes.map((n, i) => (
            <p key={i} className="text-sm leading-relaxed text-[#1E2A4A]/55">{n}</p>
          ))}
        </div>
      </div>
    </section>
  );
}