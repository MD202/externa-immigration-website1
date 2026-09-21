import { ArrowRight } from 'lucide-react';

// Final CTA band with the regulatory disclaimer and the written-agreement note.
export default function LandingFinalCta({ title, line1, line2, body, price, ctaLabel, disclaimer, closing }) {
  return (
    <section className="bg-[#13203F] px-5 py-20 text-center text-white lg:px-[8vw] lg:py-28">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-heading text-3xl sm:text-4xl">{title}</h2>
        <p className="mt-5 font-heading text-xl text-white/80">{line1}</p>
        <p className="font-heading text-2xl text-[#B8860B]">{line2}</p>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-white/65">{body}</p>
        <p className="mt-8 font-heading text-3xl">{price}</p>
        <a href="#register" className="btn btn-primary mt-7">{ctaLabel} <ArrowRight className="h-4 w-4" /></a>
        <p className="mx-auto mt-10 max-w-2xl text-xs leading-relaxed text-white/40">{disclaimer}</p>
        <p className="mt-3 text-xs text-white/35">{closing}</p>
      </div>
    </section>
  );
}