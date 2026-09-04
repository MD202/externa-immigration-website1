import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Check } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { usePageMeta } from '@/lib/usePageMeta';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Reveal from '@/components/site/Reveal';
import TierMatrix from '@/components/fees/TierMatrix';
import { ServiceCard, SimpleCard, IadCard } from '@/components/fees/ServiceCards';
import { Image } from '@/components/ui/image';

const HERO_IMG = 'https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/bbfbbabed_generated_image.png';

const BANNER = 'All fees are professional fees in Canadian dollars, plus HST. Government fees are separate, listed on their own, and never marked up. Every file begins with a consultation so we can tell you what yours will actually cost — and whether it\'s worth filing at all.';

const howWeWork = [
  { h: 'How we work', b: 'Every file starts with a conversation. We assess the matter, pick the route, and tell you whether it\'s worth filing at all.' },
  { h: 'How we charge', b: 'Full Representation is staged as the work progresses. DIY and Review Only are fixed pieces, paid in full and delivered inside a set window.' },
  { h: 'What\'s covered', b: 'Forms, supporting letters, strategy, written review, submission, and dealing with IRCC — depending on the tier you choose.' },
  { h: 'What\'s additional', b: 'Government fees are yours, never marked up. Courier, translation, interpretation, and affidavits are billed separately at cost.' },
];

const tierCards = [
  { key: 'full', name: 'Full Representation', desc: 'We act for you, end to end. We submit, and IRCC deals with us.' },
  { key: 'guided', name: 'DIY (with our guidance)', desc: 'You file under your own name. We prepare you and review every page.' },
  { key: 'review', name: 'Review Only', desc: 'You\'ve prepared everything. We review your work before you send it.' },
];

const consultations = [
  { name: 'Full consultation', price: '$175', detail: '60 minutes · Written summary. Credited to your package within 15 days.', featured: true },
  { name: 'Quick sync', price: '$50', detail: '15 minutes · One specific question.' },
  { name: 'Refusal analysis', price: '$650', detail: 'Notes request, file review, and a written opinion. Includes ATIP.', featured: true },
];

