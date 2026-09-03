import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { usePageMeta } from '@/lib/usePageMeta';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Reveal from '@/components/site/Reveal';
import PriceTable from '@/components/fees/PriceTable';
import TierMatrix from '@/components/fees/TierMatrix';

const BANNER = 'All fees are professional fees in Canadian dollars, plus HST. Government fees are separate, listed on their own, and never marked up. Every file begins with a consultation so I can tell you what yours will actually cost — and whether it\'s worth filing at all.';

const commodityTabs = [
  {
    id: 'economic',
    label: 'Permanent residence — economic',
    rows: [
      { service: 'Express Entry profile (pre-ITA)', full: '$1,050', guided: '$650', review: '$375', bench: '$1,250' },
      { service: 'Canadian Experience Class', full: '$1,900', guided: '$1,150', review: '$550', bench: '$2,250' },
      { service: 'Federal Skilled Worker', full: '$2,100', guided: '$1,275', review: '$550', bench: '$2,500' },
      { service: 'OINP — Express Entry streams', full: '$2,100', guided: '$1,275', review: '$550', bench: '$2,500' },
      { service: 'OINP — outside Express Entry', full: '$3,400', guided: '$2,050', review: '$550', bench: '$4,000' },
      { service: 'Other provincial nominee programmes', full: '$3,400', guided: '$2,050', review: '$550' },
    ],
  },
  {
    id: 'family',
    label: 'Family class',
    rows: [
      { service: 'Spousal / partner sponsorship', full: '$3,200', guided: '$1,900', review: '$550', bench: '$3,750' },
      { service: 'Spouse open work permit', full: '$1,500', guided: '$900', review: '$375', bench: '$1,750' },
      { service: 'Visitor visa for spouse', full: '$1,500', guided: '$1,000', review: '$550', bench: '$1,750' },
      { service: 'Parent & grandparent sponsorship', full: '$2,550', guided: '$1,550', review: '$550', bench: '$3,000' },
      { service: 'Super visa', full: '$1,500', guided: '$900', review: '$375', bench: '$1,750' },
      { service: 'Visitor visa for parent', full: '$1,275', guided: '$775', review: '$375', bench: '$1,500' },
      { service: 'Dependent child sponsorship', full: '$2,550', guided: '$1,550', review: '$550', bench: '$3,000' },
    ],
  },
  {
    id: 'temporary',
    label: 'Temporary residence',
    rows: [
      { service: 'LMIA (employer)', full: '$2,550', guided: '$1,275', review: '$550', bench: '$3,000' },
      { service: 'Closed work permit', full: '$1,275', guided: '$775', review: '$325', bench: '$1,500' },
      { service: 'LMIA-exempt work permit', full: '$2,100', guided: '$1,275', review: '$550', bench: '$2,500' },
      { service: 'Study permit', full: '$2,100', guided: '$1,000', review: '$500', bench: '$2,500' },
      { service: 'Post-graduation work permit', full: '$1,050', guided: '$650', review: '$325', bench: '$1,250' },
      { service: 'Visitor / tourist visa', full: '$1,700', guided: '$1,000', review: '$550', bench: '$2,000' },
      { service: 'Bridging open work permit', full: '$1,050', guided: '$650', review: '$325', bench: '$1,250' },
    ],
  },
  {
    id: 'status',
    label: 'Status & documents',
    rows: [
      { service: 'Citizenship application', full: '$1,050', guided: '$650', review: '$325', bench: '$1,250' },
      { service: 'Proof of citizenship', full: '$1,500', guided: '$900', review: '$375', bench: '$1,750' },
      { service: 'PR card renewal', full: '$1,050', guided: '$650', review: '$325', bench: '$1,250' },
      { service: 'Status extension', full: '$1,050', guided: '$650', review: '$325', bench: '$1,250' },
      { service: 'Status restoration', full: '$1,050', guided: '$650', review: '$325', bench: '$1,250' },
      { service: 'Change of status', full: '$1,050', guided: '$650', review: '$325', bench: '$1,250' },
      { service: 'Document replacement', full: '$1,050', guided: '$650', review: '$325', bench: '$1,250' },
      { service: 'Status verification', full: '$1,050', guided: '$650', review: '$325', bench: '$1,250' },
      { service: 'Travel document (PRTD)', full: '$1,275', guided: '$775', review: '$325', bench: '$1,250' },
    ],
    note: 'PRTD is the one exception — priced slightly above the benchmark because a PRTD refusal is usually a residency obligation problem, not paperwork.',
  },
];

