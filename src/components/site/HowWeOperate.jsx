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
    <section id="how-we-operate" aria-label="How we operate" className="bg-[#0E3B3B] px-5 py-28 text-white lg:px-[8vw] lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[.24em] text-[#B8A468]">{t('howWeOperate.eyebrow')}</p>
          <h2 className="mt-4 font-heading text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">{t('howWeOperate.title')}</h2>
        </div>

        {/* Desktop: Horizontal timeline */}
        <div className="mt-16 hidden lg:block">
          <div className="relative">
            <div className="absolute top-5 left-5 right-5 h-px bg-white/15" />
            <div className="absolute top-5 left-5 h-px bg-[#A85638] transition-all duration-500" style={{ width: `calc(${active / (steps.length - 1)} * (100% - 40px))` }} />
            <div className="relative flex justify-between">
              {steps.map((step, i) => (
                <button key={step.n} onClick={() => setActive(i)} className="flex flex-col items-center" aria-label={step.label}>
                  <span className={`flex h-10 w-10 items-center justify-center rounded-full border-2 font-mono text-sm font-semibold transition ${
                    active === i
                      ? 'border-[#A85638] bg-[#A85638] text-white'
                      : i < active
                        ? 'border-[#B8A468] bg-[#B8A468]/15 text-[#B8A468]'
                        : 'border-white/25 bg-[#0E3B3B] text-white/50 hover:border-white/50 hover:text-white'
                  }`}>{step.n}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical step list */}
        <div className="mt-12 grid gap-3 lg:hidden">
          {steps.map((step, i) => (
            <button key={step.n} onClick={() => setActive(i)} className={`flex items-center gap-4 border p-4 text-left transition ${
              active === i ? 'border-[#A85638] bg-[#A85638]/10' : 'border-white/10'
            }`}>
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 font-mono text-sm font-semibold ${
                active === i ? 'border-[#A85638] bg-[#A85638] text-white' :
                i < active ? 'border-[#B8A468] bg-[#B8A468]/15 text-[#B8A468]' :
                'border-white/25 text-white/50'
              }`}>{step.n}</span>
              <span className={`font-heading text-base ${active === i ? 'text-white' : 'text-white/60'}`}>{step.label}</span>
            </button>
          ))}
        </div>

        {/* Active step content */}
        <div className="mt-12 border-t border-white/10 pt-10">
          <h3 className="font-heading text-2xl text-white lg:text-3xl">{steps[active].label}</h3>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60">{steps[active].desc}</p>
        </div>

        {/* Staged fee note */}
        <div className="mt-8 max-w-2xl border-l-2 border-[#B8A468] px-5 py-4">
          <p className="text-sm leading-relaxed text-white/50">{t('howWeOperate.stagedNote')}</p>
        </div>

        <Link to="/strategy-session" className="mt-12 inline-flex items-center gap-3 bg-[#A85638] px-6 py-4 font-semibold text-white transition hover:bg-[#8E4828]">
          {t('howWeOperate.step2')} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}