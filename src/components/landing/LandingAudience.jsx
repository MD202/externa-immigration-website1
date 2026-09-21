// "Who is this for" audience cards (forest palette).
export default function LandingAudience({ eyebrow, title, intro, cards }) {
  return (
    <section className="bg-[#F7F3EA] px-5 py-20 lg:px-[8vw] lg:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[.24em] text-[#1E8A70]">{eyebrow}</p>
        <h2 className="mt-4 font-heading text-3xl leading-[1.1] text-[#123B35] sm:text-4xl lg:text-5xl">{title}</h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#202624]/65">{intro}</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="flex h-full flex-col border border-[#1E8A70]/15 bg-white p-7">
              <h3 className="font-heading text-lg text-[#123B35]">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#202624]/60">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}