import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Compass } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { useLanguage } from '@/lib/LanguageContext';
import IntakeProgress from '@/components/intake/IntakeProgress';
import IntakeStep from '@/components/intake/IntakeStep';
import ContactStep from '@/components/intake/ContactStep';

export default function StrategySession() {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [saving, setSaving] = useState(false);
  const [sent, setSent] = useState(false);
  const [data, setData] = useState({ full_name: '', email: '', phone: '', matter: '', urgency: '', summary: '' });

  const matters = [
    { value: 'Appeal or refusal', label: t('strategy.m1') },
    { value: 'Family sponsorship', label: t('strategy.m2') },
    { value: 'Humanitarian and compassionate', label: t('strategy.m3') },
    { value: 'Entrepreneurship', label: t('strategy.m4') },
    { value: 'Permanent residence or PNP', label: t('strategy.m5') },
    { value: 'PR card or citizenship', label: t('strategy.m6') },
  ];
  const urgency = [
    { value: 'Deadline within 7 days', label: t('strategy.u1') },
    { value: 'Deadline within 30 days', label: t('strategy.u2') },
    { value: 'No immediate deadline', label: t('strategy.u3') },
    { value: 'Not sure', label: t('strategy.u4') },
  ];

  const select = (key) => (value) => {
    setData((current) => ({ ...current, [key]: value }));
    setTimeout(() => setStep((current) => Math.min(3, current + 1)), 180);
  };
  const submit = async (event) => {
    event.preventDefault();
    setSaving(true);
    await base44.entities.Consultation.create(data);
    setSent(true);
    setSaving(false);
  };

  if (sent) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F4F7F9] px-5 text-[#0F2433]">
        <div className="max-w-xl text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-[#C8102E]" />
          <h1 className="mt-7 font-heading text-5xl">{t('strategy.successTitle')}</h1>
          <p className="mt-5 leading-relaxed text-[#0F2433]/60">{t('strategy.successBody')}</p>
          <Link to="/" className="mt-8 inline-flex border-b border-[#C8102E] pb-2 text-[#C8102E]">{t('strategy.successBack')}</Link>
        </div>
      </main>
    );
  }

  const ready = step === 1 ? data.matter : step === 2 ? data.urgency : data.full_name && data.email;

  return (
    <main className="min-h-screen bg-[#F4F7F9]">
      <div className="grid min-h-screen lg:grid-cols-[34%_66%]">
        <aside className="hidden bg-[#0F2433] p-12 text-white lg:flex lg:flex-col lg:justify-between">
          <Link to="/" className="flex items-center gap-3 font-heading text-xl">
            <Compass className="text-[#C8102E]" /> Externa
          </Link>
          <blockquote className="font-heading text-4xl leading-tight">{t('strategy.asideQuote')}</blockquote>
          <p className="text-sm leading-relaxed text-white/45">{t('strategy.asideNote')}</p>
        </aside>
        <section className="flex items-center px-5 py-10 sm:px-12 lg:px-[8vw]">
          <form onSubmit={submit} className="mx-auto w-full max-w-2xl">
            <Link to="/" className="mb-10 inline-flex items-center gap-2 text-sm text-[#0F2433]/60 lg:hidden">
              <ArrowLeft className="h-4 w-4" /> {t('strategy.back')}
            </Link>
            <IntakeProgress step={step} />
            {step === 1 && <IntakeStep title={t('strategy.s1')} options={matters} selected={data.matter} onSelect={select('matter')} />}
            {step === 2 && <IntakeStep title={t('strategy.s2')} options={urgency} selected={data.urgency} onSelect={select('urgency')} />}
            {step === 3 && <ContactStep data={data} setData={setData} />}
            <div className="mt-9 flex items-center justify-between">
              {step > 1 ? (
                <button type="button" onClick={() => setStep(step - 1)} className="flex items-center gap-2 text-sm text-[#0F2433]/55">
                  <ArrowLeft className="h-4 w-4" /> {t('strategy.back')}
                </button>
              ) : <span />}
              {step === 3 && (
                <button disabled={!ready || saving} className="flex items-center gap-3 bg-[#C8102E] px-6 py-4 font-semibold text-white transition hover:bg-[#A00D24] disabled:opacity-40">
                  {saving ? t('strategy.sending') : t('strategy.submit')}
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}