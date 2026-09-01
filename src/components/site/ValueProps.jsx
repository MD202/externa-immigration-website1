import { useLanguage } from '@/lib/LanguageContext';
import { BadgeCheck, Languages, Eye, UserCog, CalendarClock } from 'lucide-react';

export default function ValueProps() {
  const { t } = useLanguage();
  const props = [
    { icon: BadgeCheck, title: t('valueProps.v1t'), body: t('valueProps.v1b') },
    { icon: Languages, title: t('valueProps.v2t'), body: t('valueProps.v2b'), prominent: true },
    { icon: Eye, title: t('valueProps.v3t'), body: t('valueProps.v3b') },
    { icon: UserCog, title: t('valueProps.v4t'), body: t('valueProps.v4b') },
    { icon: CalendarClock, title: t('valueProps.v5t'), body: t('valueProps.v5b') },
  ];
  const items = [...props, ...props, ...props];
  return (
    <section aria-label="Key value propositions" className="overflow-hidden border-b border-[#123B2C]/10 bg-white py-5">
      <div className="marquee-track gap-12">
        {items.map(({ icon: Icon, title, body, prominent }, i) => (
          <article key={i} className="flex shrink-0 items-center gap-3">
            <Icon className="h-5 w-5 text-[#C9A227]" aria-hidden="true" />
            <span className="font-heading text-sm font-semibold text-[#123B2C]">{title}:</span>
            <span className={`text-sm text-[#123B2C]/55 ${prominent ? 'font-heading text-base font-semibold text-[#C9A227]' : ''}`}>{body}</span>
            <span className="ml-12 text-[#123B2C]/15">·</span>
          </article>
        ))}
      </div>
    </section>
  );
}