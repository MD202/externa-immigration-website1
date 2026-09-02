import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function ProcessTimeline() {
  const { t } = useLanguage();
  const pills = [
    { key: 'hero.opt1', href: '#services' },
    { key: 'hero.opt2', href: '#services' },
    { key: 'hero.opt3', href: '#appeals' },
    { key: 'hero.opt4', href: '#services' },
    { key: 'hero.opt5', href: '#services' },
    { key: 'hero.opt6', href: '#services' },
  ];
  const steps = [
    { n: '01', label: t('assessment.step1'), active: true },
    { n: '02', label: t('assessment.step2') },
    { n: '03', label: t('assessment.step3') },
    { n: '04', label: t('assessment.step4') },
  ];
  return (
    <section aria-label="Assessment and process timeline" className="bg-white px-5 py-28 lg:px-[8vw] lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <h2 className="font-heading text-4xl text-[#13203F] sm:text-5xl">{t('assessment.title')}</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {pills.map((pill) => (
            <a key={pill.key} href={pill.href} className="border border-[#13203F]/15 px-5 py-3 text-sm text-[#13203F]/75 transition hover:border-[#C9A227] hover:text-[#C9A227]">
              {t(pill.key)}
            </a>
          ))}
        </div>
        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-heading text-2xl leading-snug text-[#13203F]">{t('assessment.timelineTitle')}</p>
            <p className="mt-5 text-lg leading-relaxed text-[#13203F]/60">{t('assessment.timelineBody')}</p>
            <Link to="/strategy-session" className="mt-8 inline-flex items-center gap-3 bg-[#C9A227] px-6 py-4 font-semibold text-[#FFFFFF] transition hover:bg-[#A8871A]">
              {t('assessment.timelineCta')} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ol className="relative grid gap-0 border-l-2 border-[#13203F]/10 pl-0">
            {steps.map((step, i) => (
              <li key={step.n} className="flex items-center gap-5 border-b border-[#13203F]/10 py-6 last:border-0">
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center font-mono text-sm ${step.active ? 'bg-[#C9A227] text-[#FFFFFF]' : 'bg-[#13203F]/8 text-[#13203F]/60'}`}>{step.n}</span>
                <span className={`font-heading text-xl ${step.active ? 'text-[#13203F]' : 'text-[#13203F]/50'}`}>{step.label}</span>
                {i < steps.length - 1 && <span className="ml-auto text-[#13203F]/20">→</span>}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}