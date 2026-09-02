import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import Reveal from '@/components/site/Reveal';

export default function CloseSection() {
  const { t } = useLanguage();
  return (
    <section className="bg-[#FBFAF8] px-5 py-20 text-center lg:py-44">
      <div className="mx-auto max-w-[720px]">
        <Reveal>
          <h2 className="font-heading text-4xl text-[#1E2A4A] sm:text-5xl">{t('home.close.heading')}</h2>
          <p className="mt-6 text-lg leading-relaxed text-[#1E2A4A]/65">{t('home.close.body')}</p>
          <Link to="/strategy-session" className="btn btn-primary mt-10">{t('home.close.cta')} <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
      </div>
    </section>
  );
}