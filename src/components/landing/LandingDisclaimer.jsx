import { Minus } from 'lucide-react';

// "This is not an application service" compliance callout (forest palette).
// Uses a minus marker (not a check) to signal exclusion.
export default function LandingDisclaimer({ eyebrow, title, intro, notIncludedLabel, notIncluded, closing }) {
  return (
    <section className="bg-white px-5 py-20 lg:px-[8vw] lg:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="border-l-2 border-[#1E8A70] bg-[#DDEFE8] p-8 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[.24em] text-[#1E8A70]">{eyebrow}</p>
          <h2 className="mt-3 font-heading text-2xl text-[#123B35] sm:text-3xl">{title}</h2>
          <p className="mt-5 leading-relaxed text-[#202624]/70">{intro}</p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[.12em] text-[#202624]/60">{notIncludedLabel}</p>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {notIncluded.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#202624]/65">
                <Minus className="mt-0.5 h-4 w-4 shrink-0 text-[#E9826B]" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-[#202624]/60">{closing}</p>
        </div>
      </div>
    </section>
  );
}