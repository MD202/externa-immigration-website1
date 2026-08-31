import { useLanguage } from '@/lib/LanguageContext';

export default function IntakeProgress({ step }) {
  const { t } = useLanguage();
  return (
    <div className="mb-10">
      <div className="mb-3 flex justify-between text-xs uppercase tracking-[.18em] text-white/50">
        <span>{t('strategy.progress')}</span>
        <span>{step} / 3</span>
      </div>
      <div className="h-px bg-white/15">
        <div className="h-px bg-[#C5A059] transition-all duration-500" style={{ width: `${step * 33.33}%` }} />
      </div>
    </div>
  );
}