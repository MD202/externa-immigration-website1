import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import WhereAreYouNow from '@/components/site/WhereAreYouNow';
import Triage from '@/components/site/Triage';
import Typewriter from '@/components/site/Typewriter';
import { Image } from '@/components/ui/image';

export default function Hero() {
  const { t } = useLanguage();
  const [triageOpen, setTriageOpen] = useState(false);
  const HERO_IMG = 'https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/669dd803e_generated_image.png';
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[#13203F] text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image src={HERO_IMG} fittingType="fill" className="h-full w-full opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#13203F]/70 via-[#13203F]/40 to-[#13203F]/85" />
      </div>
      <div className="relative mx-auto grid min-h-screen max-w-[1440px] items-center gap-12 px-5 pt-32 pb-16 lg:grid-cols-2 lg:px-[8vw]">
        <div>
          <p className="hero-in eyebrow" style={{ animationDelay: '0.05s' }}>{t('home.hero.eyebrow')}</p>
          <h1 className="hero-in mt-4 max-w-xl font-heading text-[40px] leading-[1.05] sm:text-5xl lg:text-[52px]" style={{ animationDelay: '0.1s' }}>
            {t('hero.title')} <Typewriter phrases={[t('hero.word1'), t('hero.word2'), t('hero.word3'), t('hero.word4'), t('hero.word5')]} className="text-[#B8860B] italic font-bold" />
          </h1>
          <p className="hero-in mt-7 max-w-md text-sm leading-relaxed text-white/55" style={{ animationDelay: '0.4s' }}>
            {t('home.hero.list')}
          </p>
          <div className="hero-in mt-8 flex flex-wrap gap-4" style={{ animationDelay: '0.55s' }}>
            <Link to="/strategy-session" className="btn btn-primary w-full sm:w-auto sm:flex-1">{t('home.hero.book')} <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
            <button type="button" onClick={() => setTriageOpen(true)} className="btn border border-white/40 px-9 py-4 text-white hover:border-white w-full sm:w-auto sm:flex-1">{t('home.hero.where')} <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></button>
          </div>
          <div className="hero-in mt-10 h-px w-24 bg-[#B8860B]" style={{ animationDelay: '0.7s' }} />
          <p className="hero-in mt-4 text-xs uppercase tracking-[.18em] text-white/45" style={{ animationDelay: '0.8s' }}>
            {t('home.hero.foot')}
          </p>
          <p className="hero-in mt-1 text-xs uppercase tracking-[.18em] text-white/45" style={{ animationDelay: '0.9s' }}>
            {t('home.hero.foot2')}
          </p>
        </div>
        <WhereAreYouNow onOpenTriage={() => setTriageOpen(true)} />
      </div>
      {triageOpen && <Triage onClose={() => setTriageOpen(false)} />}
    </section>
  );
}