const consultations = [
  { name: 'Quick question', price: '$50', detail: '15 minutes · One specific question.' },
  { name: 'Standard', price: '$110', detail: '30 minutes.' },
  { name: 'Full consultation', price: '$175', detail: '60 minutes · Written summary.', featured: true },
  { name: 'Eligibility assessment', price: '$45', detail: 'Eligibility only.' },
];

const anchorRefusals = [
  { service: 'Refusal analysis — notes request, review, written opinion', fee: '$650' },
  { service: 'Procedural fairness letter response', fee: '$2,100' },
  { service: 'Procedural fairness — misrepresentation allegation', fee: '$3,400' },
  { service: 'Reconsideration request', fee: '$1,400' },
  { service: 'Rebuilt application after refusal', fee: 'Package fee + $1,000' },
  { service: 'Citizenship residency questionnaire response', fee: '$2,100' },
];

const refugee = [
  { service: 'Basis of Claim narrative and evidence package', fee: '$2,800' },
  { service: 'Hearing representation (RPD)', fee: '+$3,200' },
  { service: 'Both together', fee: '$5,800' },
  { service: 'Refugee Appeal Division — written appeal', fee: '$4,200' },
];

const iad = [
  { service: 'Sponsorship appeal — written stages', fee: '$4,500', full: '$8,500 full' },
  { service: 'Residency obligation appeal (PRTD / PR card) — written', fee: '$4,500', full: '$8,500 full' },
  { service: 'Removal order appeal — written stages', fee: '$5,000', full: '$9,500 full' },
];

const idHearings = [
  { service: 'Admissibility hearing', fee: '$4,500' },
  { service: 'Detention review — first', fee: '$1,800' },
  { service: 'Detention review — each subsequent', fee: '$900' },
];

const businessRows = [
  { service: 'Business route assessment (written, standalone)', full: '$1,200', guided: '—', review: '—' },
  { service: 'Start-up visa', full: '$6,500', guided: '$3,900', review: '$1,200' },
  { service: 'Provincial entrepreneur stream', full: '$6,500', guided: '$3,900', review: '$1,200' },
  { service: 'Owner-operator work permit', full: '$4,500', guided: '$2,700', review: '$800' },
  { service: 'Intra-company transfer', full: '$3,800', guided: '$2,300', review: '$700' },
  { service: 'Second opinion on another firm\'s proposal', full: '$650', guided: '—', review: '—' },
];

