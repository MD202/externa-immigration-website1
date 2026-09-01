import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { useLanguage } from '@/lib/LanguageContext';

export default function BusinessFeature() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-[680px] overflow-hidden bg-[#0E3B3B] text-white">
      <Image src="https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/ef5356269_generated_e6ef1abd.jpg" alt="Entrepreneur overlooking Toronto business district" className="absolute inset-0 h-full w-full opacity-50" fittingType="fill" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0E3B3B] via-[#0E3B3B]/80 to-transparent" />
      <div className="relative mx-auto flex min-h-[680px] max-w-[1440px] items-center px-5 lg:px-[8vw]">
        <div className="max-w-2xl">
          <p className="eyebrow">{t('business.eyebrow')}</p>
          <h2 className="section-title text-white">{t('business.title1')}<br /><em className="text-[#C5A059]">{t('business.title2')}</em></h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">{t('business.body')}</p>
          <Link to="/strategy-session" className="mt-9 inline-flex items-center gap-3 bg-[#6B1E1E] px-6 py-4 font-semibold text-white transition hover:bg-[#561818]">{t('business.cta')} <ArrowUpRight /></Link>
        </div>
      </div>
    </section>
  );
}