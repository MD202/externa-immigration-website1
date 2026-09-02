import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function BookingOptions() {
  const { t } = useLanguage();
  const tiers = [
    { label: t('booking.tier1Label'), duration: t('booking.tier1Duration'), price: t('booking.tier1Price'), desc: t('booking.tier1Desc'), cta: t('booking.tier1Cta'), badge: null },
    { label: t('booking.tier2Label'), duration: t('booking.tier2Duration'), price: t('booking.tier2Price'), desc: t('booking.tier2Desc'), cta: t('booking.tier2Cta'), badge: t('booking.tier2Badge') },
    { label: t('booking.tier3Label'), duration: t('booking.tier3Duration'), price: t('booking.tier3Price'), desc: t('booking.tier3Desc'), cta: t('booking.tier3Cta'), badge: null },
  ];
  return (
    <section aria-label="Booking options" className="bg-[#F8FAFC] px-5 py-28 lg:px-[8vw] lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <p className="eyebrow">{t('booking.eyebrow')}</p>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {tiers.map((tier) => (
            <article key={tier.label} className="relative flex flex-col bg-white p-8 shadow-sm transition hover:shadow-lg">
              {tier.badge && <span className="absolute -top-3 left-8 bg-[#C9A227] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">{tier.badge}</span>}
              <h3 className="font-heading text-2xl text-[#1E2A4A]">{tier.label}</h3>
              <p className="mt-2 text-sm text-[#1E2A4A]/50">{tier.duration}</p>
              <p className="mt-6 font-heading text-4xl text-[#C9A227]">{tier.price}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[#1E2A4A]/60">{tier.desc}</p>
              <Link to="/strategy-session" className="mt-7 inline-flex items-center gap-2 border-b-2 border-[#C9A227] pb-1 text-sm font-semibold text-[#C9A227]">{tier.cta} <ArrowUpRight className="h-4 w-4" /></Link>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-[#1E2A4A]/10 pt-10 md:flex-row md:items-center">
          <div>
            <h3 className="font-heading text-2xl text-[#1E2A4A]">{t('booking.fullRepTitle')}</h3>
            <p className="mt-2 font-heading text-xl text-[#C9A227]">{t('booking.fullRepPrice')}</p>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#1E2A4A]/55">{t('booking.fullRepBody')}</p>
          <Link to="/strategy-session" className="shrink-0 bg-[#1E2A4A] px-6 py-4 font-semibold text-white transition hover:bg-[#334155]">{t('booking.fullRepCta')}</Link>
        </div>
      </div>
    </section>
  );
}