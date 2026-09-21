import { ArrowRight } from 'lucide-react';

// Entrepreneur hero: navy with a fluorescent-green pill and a huge green
// "SAVE YOUR SEAT" CTA to read like a premium masterclass, not an application funnel.
export default function EntrepreneurHero({ eyebrow, title, subtitle, pill, ctaLabel }) {
  return (
    <section className="bg-[#1E2A4A] px-5 pb-20 pt-32 text-white lg:px-[8vw] lg:pb-28 lg:pt-40">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[.24em] text-[#00FF87]">{eyebrow}</p>
        <h1 className="mt-5 font-heading text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{subtitle}</p>
        <div className="mt-8 inline-flex items-center rounded-full bg-[#00FF87] px-4 py-1.5 text-xs font-semibold uppercase tracking-[.14em] text-[#1E2A4A]">{pill}</div>
        <div className="mt-10">
          <a href="#register" className="inline-flex items-center gap-3 bg-[#00FF87] px-10 py-5 font-heading text-2xl font-semibold text-[#1E2A4A] transition hover:bg-white">{ctaLabel} <ArrowRight className="h-7 w-7" /></a>
        </div>
      </div>
    </section>
  );
}