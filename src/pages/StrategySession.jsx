import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { useLanguage } from '@/lib/LanguageContext';
import Logo from '@/components/site/Logo';
import BookingStepper from '@/components/booking/BookingStepper';
import ServiceStep from '@/components/booking/ServiceStep';
import TimeStep from '@/components/booking/TimeStep';
import DetailsAgreementStep from '@/components/booking/DetailsAgreementStep';
import WhatsAppWidget from '@/components/site/WhatsAppWidget';

export default function StrategySession() {
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
      await base44.entities.Consultation.create({ ...data, payment_preference: paymentPref });
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
      <main className="flex min-h-screen items-center justify-center bg-[#F5F1E8] px-5 text-[#0E3B3B]">
        <div className="max-w-xl text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-[#A85638]" />
          <h1 className="mt-7 font-heading text-4xl sm:text-5xl">{isPayLater ? t('bookingFlow.payLaterSuccessTitle') : t('bookingFlow.paidSuccessTitle')}</h1>
          <p className="mt-5 leading-relaxed text-[#0E3B3B]/60">{isPayLater ? t('bookingFlow.payLaterSuccessBody') : t('bookingFlow.paidSuccessBody')}</p>
          <Link to="/" className="mt-8 inline-flex border-b border-[#A85638] pb-2 text-[#A85638]">{t('bookingFlow.returnHome')}</Link>
        </div>
      </main>
    );
  }

  const canProceed = step === 1 ? !!data.service_tier
    : step === 2 ? !!(data.preferred_date && data.preferred_time)
    : true;

  const nextLabel = step === 1 ? t('bookingFlow.continueToTime') : t('bookingFlow.continueToDetails');

  return (
    <main className="min-h-screen bg-[#F5F1E8]">
      <div className="grid min-h-screen lg:grid-cols-[34%_66%]">
        <aside className="hidden bg-[#0E3B3B] p-12 text-white lg:flex lg:flex-col lg:justify-between">
          <Link to="/" className="flex items-center gap-3">
            <Logo variant="light" className="h-10 w-10" />
            <span className="font-heading text-xl">Externa</span>
          </Link>
          <blockquote className="font-heading text-4xl leading-tight">{t('strategy.asideQuote')}</blockquote>
          <p className="text-sm leading-relaxed text-white/45">{t('strategy.asideNote')}</p>
        </aside>
        <section className="flex items-center px-5 py-10 sm:px-12 lg:px-[8vw]">
          <div className="mx-auto w-full max-w-2xl">
            <Link to="/" className="mb-10 inline-flex items-center gap-2 text-sm text-[#0E3B3B]/60 lg:hidden">
              <ArrowLeft className="h-4 w-4" /> {t('strategy.back')}
            </Link>
            <h1 className="font-heading text-3xl text-[#0E3B3B] sm:text-4xl">{t('bookingFlow.title')}</h1>
            <p className="mt-3 text-sm leading-relaxed text-[#0E3B3B]/55">{t('bookingFlow.subtitle')}</p>
            <BookingStepper step={step} />

            {step === 1 && <ServiceStep data={data} setData={setData} />}
            {step === 2 && <TimeStep data={data} setData={setData} />}
            {step === 3 && <DetailsAgreementStep data={data} setData={setData} saving={saving} onPayNow={() => submit('pay_now')} onPayLater={() => submit('pay_later')} />}

            <div className="mt-9 flex items-center justify-between">
              {step > 1 ? (
                <button type="button" onClick={() => setStep(step - 1)} className="flex items-center gap-2 text-sm text-[#0E3B3B]/55">
                  <ArrowLeft className="h-4 w-4" /> {t('bookingFlow.back')}
                </button>
              ) : <span />}
              {step < 3 && (
                <button type="button" disabled={!canProceed} onClick={() => setStep(step + 1)} className="flex items-center gap-3 bg-[#A85638] px-6 py-4 font-semibold text-white transition hover:bg-[#8E4828] disabled:opacity-40">
                  {nextLabel} <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </section>
      </div>
      <WhatsAppWidget />
    </main>
  );
}