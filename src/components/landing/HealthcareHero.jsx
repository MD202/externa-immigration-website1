import { ArrowRight } from 'lucide-react';

// Healthcare hero: calm, premium, no countdown. Forest headings, emerald CTA,
// coral price, and three profile/options/next-step cards beneath the pitch.
export default function HealthcareHero({ eyebrow, title, subtitle, price, priceNote, ctaLabel, cards }) {
  return (
    <section className="bg-[#F7F3EA] px-5 pb-16 pt-32 lg:px-[8vw] lg:pb-24 lg:pt-40">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[.24em] text-[#1E8A70]">{eyebrow}</p>
        <h1 className="mt-5 font-heading text-4xl leading-[1.08] text-[#123B35] sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#202624]/70 sm:text-lg">{subtitle}</p>
        <p className="mt-7 text-sm font-medium text-[#202624]/80">
          <span className="font-heading text-xl text-[#E9826B]">{price}</span> {priceNote}
        </p>
        <div className="mt-8 flex justify-center">
          <a href="#register" className="inline-flex items-center gap-2 bg-[#1E8A70] px-9 py-4 text-base font-semibold text-white transition hover:bg-[#123B35]">{ctaLabel} <ArrowRight className="h-4 w-4" /></a>
        </div>
      </div>
      {cards && (
        <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-3">
          {cards.map((c) => (
            <div key={c.label} className="border border-[#1E8A70]/20 bg-white p-6 text-left">
              <p className="text-xs font-semibold uppercase tracking-[.18em] text-[#1E8A70]">{c.label}</p>
              <p className="mt-3 font-heading text-lg text-[#123B35]">{c.title}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}