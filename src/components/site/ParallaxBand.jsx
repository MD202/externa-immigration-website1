import { Image } from '@/components/ui/image';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import Reveal from '@/components/site/Reveal';

export default function ParallaxBand() {
  const { t } = useLanguage();
  return (
    <section className="relative flex min-h-[62vh] items-center justify-center overflow-hidden bg-[#0F172A] text-white">
      <Image src="https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/53ffb71ae_generated_image.png" alt="Canadian Rockies at golden hour" className="drift absolute inset-0 h-full w-full opacity-60" fittingType="fill" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/75 via-[#0F172A]/45 to-[#0F172A]/80" />
      <Reveal className="relative mx-auto max-w-3xl px-5 text-center">
        <p className="text-xs uppercase tracking-[.3em] text-[#047857]">{t('parallax.eyebrow')}</p>
        <h2 className="mt-5 font-heading text-3xl leading-[1.15] sm:text-4xl lg:text-5xl">{t('parallax.quote')}</h2>
        <Link to="/strategy-session" className="mt-9 inline-flex items-center gap-3 bg-[#047857] px-6 py-4 font-semibold text-[#FFFFFF] transition hover:bg-[#065F46]">{t('parallax.cta')} <ArrowUpRight className="h-4 w-4" /></Link>
      </Reveal>
    </section>
  );
}