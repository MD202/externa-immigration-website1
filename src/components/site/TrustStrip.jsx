import { useLanguage } from '@/lib/LanguageContext';
import { BadgeCheck, MapPin, MoonStar, Languages } from 'lucide-react';

export default function TrustStrip() {
  const { t } = useLanguage();
  const items = [
    { icon: BadgeCheck, text: t('truststrip.licensed') },
    { icon: MapPin, text: t('truststrip.location') },
    { icon: MoonStar, text: t('truststrip.hours') },
    { icon: Languages, text: t('truststrip.langs') },
  ];
  return (
    <div className="border-b border-[#0F2433]/10 bg-white py-5 shadow-sm">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 text-sm text-[#0F2433]/70 lg:px-[8vw]">
        {items.map(({ icon: Icon, text }, i) => (
          <span key={i} className="flex items-center gap-2.5">
            <Icon className="h-4 w-4 text-[#C8102E]" />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}