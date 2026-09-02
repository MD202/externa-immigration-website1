import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import Reveal from '@/components/site/Reveal';

export default function PainPoints() {
  const { t } = useLanguage();
  const pains = [
    { n: '01', title: t('pain.p1t'), body: t('pain.p1b') },
    { n: '02', title: t('pain.p2t'), body: t('pain.p2b') },
    { n: '03', title: t('pain.p3t'), body: t('pain.p3b') },
    { n: '04', title: t('pain.p4t'), body: t('pain.p4b') },
  ];
  const whys = [
    { n: '01', title: t('pain.w1t'), body: t('pain.w1b') },
    { n: '02', title: t('pain.w2t'), body: t('pain.w2b') },
    { n: '03', title: t('pain.w3t'), body: t('pain.w3b') },
    { n: '04', title: t('pain.w4t'), body: t('pain.w4b') },
  ];
  return (
    <section id="why" className="bg-white px-5 py-28 lg:px-[8vw] lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{t('pain.eyebrow')}</p>
          <h2 className="section-title">{t('pain.title')}</h2>
          <p className="mt-6 text-lg leading-relaxed text-[#1E2A4A]/65">{t('pain.intro')}</p>
        </Reveal>
        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            {pains.map(({ n, title, body }, i) => (
              <Reveal key={n} delay={i * 60}>
                <article className="group relative border-b border-[#1E2A4A]/10 py-7 pl-6 transition hover:bg-[#1E2A4A]/[0.02]">
                  <span className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-[#B8860B] transition-transform duration-200 group-hover:scale-y-100" />
                  <span className="font-mono text-xs text-[#B8860B]">{n}</span>
                  <h3 className="mt-2 font-heading text-xl text-[#1E2A4A]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#1E2A4A]/60">{body}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div>
            <Reveal>
              <p className="eyebrow">{t('pain.whyEyebrow')}</p>
              <h3 className="mt-3 font-heading text-3xl text-[#1E2A4A]">{t('pain.whyTitle')}</h3>
            </Reveal>
            {whys.map(({ n, title, body }, i) => (
              <Reveal key={n} delay={i * 60}>
                <article className="group relative mt-2 border-b border-[#1E2A4A]/10 py-7 pl-6 transition hover:bg-[#1E2A4A]/[0.02]">
                  <span className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-[#B8860B] transition-transform duration-200 group-hover:scale-y-100" />
                  <span className="font-mono text-xs text-[#B8860B]">{n}</span>
                  <h3 className="mt-2 font-heading text-xl text-[#1E2A4A]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#1E2A4A]/60">{body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal>
          <Link to="/strategy-session" className="link-arrow mt-12">{t('pain.cta')} <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
      </div>
    </section>
  );
}