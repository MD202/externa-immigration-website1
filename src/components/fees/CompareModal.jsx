import { Link } from 'react-router-dom';
import { X, Check, Minus } from 'lucide-react';

const FULL_FEATURES = [
  'We take on the file as your authorized representative',
  'Strategy, route selection, and an evidence plan',
  'Every form and supporting letter drafted by us',
  'Submission prepared and filed on your behalf',
  'Personalised document checklist',
  'Secure client portal with full access',
  'Consultations as the matter requires',
  'Online, phone & email support throughout',
  'Post-submission follow-up for 12 months',
  'One free resubmission if the file is returned',
];

const DIY_FEATURES = [
  { text: 'A structured plan you follow in your own name', inc: true },
  { text: 'Route and evidence guidance up front', inc: true },
  { text: 'One 60-minute working session', inc: true },
  { text: 'Written review of every form and letter before you file', inc: true },
  { text: 'Personalised document checklist, limited for review only', inc: true },
  { text: 'Secure client portal, limited access', inc: true },
  { text: 'Email support while you prepare', inc: true },
  { text: 'Guidance if the immigration authority contacts you (12 months)', inc: true },
  { text: 'We file on your behalf', inc: false },
  { text: 'Post-submission handling by us', inc: false },
];

function Card({ title, tag, price, diy }) {
  return (
    <div className={`flex flex-col p-6 ${diy ? 'border border-[#1E2A4A]/12 bg-[#FBFAF8]' : 'border-2 border-[#1E2A4A] bg-white'}`}>
      <p className="text-xs font-semibold uppercase tracking-[.12em] text-[#1E2A4A]/45">{title}</p>
      <p className="mt-1 font-heading text-lg text-[#1E2A4A]">{tag}</p>
      <p className="mt-4 font-heading text-4xl text-[#1E2A4A]">{price || ', '}</p>
      <p className="mt-1 text-[10px] uppercase tracking-[.1em] text-[#1E2A4A]/40">Professional fee · plus HST</p>
      <ul className="mt-5 grid gap-2.5">
        {diy
          ? DIY_FEATURES.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm leading-snug">
                {f.inc ? <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2E7D4F]" /> : <Minus className="mt-0.5 h-4 w-4 shrink-0 text-[#8C2F39]" />}
                <span className={f.inc ? 'text-[#1E2A4A]/75' : 'text-[#1E2A4A]/40 line-through'}>{f.text}</span>
              </li>
            ))
          : FULL_FEATURES.map((f, i) => (
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
        <h2 className="mt-2 text-center font-heading text-2xl text-[#1E2A4A] sm:text-3xl">Two ways to move forward</h2>
        <p className="mt-2 text-center text-xs text-[#1E2A4A]/55">Professional fees, Canadian dollars, plus HST. Government fees are separate and never marked up.</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <Card title="Full Representation" tag="We represent you" price={row.full} />
          <Card title="DIY" tag="We guide you" price={row.guided} diy />
        </div>
        <p className="mt-6 border-t border-[#1E2A4A]/10 pt-4 text-center text-xs leading-relaxed text-[#1E2A4A]/60">Adding a spouse, partner, or children, or a companion permit, is available at a reduced add-on rate with either package. We'll quote it at your consultation.</p>
      </div>
    </div>
  );
}