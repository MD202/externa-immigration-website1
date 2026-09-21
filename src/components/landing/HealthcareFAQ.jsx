// Healthcare FAQ (forest palette) using native <details> so answers are
// reachable without JavaScript and the page content stays crawlable.
export default function HealthcareFAQ({ faqs, title }) {
  return (
    <section className="bg-white px-5 py-20 lg:px-[8vw] lg:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-heading text-3xl text-[#123B35] sm:text-4xl lg:text-5xl">{title}</h2>
        <div className="mt-10 divide-y divide-[#123B35]/10 border-y border-[#123B35]/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-lg text-[#123B35] [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="text-2xl font-light text-[#1E8A70] transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[#202624]/65">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}