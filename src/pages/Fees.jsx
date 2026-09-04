import { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { usePageMeta } from '@/lib/usePageMeta';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Reveal from '@/components/site/Reveal';
import { Image } from '@/components/ui/image';
import MiniNav from '@/components/fees/MiniNav';
import FeesTabs from '@/components/fees/FeesTabs';
import ServiceRow from '@/components/fees/ServiceRow';
import { tabs, services, ROW_GRID } from '@/components/fees/feesData';

const HERO_IMG = 'https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/bbfbbabed_generated_image.png';

const consultations = [
  { name: 'Full consultation', price: '$175', detail: '60 minutes. A full assessment and a written summary afterward. Credited in full toward any package if you retain us within 15 days.', featured: true },
  { name: 'Quick sync', price: '$50', detail: '15 minutes. One specific question.' },
  { name: 'Refusal analysis', price: '$650', detail: 'If you\'ve already been refused, start here instead. We order your file notes, read what actually happened, and give you a written opinion on your options. Includes the ATIP request.', featured: true },
];

const paymentModes = [
  { h: 'Full Representation — paid in stages', items: ['Standard: 40% opening · 40% submission · 20% decision', 'H&C and complex: 30% · 30% · 30% · 10% decision', 'Appeals: 30% filing · 30% record · 30% submissions · 10% conclusion'] },
  { h: 'DIY and Review Only — paid in full before work begins', items: ['Fixed scope, fixed deliverable, delivered inside a stated window', 'Review Only within 5 business days'] },
  { h: 'Consultations and fixed services — paid in full', items: ['Consultations, refusal analysis, ATIP requests, second opinions'] },
];

const payNotes = [
  { h: "What's included", b: 'Forms, supporting letters, strategy, written review, submission, and liaising with the immigration authority on your behalf — depending on the tier.' },
  { h: "What's separate", b: 'Government fees are yours and never marked up. Courier, translation, interpretation and affidavits are billed at cost.' },
  { h: 'Before you pay anything', b: 'You review and sign a written agreement first. That order is required by our professional rules, and it protects you.' },
];

const savings = [
  { title: 'Consultation credit', body: 'Your consultation fee is credited toward any package if you retain us within 15 days.' },
  { title: 'Returning clients — 50% off', body: 'Extensions, restorations, change of status, PR card renewals and citizenship applications are half price after a Full Representation file. Professional fees only.' },
  { title: 'Family bundle — 30% off', body: 'A second family member\'s application, filed at the same time, at 30% off the second package.' },
  { title: 'Permit with PR — 60% off', body: 'Bridging open work permits and post-graduation work permits are 60% off when taken with any Full Representation permanent residence package.' },
  { title: 'Combined economic applications — $200 off', body: 'Federal Skilled Worker or Canadian Experience Class combined with an Express Entry profile package.' },
  { title: 'Sponsorship bundle', body: 'Spouse open work permit or visitor visa added to a spousal sponsorship at the add-on rate, not the standalone rate.' },
];

function Eyebrow({ children, dark }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-semibold uppercase tracking-[.2em] text-[#B8860B]">{children}</span>
      <span className={`h-px flex-1 ${dark ? 'bg-white/15' : 'bg-[#1E2A4A]/10'}`} />
    </div>
  );
}

export default function Fees() {
  const { t } = useLanguage();
  usePageMeta(t('fees.meta.title'), t('fees.meta.description'));
  const location = useLocation();
  const [tab, setTab] = useState('family');
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get('tab');
    if (q && tabs.some((x) => x.id === q)) setTab(q);
  }, [location.search]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const svc = services.find((s) => s.id === id);
      if (svc) {
        setTab(svc.tabs[0]);
        setOpenId(id);
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
      }
    }
  }, [location.hash]);

  const visible = useMemo(() => services.filter((s) => s.tabs.includes(tab)), [tab]);
  const selectTab = (id) => { setTab(id); setOpenId(null); };
  const toggle = (id) => setOpenId((cur) => (cur === id ? null : id));

  return (
    <main className="bg-[#FBFAF8]">
      <Header />
      {/* Hero */}
      <section className="relative flex min-h-[78vh] items-center overflow-hidden bg-[#13203F] px-5 pt-32 pb-16 text-white lg:px-[8vw] lg:pt-40">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Image src={HERO_IMG} fittingType="fill" className="h-full w-full opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#13203F]/90 via-[#13203F]/72 to-[#13203F]/95" />
        </div>
        <div className="relative mx-auto w-full max-w-[1240px]">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-[#B8860B]">PUBLISHED PRICING</p>
            <h1 className="mt-4 font-heading text-[40px] leading-[1.05] sm:text-5xl lg:text-[64px]">Fees</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">Three ways to work with us, and every price on the page. Canadian dollars, plus HST. Government fees are separate and never marked up.</p>
            <Link to="/strategy-session" className="mt-8 inline-flex items-center gap-2 bg-[#B8860B] px-9 py-4 text-base font-semibold text-white transition-colors hover:bg-[#A8871A]">Book a consultation <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>

      <MiniNav />

      {/* Start here — consultations */}
      <section id="consultations" className="scroll-mt-32 px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal><Eyebrow>START HERE</Eyebrow></Reveal>
          <Reveal className="mt-6 max-w-2xl">
            <h2 className="section-title">Every file begins with a conversation.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {consultations.map((c, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className={`flex h-full flex-col p-7 ${c.featured ? 'border-2 border-[#B8860B] bg-white' : 'border border-[#1E2A4A]/12 bg-white'}`}>
                  <h3 className="font-heading text-xl text-[#1E2A4A]">{c.name}</h3>
                  <p className="mt-3 font-heading text-4xl text-[#1E2A4A]">{c.price}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#1E2A4A]/65">{c.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <Link to="/strategy-session" className="btn btn-primary">Book a consultation <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>

      {/* Three ways to work with us */}
      <section id="tiers" className="scroll-mt-32 px-5 pb-8 lg:px-[8vw] lg:pb-12">
        <div className="mx-auto max-w-[1240px]">
          <Reveal><Eyebrow>CHOOSE YOUR TIER</Eyebrow></Reveal>
          <Reveal className="mt-6 max-w-2xl">
            <h2 className="section-title">Three ways to work with us.</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <Reveal>
              <div className="h-full border-l-2 border-[#B8860B] pl-5">
                <h3 className="font-heading text-lg text-[#1E2A4A]">Full Representation</h3>
                <p className="mt-2 text-base leading-relaxed text-[#1E2A4A]/70">We prepare it, we submit it, and we're on the record. The immigration authority deals with us.</p>
              </div>
            </Reveal>
            <Reveal delay={60}>
              <div className="h-full border-l-2 border-[#B8860B] pl-5">
                <h3 className="font-heading text-lg text-[#1E2A4A]">DIY</h3>
                <p className="mt-2 text-base leading-relaxed text-[#1E2A4A]/70">You file under your own name. We tell you which route to take and what evidence you need, then review every page before you send it.</p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full border-l-2 border-[#B8860B] pl-5">
                <h3 className="font-heading text-lg text-[#1E2A4A]">Review Only</h3>
                <p className="mt-2 text-base leading-relaxed text-[#1E2A4A]/70">You've prepared everything. We read it and tell you what's wrong before the immigration authority does.</p>
              </div>
            </Reveal>
          </div>
          <Reveal className="mt-8">
            <p className="text-sm leading-relaxed text-[#1E2A4A]/60">Open any service below to see exactly what each tier includes for that application.</p>
          </Reveal>
        </div>
      </section>

      {/* Fees by category */}
      <section id="fees" className="scroll-mt-32 px-5 py-12 lg:px-[8vw] lg:py-16">
        <div className="mx-auto max-w-[1240px]">
          <Reveal><Eyebrow>FEES BY CATEGORY</Eyebrow></Reveal>
          <Reveal className="mt-6 max-w-2xl">
            <h2 className="section-title">Professional fees by category.</h2>
            <p className="mt-5 text-lg leading-relaxed text-[#1E2A4A]/65">Grouped by what you're trying to do. Open any service to see what each tier includes, the add-ons, and any bundle that applies.</p>
          </Reveal>
          <Reveal className="mt-8">
            <FeesTabs tabs={tabs} active={tab} onSelect={selectTab} />
          </Reveal>
          <Reveal className="mt-6">
            <div className="border-t border-b border-[#1E2A4A]/10">
              <div className={`${ROW_GRID} py-3 text-xs font-semibold uppercase tracking-[.12em] text-[#1E2A4A]/45`}>
                <span>Service</span>
                <span className="text-right">Full</span>
                <span className="hidden text-right lg:block">DIY</span>
                <span className="hidden text-right lg:block">Review</span>
                <span />
              </div>
              {visible.map((svc) => (
                <ServiceRow key={svc.id} svc={svc} open={openId === svc.id} onToggle={() => toggle(svc.id)} />
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-[#1E2A4A]/60">Add-ons and companion applications are shown when you open any service above. ATIP / GCMS notes are $75 with any package, $175 on their own.</p>
          </Reveal>
        </div>
      </section>

      {/* How you pay & what's covered */}
      <section id="payment" className="scroll-mt-32 bg-[#13203F] px-5 py-16 text-white lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal><Eyebrow dark>HOW WE CHARGE</Eyebrow></Reveal>
          <Reveal className="mt-6 max-w-2xl">
            <h2 className="section-title text-white">Staged where it runs long, fixed where it's fixed.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {paymentModes.map((m, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="h-full border border-white/15 bg-white/5 p-6">
                  <h3 className="font-heading text-base text-white">{m.h}</h3>
                  <ul className="mt-4 grid gap-2.5">
                    {m.items.map((it, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed text-white/70">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B8860B]" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {payNotes.map((n, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="h-full p-6">
                  <h3 className="font-heading text-base text-[#B8860B]">{n.h}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{n.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to save */}
      <section id="discounts" className="scroll-mt-32 px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal><Eyebrow>WAYS TO SAVE</Eyebrow></Reveal>
          <Reveal className="mt-6 max-w-2xl">
            <h2 className="section-title">Published, because you shouldn't have to ask.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {savings.map((d, i) => (
              <Reveal key={i} delay={i * 40}>
                <div className="h-full border border-[#1E2A4A]/12 bg-white p-6">
                  <h4 className="font-heading text-base text-[#1E2A4A]">{d.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-[#1E2A4A]/65">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <div className="max-w-3xl border-l-2 border-[#B8860B] bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[.12em] text-[#B8860B]">What we don't offer</p>
              <p className="mt-3 text-base leading-relaxed text-[#1E2A4A]/80">A free resubmission if you're refused. Nobody can promise how an application will be decided, and a promise built around a refusal is a promise about an outcome. What we do instead is tell you before you file whether it's worth filing.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing */}
      <section className="px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[1240px] text-center">
          <Reveal>
            <h2 className="font-heading text-3xl text-[#1E2A4A] sm:text-4xl">Not sure which tier fits?</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[#1E2A4A]/65">That's what the consultation is for. We'll tell you what your file actually involves, what it will cost, and whether it's worth filing at all.</p>
            <Link to="/strategy-session" className="btn btn-primary mt-8">Book a consultation <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}