import { Image } from '@/components/ui/image';
import { useLanguage } from '@/lib/LanguageContext';
import Reveal from '@/components/site/Reveal';

export default function ApproachSection() {
  const { t } = useLanguage();
  const principles = [
    { n: '01', text: t('approach.p1') },
    { n: '02', text: t('approach.p2') },
    { n: '03', text: t('approach.p3') },
    { n: '04', text: t('approach.p4') },
  ];
  return (
    <section id="approach" className="bg-[#F8FAFC] px-5 py-28 lg:px-[8vw] lg:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-12 lg:items-center">
        <Reveal className="relative lg:col-span-6">
          <Image src="https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/37be7844c_generated_247cf172.jpg" alt="Careful review of immigration case materials" className="aspect-[4/3] w-full" fittingType="fill" />
        </Reveal>
        <Reveal delay={150} className="lg:col-span-5 lg:col-start-8">
          <p className="eyebrow">{t('approach.eyebrow')}</p>
          <h2 className="section-title">{t('approach.title')}</h2>
          <p className="mt-6 text-lg leading-relaxed text-[#1E2A4A]/65">{t('approach.intro')}</p>
          <div className="mt-9 grid gap-5">
            {principles.map((item) => (
              <div key={item.n} className="flex gap-5 border-b border-[#1E2A4A]/10 pb-5">
                <span className="font-mono text-sm font-semibold text-[#B8860B]">{item.n}</span>
                <span className="text-[#1E2A4A]/80">{item.text}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}