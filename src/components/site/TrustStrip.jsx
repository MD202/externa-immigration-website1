import { useLanguage } from '@/lib/LanguageContext';

export default function TrustStrip() {
  const { t } = useLanguage();
  const items = [
    t('truststrip.licensed'),
    t('truststrip.location'),
    t('truststrip.hours'),
    t('truststrip.langs'),
  ];
  return (
    <div className="border-b border-[#1E2A4A]/10 bg-white py-5 shadow-sm">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 text-sm text-[#1E2A4A]/70 lg:px-[8vw]">
        {items.map((text, i) => (
          <span key={i}>{text}</span>
        ))}
      </div>
    </div>
  );
}