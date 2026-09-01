import { useLanguage } from '@/lib/LanguageContext';

export default function IntakeProgress({ step }) {
  const { t } = useLanguage();
  return (
    <div className="mb-10">
      <div className="mb-3 flex justify-between text-xs uppercase tracking-[.18em] text-[#0E3B3B]/50">
        <span>{t('strategy.progress')}</span>
        <span>{step} / 3</span>
      </div>
      <div className="h-px bg-[#0E3B3B]/15">
        <div className="h-px bg-[#A85638] transition-all duration-500" style={{ width: `${step * 33.33}%` }} />
      </div>
    </div>
  );
}