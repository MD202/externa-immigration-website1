import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const intents = [
    { key: 'hero.opt1', href: '#services' },
    { key: 'hero.opt2', href: '#appeals' },
    { key: 'hero.opt3', href: '#services' },
    { key: 'hero.opt4', href: '#services' },
    { key: 'hero.opt5', href: '#services' },
    { key: 'hero.opt6', href: '#services' },
  ];
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[#1E2A4A] text-white">
      <div className="relative mx-auto grid min-h-screen max-w-[1440px] items-center gap-12 px-5 pb-16 pt-32 lg:grid-cols-12 lg:px-[8vw]">
        <div className="lg:col-span-7">
          <h1 className="hero-in max-w-3xl font-heading text-5xl leading-[1.02] sm:text-6xl lg:text-[78px]" style={{ animationDelay: '0.1s' }}>
            {t('hero.title')} <span className="text-[#B8860B] italic">{t('hero.word1')}</span>
          </h1>
          <p className="hero-in mt-7 max-w-xl text-lg leading-relaxed text-white/70" style={{ animationDelay: '0.35s' }}>{t('hero.subtitle')}</p>
          <div className="hero-in mt-9 flex flex-wrap gap-4" style={{ animationDelay: '0.55s' }}>
            <Link to="/strategy-session" className="btn btn-primary">{t('hero.cta1')} <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
            <Link to="/eligibility" className="btn border border-white/40 px-9 py-4 text-white hover:border-white">{t('hero.cta2')} <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </div>
        <aside className="hero-in border border-white/15 bg-[#13203F] p-6 lg:col-span-5 lg:p-8" style={{ animationDelay: '0.75s' }} aria-label="Quick assessment">
          <p className="text-xs uppercase tracking-[.24em] text-[#B8860B]">{t('hero.assessmentEyebrow')}</p>
          <h2 className="mt-3 font-heading text-3xl">{t('hero.assessmentTitle')}</h2>
          <div className="mt-6 grid gap-1">
            {intents.map((item) => (
              <a key={item.key} href={item.href} className="group flex items-center justify-between border-b border-white/15 py-3.5 text-left text-sm text-white/80 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B]">
                {t(item.key)}
                <ChevronRight className="h-4 w-4 text-[#B8860B] transition group-hover:translate-x-1" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-5 text-xs leading-relaxed text-white/50">{t('hero.assessmentNote')}</p>
        </aside>
      </div>
    </section>
  );
}