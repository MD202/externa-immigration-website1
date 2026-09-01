import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function HowWeOperate() {
  const { t } = useLanguage();
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
    <section id="how-we-operate" aria-label="How we operate" className="bg-white px-5 py-28 lg:px-[8vw] lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <p className="eyebrow">{t('howWeOperate.eyebrow')}</p>
        <h2 className="section-title">{t('howWeOperate.title')}</h2>
        <div className="mt-16">
          <ol className="relative">
            {steps.map((step, i) => (
              <li key={step.n} className="relative flex gap-6 pb-10 last:pb-0 lg:gap-10">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <span className="absolute left-[19px] top-10 bottom-0 w-px bg-[#0F2433]/15 lg:left-[23px]" aria-hidden="true" />
                )}
                {/* Number marker */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#C8102E] bg-white font-mono text-sm font-semibold text-[#C8102E] lg:h-12 lg:w-12 lg:text-base">
                  {step.n}
                </div>
                {/* Content */}
                <div className="flex-1 pt-1 lg:pt-2">
                  <h3 className="font-heading text-xl text-[#0F2433] lg:text-2xl">{step.label}</h3>
                  <p className="mt-2 max-w-2xl text-[#0F2433]/60 lg:text-lg">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <Link to="/strategy-session" className="mt-12 inline-flex items-center gap-3 bg-[#C8102E] px-6 py-4 font-semibold text-white transition hover:bg-[#A00D24]">
          {t('howWeOperate.step2')} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}