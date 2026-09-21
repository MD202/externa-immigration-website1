import { ArrowRight } from 'lucide-react';
import CountdownTimer from '@/components/landing/CountdownTimer';

// Conversion hero: headline, subtitle, primary CTA, trust line, and the
// fixed-date countdown that drives urgency to register before intake closes.
export default function PathwayHero({ eyebrow, title, subtitle, trustLine, launchDate, priceLabel }) {
  return (
    <section className="relative overflow-hidden bg-[#1E2A4A] px-5 pb-20 pt-32 text-white lg:px-[8vw] lg:pb-28 lg:pt-40">
      <div className="pointer-events-none absolute -right-24 top-8 h-80 w-80 rounded-full bg-[#B8860B]/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[#B8860B]/10 blur-3xl" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 font-heading text-4xl leading-[1.06] sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">{subtitle}</p>
        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a href="#register" className="btn btn-primary w-full sm:w-auto">Register now <ArrowRight className="h-4 w-4" /></a>
          <span className="text-sm text-white/60">Just {priceLabel} +HST · single payment</span>
        </div>
        <p className="mt-5 text-xs uppercase tracking-[.18em] text-white/40">{trustLine}</p>
        <div className="mx-auto mt-14 max-w-md">
          <p className="text-xs uppercase tracking-[.22em] text-[#B8860B]">Next intake closes in</p>
          <div className="mt-5 flex justify-center">
            <CountdownTimer target={launchDate} />
          </div>
        </div>
      </div>
    </section>
  );
}