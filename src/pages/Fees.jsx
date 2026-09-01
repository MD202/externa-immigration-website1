import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft, Compass } from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import WhatsAppWidget from '@/components/site/WhatsAppWidget';
import NorthStarCursor from '@/components/site/NorthStarCursor';
import { useLanguage } from '@/lib/LanguageContext';

export default function Fees() {
  const { t } = useLanguage();
  const tiers = [
    { label: t('booking.tier1Label'), duration: t('booking.tier1Duration'), price: t('booking.tier1Price'), desc: t('booking.tier1Desc'), cta: t('booking.tier1Cta'), badge: null },
    { label: t('booking.tier2Label'), duration: t('booking.tier2Duration'), price: t('booking.tier2Price'), desc: t('booking.tier2Desc'), cta: t('booking.tier2Cta'), badge: t('booking.tier2Badge') },
    { label: t('booking.tier3Label'), duration: t('booking.tier3Duration'), price: t('booking.tier3Price'), desc: t('booking.tier3Desc'), cta: t('booking.tier3Cta'), badge: null },
  ];
  const items = [
    { title: t('fees.i2t'), fee: t('fees.i2f'), desc: t('fees.i2d') },
    { title: t('fees.i3t'), fee: t('fees.i3f'), desc: t('fees.i3d') },
    { title: t('fees.i4t'), fee: t('fees.i4f'), desc: t('fees.i4d') },
    { title: t('fees.i5t'), fee: t('fees.i5f'), desc: t('fees.i5d') },
    { title: t('fees.i6t'), fee: t('fees.i6f'), desc: t('fees.i6d') },
    { title: t('fees.i7t'), fee: t('fees.i7f'), desc: t('fees.i7d') },
    { title: t('fees.i8t'), fee: t('fees.i8f'), desc: t('fees.i8d') },
    { title: t('fees.i9t'), fee: t('fees.i9f'), desc: t('fees.i9d') },
  ];
  return (
    <main className="overflow-hidden bg-[#F5F1E8]">
      <NorthStarCursor />
      <Header />
      <section className="px-5 pt-32 pb-20 lg:px-[8vw] lg:pt-40">
        <div className="mx-auto max-w-[1440px]">
          <Link to="/" className="mb-10 inline-flex items-center gap-2 text-sm text-[#0E3B3B]/55 transition hover:text-[#A85638]">
            <ArrowLeft className="h-4 w-4" /> {t('fees.back')}
          </Link>
          <Link to="/" className="mb-10 flex items-center gap-3 lg:hidden">
            <Compass className="h-8 w-8 text-[#A85638]" />
            <span className="font-heading text-lg leading-tight text-[#0E3B3B]">Externa<span className="mt-0.5 block font-body text-[9px] uppercase tracking-[.22em] text-[#0E3B3B]/55">Immigration Solutions Inc</span></span>
          </Link>
          <p className="eyebrow">{t('fees.eyebrow')}</p>
          <h1 className="section-title">{t('fees.title')}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#0E3B3B]/65">{t('fees.intro')}</p>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {tiers.map((tier) => (
              <article key={tier.label} className="relative flex flex-col bg-white p-8 shadow-sm">
                {tier.badge && <span className="absolute -top-3 left-8 bg-[#C5A059] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0E3B3B]">{tier.badge}</span>}
                <h3 className="font-heading text-2xl text-[#0E3B3B]">{tier.label}</h3>
                <p className="mt-2 text-sm text-[#0E3B3B]/50">{tier.duration}</p>
                <p className="mt-6 font-heading text-4xl text-[#A85638]">{tier.price}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-[#0E3B3B]/60">{tier.desc}</p>
                <Link to="/strategy-session" className="mt-7 inline-flex items-center gap-2 border-b-2 border-[#A85638] pb-1 text-sm font-semibold text-[#A85638]">{tier.cta} <ArrowUpRight className="h-4 w-4" /></Link>
              </article>
            ))}
          </div>
          <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-[#0E3B3B]/10 pt-10 md:flex-row md:items-center">
            <div>
              <h3 className="font-heading text-2xl text-[#0E3B3B]">{t('booking.fullRepTitle')}</h3>
              <p className="mt-2 font-heading text-xl text-[#A85638]">{t('booking.fullRepPrice')}</p>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#0E3B3B]/55">{t('booking.fullRepBody')}</p>
            <Link to="/strategy-session" className="shrink-0 bg-[#0E3B3B] px-6 py-4 font-semibold text-white transition hover:bg-[#155454]">{t('booking.fullRepCta')}</Link>
          </div>
          <div className="mt-16">
            <h2 className="font-heading text-3xl text-[#0E3B3B]">Full representation fees</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {items.map((item) => (
                <div key={item.title} className="flex flex-col justify-between border border-[#0E3B3B]/8 bg-white p-7 shadow-sm transition hover:shadow-md">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading text-2xl text-[#0E3B3B]">{item.title}</h3>
                    <span className="whitespace-nowrap font-heading text-xl text-[#A85638]">{item.fee}</span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-[#0E3B3B]/55">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[#0E3B3B]/45">{t('fees.note')}</p>
          <p className="mt-3 max-w-2xl text-sm font-semibold leading-relaxed text-[#A85638]">{t('fees.exclusion')}</p>
          <div className="mt-6 max-w-2xl border-l-2 border-[#C5A059] bg-[#F5F1E8] px-5 py-4">
            <p className="text-sm leading-relaxed text-[#0E3B3B]/70">{t('fees.stagedNote')}</p>
          </div>
          <Link to="/strategy-session" className="mt-8 inline-flex items-center gap-3 bg-[#A85638] px-6 py-4 font-semibold text-white transition hover:bg-[#8E4828]">{t('fees.cta')} <ArrowUpRight /></Link>
        </div>
      </section>
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}