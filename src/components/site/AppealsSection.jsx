import { Link } from 'react-router-dom';
import { ArrowUpRight, FileSearch, Route, Scale, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import Reveal from '@/components/site/Reveal';

export default function AppealsSection() {
  const { t } = useLanguage();
  const stages = [
    { n: '01', icon: FileSearch, title: t('appeals.s1t'), body: t('appeals.s1b') },
    { n: '02', icon: Route, title: t('appeals.s2t'), body: t('appeals.s2b') },
    { n: '03', icon: Scale, title: t('appeals.s3t'), body: t('appeals.s3b') },
    { n: '04', icon: ShieldCheck, title: t('appeals.s4t'), body: t('appeals.s4b') },
  ];
  return (
    <section id="appeals" className="relative overflow-hidden bg-[#1E2A4A] px-5 py-28 text-white lg:px-[8vw] lg:py-40">
      <div className="absolute left-[8vw] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#B91C1C]/50 to-transparent" />
      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-[#B91C1C]">{t('appeals.eyebrow')}</p>
            <h2 className="section-title text-white">{t('appeals.title1')}<br /><em className="text-[#C9A227]">{t('appeals.title2')}</em></h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-lg self-end text-lg leading-relaxed text-white/60">{t('appeals.intro')}</p>
          </Reveal>
        </div>
        <div className="mt-20 grid border-l border-white/15 md:grid-cols-2 xl:grid-cols-4">
          {stages.map(({ n, icon: Icon, title, body }, i) => (
            <Reveal key={n} delay={i * 100} className="h-full">
              <article className="group h-full border-b border-r border-white/15 p-7 transition duration-500 hover:bg-white/[.05] lg:min-h-72">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#C9A227]">{n}</span>
                  <Icon className="h-5 w-5 text-white/50 transition group-hover:text-[#C9A227]" />
                </div>
                <h3 className="mt-16 font-heading text-2xl">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/55">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <Link to="/strategy-session" className="mt-10 inline-flex items-center gap-3 text-sm font-semibold text-[#C9A227]">{t('appeals.cta')} <ArrowUpRight className="h-4 w-4" /></Link>
        </Reveal>
      </div>
    </section>
  );
}