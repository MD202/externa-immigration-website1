// "What you'll learn" — six numbered points (01-06) on white with fluorescent-green
// top borders.
export default function EntrepreneurLearn({ eyebrow, title, items }) {
  return (
    <section className="bg-white px-5 py-20 lg:px-[8vw] lg:py-28">
      <div className="mx-auto max-w-5xl">
        {eyebrow && <p className="text-xs font-semibold uppercase tracking-[.24em] text-[#1E2A4A]">{eyebrow}</p>}
        <h2 className="mt-4 font-heading text-3xl leading-[1.1] text-[#1E2A4A] sm:text-4xl lg:text-5xl">{title}</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {items.map((it) => (
            <div key={it.n} className="border-t-2 border-[#00FF87] pt-5">
              <div className="flex items-baseline gap-4">
                <span className="font-heading text-3xl text-[#1E2A4A]">{it.n}</span>
                <h3 className="font-heading text-xl text-[#1E2A4A]">{it.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#1E2A4A]/60">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}