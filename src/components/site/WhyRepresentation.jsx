import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import Reveal from '@/components/site/Reveal';

export default function WhyRepresentation() {
  const { t } = useLanguage();
  const rows = [1, 2, 3, 4, 5, 6].map((i) => ({ lead: t(`home.whyrep.r${i}l`), body: t(`home.whyrep.r${i}b`) }));
  return (
    <section className="bg-[#1E2A4A] px-5 py-20 text-white lg:px-[8vw] lg:py-40">
      <div className="mx-auto max-w-[1240px]">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{t('home.whyrep.eyebrow')}</p>
          <h2 className="section-title text-white">{t('home.whyrep.heading1')} {t('home.whyrep.heading2')}</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">{t('home.whyrep.intro')}</p>
        </Reveal>
        <div className="mt-14 border-t border-white/14">
          {rows.map((row, i) => (
            <Reveal key={i}>
              <article className="group relative border-b border-white/14 py-8 pl-6 transition hover:bg-white/[.04]">
                <span className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-[#B8860B] transition-transform duration-200 group-hover:scale-y-100" />
                <p className="font-heading text-xl text-white">{row.lead}</p>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-white/60">{row.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
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