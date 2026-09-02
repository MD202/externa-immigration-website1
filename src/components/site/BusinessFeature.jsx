import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { useLanguage } from '@/lib/LanguageContext';
import Reveal from '@/components/site/Reveal';

export default function BusinessFeature() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-[680px] overflow-hidden bg-[#1E2A4A] text-white">
      <Image src="https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/ef5356269_generated_e6ef1abd.jpg" alt="Entrepreneur overlooking Toronto business district" className="kenburns absolute inset-0 h-full w-full opacity-50" fittingType="fill" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E2A4A] via-[#1E2A4A]/80 to-transparent" />
      <div className="relative mx-auto flex min-h-[680px] max-w-[1440px] items-center px-5 lg:px-[8vw]">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{t('business.eyebrow')}</p>
          <h2 className="section-title text-white">{t('business.title1')}<br /><em className="text-[#B8860B]">{t('business.title2')}</em></h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">{t('business.body')}</p>
          <Link to="/strategy-session" className="mt-9 inline-flex items-center gap-3 bg-[#B8860B] px-6 py-4 font-semibold text-[#FFFFFF] transition hover:bg-[#8B6508]">{t('business.cta')} <ArrowUpRight /></Link>
        </Reveal>
      </div>
    </section>
  );
}