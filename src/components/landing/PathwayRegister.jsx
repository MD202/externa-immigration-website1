import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { usePathwayRegistration } from '@/hooks/usePathwayRegistration';

// Registration + paid checkout (navy/gold variant, used by the entrepreneur
// landing page). Logic lives in the shared usePathwayRegistration hook.
export default function PathwayRegister({ pathway, price, priceNote, title, returnPath, sourceLabel, situation, eyebrow = 'Register', subtitle, priceSubline, paymentType, priceTag, ctaLabel, postBookingNote, consentNote }) {
  const { form, set, saving, error, done, submit } = usePathwayRegistration({ pathway, returnPath, sourceLabel, situation, title });

  if (done) {
    return (
      <section id="register" className="bg-[#F8FAFC] px-5 py-20 lg:py-28">
        <div className="mx-auto max-w-xl text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-[#B8860B]" />
          <h2 className="mt-6 font-heading text-3xl text-[#1E2A4A] sm:text-4xl">You are registered</h2>
          <p className="mt-4 leading-relaxed text-[#1E2A4A]/60">Your payment is confirmed. We will be in touch by email with your onboarding details and next steps.</p>
        </div>
      </section>
    );
  }

  const buttonLabel = ctaLabel || `Register and pay ${price}`;

  return (
    <section id="register" className="bg-white px-5 py-20 lg:px-[8vw] lg:py-28">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="mt-5 font-heading text-xl leading-snug text-[#1E2A4A]/80">{subtitle}</p>}
          {priceNote && <p className="mt-5 leading-relaxed text-[#1E2A4A]/60">{priceNote}</p>}
          <div className="mt-8 flex items-end gap-2">
            <span className="font-heading text-5xl text-[#1E2A4A]">{price}</span>
            <span className="mb-1 text-sm text-[#1E2A4A]/50">{priceSubline || '+HST · single payment'}</span>
          </div>
          {paymentType && <p className="mt-2 text-sm text-[#1E2A4A]/55">{paymentType}</p>}
          {priceTag && <p className="mt-3 text-sm font-semibold uppercase tracking-[.08em] text-[#B8860B]">{priceTag}</p>}
          <p className="mt-3 text-sm text-[#1E2A4A]/50">Secure payment via Stripe. Intake is limited.</p>
        </div>
        <div className="border border-[#1E2A4A]/10 bg-[#F8FAFC] p-8 lg:p-10">
          <div className="grid gap-5">
            <label className="intake-label">First name <span className="text-[#B8860B]">*</span>
              <input required value={form.first_name} onChange={set('first_name')} className="intake-input" placeholder="First name" />
            </label>
            <label className="intake-label">Last name <span className="text-[#B8860B]">*</span>
              <input required value={form.last_name} onChange={set('last_name')} className="intake-input" placeholder="Last name" />
            </label>
            <label className="intake-label">Email <span className="text-[#B8860B]">*</span>
              <input required type="email" value={form.email} onChange={set('email')} className="intake-input" placeholder="you@email.com" />
            </label>
            <label className="intake-label">Phone (optional)
              <input value={form.phone} onChange={set('phone')} className="intake-input" placeholder="Your phone number" />
            </label>
          </div>
          {error && <p className="mt-4 text-sm text-[#8C2F39]">{error}</p>}
          <button onClick={submit} disabled={saving} className="btn btn-primary mt-7 w-full">
            {saving ? <><Loader2 className="h-4 w-4 animate-spin" /> Processing</> : <>{buttonLabel} <ArrowRight className="h-4 w-4" /></>}
          </button>
          {postBookingNote && <p className="mt-4 text-center text-xs text-[#1E2A4A]/50">{postBookingNote}</p>}
          <p className="mt-4 text-center text-xs text-[#1E2A4A]/40">{consentNote || 'By registering you consent to be contacted about your pathway. No obligation beyond the registration fee.'}</p>
        </div>
      </div>
    </section>
  );
}