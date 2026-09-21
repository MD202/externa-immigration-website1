// "Why Externa" on a deep-forest band (forest palette): clear advice, no promises.
export default function LandingWhyUs({ eyebrow, title, paragraphs, promises }) {
  return (
    <section className="bg-[#123B35] px-5 py-20 text-white lg:px-[8vw] lg:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[.24em] text-[#E9826B]">{eyebrow}</p>
        <h2 className="mt-4 font-heading text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
        <div className="mt-6 max-w-2xl space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed text-white/75">{p}</p>
          ))}
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {promises.map((p) => (
            <li key={p} className="flex items-start gap-3 text-white/90">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E9826B]" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}