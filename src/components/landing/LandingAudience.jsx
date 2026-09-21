// "Who is this for" audience cards.
export default function LandingAudience({ eyebrow, title, intro, cards }) {
  return (
    <section className="bg-[#F8FAFC] px-5 py-20 lg:px-[8vw] lg:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#1E2A4A]/65">{intro}</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="flex h-full flex-col border border-[#1E2A4A]/10 bg-white p-7">
              <h3 className="font-heading text-lg text-[#1E2A4A]">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#1E2A4A]/60">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}