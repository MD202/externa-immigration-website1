import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function HowWeOperate() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const steps = [
    { n: '01', label: t('howWeOperate.step1'), desc: t('howWeOperate.d1') },
    { n: '02', label: t('howWeOperate.step2'), desc: t('howWeOperate.d2') },
    { n: '03', label: t('howWeOperate.step3'), desc: t('howWeOperate.d3') },
    { n: '04', label: t('howWeOperate.step4'), desc: t('howWeOperate.d4') },
    { n: '05', label: t('howWeOperate.step5'), desc: t('howWeOperate.d5') },
    { n: '06', label: t('howWeOperate.step6'), desc: t('howWeOperate.d6') },
    { n: '07', label: t('howWeOperate.step7'), desc: t('howWeOperate.d7') },
    { n: '08', label: t('howWeOperate.step8'), desc: t('howWeOperate.d8') },
  ];
  const go = (dir) => setActive((prev) => Math.max(0, Math.min(7, prev + dir)));
  return (
    <section aria-label="How we operate" className="bg-white px-5 py-28 lg:px-[8vw] lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <p className="eyebrow">{t('howWeOperate.eyebrow')}</p>
        <h2 className="section-title">{t('howWeOperate.title')}</h2>
        {/* Step cards */}
        <div className="mt-16 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <button
              key={step.n}
              onClick={() => setActive(i)}
              className={`relative border p-5 text-left transition duration-300 ${i === active ? 'border-[#C8102E] bg-[#C8102E]/5' : 'border-[#0F2433]/10 hover:border-[#0F2433]/30'}`}
            >
              <span className={`flex h-9 w-9 items-center justify-center font-mono text-sm ${i === active ? 'bg-[#C8102E] text-white' : 'bg-[#0F2433]/8 text-[#0F2433]/50'}`}>{step.n}</span>
              <span className={`mt-3 block font-heading text-base ${i === active ? 'text-[#0F2433]' : 'text-[#0F2433]/55'}`}>{step.label}</span>
              {i < 7 && <span className="absolute right-3 top-1/2 hidden -translate-y-1/2 text-[#0F2433]/15 lg:block">→</span>}
            </button>
          ))}
        </div>
        {/* Active step detail */}
        <div className="mt-8 flex items-center justify-between gap-6 border-l-2 border-[#C8102E] bg-[#F4F7F9] p-8">
          <div className="flex items-start gap-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#C8102E] font-mono text-lg text-white">{steps[active].n}</span>
            <div>
              <h3 className="font-heading text-2xl text-[#0F2433]">{steps[active].label}</h3>
              <p className="mt-2 max-w-xl text-[#0F2433]/60">{steps[active].desc}</p>
            </div>
          </div>
          <div className="flex shrink-0 gap-2">
            <button onClick={() => go(-1)} disabled={active === 0} className="flex h-10 w-10 items-center justify-center border border-[#0F2433]/15 text-[#0F2433]/60 transition hover:border-[#C8102E] hover:text-[#C8102E] disabled:opacity-30" aria-label="Previous step"><ChevronLeft className="h-5 w-5" /></button>
            <button onClick={() => go(1)} disabled={active === 7} className="flex h-10 w-10 items-center justify-center border border-[#0F2433]/15 text-[#0F2433]/60 transition hover:border-[#C8102E] hover:text-[#C8102E] disabled:opacity-30" aria-label="Next step"><ChevronRight className="h-5 w-5" /></button>
          </div>
        </div>
        <Link to="/strategy-session" className="mt-10 inline-flex items-center gap-3 bg-[#C8102E] px-6 py-4 font-semibold text-white transition hover:bg-[#A00D24]">
          {t('howWeOperate.step2')} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}