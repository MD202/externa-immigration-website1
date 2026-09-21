// "What's included" — navy band with fluorescent-green labels for an event feel.
export default function EntrepreneurIncluded({ eyebrow, title, items }) {
  return (
    <section className="bg-[#1E2A4A] px-5 py-20 text-white lg:px-[8vw] lg:py-28">
      <div className="mx-auto max-w-5xl">
        {eyebrow && <p className="text-xs font-semibold uppercase tracking-[.24em] text-[#00FF87]">{eyebrow}</p>}
        <h2 className="mt-4 font-heading text-3xl leading-[1.1] text-white sm:text-4xl lg:text-5xl">{title}</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.label} className="border-t-2 border-[#00FF87]/40 pt-5">
              <h3 className="font-heading text-lg text-[#00FF87]">{it.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}