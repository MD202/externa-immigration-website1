import { Check } from 'lucide-react';

// "What you get for $59": before/during/after stages plus the included checklist.
export default function LandingWhatYouGet({ eyebrow, title, subheading, stages, checklistTitle, checklist }) {
  return (
    <section className="bg-[#F8FAFC] px-5 py-20 lg:px-[8vw] lg:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
        <p className="mt-6 font-heading text-xl text-[#1E2A4A]">{subheading}</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {stages.map((s) => (
            <div key={s.label} className="border-t-2 border-[#B8860B] bg-white p-6">
              <h3 className="font-heading text-lg text-[#1E2A4A]">{s.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#1E2A4A]/60">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 border border-[#1E2A4A]/10 bg-white p-8 lg:p-10">
          <h3 className="font-heading text-xl text-[#1E2A4A]">{checklistTitle}</h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#1E2A4A]/75">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#B8860B]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}