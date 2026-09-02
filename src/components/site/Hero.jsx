import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[#1E2A4A] text-white">
      <div className="relative mx-auto flex min-h-screen max-w-[1240px] flex-col justify-center px-5 pt-32 pb-20 lg:px-[8vw]">
        <h1 className="hero-in max-w-3xl font-heading text-5xl leading-[1.02] sm:text-6xl lg:text-[78px]" style={{ animationDelay: '0.1s' }}>
          {t('hero.title')} <span className="text-[#B8860B] italic">{t('hero.word1')}</span>
        </h1>
        <p className="hero-in mt-7 max-w-xl text-lg leading-relaxed text-white/70" style={{ animationDelay: '0.35s' }}>{t('hero.subtitle')}</p>
        <div className="hero-in mt-9 flex flex-wrap gap-4" style={{ animationDelay: '0.55s' }}>
          <Link to="/strategy-session" className="btn btn-primary">{t('hero.cta1')} <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
          <Link to="/#where" className="btn border border-white/40 px-9 py-4 text-white hover:border-white">{t('hero.cta2')} <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}