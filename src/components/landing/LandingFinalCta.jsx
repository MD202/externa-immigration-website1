import { ArrowRight } from 'lucide-react';

// Final CTA band (deep forest) with the regulatory disclaimer and the
// written-agreement note.
export default function LandingFinalCta({ title, line1, line2, body, price, ctaLabel, disclaimer, closing }) {
  return (
    <section className="bg-[#123B35] px-5 py-20 text-center text-white lg:px-[8vw] lg:py-28">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-heading text-3xl text-white sm:text-4xl">{title}</h2>
        <p className="mt-5 font-heading text-xl text-white/80">{line1}</p>
        <p className="font-heading text-2xl text-[#E9826B]">{line2}</p>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-white/65">{body}</p>
        <p className="mt-8 font-heading text-3xl text-[#E9826B]">{price}</p>
        <a href="#register" className="mt-7 inline-flex items-center gap-2 bg-[#1E8A70] px-9 py-4 text-base font-semibold text-white transition hover:bg-white hover:text-[#123B35]">{ctaLabel} <ArrowRight className="h-4 w-4" /></a>
        <p className="mx-auto mt-10 max-w-2xl text-xs leading-relaxed text-white/40">{disclaimer}</p>
        <p className="mt-3 text-xs text-white/35">{closing}</p>
      </div>
    </section>
  );
}