import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { usePathwayRegistration } from '@/hooks/usePathwayRegistration';

// Entrepreneur register form (navy + fluorescent green). Shares checkout logic
// with the healthcare form via the usePathwayRegistration hook.
export default function EntrepreneurRegister({ pathway, returnPath, sourceLabel, situation, title, eyebrow, subtitle, price, priceSubline, details, tag, note, ctaLabel, consentNote }) {
  const { form, set, saving, error, done, submit } = usePathwayRegistration({ pathway, returnPath, sourceLabel, situation, title });

  if (done) {
    return (
      <section id="register" className="bg-[#F4F6FA] px-5 py-20 lg:py-28">
        <div className="mx-auto max-w-xl text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-[#00FF87]" />
          <h2 className="mt-6 font-heading text-3xl text-[#1E2A4A] sm:text-4xl">Your seat is reserved</h2>
          <p className="mt-4 leading-relaxed text-[#1E2A4A]/60">Your payment is confirmed. We will email you the session details and your take-away guide ahead of the live group session.</p>
        </div>
      </section>
    );
  }

  const inputCls = 'w-full border-0 border-b border-[#1E2A4A]/20 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal text-[#1E2A4A] outline-none transition focus:border-[#00FF87] focus:ring-0';
  const labelCls = 'grid gap-2 text-xs font-semibold uppercase tracking-[.12em] text-[#1E2A4A]/60';

  return (
    <section id="register" className="bg-[#F4F6FA] px-5 py-20 lg:px-[8vw] lg:py-28">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          {eyebrow && <p className="text-xs font-semibold uppercase tracking-[.24em] text-[#1E2A4A]">{eyebrow}</p>}
          <h2 className="mt-4 font-heading text-3xl leading-tight text-[#1E2A4A] sm:text-4xl lg:text-5xl">{title}</h2>
          {subtitle && <p className="mt-5 font-heading text-xl leading-snug text-[#1E2A4A]/80">{subtitle}</p>}
          <div className="mt-8 flex items-end gap-2">
            <span className="font-heading text-5xl text-[#1E2A4A]">{price}</span>
            <span className="mb-1 text-sm text-[#1E2A4A]/55">{priceSubline}</span>
          </div>
          {details && <p className="mt-3 text-sm text-[#1E2A4A]/55">{details}</p>}
          {tag && <p className="mt-3 text-sm font-semibold uppercase tracking-[.08em] text-[#1E2A4A]">{tag}</p>}
          {note && <p className="mt-4 max-w-md text-sm leading-relaxed text-[#1E2A4A]/55">{note}</p>}
        </div>
        <div className="border border-[#1E2A4A]/10 bg-white p-8 lg:p-10">
          <div className="grid gap-5">
            <label className={labelCls}>First name <span className="text-[#00FF87]">*</span>
              <input required value={form.first_name} onChange={set('first_name')} className={inputCls} placeholder="First name" />
            </label>
            <label className={labelCls}>Last name <span className="text-[#00FF87]">*</span>
              <input required value={form.last_name} onChange={set('last_name')} className={inputCls} placeholder="Last name" />
            </label>
            <label className={labelCls}>Email <span className="text-[#00FF87]">*</span>
              <input required type="email" value={form.email} onChange={set('email')} className={inputCls} placeholder="you@email.com" />
            </label>
            <label className={labelCls}>Phone (optional)
              <input value={form.phone} onChange={set('phone')} className={inputCls} placeholder="Your phone number" />
            </label>
          </div>
          {error && <p className="mt-4 text-sm text-[#8C2F39]">{error}</p>}
          <button onClick={submit} disabled={saving} className="mt-7 inline-flex w-full items-center justify-center gap-2 bg-[#00FF87] px-9 py-4 text-base font-semibold text-[#1E2A4A] transition hover:bg-[#1E2A4A] hover:text-[#00FF87] disabled:opacity-50">
            {saving ? <><Loader2 className="h-4 w-4 animate-spin" /> Processing</> : <>{ctaLabel} <ArrowRight className="h-4 w-4" /></>}
          </button>
          <p className="mt-4 text-center text-xs text-[#1E2A4A]/40">{consentNote || 'By saving your seat you consent to be contacted about the session. No obligation beyond the session fee.'}</p>
        </div>
      </div>
    </section>
  );
}