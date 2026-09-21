import { ArrowRight } from 'lucide-react';

// Final CTA on a deeper navy with the fluorescent-green price and the RCIC
// regulatory note.
export default function EntrepreneurFinalCta({ price, priceNote, ctaLabel, disclaimer }) {
  return (
    <section className="bg-[#0F1A3D] px-5 py-20 text-center text-white lg:px-[8vw] lg:py-28">
      <div className="mx-auto max-w-2xl">
        <p className="font-heading text-4xl text-[#00FF87] sm:text-5xl">{price}</p>
        <p className="mt-2 text-xs uppercase tracking-[.18em] text-white/55">{priceNote}</p>
        <a href="#register" className="mt-8 inline-flex items-center gap-2 bg-[#00FF87] px-9 py-4 text-base font-semibold text-[#1E2A4A] transition hover:bg-white">{ctaLabel} <ArrowRight className="h-4 w-4" /></a>
        <p className="mx-auto mt-10 max-w-2xl text-xs leading-relaxed text-white/45">{disclaimer}</p>
      </div>
    </section>
  );
}