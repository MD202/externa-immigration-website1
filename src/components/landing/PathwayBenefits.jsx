// Benefits grid (mono numerals, no icon squares) plus a bordered "what's included"
// checklist. Both sections stay visible and readable without JavaScript.
export default function PathwayBenefits({ benefits, includes }) {
  return (
    <section id="benefits" className="bg-[#F8FAFC] px-5 py-20 lg:px-[8vw] lg:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow">Why register</p>
        <h2 className="section-title">Built for outcomes, not paperwork</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <div key={b.title} className="border-t border-[#1E2A4A]/10 pt-6">
              <span className="font-heading text-3xl text-[#B8860B]">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 font-heading text-xl text-[#1E2A4A]">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#1E2A4A]/60">{b.text}</p>
            </div>
          ))}
        </div>

        {includes && (
          <div className="mt-16 border border-[#1E2A4A]/10 bg-white p-8 lg:p-10">
            <h3 className="font-heading text-2xl text-[#1E2A4A]">What is included in your registration</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#1E2A4A]/75">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B8860B]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}