import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import Reveal from '@/components/site/Reveal';
import { Image } from '@/components/ui/image';

export default function CloseSection() {
  const { t } = useLanguage();
  const CLOSE_IMG = 'https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/27948b83a_generated_image.png';
  return (
    <section className="relative overflow-hidden bg-[#FBFAF8] px-5 py-20 text-center lg:py-44">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image src={CLOSE_IMG} fittingType="fill" className="h-full w-full opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBFAF8]/70 via-[#FBFAF8]/60 to-[#FBFAF8]/85" />
      </div>
      <div className="relative mx-auto max-w-[720px]">
        <Reveal>
          <h2 className="font-heading text-4xl text-[#1E2A4A] sm:text-5xl">{t('home.close.heading')}</h2>
          <p className="mt-6 text-lg leading-relaxed text-[#1E2A4A]/65">{t('home.close.body')}</p>
          <Link to="/strategy-session" className="btn btn-primary mt-10">{t('home.close.cta')} <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
      </div>
    </section>
  );
}