const categories = [
  {
    id: 'pr', label: 'Permanent residence', kind: 'tier',
    rows: [
      { service: 'Express Entry profile (pre-ITA)', full: '$1,050', guided: '$650', review: '$375' },
      { service: 'Canadian Experience Class', full: '$1,900', guided: '$1,150', review: '$550' },
      { service: 'Federal Skilled Worker', full: '$2,100', guided: '$1,275', review: '$550' },
      { service: 'OINP — Express Entry streams', full: '$2,100', guided: '$1,275', review: '$550' },
      { service: 'OINP — outside Express Entry', full: '$3,400', guided: '$2,050', review: '$550' },
      { service: 'Other provincial nominee programmes', full: '$3,400', guided: '$2,050', review: '$550' },
    ],
  },
  {
    id: 'family', label: 'Family sponsorships', kind: 'tier',
    rows: [
      { service: 'Spousal / partner sponsorship', full: '$3,200', guided: '$1,900', review: '$550' },
      { service: 'Parent & grandparent sponsorship', full: '$2,550', guided: '$1,550', review: '$550' },
      { service: 'Dependent child sponsorship', full: '$2,550', guided: '$1,550', review: '$550' },
      { service: 'Spouse open work permit (with sponsorship)', full: '$1,500', guided: '$900', review: '$375' },
    ],
  },
  {
    id: 'temp', label: 'Study / work / visitor / super', kind: 'tier',
    rows: [
      { service: 'Study permit', full: '$2,100', guided: '$1,000', review: '$500' },
      { service: 'Post-graduation work permit', full: '$1,050', guided: '$650', review: '$325' },
      { service: 'Bridging open work permit', full: '$1,050', guided: '$650', review: '$325' },
      { service: 'LMIA-exempt work permit', full: '$2,100', guided: '$1,275', review: '$550' },
      { service: 'Visitor / tourist visa', full: '$1,700', guided: '$1,000', review: '$550' },
      { service: 'Super visa', full: '$1,500', guided: '$900', review: '$375' },
      { service: 'Visitor visa for parent', full: '$1,275', guided: '$775', review: '$375' },
      { service: 'Visitor visa for spouse', full: '$1,500', guided: '$1,000', review: '$550' },
    ],
  },
  {
    id: 'status', label: 'PR card / citizenship / PRTD', kind: 'tier',
    rows: [
      { service: 'Citizenship application', full: '$1,050', guided: '$650', review: '$325' },
      { service: 'Proof of citizenship', full: '$1,500', guided: '$900', review: '$375' },
      { service: 'PR card renewal', full: '$1,050', guided: '$650', review: '$325' },
      { service: 'Status extension', full: '$1,050', guided: '$650', review: '$325' },
      { service: 'Status restoration', full: '$1,050', guided: '$650', review: '$325' },
      { service: 'Change of status', full: '$1,050', guided: '$650', review: '$325' },
      { service: 'Document replacement', full: '$1,050', guided: '$650', review: '$325' },
      { service: 'Status verification', full: '$1,050', guided: '$650', review: '$325' },
      { service: 'Travel document (PRTD)', full: '$1,275', guided: '$775', review: '$325' },
    ],
    note: 'A PRTD refusal is usually a residency obligation problem, not paperwork — priced accordingly.',
  },
  {
    id: 'hc', label: 'Humanitarian & compassionate', kind: 'tier',
    rows: [
      { service: 'H&C — single applicant', full: '$6,500', guided: '$3,200', review: '$1,200' },
      { service: 'H&C — with dependent children', full: '$8,500', guided: '$4,200', review: '$1,500' },
      { service: 'H&C — complex (removal pending, prior refusals)', full: '$9,500–$12,000', guided: '—', review: '$1,800' },
      { service: 'Pre-removal risk assessment', full: '$4,800', guided: '—', review: '$1,200' },
      { service: 'PRRA + H&C combined', full: '$10,500', guided: '—', review: '—' },
    ],
    note: 'An H&C application is decided on the quality of the written submissions. DIY is available, but Full Representation is what this work actually requires.',
  },
  {
    id: 'refusals', label: 'Refusals', kind: 'simple',
    rows: [
      { service: 'Refusal analysis — notes request, review, written opinion', fee: '$650', featured: true },
      { service: 'Procedural fairness letter response', fee: '$2,100' },
      { service: 'Procedural fairness — misrepresentation allegation', fee: '$3,400' },
      { service: 'Reconsideration request', fee: '$1,400' },
      { service: 'Rebuilt application after refusal', fee: 'Package fee + $1,000' },
      { service: 'Citizenship residency questionnaire response', fee: '$2,100' },
    ],
  },
  {
    id: 'refugee', label: 'Refugee protection', kind: 'simple',
    rows: [
      { service: 'Basis of Claim narrative and evidence package', fee: '$2,800' },
      { service: 'Hearing representation (RPD)', fee: '+$3,200' },
      { service: 'Both together', fee: '$5,800' },
      { service: 'Refugee Appeal Division — written appeal', fee: '$4,200' },
    ],
  },
  {
    id: 'iad', label: 'Immigration Appeal Division', kind: 'iad',
    rows: [
      { service: 'Sponsorship appeal', written: '$4,500', full: '$8,500' },
      { service: 'Residency obligation appeal (PRTD / PR card)', written: '$4,500', full: '$8,500' },
      { service: 'Removal order appeal', written: '$5,000', full: '$9,500' },
    ],
    note: 'Written stages = notice of appeal, appeal record, evidence assembly, written submissions.',
  },
  {
    id: 'id', label: 'Immigration Division', kind: 'simple', hearing: true,
    rows: [
      { service: 'Admissibility hearing', fee: '$4,500' },
      { service: 'Detention review — first', fee: '$1,800' },
      { service: 'Detention review — each subsequent', fee: '$900' },
    ],
  },
  {
    id: 'business', label: 'Business immigration', kind: 'tier',
    rows: [
      { service: 'Business route assessment (written, standalone)', full: '$1,200', guided: '—', review: '—' },
      { service: 'Start-up visa', full: '$6,500', guided: '$3,900', review: '$1,200' },
      { service: 'Provincial entrepreneur stream', full: '$6,500', guided: '$3,900', review: '$1,200' },
      { service: 'Owner-operator work permit', full: '$4,500', guided: '$2,700', review: '$800' },
      { service: 'Intra-company transfer', full: '$3,800', guided: '$2,300', review: '$700' },
      { service: 'Second opinion on another firm\'s proposal', full: '$650', guided: '—', review: '—' },
    ],
  },
  {
    id: 'employer', label: 'Employer', kind: 'tier',
    rows: [
      { service: 'LMIA (employer)', full: '$2,550', guided: '$1,275', review: '$550' },
      { service: 'Closed work permit', full: '$1,275', guided: '$775', review: '$325' },
    ],
  },
];

