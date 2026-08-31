import { useLanguage } from '@/lib/LanguageContext';
import { BadgeCheck, Languages, Eye, UserCog, Video } from 'lucide-react';

export default function ValueProps() {
  const { t } = useLanguage();
  const props = [
    { icon: BadgeCheck, title: t('valueProps.v1t'), body: t('valueProps.v1b') },
    { icon: Languages, title: t('valueProps.v2t'), body: t('valueProps.v2b') },
    { icon: Eye, title: t('valueProps.v3t'), body: t('valueProps.v3b') },
    { icon: UserCog, title: t('valueProps.v4t'), body: t('valueProps.v4b') },
    { icon: Video, title: t('valueProps.v5t'), body: t('valueProps.v5b') },
  ];
  return (
    <section aria-label="Key value propositions" className="border-b border-[#0F2433]/10 bg-white px-5 py-16 lg:px-[8vw] lg:py-20">
      <div className="mx-auto grid max-w-[1440px] gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {props.map(({ icon: Icon, title, body }) => (
          <article key={title} className="flex flex-col gap-3">
            <Icon className="h-7 w-7 text-[#C8102E]" aria-hidden="true" />
            <h3 className="font-heading text-lg text-[#0F2433]">{title}</h3>
            <p className="text-sm leading-relaxed text-[#0F2433]/55">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}