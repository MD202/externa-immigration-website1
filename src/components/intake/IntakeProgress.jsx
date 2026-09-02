import { useLanguage } from '@/lib/LanguageContext';

export default function IntakeProgress({ step }) {
  const { t } = useLanguage();
  return (
    <div className="mb-10">
      <div className="mb-3 flex justify-between text-xs uppercase tracking-[.18em] text-[#1E2A4A]/50">
        <span>{t('strategy.progress')}</span>
        <span>{step} / 3</span>
      </div>
      <div className="h-px bg-[#1E2A4A]/15">
        <div className="h-px bg-[#C9A227] transition-all duration-500" style={{ width: `${step * 33.33}%` }} />
      </div>
    </div>
  );
}