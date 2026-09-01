import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import WhatsAppWidget from '@/components/site/WhatsAppWidget';

const SERVICE_MAP = {
  1: { titleKey: 'services.t1', textKey: 'services.x1', blurbKey: 'services.b1', factorsKey: 'services.f1', pathwayKey: 'services.p1', matter: 'Refugee claim' },
  2: { titleKey: 'services.t2', textKey: 'services.x2', blurbKey: 'services.b2', factorsKey: 'services.f2', pathwayKey: 'services.p2', matter: 'Appeal or refusal' },
  3: { titleKey: 'services.t3', textKey: 'services.x3', blurbKey: 'services.b3', factorsKey: 'services.f3', pathwayKey: 'services.p3', matter: 'Humanitarian and compassionate' },
  4: { titleKey: 'services.t4', textKey: 'services.x4', blurbKey: 'services.b4', factorsKey: 'services.f4', pathwayKey: 'services.p4', matter: 'Family sponsorship' },
  5: { titleKey: 'services.t5', textKey: 'services.x5', blurbKey: 'services.b5', factorsKey: 'services.f5', pathwayKey: 'services.p5', matter: 'Employer' },
  6: { titleKey: 'services.t6', textKey: 'services.x6', blurbKey: 'services.b6', factorsKey: 'services.f6', pathwayKey: 'services.p6', matter: 'Entrepreneurship' },
  7: { titleKey: 'services.t7', textKey: 'services.x7', blurbKey: 'services.b7', factorsKey: 'services.f7', pathwayKey: 'services.p7', matter: 'Other (permits & visas)' },
  8: { titleKey: 'services.t8', textKey: 'services.x8', blurbKey: 'services.b8', factorsKey: 'services.f8', pathwayKey: 'services.p8', matter: 'Permanent residence or PNP' },
  9: { titleKey: 'services.t9', textKey: 'services.x9', blurbKey: 'services.b9', factorsKey: 'services.f9', pathwayKey: 'services.p9', matter: 'Other (permits & visas)' },
};

