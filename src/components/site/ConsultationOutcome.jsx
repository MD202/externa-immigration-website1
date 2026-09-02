import { FileText, DollarSign, Compass } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { useLanguage } from '@/lib/LanguageContext';
import Reveal from '@/components/site/Reveal';

export default function ConsultationOutcome() {
  const { t } = useLanguage();
  const items = [
    { icon: FileText, title: t('outcome.i1t'), body: t('outcome.i1b') },
    { icon: DollarSign, title: t('outcome.i2t'), body: t('outcome.i2b') },
    { icon: Compass, title: t('outcome.i3t'), body: t('outcome.i3b') },
  ];
  return (
    <section aria-label="Consultation outcomes" className="relative overflow-hidden bg-[#1E2A4A] px-5 py-28 text-white lg:px-[8vw] lg:py-36">
      <Image src="https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/030435205_generated_image.png" alt="A family walking toward their Canadian future" className="absolute inset-0 h-full w-full opacity-15" fittingType="fill" focalPointX={0.5} focalPointY={0.4} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E2A4A] via-[#1E2A4A]/85 to-[#1E2A4A]/70" />
      <div className="relative mx-auto max-w-[1440px]">
        <Reveal>
          <p className="text-xs uppercase tracking-[.24em] text-[#B8860B]">{t('outcome.eyebrow')}</p>
          <h2 className="mt-3 font-heading text-4xl sm:text-5xl">{t('outcome.title')}</h2>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {items.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 120}>
              <article className="border-l-2 border-[#B8860B]/40 pl-6">
                <Icon className="h-8 w-8 text-[#B8860B]" aria-hidden="true" />
                <h3 className="mt-5 font-heading text-2xl">{title}</h3>
                <p className="mt-3 leading-relaxed text-white/55">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}