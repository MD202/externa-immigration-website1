import { Minus } from 'lucide-react';

// "This session is not an application" compliance callout (navy + green).
export default function EntrepreneurDisclaimer({ eyebrow, title, intro, notIncludedLabel, notIncluded, closing }) {
  return (
    <section className="bg-white px-5 py-20 lg:px-[8vw] lg:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="border-l-2 border-[#00FF87] bg-[#F4F6FA] p-8 lg:p-10">
          {eyebrow && <p className="text-xs font-semibold uppercase tracking-[.24em] text-[#1E2A4A]">{eyebrow}</p>}
          <h2 className="mt-3 font-heading text-2xl text-[#1E2A4A] sm:text-3xl">{title}</h2>
          <p className="mt-5 leading-relaxed text-[#1E2A4A]/70">{intro}</p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[.12em] text-[#1E2A4A]/60">{notIncludedLabel}</p>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {notIncluded.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#1E2A4A]/65">
                <Minus className="mt-0.5 h-4 w-4 shrink-0 text-[#1E2A4A]/40" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-[#1E2A4A]/60">{closing}</p>
        </div>
      </div>
    </section>
  );
}