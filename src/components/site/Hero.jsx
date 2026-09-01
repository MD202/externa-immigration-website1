import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { useLanguage } from '@/lib/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const words = [t('hero.word1'), t('hero.word2'), t('hero.word3'), t('hero.word4')];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const speed = isDeleting ? 50 : 120;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, displayed.length + 1);
        setDisplayed(next);
        if (next === current) setTimeout(() => setIsDeleting(true), 2000);
      } else {
        const next = current.slice(0, displayed.length - 1);
        setDisplayed(next);
        if (next === '') { setIsDeleting(false); setWordIndex((prev) => (prev + 1) % words.length); }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [displayed, isDeleting, wordIndex, words]);

  const intents = [
    { key: 'hero.opt1', href: '#services' },
    { key: 'hero.opt2', href: '#appeals' },
    { key: 'hero.opt3', href: '#services' },
    { key: 'hero.opt4', href: '#services' },
    { key: 'hero.opt5', href: '#services' },
    { key: 'hero.opt6', href: '#services' },
  ];
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[#0E3B3B] text-white">
      <Image src="https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/e8bb63d60_generated_8c88c781.jpg" alt="Professional overlooking Toronto at dawn" className="absolute inset-0 h-full w-full opacity-40" fittingType="fill" focalPointX={0.68} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0E3B3B] via-[#0E3B3B]/90 to-[#0E3B3B]/30" />
      <div className="relative mx-auto grid min-h-screen max-w-[1440px] items-center gap-12 px-5 pb-16 pt-32 lg:grid-cols-12 lg:px-[8vw]">
        <div className="lg:col-span-7">
          <h1 className="max-w-3xl font-heading text-5xl leading-[1.02] sm:text-6xl lg:text-[78px]">
            {t('hero.title')} <span className="text-[#B8A468] italic">{displayed}<span className="animate-pulse">|</span></span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70">{t('hero.subtitle')}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/strategy-session" className="group flex items-center gap-3 bg-[#A85638] px-6 py-4 font-semibold text-white transition hover:bg-[#8E4828] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8A468] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E3B3B]">{t('hero.cta1')} <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" /></Link>
            <a href="#services" className="border border-white/30 px-6 py-4 font-semibold transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8A468] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E3B3B]">{t('hero.cta2')}</a>
          </div>
        </div>
        <aside className="border border-white/15 bg-white/10 p-6 backdrop-blur-xl lg:col-span-5 lg:p-8" aria-label="Quick assessment">
          <p className="text-xs uppercase tracking-[.24em] text-[#B8A468]">{t('hero.assessmentEyebrow')}</p>
          <h2 className="mt-3 font-heading text-3xl">{t('hero.assessmentTitle')}</h2>
          <div className="mt-6 grid gap-1">
            {intents.map((item) => (
              <a key={item.key} href={item.href} className="group flex items-center justify-between border-b border-white/15 py-3.5 text-left text-sm text-white/80 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8A468]">
                {t(item.key)}
                <ChevronRight className="h-4 w-4 text-[#B8A468] transition group-hover:translate-x-1" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-5 text-xs leading-relaxed text-white/50">{t('hero.assessmentNote')}</p>
        </aside>
      </div>
    </section>
  );
}