import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import Reveal from '@/components/site/Reveal';

export default function PathwaysAtAGlance() {
  const { t } = useLanguage();
  const pathways = [
    { title: t('pathways.p1t'), body: t('pathways.p1b') },
    { title: t('pathways.p2t'), body: t('pathways.p2b') },
    { title: t('pathways.p3t'), body: t('pathways.p3b') },
    { title: t('pathways.p4t'), body: t('pathways.p4b') },
    { title: t('pathways.p5t'), body: t('pathways.p5b') },
    { title: t('pathways.p6t'), body: t('pathways.p6b') },
    { title: t('pathways.p7t'), body: t('pathways.p7b') },
    { title: t('pathways.p8t'), body: t('pathways.p8b') },
  ];
  return (
    <section id="pathways" className="bg-[#1E2A4A] px-5 py-28 text-white lg:px-[8vw] lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{t('pathways.eyebrow')}</p>
          <h2 className="section-title text-white">{t('pathways.title')}</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">{t('pathways.intro')}</p>
        </Reveal>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pathways.map(({ title, body }, i) => (
            <Reveal key={title} delay={i * 70} className="h-full">
              <article className="group h-full border border-white/10 p-6 transition duration-200 hover:border-[#B8860B]/50 hover:bg-white/[.04]">
                <span className="font-mono text-xs text-[#B8860B]">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-5 font-heading text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <Link to="/eligibility" className="link-arrow mt-12">{t('pathways.cta')} <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
      </div>
    </section>
  );
}