const addOns = [
  {
    heading: 'Family additions',
    rows: [
      { service: 'Adding spouse / partner to a PR application', full: '$850', guided: '$500', review: '$175' },
      { service: 'Adding a dependent child', full: '$400', guided: '$250', review: '$100' },
      { service: 'Second parent (PGP or super visa)', full: '$200', guided: '$150', review: '$100' },
      { service: 'Second child (child sponsorship)', full: '$800', guided: '$250', review: '$200' },
      { service: 'Adult sibling (proof of citizenship)', full: '$1,050', guided: '$650', review: '$125' },
      { service: 'Minor sibling (proof of citizenship)', full: '$650', guided: '$400', review: '$75' },
    ],
  },
  {
    heading: 'Companion applications',
    rows: [
      { service: 'Spouse open work permit with a sponsorship', full: '$650', guided: '$300', review: '$175' },
      { service: 'Visitor visa alongside any application', full: '$650', guided: '$300', review: '$175' },
      { service: 'Status extension or restoration, per applicant', full: '$400', guided: '$250', review: '$100' },
      { service: 'Bridging open work permit with a PR package', full: '$400', guided: '$250', review: '$100' },
      { service: 'Proof of citizenship for a child', full: '$400', guided: '$275', review: '$175' },
    ],
  },
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

const discounts = [
  { title: 'Consultation credit', body: 'Your consultation fee is credited toward any package if you retain me within 15 days.' },
  { title: 'Returning clients — 50% off', body: 'Extensions, restorations, change of status, PR card renewals and citizenship applications are half price after a Full Representation file. Professional fees only.' },
  { title: 'Family bundle — 30% off', body: 'A second family member\'s application, filed at the same time, at 30% off the second package.' },
  { title: 'Permit with PR — 60% off', body: 'Bridging open work permits and post-graduation work permits are 60% off when taken with any Full Representation permanent residence package.' },
  { title: 'Combined economic applications — $200 off', body: 'Federal Skilled Worker or Canadian Experience Class combined with an Express Entry profile package.' },
  { title: 'Sponsorship bundle', body: 'Spouse open work permit or visitor visa added to a spousal sponsorship at the add-on rate, not the standalone rate.' },
];

const wontList = [
  'Guarantee a result. No one may, and no one can.',
  'Suggest I have contacts inside a government. Nobody does.',
  'Ask you to sign a blank form or state anything untrue.',
  'Invoice you for anything that wasn\'t in your agreement.',
  'Offer a free resubmission if you\'re refused. No one can promise how an application will be decided.',
];

function SectionLabel({ n, children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-xs font-semibold text-[#B8860B]">{n}</span>
      <span className="h-px flex-1 bg-[#1E2A4A]/10" />
    </div>
  );
}

export default function Fees() {
  const { t } = useLanguage();
  usePageMeta(t('fees.meta.title'), t('fees.meta.description'));
  const [tab, setTab] = useState('economic');
  const active = commodityTabs.find((c) => c.id === tab);
  return (
    <main className="bg-[#FBFAF8]">
      <Header />
      <section className="bg-[#13203F] px-5 pt-32 pb-14 text-white lg:px-[8vw] lg:pt-40">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-[#B8860B]">PUBLISHED PRICING</p>
            <h1 className="mt-4 font-heading text-[40px] leading-[1.05] sm:text-5xl lg:text-[64px]">{t('fees.heading')}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">{t('fees.intro')}</p>
          </Reveal>
        </div>
      </section>

      {/* Disclaimer banner */}
      <div className="bg-[#FBF6E8] px-5 py-5 lg:px-[8vw]">
        <div className="mx-auto max-w-[1240px]">
          <p className="text-sm leading-relaxed text-[#3D2F06]">{BANNER}</p>
        </div>
      </div>

      {/* PART 1 — Three tiers */}
      <section className="px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal><SectionLabel n="01">THE THREE TIERS</SectionLabel></Reveal>
          <Reveal className="mt-6 max-w-2xl">
            <h2 className="section-title">One representation tier, two advisory tiers.</h2>
            <p className="mt-5 text-lg leading-relaxed text-[#1E2A4A]/65">Full Representation is paid in stages as the work progresses, because it runs for months. Guided and File Review are fixed pieces of work with a fixed deliverable, so they're paid upfront and delivered inside a set window.</p>
          </Reveal>
          <Reveal className="mt-10">
            <TierMatrix />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { h: 'Full Representation', b: 'I am your representative on the record. I complete it, I submit it, and IRCC deals with me.' },
              { h: 'Guided', b: 'You submit under your own name. I tell you which route, what evidence, and what will sink you. You prepare it, I review every page, and you file it. I am not on the record.' },
              { h: 'File Review', b: 'You\'ve already prepared everything. I read it and tell you what\'s wrong before IRCC does.' },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className={`h-full p-6 ${i === 0 ? 'bg-[#1E2A4A] text-white' : 'border border-[#1E2A4A]/12 bg-white'}`}>
                  <h3 className={`font-heading text-lg ${i === 0 ? 'text-white' : 'text-[#1E2A4A]'}`}>{c.h}</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${i === 0 ? 'text-white/65' : 'text-[#1E2A4A]/65'}`}>{c.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-6">
            <div className="border-l-2 border-[#B8860B] bg-white p-5">
              <p className="text-sm leading-relaxed text-[#1E2A4A]/70"><span className="font-semibold text-[#1E2A4A]">The upgrade path.</span> If IRCC raises a concern with a file you submitted yourself, that's a different job and I take it on separately — see refusal analysis and procedural fairness responses.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PART 6 — Consultations */}
      <section className="bg-white px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal><SectionLabel n="02">CONSULTATIONS</SectionLabel></Reveal>
          <Reveal className="mt-6 max-w-2xl">
            <h2 className="section-title">Start with a conversation.</h2>
            <p className="mt-5 text-lg leading-relaxed text-[#1E2A4A]/65">Credited in full toward any package retained within 15 days.</p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {consultations.map((c, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className={`flex h-full flex-col p-6 ${c.featured ? 'border-2 border-[#B8860B] bg-white' : 'border border-[#1E2A4A]/12 bg-white'}`}>
                  <h3 className="font-heading text-lg text-[#1E2A4A]">{c.name}</h3>
                  <p className="mt-3 font-heading text-3xl text-[#1E2A4A]">{c.price}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#1E2A4A]/65">{c.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-6">
            <div className="flex flex-col items-start gap-4 border-l-2 border-[#8C2F39] bg-[#FBF6F6] p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="flex items-center gap-2 font-heading text-xl text-[#1E2A4A]"><Star className="h-5 w-5 fill-[#B8860B] text-[#B8860B]" /> Refusal analysis — $650</p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#1E2A4A]/70">Notes request, file review, and a written opinion. Cheap enough to say yes to while panicking, real work for the money, and it converts to representation at a high rate. Includes ATIP.</p>
              </div>
              <Link to="/strategy-session" className="btn btn-primary shrink-0">Book a consultation <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PART 2 — Commodity work */}
      <section className="px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal><SectionLabel n="03">COMMODITY WORK — 15% BELOW THE BENCHMARK</SectionLabel></Reveal>
          <Reveal className="mt-6 max-w-2xl">
            <h2 className="section-title">Where they compete, we undercut.</h2>
            <p className="mt-5 text-lg leading-relaxed text-[#1E2A4A]/65">These are templated applications and price is what moves the client. Benchmark shown where one exists.</p>
          </Reveal>
          <Reveal className="mt-8">
            <div className="flex flex-wrap gap-2">
              {commodityTabs.map((c) => (
                <button key={c.id} onClick={() => setTab(c.id)} className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${tab === c.id ? 'bg-[#1E2A4A] text-white' : 'border border-[#1E2A4A]/15 bg-white text-[#1E2A4A]/60 hover:text-[#1E2A4A]'}`}>{c.label}</button>
              ))}
            </div>
          </Reveal>
          <Reveal className="mt-8">
            <div className="border border-[#1E2A4A]/10 bg-white p-6 lg:p-8">
              <PriceTable rows={active.rows} showBenchmark note={active.note} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PART 3 — Anchor work */}
      <section className="bg-white px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal><SectionLabel n="04">ANCHOR WORK — NO BENCHMARK, NO DISCOUNT</SectionLabel></Reveal>
          <Reveal className="mt-6 max-w-2xl">
            <h2 className="section-title">The work that isn't on anyone's fee page.</h2>
            <p className="mt-5 text-lg leading-relaxed text-[#1E2A4A]/65">Humanitarian and compassionate applications, refusals, appeals, refugee claims and admissibility hearings. There is nothing here to undercut — this is the work that carries the practice.</p>
          </Reveal>

          {/* H&C */}
          <Reveal className="mt-10">
            <h3 className="font-heading text-2xl text-[#1E2A4A]">Humanitarian & compassionate</h3>
            <div className="mt-4 border border-[#1E2A4A]/10 bg-[#FBFAF8] p-6 lg:p-8">
              <PriceTable rows={[
                { service: 'H&C — single applicant', full: '$6,500', guided: '$3,200', review: '$1,200' },
                { service: 'H&C — with dependent children', full: '$8,500', guided: '$4,200', review: '$1,500' },
                { service: 'H&C — complex (removal pending, prior refusals, multiple applicants)', full: '$9,500–$12,000', guided: '—', review: '$1,800' },
                { service: 'Pre-removal risk assessment', full: '$4,800', guided: '—', review: '$1,200' },
                { service: 'PRRA + H&C combined', full: '$10,500', guided: '—', review: '—' },
              ]} />
              <p className="mt-4 border-l-2 border-[#8C2F39] pl-4 text-sm italic leading-relaxed text-[#1E2A4A]/70">An H&C application is decided on the quality of the written submissions. Guided is available, but Full Representation is what this work actually requires.</p>
            </div>
          </Reveal>

          {/* Refusals */}
          <Reveal className="mt-10">
            <h3 className="font-heading text-2xl text-[#1E2A4A]">Refusals</h3>
            <div className="mt-4 border border-[#1E2A4A]/10 bg-[#FBFAF8] p-6 lg:p-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-[480px]">
                  <tbody>
                    {anchorRefusals.map((r, i) => (
                      <tr key={i} className="border-b border-[#1E2A4A]/8 last:border-0">
                        <td className="py-4 pr-4 text-sm leading-relaxed text-[#1E2A4A]/80">{r.service}</td>
                        <td className="py-4 pl-4 text-right text-sm font-semibold text-[#1E2A4A]">{r.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          {/* Refugee */}
          <Reveal className="mt-10">
            <h3 className="font-heading text-2xl text-[#1E2A4A]">Refugee protection</h3>
            <div className="mt-4 border border-[#1E2A4A]/10 bg-[#FBFAF8] p-6 lg:p-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-[480px]">
                  <tbody>
                    {refugee.map((r, i) => (
                      <tr key={i} className="border-b border-[#1E2A4A]/8 last:border-0">
                        <td className="py-4 pr-4 text-sm leading-relaxed text-[#1E2A4A]/80">{r.service}</td>
                        <td className="py-4 pl-4 text-right text-sm font-semibold text-[#1E2A4A]">{r.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          {/* IAD */}
          <Reveal className="mt-10">
            <h3 className="font-heading text-2xl text-[#1E2A4A]">Immigration Appeal Division</h3>
            <p className="mt-2 text-sm text-[#1E2A4A]/55">Written stages = notice of appeal, appeal record, evidence assembly, written submissions.</p>
            <div className="mt-4 border border-[#1E2A4A]/10 bg-[#FBFAF8] p-6 lg:p-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-[560px]">
                  <thead>
                    <tr className="border-b border-[#1E2A4A]/15">
                      <th className="py-4 pr-4 text-left text-xs font-semibold uppercase tracking-[.12em] text-[#1E2A4A]/50">Service</th>
                      <th className="px-3 py-4 text-right text-xs font-semibold uppercase tracking-[.12em] text-[#1E2A4A]/55">Written stages</th>
                      <th className="py-4 pl-4 text-right text-xs font-semibold uppercase tracking-[.12em] text-[#1E2A4A]">Full, incl. ADR & hearing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {iad.map((r, i) => (
                      <tr key={i} className="border-b border-[#1E2A4A]/8 last:border-0">
                        <td className="py-4 pr-4 text-sm leading-relaxed text-[#1E2A4A]/80">{r.service.replace(' — written stages', '').replace(' — written', '')}</td>
                        <td className="px-3 py-4 text-right text-sm text-[#1E2A4A]/65">{r.fee}</td>
                        <td className="py-4 pl-4 text-right text-sm font-semibold text-[#1E2A4A]">{r.full}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          {/* ID */}
          <Reveal className="mt-10">
            <h3 className="font-heading text-2xl text-[#1E2A4A]">Immigration Division</h3>
            <div className="mt-4 border border-[#1E2A4A]/10 bg-[#FBFAF8] p-6 lg:p-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-[480px]">
                  <tbody>
                    {idHearings.map((r, i) => (
                      <tr key={i} className="border-b border-[#1E2A4A]/8 last:border-0">
                        <td className="py-4 pr-4 text-sm leading-relaxed text-[#1E2A4A]/80">{r.service}</td>
                        <td className="py-4 pl-4 text-right text-sm font-semibold text-[#1E2A4A]">{r.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          {/* Hearing scheduling note */}
          <Reveal className="mt-8">
            <div className="border-l-2 border-[#8C2F39] bg-[#FBF6F6] p-6">
              <p className="text-sm font-semibold uppercase tracking-[.08em] text-[#8C2F39]">On hearing dates</p>
              <p className="mt-2 text-base leading-relaxed text-[#1E2A4A]/75">My availability for weekday hearings and conferences is currently limited. Tell me what you're facing and I'll tell you honestly whether I can act throughout, act on the written stages only, or refer you to someone who should take it. What I won't do is take your retainer and work it out later.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PART 4 — Business */}
      <section className="px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal><SectionLabel n="05">BUSINESS — PRICED FOR THE WORK, NOT UNDERCUT</SectionLabel></Reveal>
          <Reveal className="mt-6 max-w-2xl">
            <h2 className="section-title">This buyer treats price as a quality signal.</h2>
            <p className="mt-5 text-lg leading-relaxed text-[#1E2A4A]/65">A start-up visa quoted alongside consultancies charging $25,000 doesn't read as good value at the low end — it reads as someone who hasn't done one. These sit above the benchmark on purpose.</p>
          </Reveal>
          <Reveal className="mt-8">
            <div className="border border-[#1E2A4A]/10 bg-white p-6 lg:p-8">
              <PriceTable rows={businessRows} />
            </div>
          </Reveal>
          <Reveal className="mt-6">
            <div className="flex flex-col items-start gap-4 border-l-2 border-[#B8860B] bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="flex items-center gap-2 font-heading text-xl text-[#1E2A4A]"><Star className="h-5 w-5 fill-[#B8860B] text-[#B8860B]" /> Second opinion — $650</p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#1E2A4A]/70">Someone holding a $40,000 quote will pay $650 to have it checked, and a good share of them stay.</p>
              </div>
              <Link to="/strategy-session" className="btn btn-primary shrink-0">Book a consultation <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PART 5 — Add-ons */}
      <section className="bg-white px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal><SectionLabel n="06">ADD-ONS</SectionLabel></Reveal>
          <Reveal className="mt-6 max-w-2xl">
            <h2 className="section-title">Shown inside the package for each service.</h2>
          </Reveal>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {addOns.map((g, gi) => (
              <Reveal key={gi}>
                <h3 className="font-heading text-xl text-[#1E2A4A]">{g.heading}</h3>
                <div className="mt-4 border border-[#1E2A4A]/10 bg-[#FBFAF8] p-6">
                  <PriceTable rows={g.rows} />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <h3 className="font-heading text-xl text-[#1E2A4A]">Services</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {servicesAddOn.map((s, i) => (
                <div key={i} className={`flex items-center justify-between gap-3 p-4 ${s.featured ? 'border-2 border-[#B8860B] bg-white' : 'border border-[#1E2A4A]/10 bg-[#FBFAF8]'}`}>
                  <span className="text-sm leading-relaxed text-[#1E2A4A]/80">{s.name}</span>
                  <span className="shrink-0 font-heading text-lg text-[#1E2A4A]">{s.price}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm italic leading-relaxed text-[#1E2A4A]/55">ATIP at $75 is the cheapest thing you can add that changes an outcome — offered on every refusal-adjacent file.</p>
          </Reveal>
        </div>
      </section>

      {/* PART 7 — Payment terms */}
      <section className="px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal><SectionLabel n="07">PAYMENT TERMS BY TIER</SectionLabel></Reveal>
          <Reveal className="mt-6 max-w-2xl">
            <h2 className="section-title">Staged where it runs long, upfront where it's fixed.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              { h: 'Full Representation — staged', items: ['Standard: 40% opening · 40% submission · 20% decision', 'H&C and complex: 30% · 30% · 30% · 10% decision', 'Appeals: 30% filing · 30% record · 30% submissions · 10% conclusion'] },
              { h: 'Guided — paid in full before work begins', items: ['Fixed scope, fixed deliverables, delivered within a stated window', 'Funds to trust, drawn as work is performed', 'The tier that converts to earned revenue fastest'] },
              { h: 'File Review — paid in full before work begins', items: ['Same reasoning as Guided', 'Delivered within 5 business days'] },
              { h: 'Consultations and fixed products — paid in full', items: ['Consultations, refusal analysis, ATIP requests, roadmaps, second opinions'] },
            ].map((c, i) => (
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
        </div>
      </section>

      {/* PART 8 — Discounts */}
      <section className="bg-white px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal><SectionLabel n="08">DISCOUNTS</SectionLabel></Reveal>
          <Reveal className="mt-6 max-w-2xl">
            <h2 className="section-title">Honest, checkable, and built for repeat business.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {discounts.map((d, i) => (
              <Reveal key={i} delay={i * 40}>
                <div className="h-full border border-[#1E2A4A]/12 bg-[#FBFAF8] p-6">
                  <h3 className="font-heading text-base text-[#1E2A4A]">{d.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#1E2A4A]/65">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we won't do */}
      <section className="px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal><SectionLabel n="09">WHAT WE WON'T DO</SectionLabel></Reveal>
          <Reveal className="mt-6">
            <div className="border border-[#1E2A4A]/12 bg-white p-8">
              <ul className="grid gap-4">
                {wontList.map((w, i) => (
                  <li key={i} className="flex gap-3 text-base leading-relaxed text-[#1E2A4A]/75">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8C2F39]" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-[#1E2A4A]/10 pt-6 text-base leading-relaxed text-[#1E2A4A]/70">What I do instead is tell you before you file whether it's worth filing.</p>
              <Link to="/strategy-session" className="btn btn-primary mt-6">Book a consultation <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}