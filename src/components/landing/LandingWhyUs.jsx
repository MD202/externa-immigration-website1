// "Why Externa" on a navy band: clear advice, no promises.
export default function LandingWhyUs({ eyebrow, title, paragraphs, promises }) {
  return (
    <section className="bg-[#1E2A4A] px-5 py-20 text-white lg:px-[8vw] lg:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 font-heading text-3xl leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
        <div className="mt-6 max-w-2xl space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed text-white/70">{p}</p>
          ))}
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {promises.map((p) => (
            <li key={p} className="flex items-start gap-3 text-white/85">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B8860B]" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}