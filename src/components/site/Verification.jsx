import { ExternalLink, BadgeCheck, ShieldCheck, Award } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import Reveal from '@/components/site/Reveal';

const CICC_URL = 'https://register.college-ic.ca/';

export default function Verification() {
  const { t } = useLanguage();
  const badges = [
    { icon: ShieldCheck, title: t('home.verify.badgeLic'), sub: t('home.verify.badgeLicSub') },
    { icon: Award, title: t('home.verify.badgeCapic'), sub: t('home.verify.badgeCapicSub') },
    { icon: BadgeCheck, title: t('home.verify.badgeIrb'), sub: t('home.verify.badgeIrbSub') },
  ];
  return (
    <section className="relative overflow-hidden bg-[#13203F] px-5 py-20 text-center text-white lg:py-44">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true" style={{ background: 'radial-gradient(50% 60% at 50% 0%, rgba(184,134,11,0.16), transparent 70%)' }} />
      <div className="relative mx-auto max-w-[1000px]">
        <Reveal>
          <p className="eyebrow">{t('home.verify.eyebrow')}</p>
          <p className="mx-auto mt-8 max-w-2xl text-2xl leading-relaxed text-white/85 sm:text-3xl">{t('home.verify.body1')}</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">{t('home.verify.body2')}</p>
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {badges.map((b, i) => (
              <Reveal key={i}>
                <div className="group h-full border border-white/15 bg-white/[.03] p-7 text-left transition hover:-translate-y-1 hover:border-[#B8860B] hover:bg-white/[.06]">
                  <b.icon className="h-8 w-8 text-[#B8860B]" />
                  <p className="mt-4 font-heading text-lg text-white">{b.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/55">{b.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-12 font-heading text-xl tracking-wide text-white">{t('home.verify.licensee')}</p>
          <a href={CICC_URL} target="_blank" rel="noopener noreferrer" className="link-arrow mt-6 justify-center">{t('home.verify.cta')} <ExternalLink className="h-4 w-4" /></a>
          <p className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-white/55">{t('home.verify.foot')}</p>
        </Reveal>
      </div>
    </section>
  );
}