const addOnRows = [
  { service: 'Adding spouse / partner to a PR application', full: '$850', guided: '$500', review: '$175' },
  { service: 'Adding a dependent child', full: '$400', guided: '$250', review: '$100' },
  { service: 'Second parent (PGP or super visa)', full: '$200', guided: '$150', review: '$100' },
  { service: 'Second child (child sponsorship)', full: '$800', guided: '$250', review: '$200' },
  { service: 'Adult sibling (proof of citizenship)', full: '$1,050', guided: '$650', review: '$125' },
  { service: 'Minor sibling (proof of citizenship)', full: '$650', guided: '$400', review: '$75' },
  { service: 'Spouse open work permit with a sponsorship', full: '$650', guided: '$300', review: '$175' },
  { service: 'Visitor visa alongside any application', full: '$650', guided: '$300', review: '$175' },
  { service: 'Status extension or restoration, per applicant', full: '$400', guided: '$250', review: '$100' },
  { service: 'Bridging open work permit with a PR package', full: '$400', guided: '$250', review: '$100' },
  { service: 'Proof of citizenship for a child', full: '$400', guided: '$275', review: '$175' },
];

const servicesAddOn = [
  { name: 'ATIP / GCMS notes request', price: '$75', featured: true },
  { name: 'ATIP request — standalone, not with a package', price: '$175' },
  { name: 'Commissioner of oaths — per document', price: '$35' },
  { name: 'Document translation coordination', price: 'At cost + $50' },
  { name: 'Rush handling — submission within 5 business days', price: '+25%' },
  { name: 'Additional 30-minute consultation', price: '$95' },
  { name: 'Written eligibility opinion (standalone)', price: '$350' },
];

const paymentTerms = [
  { h: 'Full Representation — staged', items: ['Standard: 40% opening · 40% submission · 20% decision', 'H&C and complex: 30% · 30% · 30% · 10% decision', 'Appeals: 30% filing · 30% record · 30% submissions · 10% conclusion'] },
  { h: 'DIY — paid in full before work begins', items: ['Fixed scope, fixed deliverables, delivered within a stated window', 'Funds to trust, drawn as work is performed', 'The tier that converts to earned revenue fastest'] },
  { h: 'Review Only — paid in full before work begins', items: ['Same reasoning as DIY', 'Delivered within 5 business days'] },
  { h: 'Consultations and fixed products — paid in full', items: ['Consultations, refusal analysis, ATIP requests, roadmaps, second opinions'] },
];

const savings = [
  { title: 'Consultation credit', body: 'Your consultation fee is credited toward any package if you retain us within 15 days.' },
  { title: 'Returning clients — 50% off', body: 'Extensions, restorations, change of status, PR card renewals and citizenship applications are half price after a Full Representation file. Professional fees only.' },
  { title: 'Family bundle — 30% off', body: 'A second family member\'s application, filed at the same time, at 30% off the second package.' },
  { title: 'Permit with PR — 60% off', body: 'Bridging open work permits and post-graduation work permits are 60% off when taken with any Full Representation permanent residence package.' },
  { title: 'Combined economic applications — $200 off', body: 'Federal Skilled Worker or Canadian Experience Class combined with an Express Entry profile package.' },
  { title: 'Sponsorship bundle', body: 'Spouse open work permit or visitor visa added to a spousal sponsorship at the add-on rate, not the standalone rate.' },
];

function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-semibold uppercase tracking-[.2em] text-[#B8860B]">{children}</span>
      <span className="h-px flex-1 bg-[#1E2A4A]/10" />
    </div>
  );
}

