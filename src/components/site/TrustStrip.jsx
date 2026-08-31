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
    <div className="border-y border-white/10 bg-[#14222E] py-4">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 text-sm text-white/65 lg:px-[8vw]">
        {items.map(({ icon: Icon, text }, i) => (
          <span key={i} className="flex items-center gap-2">
            <Icon className="h-4 w-4 text-[#C5A059]" />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}