// "Who should attend" — six audience cards on a soft navy-tinted ground.
export default function EntrepreneurAudience({ eyebrow, title, intro, cards }) {
  return (
    <section className="bg-[#F4F6FA] px-5 py-20 lg:px-[8vw] lg:py-28">
      <div className="mx-auto max-w-5xl">
        {eyebrow && <p className="text-xs font-semibold uppercase tracking-[.24em] text-[#1E2A4A]">{eyebrow}</p>}
        <h2 className="mt-4 font-heading text-3xl leading-[1.1] text-[#1E2A4A] sm:text-4xl lg:text-5xl">{title}</h2>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#1E2A4A]/65">{intro}</p>}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="flex h-full flex-col border-t-2 border-[#00FF87] bg-white p-7">
              <h3 className="font-heading text-lg text-[#1E2A4A]">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#1E2A4A]/60">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}