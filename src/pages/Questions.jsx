import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { usePageMeta } from '@/lib/usePageMeta';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Reveal from '@/components/site/Reveal';

export default function Questions() {
  const { t } = useLanguage();
  usePageMeta(t('questions.meta.title'), t('questions.meta.description'));
  const [open, setOpen] = useState('q1');
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => ({ value: `q${i}`, q: t(`questions.q${i}`), a: t(`questions.a${i}`) }));
  return (
    <main className="bg-[#FBFAF8]">
      <Header />
      <section className="px-5 pt-32 pb-12 lg:px-[8vw] lg:pt-40">
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <h1 className="font-heading text-[40px] leading-[1.08] text-[#1E2A4A] sm:text-5xl lg:text-[56px]">{t('questions.heading')}</h1>
          </Reveal>
        </div>
      </section>
      <section className="px-5 pb-24 lg:px-[8vw] lg:pb-32">
        <div className="mx-auto max-w-[820px]">
          <div className="border-t border-[#1E2A4A]/12">
            {items.map((it) => {
              const isOpen = open === it.value;
              return (
                <div key={it.value} className="border-b border-[#1E2A4A]/12">
                  <button onClick={() => setOpen(isOpen ? null : it.value)} className="flex w-full items-center justify-between gap-4 py-5 text-left" aria-expanded={isOpen}>
                    <span className="font-heading text-lg text-[#1E2A4A]">{it.q}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-[#B8860B] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <p className="text-base leading-relaxed text-[#1E2A4A]/70">{it.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}