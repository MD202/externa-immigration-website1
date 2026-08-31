import { Image } from '@/components/ui/image';
import { BadgeCheck } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function TrustSection() {
  const { t } = useLanguage();
  return (
    <section id="about" className="overflow-hidden bg-[#F4F7F9]">
      <div className="grid lg:grid-cols-2">
        <div className="flex items-center px-5 py-24 lg:px-[8vw] lg:py-36">
          <div className="max-w-xl">
            <p className="eyebrow">{t('trust.eyebrow')}</p>
            <h2 className="section-title">{t('trust.title')}</h2>
            <p className="mt-7 text-lg leading-relaxed text-[#0F2433]/65">{t('trust.body')}</p>
            <div className="mt-9 flex items-start gap-4 border-l-2 border-[#C8102E] pl-5">
              <BadgeCheck className="h-6 w-6 shrink-0 text-[#C8102E]" />
              <p className="text-sm leading-relaxed text-[#0F2433]/65">{t('trust.note')}</p>
            </div>
          </div>
        </div>
        <Image src="https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/62ee7416e_generated_78f96e2d.jpg" alt="Family moving toward a Canadian horizon" className="min-h-[480px] w-full" fittingType="fill" />
      </div>
    </section>
  );
}