import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import Reveal from '@/components/site/Reveal';

export default function BusinessFeature() {
  const { t } = useLanguage();
  return (
    <section className="bg-[#1E2A4A] px-5 py-28 text-white lg:px-[8vw] lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{t('business.eyebrow')}</p>
          <h2 className="section-title text-white">{t('business.title1')}<br /><em className="text-[#B8860B]">{t('business.title2')}</em></h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">{t('business.body')}</p>
          <Link to="/strategy-session" className="link-arrow mt-9">{t('business.cta')} <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
      </div>
    </section>
  );
}