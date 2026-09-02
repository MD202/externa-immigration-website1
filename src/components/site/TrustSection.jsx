import { Image } from '@/components/ui/image';
import { BadgeCheck, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const CICC_URL = 'https://college-ic.ca/protecting-the-public/find-an-immigration-consultant/';

export default function TrustSection() {
  const { t } = useLanguage();
  return (
    <section id="about" className="overflow-hidden bg-[#F8FAFC]">
      <div className="grid lg:grid-cols-2">
        <div className="flex items-center px-5 py-24 lg:px-[8vw] lg:py-36">
          <div className="max-w-xl">
            <p className="eyebrow">{t('trust.eyebrow')}</p>
            <h2 className="section-title">{t('trust.title')}</h2>
            <p className="mt-7 text-lg leading-relaxed text-[#1E293B]/65">{t('trust.body')}</p>
            <a href={CICC_URL} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex items-center gap-3 border-l-2 border-[#047857] pl-5 text-[#047857] transition hover:gap-4">
              <BadgeCheck className="h-6 w-6 shrink-0" />
              <span className="font-semibold">{t('trust.cta')}</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
        <Image src="https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/62ee7416e_generated_78f96e2d.jpg" alt="Family moving toward a Canadian horizon" className="min-h-[480px] w-full" fittingType="fill" />
      </div>
    </section>
  );
}