import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import Reveal from '@/components/site/Reveal';
import HoverRevealCards from '@/components/site/HoverRevealCards';

export default function WhyRepresentation() {
  const { t } = useLanguage();
  // rows 1 ("family member you didn't declare") and 6 ("person who wasn't licensed") removed per request
  const rows = [2, 3, 4, 5].map((i) => ({ lead: t(`home.whyrep.r${i}l`), body: t(`home.whyrep.r${i}b`) }));
  return (
    <section className="relative overflow-hidden bg-[#1E2A4A] px-5 py-20 text-white lg:px-[8vw] lg:py-40">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true" style={{ background: 'radial-gradient(60% 50% at 82% 0%, rgba(184,134,11,0.18), transparent 70%)' }} />
      <div className="relative mx-auto max-w-[1240px]">
        <Reveal className="max-w-3xl">
          <p className="font-heading text-2xl italic leading-snug text-[#B8860B] sm:text-3xl">{t('home.whyrep.openquote')}</p>
        </Reveal>
        <Reveal className="mt-12 max-w-2xl">
          <p className="eyebrow">{t('home.whyrep.eyebrow')}</p>
          <h2 className="section-title text-white">{t('home.whyrep.heading1')} {t('home.whyrep.heading2')}</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">{t('home.whyrep.intro')}</p>
        </Reveal>
        <HoverRevealCards rows={rows} variant="dark" start={1} />
        <Reveal className="mt-12 max-w-2xl">
          <p className="text-lg leading-relaxed text-white/70">{t('home.whyrep.close1')}</p>
          <p className="mt-4 font-heading text-2xl italic text-white">{t('home.whyrep.close2')}</p>
        </Reveal>
        <Reveal>
          <Link to="/strategy-session" className="link-arrow mt-12">{t('home.whyrep.cta')} <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
      </div>
    </section>
  );
}