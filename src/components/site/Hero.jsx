import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import WhereAreYouNow from '@/components/site/WhereAreYouNow';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[#13203F] text-white">
      <div className="relative mx-auto grid min-h-screen max-w-[1440px] items-center gap-12 px-5 pt-32 pb-16 lg:grid-cols-2 lg:px-[8vw]">
        <div>
          <h1 className="hero-in max-w-xl font-heading text-4xl leading-[1.05] sm:text-5xl lg:text-[52px]" style={{ animationDelay: '0.1s' }}>
            {t('home.hero.h1')}
          </h1>
          <p className="hero-in mt-4 font-heading text-2xl italic leading-snug text-[#B8860B] sm:text-3xl" style={{ animationDelay: '0.25s' }}>
            {t('home.hero.h1gold')}
          </p>
          <p className="hero-in mt-7 max-w-md text-sm leading-relaxed text-white/55" style={{ animationDelay: '0.4s' }}>
            {t('home.hero.list')}
          </p>
          <div className="hero-in mt-8 flex flex-wrap gap-4" style={{ animationDelay: '0.55s' }}>
            <Link to="/strategy-session" className="btn btn-primary">{t('home.hero.book')} <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
            <Link to="/#where" className="btn border border-white/40 px-9 py-4 text-white hover:border-white">{t('home.hero.where')} <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
          <div className="hero-in mt-10 h-px w-24 bg-[#B8860B]" style={{ animationDelay: '0.7s' }} />
          <p className="hero-in mt-4 text-xs uppercase tracking-[.18em] text-white/45" style={{ animationDelay: '0.8s' }}>
            {t('home.hero.foot')}
          </p>
        </div>
        <WhereAreYouNow />
      </div>
    </section>
  );
}