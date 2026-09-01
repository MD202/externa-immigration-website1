import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function HowWeOperate() {
  const { t } = useLanguage();
  const steps = [
    { n: '01', label: t('howWeOperate.step1'), active: true },
    { n: '02', label: t('howWeOperate.step2') },
    { n: '03', label: t('howWeOperate.step3') },
    { n: '04', label: t('howWeOperate.step4') },
    { n: '05', label: t('howWeOperate.step5') },
    { n: '06', label: t('howWeOperate.step6') },
    { n: '07', label: t('howWeOperate.step7') },
    { n: '08', label: t('howWeOperate.step8') },
  ];
  return (
    <section aria-label="How we operate" className="bg-white px-5 py-28 lg:px-[8vw] lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <p className="eyebrow">{t('howWeOperate.eyebrow')}</p>
        <h2 className="section-title">{t('howWeOperate.title')}</h2>
        <ol className="mt-16 grid gap-0 border-l-2 border-[#0F2433]/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.n} className="relative border-b border-[#0F2433]/10 px-5 py-8">
              <span className={`flex h-10 w-10 items-center justify-center font-mono text-sm ${step.active ? 'bg-[#C8102E] text-white' : 'bg-[#0F2433]/8 text-[#0F2433]/60'}`}>{step.n}</span>
              <span className={`mt-4 block font-heading text-lg ${step.active ? 'text-[#0F2433]' : 'text-[#0F2433]/60'}`}>{step.label}</span>
            </li>
          ))}
        </ol>
        <Link to="/strategy-session" className="mt-10 inline-flex items-center gap-3 bg-[#C8102E] px-6 py-4 font-semibold text-white transition hover:bg-[#A00D24]">
          {t('howWeOperate.step2')} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}