export default function ServiceDetail() {
  const { id } = useParams();
  const { t } = useLanguage();
  const svc = SERVICE_MAP[id];
  const [faqOpen, setFaqOpen] = useState(0);

  useEffect(() => {
    if (!svc) return;
    document.title = `${t(svc.titleKey)} | Externa Immigration Solutions Inc`;
    const desc = `${t(svc.textKey)} ${t(svc.blurbKey)}`;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', desc);
    else {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      metaDesc.content = desc;
      document.head.appendChild(metaDesc);
    }
    const faqItems = [
      { q: t(`faq.s${id}q1`), a: t(`faq.s${id}a1`) },
      { q: t(`faq.s${id}q2`), a: t(`faq.s${id}a2`) },
    ];
    const ld = {
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "Service", "name": t(svc.titleKey), "description": t(svc.textKey), "provider": { "@type": "LegalService", "name": "Externa Immigration Solutions Inc" }, "areaServed": "Canada" },
        { "@type": "FAQPage", "mainEntity": faqItems.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }
      ]
    };
    let script = document.getElementById('service-jsonld');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'service-jsonld';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(ld);
    return () => {
      const s = document.getElementById('service-jsonld');
      if (s) s.remove();
    };
  }, [svc, id, t]);

  if (!svc) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F5F1E8] text-[#0E3B3B]">
        <div className="text-center">
          <p className="font-heading text-3xl">Service not found</p>
          <Link to="/" className="mt-6 inline-flex border-b border-[#A85638] pb-1 text-[#A85638]">Return home</Link>
        </div>
      </main>
    );
  }

  const pathwaySteps = t(svc.pathwayKey).split(' · ');
  const faqs = [
    { q: t(`faq.s${id}q1`), a: t(`faq.s${id}a1`) },
    { q: t(`faq.s${id}q2`), a: t(`faq.s${id}a2`) },
  ];

  return (
    <main className="min-h-screen bg-[#F5F1E8]">
      <Header />
      <section className="px-5 pt-32 pb-20 lg:px-[8vw] lg:pt-40">
        <div className="mx-auto max-w-[1440px]">
          <Link to="/#services" className="mb-10 inline-flex items-center gap-2 text-sm text-[#0E3B3B]/55 transition hover:text-[#A85638]">
            <ArrowLeft className="h-4 w-4" /> {t('fees.back')}
          </Link>
          <div className="grid gap-12 lg:grid-cols-[60%_40%]">
            {/* Left: pathway details */}
            <div>
              <p className="eyebrow">{t('services.eyebrow')}</p>
              <h1 className="section-title">{t(svc.titleKey)}</h1>
              <p className="mt-6 text-lg leading-relaxed text-[#0E3B3B]/65">{t(svc.textKey)}</p>
              <p className="mt-5 text-base leading-relaxed text-[#0E3B3B]/55">{t(svc.blurbKey)}</p>
              <div className="mt-10">
                <p className="text-xs font-semibold uppercase tracking-[.18em] text-[#0E3B3B]/50">{t('services.potentialSteps')}</p>
                <ol className="mt-6 grid gap-3">
                  {pathwaySteps.map((step, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#A85638] font-mono text-xs text-white">{String(i + 1).padStart(2, '0')}</span>
                      <span className="font-heading text-lg text-[#0E3B3B]">{step}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 border-l-2 border-[#C5A059] bg-[#F5F1E8] px-5 py-4 text-sm italic leading-relaxed text-[#0E3B3B]/60">{t('services.stageNote')}</p>
              </div>
              <div className="mt-10 border-t border-[#0E3B3B]/10 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[.18em] text-[#0E3B3B]/50">Key factors</p>
                <p className="mt-3 text-sm text-[#0E3B3B]/60">{t(svc.factorsKey)}</p>
              </div>
            </div>
            {/* Right: contact form */}
            <div className="bg-white p-8 shadow-sm lg:sticky lg:top-32 lg:self-start">
              <h2 className="font-heading text-2xl text-[#0E3B3B]">{t('bookingFlow.title')}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#0E3B3B]/55">{t('bookingFlow.subtitle')}</p>
              <div className="mt-6 border border-[#0E3B3B]/10 bg-[#F5F1E8] p-5">
                <p className="font-heading text-lg text-[#0E3B3B]">{t('booking.tier2Label')} <span className="text-sm font-normal text-[#0E3B3B]/50">({t('booking.tier2Duration')})</span></p>
                <p className="mt-2 text-sm leading-relaxed text-[#0E3B3B]/55">{t('booking.tier2Desc')}</p>
                <p className="mt-3 font-heading text-xl text-[#A85638]">{t('booking.tier2Price')}</p>
              </div>
              <Link to="/strategy-session" className="mt-5 flex items-center justify-center gap-3 bg-[#A85638] px-6 py-4 font-semibold text-white transition hover:bg-[#8E4828]">
                {t('booking.tier2Cta')} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section aria-label="Frequently asked questions" className="bg-white px-5 py-20 lg:px-[8vw]">
        <div className="mx-auto max-w-[1440px]">
          <p className="eyebrow">{t('faq.eyebrow')}</p>
          <h2 className="section-title">{t('faq.title')}</h2>
          <div className="mt-12 max-w-3xl divide-y divide-[#0E3B3B]/10 border-y border-[#0E3B3B]/10">
            {faqs.map((item, i) => (
              <div key={i}>
                <button aria-expanded={faqOpen === i} onClick={() => setFaqOpen(faqOpen === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 py-6 text-left">
                  <span className="font-heading text-xl text-[#0E3B3B]">{item.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-[#A85638] transition-transform ${faqOpen === i ? 'rotate-180' : ''}`} />
                </button>
                {faqOpen === i && <p className="pb-6 pr-8 leading-relaxed text-[#0E3B3B]/65">{item.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}