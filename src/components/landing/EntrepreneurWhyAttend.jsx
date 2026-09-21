// "Why attend?" — navy band framing the value of understanding before investing.
export default function EntrepreneurWhyAttend({ eyebrow, title, paragraphs }) {
  return (
    <section className="bg-[#1E2A4A] px-5 py-20 text-white lg:px-[8vw] lg:py-28">
      <div className="mx-auto max-w-4xl">
        {eyebrow && <p className="text-xs font-semibold uppercase tracking-[.24em] text-[#00FF87]">{eyebrow}</p>}
        <h2 className="mt-4 font-heading text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
        <div className="mt-6 max-w-2xl space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed text-white/70">{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}