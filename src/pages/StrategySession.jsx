import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { useLanguage } from '@/lib/LanguageContext';
import Logo from '@/components/site/Logo';
import Header from '@/components/site/Header';
import BookingStepper from '@/components/booking/BookingStepper';
import ServiceStep from '@/components/booking/ServiceStep';
import TimeStep from '@/components/booking/TimeStep';
import DetailsAgreementStep from '@/components/booking/DetailsAgreementStep';
import { usePageMeta } from '@/lib/usePageMeta';

export default function StrategySession() {
  usePageMeta('Book a Consultation | Externa Immigration Solutions', 'Book a consultation with Externa Immigration Solutions to discuss your Canadian immigration questions and next steps.');
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [saving, setSaving] = useState(false);
  const [sent, setSent] = useState(null);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('payment') === 'success') setSent('pay_now');
  }, []);
  const [data, setData] = useState({
    service_tier: '', preferred_date: '', preferred_time: '',
    full_name: '', email: '', phone: '', matter: '', urgency: '', summary: '',
    agreement_accepted: false, signature_name: '',
  });

  const submit = async (paymentPref) => {
    setSaving(true);
    try {
      const rec = await base44.entities.Consultation.create({ ...data, payment_preference: paymentPref, triage_tag: (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('externa-triage-tag')) || '' });
      try {
        const tierLabel = { quick_question: 'Quick Question', full_consultation: 'Full Consultation', application_review: 'Application Review' }[data.service_tier] || data.service_tier || '';
        const dateScheduled = data.preferred_date ? `${data.preferred_date}${data.preferred_time ? ' ' + data.preferred_time : ''}` : '';
        await base44.functions.invoke('appendLeadToSheet', {
          dateScheduled,
          name: data.full_name,
          phone: data.phone,
          email: data.email,
          source: paymentPref === 'pay_now' ? 'Paid Consultation' : 'Unpaid Consultation',
          serviceNeeded: data.matter,
          appointment: tierLabel,
          paid: paymentPref === 'pay_now' ? 'Yes' : 'No',
          createdDate: rec.created_date,
          comments: data.summary,
          deadline: data.urgency,
        });
      } catch (sheetErr) { console.error('Sheet log failed:', sheetErr); }
      try {
        await base44.functions.invoke('createCalendarEvent', {
          full_name: data.full_name, email: data.email,
          preferred_date: data.preferred_date, preferred_time: data.preferred_time,
          service_tier: data.service_tier,
        });
      } catch (calErr) {
        console.error('Calendar event failed:', calErr);
      }
      if (paymentPref === 'pay_now') {
        if (window.self !== window.top) {
          alert('Checkout works only from the published app. Please open the app in a new tab to complete payment.');
          setSaving(false);
          return;
        }
        const res = await base44.functions.invoke('createCheckoutSession', {
          service_tier: data.service_tier, full_name: data.full_name, email: data.email,
          preferred_date: data.preferred_date, preferred_time: data.preferred_time,
        });
        window.location.href = res.data.url;
        return;
      }
      setSent(paymentPref);
    } catch (e) {
      console.error('Submit failed:', e);
    }
    setSaving(false);
  };

  if (sent) {
    const isPayLater = sent === 'pay_later';
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-5 text-[#1E2A4A]">
        <div className="max-w-xl text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-[#B8860B]" />
          <h1 className="mt-7 font-heading text-4xl sm:text-5xl">{isPayLater ? t('bookingFlow.payLaterSuccessTitle') : t('bookingFlow.paidSuccessTitle')}</h1>
          <p className="mt-5 leading-relaxed text-[#1E2A4A]/60">{isPayLater ? t('bookingFlow.payLaterSuccessBody') : t('bookingFlow.paidSuccessBody')}</p>
          <Link to="/" className="mt-8 inline-flex border-b border-[#B8860B] pb-2 text-[#B8860B]">{t('bookingFlow.returnHome')}</Link>
        </div>
      </main>
    );
  }

  const canProceed = step === 1 ? !!data.service_tier
    : step === 2 ? !!(data.preferred_date && data.preferred_time)
    : true;

  const nextLabel = step === 1 ? t('bookingFlow.continueToTime') : t('bookingFlow.continueToDetails');

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Header />
      <div className="grid min-h-screen lg:grid-cols-[34%_66%]">
        <aside className="hidden bg-[#1E2A4A] p-12 pt-24 text-white lg:flex lg:flex-col lg:gap-10 lg:sticky lg:top-0 lg:h-screen lg:self-start">
          <Link to="/" className="flex items-center gap-3">
            <Logo variant="light" className="h-10 w-10" />
            <span className="font-heading text-xl">Externa</span>
          </Link>
          <blockquote className="font-heading text-4xl leading-tight">{t('strategy.asideQuote')}</blockquote>
        </aside>
        <section className="flex items-center px-5 pt-24 pb-10 sm:px-12 lg:px-[8vw]">
          <div className="mx-auto w-full max-w-2xl">
            <Link to="/" className="mb-10 inline-flex items-center gap-2 text-sm text-[#1E2A4A]/60 lg:hidden">
              <ArrowLeft className="h-4 w-4" /> {t('strategy.back')}
            </Link>
            <h1 className="font-heading text-3xl text-[#1E2A4A] sm:text-4xl">{t('bookingFlow.title')}</h1>
            <p className="mt-3 text-sm leading-relaxed text-[#1E2A4A]/55">{t('bookingFlow.subtitle')}</p>
            <div className="mt-5 border-l-2 border-[#B8860B] bg-[#FBFAF8] px-4 py-3">
              <p className="text-xs leading-relaxed text-[#1E2A4A]/70">Calls are held over Google Meet, join from your computer or dial in by phone during the call.</p>
            </div>
            <BookingStepper step={step} />

            {step === 1 && <ServiceStep data={data} setData={setData} />}
            {step === 2 && <TimeStep data={data} setData={setData} />}
            {step === 3 && <DetailsAgreementStep data={data} setData={setData} saving={saving} onPayNow={() => submit('pay_now')} onPayLater={() => submit('pay_later')} />}

            <div className="mt-9 flex items-center justify-between">
              {step > 1 ? (
                <button type="button" onClick={() => setStep(step - 1)} className="flex items-center gap-2 text-sm text-[#1E2A4A]/55">
                  <ArrowLeft className="h-4 w-4" /> {t('bookingFlow.back')}
                </button>
              ) : <span />}
              {step < 3 && (
                <button type="button" disabled={!canProceed} onClick={() => setStep(step + 1)} className="flex items-center gap-3 border border-[#B8860B] px-6 py-4 font-semibold text-[#B8860B] transition hover:bg-[#B8860B] hover:text-white disabled:opacity-40">
                  {nextLabel} <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}