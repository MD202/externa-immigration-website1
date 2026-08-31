import { Link } from 'react-router-dom';
import { ArrowUpRight, BadgeCheck, ChevronRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { useLanguage } from '@/lib/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const intents = [
  { key: 'hero.opt1', href: '#appeals' },
  { key: 'hero.opt2', href: '#appeals' },
  { key: 'hero.opt3', href: '#services' },
  { key: 'hero.opt4', href: '#services' },
  { key: 'hero.opt5', href: '#services' },
  { key: 'hero.opt6', href: '#services' }];

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[#0B1B27] text-white">
      <Image src="https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/e8bb63d60_generated_8c88c781.jpg" alt="Professional overlooking Toronto at dawn" className="absolute inset-0 h-full w-full opacity-45" fittingType="fill" focalPointX={0.68} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B27] via-[#0B1B27]/90 to-[#0B1B27]/20" />
      <div className="relative mx-auto grid min-h-screen max-w-[1440px] items-center gap-12 px-5 pb-16 pt-32 lg:grid-cols-12 lg:px-[8vw]">
        <div className="lg:col-span-7">
          <div className="mb-7 flex items-center gap-3 text-xs uppercase tracking-[.24em] text-[#D1E3ED] hidden"><BadgeCheck className="h-5 w-5 text-[#C5A059]" /> {t('hero.eyebrow')}</div>
          <h1 className="max-w-3xl font-heading text-5xl leading-[1.02] sm:text-6xl lg:text-[82px]">{t('hero.title')}</h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70">{t('hero.subtitle')}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/strategy-session" className="group flex items-center gap-3 bg-[#C5A059] px-6 py-4 font-semibold text-[#0B1B27]">{t('hero.cta1')} <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link>
            <a href="#services" className="border border-white/30 px-6 py-4 font-semibold">{t('hero.cta2')}</a>
          </div>
        </div>
        <aside className="border border-white/20 bg-white/10 p-6 backdrop-blur-xl lg:col-span-5 lg:p-8">
          <p className="text-xs uppercase tracking-[.24em] text-[#C5A059]">{t('hero.assessmentEyebrow')}</p>
          <h2 className="mt-3 font-heading text-3xl">{t('hero.assessmentTitle')}</h2>
          <div className="mt-6 grid gap-1">
            {intents.map((item) =>
            <a key={item.key} href={item.href} className="group flex items-center justify-between border-b border-white/15 py-3.5 text-left text-sm text-white/80 transition hover:text-white">
                {t(item.key)}
                <ChevronRight className="h-4 w-4 text-[#C5A059] transition group-hover:translate-x-1" />
              </a>
            )}
          </div>
          <p className="mt-5 text-xs leading-relaxed text-white/50">{t('hero.assessmentNote')}</p>
        </aside>
      </div>
    </section>);

}