function CategoryGrid({ cat }) {
  if (cat.kind === 'tier') return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cat.rows.map((r, i) => <ServiceCard key={i} {...r} />)}
    </div>
  );
  if (cat.kind === 'iad') return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cat.rows.map((r, i) => <IadCard key={i} {...r} />)}
    </div>
  );
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {cat.rows.map((r, i) => <SimpleCard key={i} {...r} />)}
    </div>
  );
}

export default function Fees() {
  const { t } = useLanguage();
  usePageMeta(t('fees.meta.title'), t('fees.meta.description'));
  const [tab, setTab] = useState('pr');
  const [show, setShow] = useState({ full: true, guided: true, review: true });
  const active = categories.find((c) => c.id === tab);
  const toggleTier = (key) => {
    const next = { ...show, [key]: !show[key] };
    if (Object.values(next).filter(Boolean).length >= 1) setShow(next);
  };
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
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">Three tiers — full representation, DIY with our guidance, and review only. Published, because you shouldn't have to ask. All amounts in Canadian dollars, plus HST. Government fees are separate and never marked up.</p>
          </Reveal>
        </div>
      </section>

      {/* Disclaimer banner */}
      <div className="bg-[#FBF6E8] px-5 py-5 lg:px-[8vw]">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-sm leading-relaxed text-[#3D2F06]">{BANNER}</p>
        </div>
      </div>

      {/* Tiers — cards on top, compare below */}
      <section className="px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal><Eyebrow>CHOOSE YOUR TIER</Eyebrow></Reveal>
          <Reveal className="mt-6 max-w-2xl">
            <h2 className="section-title">Three ways to work with us.</h2>
            <p className="mt-5 text-lg leading-relaxed text-[#1E2A4A]/65">Tap a tier to include it in the comparison. Select what you want to see.</p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {tierCards.map((c, i) => (
              <Reveal key={c.key} delay={i * 60}>
                <button onClick={() => toggleTier(c.key)} className={`flex h-full w-full flex-col p-6 text-left transition ${show[c.key] ? 'border-2 border-[#B8860B] bg-white' : 'border border-[#1E2A4A]/12 bg-white opacity-60'}`}>
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-lg text-[#1E2A4A]">{c.name}</h3>
                    <span className={`flex h-5 w-5 items-center justify-center rounded-full ${show[c.key] ? 'bg-[#B8860B] text-white' : 'border border-[#1E2A4A]/25'}`}>{show[c.key] && <Check className="h-3 w-3" />}</span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#1E2A4A]/65">{c.desc}</p>
                  <span className="mt-4 text-xs font-semibold uppercase tracking-[.12em] text-[#B8860B]">{show[c.key] ? 'In comparison' : 'Tap to include'}</span>
                </button>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#1E2A4A]/40">Compare</p>
            <div className="mt-4 border border-[#1E2A4A]/10 bg-white p-4 lg:p-6">
              <TierMatrix show={show} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-white px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal><Eyebrow>HOW WE WORK</Eyebrow></Reveal>
          <Reveal className="mt-6 max-w-2xl">
            <h2 className="section-title">How we work, how we charge, what's covered.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {howWeWork.map((c, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="h-full border border-[#1E2A4A]/12 bg-[#FBFAF8] p-6">
                  <h3 className="font-heading text-base text-[#1E2A4A]">{c.h}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#1E2A4A]/65">{c.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-6">
            <p className="text-sm leading-relaxed text-[#1E2A4A]/65"><span className="font-semibold text-[#1E2A4A]">Additional charges:</span> courier, translation, interpretation, and affidavits are billed separately at cost. Government fees are always yours.</p>
          </Reveal>
        </div>
      </section>

      {/* Consultations */}
      <section className="px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal><Eyebrow>START WITH A CONVERSATION</Eyebrow></Reveal>
          <Reveal className="mt-6 max-w-2xl">
            <h2 className="section-title">Begin with a consultation.</h2>
            <p className="mt-5 text-lg leading-relaxed text-[#1E2A4A]/65">Credited in full toward any package retained within 15 days.</p>
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

      {/* Our fees by category */}
      <section className="bg-white px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal><Eyebrow>OUR FEES</Eyebrow></Reveal>
          <Reveal className="mt-6 max-w-2xl">
            <h2 className="section-title">Professional fees by category.</h2>
            <p className="mt-5 text-lg leading-relaxed text-[#1E2A4A]/65">Full Representation, DIY, and Review Only pricing. Government fees are separate.</p>
          </Reveal>
          <Reveal className="mt-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button key={c.id} onClick={() => setTab(c.id)} className={`rounded-full px-4 py-2.5 text-xs font-semibold transition lg:text-sm ${tab === c.id ? 'bg-[#1E2A4A] text-white' : 'border border-[#1E2A4A]/15 bg-white text-[#1E2A4A]/60 hover:text-[#1E2A4A]'}`}>{c.label}</button>
              ))}
            </div>
          </Reveal>
          <Reveal className="mt-8">
            <CategoryGrid cat={active} />
            {active.note && <p className="mt-5 border-l-2 border-[#8C2F39] bg-[#FBF6F6] p-4 text-sm italic leading-relaxed text-[#1E2A4A]/70">{active.note}</p>}
            {active.hearing && (
              <div className="mt-5 border-l-2 border-[#8C2F39] bg-[#FBF6F6] p-5">
                <p className="text-sm font-semibold uppercase tracking-[.08em] text-[#8C2F39]">On hearing dates</p>
                <p className="mt-2 text-sm leading-relaxed text-[#1E2A4A]/75">Our availability for weekday hearings and conferences is currently limited. Tell us what you're facing and we'll tell you honestly whether we can act throughout, act on the written stages only, or refer you to someone who should take it. What we won't do is take your retainer and work it out later.</p>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* ATIP as a service */}
      <section className="px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal><Eyebrow>ATIP / GCMS NOTES</Eyebrow></Reveal>
          <Reveal className="mt-6">
            <div className="flex flex-col items-start gap-5 border-2 border-[#B8860B] bg-white p-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="flex items-center gap-2 font-heading text-2xl text-[#1E2A4A]"><Star className="h-5 w-5 fill-[#B8860B] text-[#B8860B]" /> ATIP / GCMS notes request — $75</p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#1E2A4A]/70">Order your immigration file notes from the government. The cheapest thing you can add that changes an outcome — offered on every refusal-adjacent file. Standalone ATIP (not with a package) is $175.</p>
              </div>
              <Link to="/strategy-session" className="btn btn-primary shrink-0">Request ATIP <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What you can add */}
      <section className="bg-white px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal><Eyebrow>WHAT YOU CAN ADD</Eyebrow></Reveal>
          <Reveal className="mt-6 max-w-2xl">
            <h2 className="section-title">Add-ons and companion applications.</h2>
            <p className="mt-5 text-lg leading-relaxed text-[#1E2A4A]/65">Bundled with a package at the add-on rate, not the standalone rate.</p>
          </Reveal>
          <Reveal className="mt-10">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {addOnRows.map((r, i) => <ServiceCard key={i} {...r} />)}
            </div>
          </Reveal>
          <Reveal className="mt-10">
            <h3 className="font-heading text-xl text-[#1E2A4A]">Services</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {servicesAddOn.map((s, i) => <SimpleCard key={i} {...s} />)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Payment & ways to save */}
      <section className="px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal><Eyebrow>HOW YOU PAY</Eyebrow></Reveal>
          <Reveal className="mt-6 max-w-2xl">
            <h2 className="section-title">Staged where it runs long, upfront where it's fixed.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {paymentTerms.map((c, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="h-full border border-[#1E2A4A]/12 bg-white p-6">
                  <h3 className="font-heading text-lg text-[#1E2A4A]">{c.h}</h3>
                  <ul className="mt-4 grid gap-2.5">
                    {c.items.map((it, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed text-[#1E2A4A]/70">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B8860B]" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <h3 className="font-heading text-2xl text-[#1E2A4A]">Ways to save</h3>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {savings.map((d, i) => (
                <Reveal key={i} delay={i * 40}>
                  <div className="h-full border border-[#1E2A4A]/12 bg-[#FBFAF8] p-6">
                    <h4 className="font-heading text-base text-[#1E2A4A]">{d.title}</h4>
                    <p className="mt-3 text-sm leading-relaxed text-[#1E2A4A]/65">{d.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}