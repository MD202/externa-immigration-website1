import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import Reveal from '@/components/site/Reveal';

const CICC_URL = 'https://register.college-ic.ca/';

export default function Verification() {
  const { t } = useLanguage();
  return (
    <section className="bg-[#13203F] px-5 py-20 text-white text-center lg:py-52">
      <div className="mx-auto max-w-[900px]">
        <Reveal>
          <p className="eyebrow">{t('home.verify.eyebrow')}</p>
          <p className="mt-8 text-2xl leading-relaxed text-white/85 sm:text-3xl">{t('home.verify.body1')}</p>
          <p className="mt-6 text-lg leading-relaxed text-white/60">{t('home.verify.body2')}</p>
          <div className="mx-auto mt-12 h-px w-16 bg-[#B8860B]" />
          <p className="mt-12 font-heading text-xl tracking-wide text-white">{t('home.verify.licensee')}</p>
          <a href={CICC_URL} target="_blank" rel="noopener noreferrer" className="link-arrow mt-6 justify-center">{t('home.verify.cta')} <ExternalLink className="h-4 w-4" /></a>
          <p className="mt-10 max-w-xl mx-auto text-base leading-relaxed text-white/55">{t('home.verify.foot')}</p>
        </Reveal>
      </div>
    </section>
  );
}