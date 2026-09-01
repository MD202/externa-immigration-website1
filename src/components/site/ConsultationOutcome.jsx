import { FileText, DollarSign, Compass } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function ConsultationOutcome() {
  const { t } = useLanguage();
  const items = [
    { icon: FileText, title: t('outcome.i1t'), body: t('outcome.i1b') },
    { icon: DollarSign, title: t('outcome.i2t'), body: t('outcome.i2b') },
    { icon: Compass, title: t('outcome.i3t'), body: t('outcome.i3b') },
  ];
  return (
    <section aria-label="Consultation outcomes" className="bg-[#123B2C] px-5 py-28 text-white lg:px-[8vw] lg:py-36">
      <div className="mx-auto max-w-[1440px]">
        <p className="text-xs uppercase tracking-[.24em] text-[#C9A227]">{t('outcome.eyebrow')}</p>
        <h2 className="mt-3 font-heading text-4xl sm:text-5xl">{t('outcome.title')}</h2>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {items.map(({ icon: Icon, title, body }) => (
            <article key={title} className="border-l-2 border-[#C9A227]/40 pl-6">
              <Icon className="h-8 w-8 text-[#C9A227]" aria-hidden="true" />
              <h3 className="mt-5 font-heading text-2xl">{title}</h3>
              <p className="mt-3 leading-relaxed text-white/55">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}