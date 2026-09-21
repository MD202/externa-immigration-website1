// FAQ using native <details> so answers are reachable without JavaScript and
// the page content stays crawlable.
export default function PathwayFAQ({ faqs }) {
  return (
    <section className="bg-[#F8FAFC] px-5 py-20 lg:px-[8vw] lg:py-28">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">Questions</p>
        <h2 className="section-title">Before you register</h2>
        <div className="mt-10 divide-y divide-[#1E2A4A]/10 border-y border-[#1E2A4A]/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-lg text-[#1E2A4A] [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="text-2xl font-light text-[#B8860B] transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[#1E2A4A]/65">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}