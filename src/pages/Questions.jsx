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
  const services = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((s) => ({
    title: t(`services.t${s}`),
    faqs: [1, 2].map((q) => ({ value: `s${s}q${q}`, q: t(`faq.s${s}q${q}`), a: t(`faq.s${s}a${q}`) })),
  }));
  const Accordion = ({ it }) => {
    const isOpen = open === it.value;
    return (
      <div className="border-b border-[#1E2A4A]/12">
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
  };
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
      <section className="px-5 pb-12 lg:px-[8vw] lg:pb-16">
        <div className="mx-auto max-w-[820px]">
          <div className="border-t border-[#1E2A4A]/12">
            {items.map((it) => <Accordion key={it.value} it={it} />)}
          </div>
        </div>
      </section>
      <section className="bg-[#F4EEE2] px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <p className="eyebrow">{t('questions.serviceEyebrow')}</p>
            <h2 className="section-title">{t('questions.serviceHeading')}</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#1E2A4A]/65">{t('questions.serviceIntro')}</p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((svc) => (
              <Reveal key={svc.title}>
                <div className="h-full border border-[#1E2A4A]/12 bg-[#FBFAF8] p-6">
                  <p className="font-heading text-xl text-[#1E2A4A]">{svc.title}</p>
                  <div className="mt-3 border-t border-[#1E2A4A]/10">
                    {svc.faqs.map((it) => <Accordion key={it.value} it={it} />)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}