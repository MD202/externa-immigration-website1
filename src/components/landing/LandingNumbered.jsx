// "Stop guessing" section (forest palette): intro, factor chips, a highlighted
// line, and the numbered 01-05 breakdown of what the session covers.
export default function LandingNumbered({ eyebrow, title, intro, factorsLabel, factors, change, highlight, subheading, items }) {
  return (
    <section className="bg-white px-5 py-20 lg:px-[8vw] lg:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[.24em] text-[#1E8A70]">{eyebrow}</p>
        <h2 className="mt-4 font-heading text-3xl leading-[1.1] text-[#123B35] sm:text-4xl lg:text-5xl">{title}</h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#202624]/65">{intro}</p>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[.12em] text-[#202624]/60">{factorsLabel}</p>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {factors.map((f) => (
            <span key={f} className="border border-[#1E8A70]/40 px-3.5 py-2 text-sm text-[#202624]/75">{f}</span>
          ))}
        </div>
        <p className="mt-6 text-[#202624]/65">{change}</p>
        <p className="mt-3 font-heading text-2xl leading-snug text-[#123B35]">{highlight}</p>
        <p className="mt-10 font-heading text-xl text-[#123B35]">{subheading}</p>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {items.map((it) => (
            <div key={it.n} className="border-t border-[#123B35]/10 pt-5">
              <div className="flex items-baseline gap-4">
                <span className="font-heading text-3xl text-[#1E8A70]">{it.n}</span>
                <h3 className="font-heading text-xl text-[#123B35]">{it.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#202624]/60">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}