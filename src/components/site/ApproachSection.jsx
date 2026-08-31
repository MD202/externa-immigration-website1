import { Image } from '@/components/ui/image';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function ApproachSection() {
  const { t } = useLanguage();
  const principles = [t('approach.p1'), t('approach.p2'), t('approach.p3'), t('approach.p4')];
  return (
    <section id="approach" className="bg-[#0B1B27] px-5 py-28 lg:px-[8vw] lg:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-12 lg:items-center">
        <div className="relative lg:col-span-6">
          <Image src="https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/37be7844c_generated_247cf172.jpg" alt="Careful review of immigration case materials" className="aspect-[4/3] w-full" fittingType="fill" />
          <div className="absolute -bottom-8 -right-4 w-56 bg-[#14222E] p-6 text-white lg:-right-10">
            <p className="font-heading text-4xl text-[#C5A059]">01</p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">{t('approach.badge')}</p>
          </div>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <p className="eyebrow">{t('approach.eyebrow')}</p>
          <h2 className="section-title text-white">{t('approach.title')}</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">{t('approach.intro')}</p>
          <div className="mt-9 grid gap-5">
            {principles.map((item) => (
              <div key={item} className="flex gap-4 border-b border-white/10 pb-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#C5A059]" />
                <span className="text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}