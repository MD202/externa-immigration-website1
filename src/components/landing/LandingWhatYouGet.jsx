import { Check } from 'lucide-react';

// "What you get for $59" (forest palette): before/during/after stages plus the
// included checklist.
export default function LandingWhatYouGet({ eyebrow, title, subheading, stages, checklistTitle, checklist }) {
  return (
    <section className="bg-[#F7F3EA] px-5 py-20 lg:px-[8vw] lg:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[.24em] text-[#1E8A70]">{eyebrow}</p>
        <h2 className="mt-4 font-heading text-3xl leading-[1.1] text-[#123B35] sm:text-4xl lg:text-5xl">{title}</h2>
        <p className="mt-6 font-heading text-xl text-[#123B35]">{subheading}</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {stages.map((s) => (
            <div key={s.label} className="border-t-2 border-[#1E8A70] bg-white p-6">
              <h3 className="font-heading text-lg text-[#123B35]">{s.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#202624]/60">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 border border-[#1E8A70]/15 bg-white p-8 lg:p-10">
          <h3 className="font-heading text-xl text-[#123B35]">{checklistTitle}</h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#202624]/75">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#1E8A70]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}