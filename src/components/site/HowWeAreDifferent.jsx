import { Link } from 'react-router-dom';
import { ArrowUpRight, BadgeCheck, UserCog, Languages, DollarSign, Monitor, Eye } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import Reveal from '@/components/site/Reveal';

export default function HowWeAreDifferent() {
  const { t } = useLanguage();
  const points = [
    { icon: BadgeCheck, title: t('different.d1t'), body: t('different.d1b') },
    { icon: UserCog, title: t('different.d2t'), body: t('different.d2b') },
    { icon: Languages, title: t('different.d3t'), body: t('different.d3b') },
    { icon: DollarSign, title: t('different.d4t'), body: t('different.d4b') },
    { icon: Monitor, title: t('different.d5t'), body: t('different.d5b') },
    { icon: Eye, title: t('different.d6t'), body: t('different.d6b') },
  ];
  return (
    <section id="different" className="bg-white px-5 py-28 lg:px-[8vw] lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{t('different.eyebrow')}</p>
          <h2 className="section-title">{t('different.title')}</h2>
          <p className="mt-6 text-lg leading-relaxed text-[#1E2A4A]/65">{t('different.intro')}</p>
        </Reveal>
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {points.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 80} className="h-full">
              <article className="group h-full border border-[#1E2A4A]/10 bg-[#F8FAFC] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#B91C1C]/40 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center bg-[#B8860B]/8 text-[#B8860B] transition group-hover:bg-[#B8860B] group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-heading text-xl text-[#1E2A4A]">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#1E2A4A]/60">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <Link to="/strategy-session" className="mt-12 inline-flex items-center gap-3 bg-[#B8860B] px-6 py-4 font-semibold text-white transition hover:bg-[#065F46]">{t('different.cta')} <ArrowUpRight className="h-4 w-4" /></Link>
        </Reveal>
      </div>
    </section>
  );
}