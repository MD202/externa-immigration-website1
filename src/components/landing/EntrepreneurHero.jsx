import { ArrowRight } from 'lucide-react';
import AnimatedShapes from '@/components/landing/AnimatedShapes';
import SessionCountdown from '@/components/landing/SessionCountdown';

const SESSION_DATE = '2026-10-03T19:00:00-04:00';

// Entrepreneur hero: navy with fluorescent-green pill, animated gradient orbs,
// a pulsing live badge + Oct 3 countdown, and a huge green "SAVE YOUR SEAT" CTA.
export default function EntrepreneurHero({ eyebrow, title, subtitle, pill, ctaLabel }) {
  return (
    <section className="relative overflow-hidden bg-[#1E2A4A] px-5 pb-20 pt-32 text-white lg:px-[8vw] lg:pb-28 lg:pt-40">
      <AnimatedShapes colors={['#00FF87', '#1E8A70', '#2DFF88']} />
      <div className="relative mx-auto max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[.24em] text-[#00FF87]">{eyebrow}</p>
        <h1 className="mt-5 font-heading text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{subtitle}</p>
        <div className="mt-8 inline-flex items-center rounded-full bg-[#00FF87] px-4 py-1.5 text-xs font-semibold uppercase tracking-[.14em] text-[#1E2A4A]">{pill}</div>
        <div className="mt-8"><SessionCountdown target={SESSION_DATE} accent="#00FF87" variant="dark" /></div>
        <div className="mt-10">
          <a href="#register" className="inline-flex items-center gap-3 bg-[#00FF87] px-10 py-5 font-heading text-2xl font-semibold text-[#1E2A4A] transition hover:bg-white">{ctaLabel} <ArrowRight className="h-7 w-7" /></a>
        </div>
      </div>
    </section>
  );
}