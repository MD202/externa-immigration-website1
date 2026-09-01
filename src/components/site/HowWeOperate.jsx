import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
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

        {/* Step pills */}
        <div className="mt-14 flex flex-wrap gap-2.5">
          {steps.map((step, i) => (
            <button
              key={step.n}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold transition ${
                active === i
                  ? 'bg-[#C8102E] text-white'
                  : 'border border-white/15 text-white/50 hover:border-white/40 hover:text-white'
              }`}
            >
              <span className="font-mono text-xs">{step.n}</span>
              <span className="hidden sm:inline">{step.label}</span>
            </button>
          ))}
        </div>

        {/* Active step content */}
        <div className="mt-12 grid gap-8 border-t border-white/10 pt-12 lg:grid-cols-12">
          <div className="lg:col-span-2">
            <span className="font-heading text-7xl leading-none text-[#C5A059]/40 lg:text-8xl">{steps[active].n}</span>
          </div>
          <div className="lg:col-span-7">
            <h3 className="font-heading text-2xl text-white lg:text-3xl">{steps[active].label}</h3>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/60">{steps[active].desc}</p>
          </div>
          <div className="flex items-end justify-between lg:col-span-3 lg:flex-col lg:items-end lg:justify-end lg:gap-6">
            <div className="flex gap-3">
              <button
                onClick={() => setActive((p) => Math.max(0, p - 1))}
                disabled={active === 0}
                className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition hover:border-[#C8102E] hover:text-[#C8102E] disabled:opacity-20 disabled:hover:border-white/20 disabled:hover:text-white"
                aria-label="Previous step"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => setActive((p) => Math.min(steps.length - 1, p + 1))}
                disabled={active === steps.length - 1}
                className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition hover:border-[#C8102E] hover:text-[#C8102E] disabled:opacity-20 disabled:hover:border-white/20 disabled:hover:text-white"
                aria-label="Next step"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <p className="font-mono text-sm text-white/40">{String(active + 1).padStart(2, '0')} / 08</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-10 h-px w-full bg-white/10">
          <div
            className="h-px bg-[#C8102E] transition-all duration-500"
            style={{ width: `${((active + 1) / steps.length) * 100}%` }}
          />
        </div>

        <Link to="/strategy-session" className="mt-12 inline-flex items-center gap-3 bg-[#C8102E] px-6 py-4 font-semibold text-white transition hover:bg-[#A00D24]">
          {t('howWeOperate.step2')} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}