import { Link } from 'react-router-dom';
import { X, Check, Minus } from 'lucide-react';

const FULL_FEATURES = [
  'Initial consultation credit',
  'We represent you — authorized representation',
  'Secure client portal',
  'Consultations as required',
  'Online, phone & email support',
  'Application preparation & submission',
  'Document checklist prepared for you',
  'Post-submission support (1 year)',
  'One-time free resubmission',
];

const DIY_FEATURES = [
  { text: 'Initial consultation credit', inc: true },
  { text: 'We guide you — you file in your own name', inc: true },
  { text: 'Secure client portal — limited', inc: true },
  { text: '1-hour feedback session', inc: true },
  { text: 'Online, phone & email support', inc: true },
  { text: 'Assistance with your application', inc: true },
  { text: 'Document checklist — limited for review only', inc: true },
  { text: 'Post-submission support', inc: false },
  { text: 'One-time free resubmission', inc: false },
];

function Card({ title, tag, price, features, diy }) {
  return (
    <div className="flex flex-col border border-[#1E2A4A]/12 bg-[#FBFAF8] p-6">
      <p className="text-xs font-semibold uppercase tracking-[.12em] text-[#1E2A4A]/45">{title}</p>
      <p className="mt-1 font-heading text-lg text-[#1E2A4A]">{tag}</p>
      <p className="mt-4 font-heading text-4xl text-[#1E2A4A]">{price || '—'}</p>
      <p className="mt-1 text-[10px] uppercase tracking-[.1em] text-[#1E2A4A]/40">Professional fee · plus HST</p>
      <ul className="mt-5 grid gap-2.5">
        {diy
          ? DIY_FEATURES.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm leading-snug">
                {f.inc ? <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2E7D4F]" /> : <Minus className="mt-0.5 h-4 w-4 shrink-0 text-[#8C2F39]" />}
                <span className={f.inc ? 'text-[#1E2A4A]/75' : 'text-[#1E2A4A]/40 line-through'}>{f.text}</span>
              </li>
            ))
          : features.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm leading-snug text-[#1E2A4A]/75">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2E7D4F]" />
                <span>{f}</span>
              </li>
            ))}
      </ul>
      <Link to="/strategy-session" className="btn btn-primary mt-6 w-full">Book initial consultation</Link>
    </div>
  );
}

export default function CompareModal({ row, onClose }) {
  if (!row) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4 py-10" onClick={onClose}>
      <div className="relative w-full max-w-3xl bg-white p-6 shadow-xl sm:p-8" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute right-4 top-4 text-[#1E2A4A]/50 transition hover:text-[#1E2A4A]" aria-label="Close"><X className="h-5 w-5" /></button>
        <p className="text-center text-xs font-semibold uppercase tracking-[.18em] text-[#B8860B]">{row.service}</p>
        <h2 className="mt-2 text-center font-heading text-2xl text-[#1E2A4A] sm:text-3xl">Packages &amp; fees</h2>
        <p className="mt-2 text-center text-xs text-[#1E2A4A]/55">Professional fees, Canadian dollars, plus HST. Government fees are separate.</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <Card title="Full Package" tag="We represent you" price={row.full} features={FULL_FEATURES} />
          <Card title="DIY" tag="We guide you" price={row.guided} diy />
        </div>
        <p className="mt-6 border-t border-[#1E2A4A]/10 pt-4 text-center text-xs leading-relaxed text-[#1E2A4A]/60">Add-ons available with any package — adding a spouse/partner or dependent children, status extensions, and companion applications at reduced add-on rates.</p>
      </div>
    </div>
  );
}