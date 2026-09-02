import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import Reveal from '@/components/site/Reveal';

export default function FocusAreas() {
  const { t } = useLanguage();
  const cards = [
    { title: t('home.focus.c1t'), body: t('home.focus.c1b'), meta: t('home.focus.c1m'), to: '/family-sponsorship' },
    { title: t('home.focus.c2t'), body: t('home.focus.c2b'), meta: t('home.focus.c2m'), to: '/humanitarian-compassionate' },
    { title: t('home.focus.c3t'), body: t('home.focus.c3b'), meta: t('home.focus.c3m'), to: '/refused-applications' },
    { title: t('home.focus.c4t'), body: t('home.focus.c4b'), meta: t('home.focus.c4m'), to: '/healthcare-professionals' },
    { title: t('home.focus.c5t'), body: t('home.focus.c5b'), meta: t('home.focus.c5m'), to: '/entrepreneurs' },
  ];
  return (
    <section className="bg-[#FBFAF8] px-5 py-20 lg:px-[8vw] lg:py-40">
      <div className="mx-auto max-w-[1240px]">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{t('home.focus.eyebrow')}</p>
          <h2 className="section-title">{t('home.focus.heading')}</h2>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.to} delay={i * 60} className="h-full">
              <Link to={c.to} className="group relative flex h-full min-h-[260px] flex-col border border-[#1E2A4A]/10 bg-white p-7 transition duration-200 hover:border-[#1E2A4A] lg:min-h-[320px] lg:p-10">
                <ArrowUpRight className="absolute right-8 top-8 h-5 w-5 text-[#1E2A4A]/25 transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#B8860B]" aria-hidden="true" />
                <h3 className="max-w-[12rem] font-heading text-2xl text-[#1E2A4A]">{c.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-[#1E2A4A]/65">{c.body}</p>
                <p className="mt-auto border-t border-[#1E2A4A]/10 pt-5 text-xs uppercase tracking-[.1em] text-[#1E2A4A]/45">{c.meta}</p>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <Link to="/other-services" className="link-arrow mt-10">{t('home.focus.cta')} <ArrowUpRight className="h-4 w-4" /></Link>
        </Reveal>
      </div>
    </section>
  );
}