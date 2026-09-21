import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { usePathwayRegistration } from '@/hooks/usePathwayRegistration';

// Healthcare register form (forest/cream/coral palette). Shares the checkout
// logic with the entrepreneur form via the usePathwayRegistration hook.
export default function HealthcareRegister({ pathway, returnPath, sourceLabel, situation, title, eyebrow, subtitle, price, priceSubline, paymentType, priceTag, ctaLabel, postBookingNote, consentNote }) {
  const { form, set, saving, error, done, submit } = usePathwayRegistration({ pathway, returnPath, sourceLabel, situation, title });

  if (done) {
    return (
      <section id="register" className="bg-[#F7F3EA] px-5 py-20 lg:py-28">
        <div className="mx-auto max-w-xl text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-[#1E8A70]" />
          <h2 className="mt-6 font-heading text-3xl text-[#123B35] sm:text-4xl">You are booked</h2>
          <p className="mt-4 leading-relaxed text-[#202624]/60">Your payment is confirmed. We will email you the session details and your take-away guide ahead of the live group session.</p>
        </div>
      </section>
    );
  }

  const inputCls = 'w-full border-0 border-b border-[#123B35]/20 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal text-[#202624] outline-none transition focus:border-[#1E8A70] focus:ring-0';
  const labelCls = 'grid gap-2 text-xs font-semibold uppercase tracking-[.12em] text-[#202624]/60';

  return (
    <section id="register" className="bg-[#F7F3EA] px-5 py-20 lg:px-[8vw] lg:py-28">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.24em] text-[#1E8A70]">{eyebrow}</p>
          <h2 className="mt-4 font-heading text-3xl leading-tight text-[#123B35] sm:text-4xl lg:text-5xl">{title}</h2>
          {subtitle && <p className="mt-5 font-heading text-xl leading-snug text-[#123B35]/80">{subtitle}</p>}
          <div className="mt-8 flex items-end gap-2">
            <span className="font-heading text-5xl text-[#E9826B]">{price}</span>
            <span className="mb-1 text-sm text-[#202624]/55">{priceSubline}</span>
          </div>
          {paymentType && <p className="mt-2 text-sm text-[#202624]/55">{paymentType}</p>}
          {priceTag && <p className="mt-3 text-sm font-semibold uppercase tracking-[.08em] text-[#1E8A70]">{priceTag}</p>}
          <p className="mt-3 text-sm text-[#202624]/50">Secure payment via Stripe.</p>
        </div>
        <div className="border border-[#1E8A70]/15 bg-white p-8 lg:p-10">
          <div className="grid gap-5">
            <label className={labelCls}>First name <span className="text-[#E9826B]">*</span>
              <input required value={form.first_name} onChange={set('first_name')} className={inputCls} placeholder="First name" />
            </label>
            <label className={labelCls}>Last name <span className="text-[#E9826B]">*</span>
              <input required value={form.last_name} onChange={set('last_name')} className={inputCls} placeholder="Last name" />
            </label>
            <label className={labelCls}>Email <span className="text-[#E9826B]">*</span>
              <input required type="email" value={form.email} onChange={set('email')} className={inputCls} placeholder="you@email.com" />
            </label>
            <label className={labelCls}>Phone (optional)
              <input value={form.phone} onChange={set('phone')} className={inputCls} placeholder="Your phone number" />
            </label>
          </div>
          {error && <p className="mt-4 text-sm text-[#E9826B]">{error}</p>}
          <button onClick={submit} disabled={saving} className="mt-7 inline-flex w-full items-center justify-center gap-2 bg-[#1E8A70] px-9 py-4 text-base font-semibold text-white transition hover:bg-[#123B35] disabled:opacity-50">
            {saving ? <><Loader2 className="h-4 w-4 animate-spin" /> Processing</> : <>{ctaLabel} <ArrowRight className="h-4 w-4" /></>}
          </button>
          {postBookingNote && <p className="mt-4 text-center text-xs text-[#202624]/50">{postBookingNote}</p>}
          <p className="mt-4 text-center text-xs text-[#202624]/40">{consentNote || 'By booking you consent to be contacted about your session. No obligation beyond the session fee.'}</p>
        </div>
      </div>
    </section>
  );
}