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
  ];
  return (
    <section aria-label="Frequently asked questions" className="bg-white px-5 py-28 lg:px-[8vw] lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <p className="eyebrow">{t('faq.eyebrow')}</p>
        <h2 className="section-title">{t('faq.title')}</h2>
        <div className="mt-12 divide-y divide-[#0F2433]/10 border-y border-[#0F2433]/10">
          {items.map((item, i) => (
            <div key={i}>
              <button
                aria-expanded={open === i}
                aria-controls={`faq-panel-${i}`}
                id={`faq-button-${i}`}
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2"
              >
                <span className="font-heading text-xl text-[#0F2433] lg:text-2xl">{item.q}</span>
                <ChevronDown className={`h-6 w-6 shrink-0 text-[#C8102E] transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
              {open === i && (
                <div
                  role="region"
                  id={`faq-panel-${i}`}
                  aria-labelledby={`faq-button-${i}`}
                  className="pb-6 pr-12 text-lg leading-relaxed text-[#0F2433]/65"
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