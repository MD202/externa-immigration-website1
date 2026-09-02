import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import Reveal from '@/components/site/Reveal';

export default function BookingOptions() {
  const { t } = useLanguage();
  const tiers = [
    { label: t('booking.tier1Label'), duration: t('booking.tier1Duration'), price: t('booking.tier1Price'), desc: t('booking.tier1Desc'), badge: null },
    { label: t('booking.tier2Label'), duration: t('booking.tier2Duration'), price: t('booking.tier2Price'), desc: t('booking.tier2Desc'), badge: t('booking.tier2Badge') },
    { label: t('booking.tier3Label'), duration: t('booking.tier3Duration'), price: t('booking.tier3Price'), desc: t('booking.tier3Desc'), badge: null },
  ];
  return (
    <section aria-label="Booking options" className="bg-[#F8FAFC] px-5 py-28 lg:px-[8vw] lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{t('booking.eyebrow')}</p>
          <h2 className="section-title">{t('booking.title')}</h2>
        </Reveal>
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal key={tier.label} delay={i * 60} className="h-full">
              <article className="flex h-full flex-col border border-[#1E2A4A]/10 bg-white p-8">
                {tier.badge && <span className="mb-4 w-fit bg-[#B8860B] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">{tier.badge}</span>}
                <h3 className="font-heading text-2xl text-[#1E2A4A]">{tier.label}</h3>
                <p className="mt-2 text-sm text-[#1E2A4A]/50">{tier.duration}</p>
                <p className="mt-6 font-heading text-4xl text-[#B8860B]">{tier.price}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-[#1E2A4A]/60">{tier.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-[#1E2A4A]/10 pt-10 md:flex-row md:items-center">
          <div>
            <h3 className="font-heading text-2xl text-[#1E2A4A]">{t('booking.fullRepTitle')}</h3>
            <p className="mt-2 font-heading text-xl text-[#B8860B]">{t('booking.fullRepPrice')}</p>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#1E2A4A]/55">{t('booking.fullRepBody')}</p>
          <Link to="/strategy-session" className="link-arrow shrink-0">{t('booking.fullRepCta')} <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}