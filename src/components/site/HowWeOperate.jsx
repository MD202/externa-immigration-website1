import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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

  return (
    <section id="how-we-operate" aria-label="How we operate" className="bg-[#0F2433] px-5 py-28 text-white lg:px-[8vw] lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[.24em] text-[#C5A059]">{t('howWeOperate.eyebrow')}</p>
          <h2 className="mt-4 font-heading text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">{t('howWeOperate.title')}</h2>
        </div>

        {/* Horizontal timeline */}
        <div className="mt-16 overflow-x-auto pb-2 lg:overflow-visible">
          <div className="relative min-w-[560px] lg:min-w-0">
            {/* Base line */}
            <div className="absolute top-5 left-5 right-5 h-px bg-white/15" />
            {/* Progress line */}
            <div className="absolute top-5 left-5 h-px bg-[#C8102E] transition-all duration-500" style={{ width: `calc(${active / (steps.length - 1)} * (100% - 40px))` }} />

            {/* Numbered nodes */}
            <div className="relative flex justify-between">
              {steps.map((step, i) => (
                <button key={step.n} onClick={() => setActive(i)} className="flex flex-col items-center" aria-label={step.label}>
                  <span className={`flex h-10 w-10 items-center justify-center rounded-full border-2 font-mono text-sm font-semibold transition ${
                    active === i
                      ? 'border-[#C8102E] bg-[#C8102E] text-white'
                      : i < active
                        ? 'border-[#C5A059] bg-[#C5A059]/15 text-[#C5A059]'
                        : 'border-white/25 bg-[#0F2433] text-white/50 hover:border-white/50 hover:text-white'
                  }`}>{step.n}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active step content */}
        <div className="mt-12 border-t border-white/10 pt-10">
          <h3 className="font-heading text-2xl text-white lg:text-3xl">{steps[active].label}</h3>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60">{steps[active].desc}</p>
        </div>

        <Link to="/strategy-session" className="mt-12 inline-flex items-center gap-3 bg-[#C8102E] px-6 py-4 font-semibold text-white transition hover:bg-[#A00D24]">
          {t('howWeOperate.step2')} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}