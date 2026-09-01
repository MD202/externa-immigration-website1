import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function FAQSection() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(0);
  const items = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') },
    { q: t('faq.q6'), a: t('faq.a6') },
    { q: t('faq.q7'), a: t('faq.a7') },
    { q: t('faq.q8'), a: t('faq.a8') },
    { q: t('faq.q9'), a: t('faq.a9') },
    { q: t('faq.q10'), a: t('faq.a10') },
    { q: t('faq.q11'), a: t('faq.a11') },
  ];
  return (
    <section aria-label="Frequently asked questions" className="bg-white px-5 py-28 lg:px-[8vw] lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <p className="eyebrow">{t('faq.eyebrow')}</p>
        <h2 className="section-title">{t('faq.title')}</h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#0E3B3B]/60">{t('faq.blurb')}</p>
        <div className="mt-12 divide-y divide-[#0E3B3B]/10 border-y border-[#0E3B3B]/10">
          {items.map((item, i) => (
            <div key={i}>
              <button
                aria-expanded={open === i}
                aria-controls={`faq-panel-${i}`}
                id={`faq-button-${i}`}
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B1E1E] focus-visible:ring-offset-2"
              >
                <span className="font-heading text-xl text-[#0E3B3B] lg:text-2xl">{item.q}</span>
                <ChevronDown className={`h-6 w-6 shrink-0 text-[#6B1E1E] transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
              {open === i && (
                <div
                  role="region"
                  id={`faq-panel-${i}`}
                  aria-labelledby={`faq-button-${i}`}
                  className="pb-6 pr-12 text-lg leading-relaxed text-[#0E3B3B]/65"
                >
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}