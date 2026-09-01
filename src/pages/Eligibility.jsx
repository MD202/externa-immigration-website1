import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { useLanguage } from '@/lib/LanguageContext';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import WhatsAppWidget from '@/components/site/WhatsAppWidget';

const SITUATION_MAP = {
  q1o1: { id: 2, titleKey: 'services.t2', descKey: 'services.x2' },
  q1o2: { id: 4, titleKey: 'services.t4', descKey: 'services.x4' },
  q1o3: { id: 1, titleKey: 'services.t1', descKey: 'services.x1' },
  q1o4: { id: 8, titleKey: 'services.t8', descKey: 'services.x8' },
  q1o5: { id: 5, titleKey: 'services.t5', descKey: 'services.x5' },
  q1o6: { id: 6, titleKey: 'services.t6', descKey: 'services.x6' },
  q1o7: { id: 9, titleKey: 'services.t9', descKey: 'services.x9' },
  q1o8: { id: 7, titleKey: 'services.t7', descKey: 'services.x7' },
};

const QUESTIONS = [
  { key: 'q1', options: ['q1o1', 'q1o2', 'q1o3', 'q1o4', 'q1o5', 'q1o6', 'q1o7', 'q1o8'] },
  { key: 'q2', options: ['q2o1', 'q2o2', 'q2o3', 'q2o4'] },
  { key: 'q3', options: ['q3o1', 'q3o2', 'q3o3', 'q3o4'] },
];

export default function Eligibility() {
  const { t } = useLanguage();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '' });
  const [contact, setContact] = useState({ full_name: '', email: '', phone: '' });
  const [saving, setSaving] = useState(false);
  const [sent, setSent] = useState(false);

  const choose = (qKey, value) => {
    setAnswers((a) => ({ ...a, [qKey]: value }));
    setStep((s) => s + 1);
  };

  const submit = async (e) => {
    e.preventDefault();
    setSaving(true);
    const svc = SITUATION_MAP[answers.q1];
    await base44.entities.Lead.create({
      full_name: contact.full_name,
      email: contact.email,
      phone: contact.phone,
      situation: t(`eligibility.${answers.q1}`),
      stage: t(`eligibility.${answers.q2}`),
      urgency: t(`eligibility.${answers.q3}`),
      recommended_pathway: svc ? t(svc.titleKey) : '',
    });
    setSaving(false);
    setSent(true);
  };

  if (sent) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F4EEE2] px-5 text-[#123B2C]">
        <div className="max-w-xl text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-[#C9A227]" />
          <h1 className="mt-7 font-heading text-4xl sm:text-5xl">{t('eligibility.successTitle')}</h1>
          <p className="mt-5 leading-relaxed text-[#123B2C]/60">{t('eligibility.successBody')}</p>
          <Link to="/" className="mt-8 inline-flex border-b border-[#C9A227] pb-2 text-[#C9A227]">{t('eligibility.successBack')}</Link>
        </div>
      </main>
    );
  }

  const total = QUESTIONS.length;
  const isResult = step >= total;
  const svc = SITUATION_MAP[answers.q1];

  return (
    <main className="min-h-screen bg-[#F4EEE2]">
      <Header />
      <section className="px-5 pt-32 pb-20 lg:px-[8vw] lg:pt-40">
        <div className="mx-auto max-w-3xl">
          <Link to="/" className="mb-10 inline-flex items-center gap-2 text-sm text-[#123B2C]/55 transition hover:text-[#C9A227]">
            <ArrowLeft className="h-4 w-4" /> {t('fees.back')}
          </Link>
          <p className="eyebrow">{t('eligibility.eyebrow')}</p>
          <h1 className="section-title">{t('eligibility.title')}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#123B2C]/65">{t('eligibility.subtitle')}</p>

          {!isResult ? (
            <div className="mt-12">
              <div className="mb-6 h-1 w-full bg-[#123B2C]/10">
                <div className="h-1 bg-[#C9A227] transition-all" style={{ width: `${(step / total) * 100}%` }} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[.18em] text-[#123B2C]/50">
                {t('eligibility.stepOf').replace('{n}', String(step + 1)).replace('{total}', String(total))}
              </p>
              <h2 className="mt-3 font-heading text-3xl text-[#123B2C]">{t(`eligibility.${QUESTIONS[step].key}`)}</h2>
              <div className="mt-8 grid gap-3">
                {QUESTIONS[step].options.map((opt) => (
                  <button key={opt} type="button" onClick={() => choose(QUESTIONS[step].key, opt)} className="flex items-center justify-between gap-4 border border-[#123B2C]/10 bg-white px-6 py-5 text-left transition hover:border-[#C9A227] hover:shadow-md">
                    <span className="text-base text-[#123B2C]/80">{t(`eligibility.${opt}`)}</span>
                    <ArrowRight className="h-5 w-5 shrink-0 text-[#C9A227]" />
                  </button>
                ))}
              </div>
              {step > 0 && (
                <button type="button" onClick={() => setStep(step - 1)} className="mt-8 flex items-center gap-2 text-sm text-[#123B2C]/55">
                  <ArrowLeft className="h-4 w-4" /> {t('eligibility.back')}
                </button>
              )}
            </div>
          ) : (
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div>
                <p className="eyebrow">{t('eligibility.resultEyebrow')}</p>
                <h2 className="mt-3 font-heading text-3xl text-[#123B2C]">{svc ? t(svc.titleKey) : ''}</h2>
                <p className="mt-4 text-base leading-relaxed text-[#123B2C]/65">{svc ? t(svc.descKey) : ''}</p>
                <p className="mt-6 border-l-2 border-[#C9A227] bg-white px-5 py-4 text-sm italic leading-relaxed text-[#123B2C]/60">{t('eligibility.resultNote')}</p>
                <Link to="/strategy-session" className="mt-6 inline-flex items-center gap-2 border-b-2 border-[#C9A227] pb-1 text-sm font-semibold text-[#C9A227]">
                  {t('eligibility.bookConsult')} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <form onSubmit={submit} className="bg-white p-8 shadow-sm">
                <h3 className="font-heading text-2xl text-[#123B2C]">{t('eligibility.formTitle')}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#123B2C]/55">{t('eligibility.formSubtitle')}</p>
                <div className="mt-6 grid gap-5">
                  <label className="intake-label">{t('eligibility.fullName')}
                    <input required value={contact.full_name} onChange={(e) => setContact({ ...contact, full_name: e.target.value })} className="intake-input" />
                  </label>
                  <label className="intake-label">{t('eligibility.email')}
                    <input required type="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} className="intake-input" />
                  </label>
                  <label className="intake-label">{t('eligibility.phoneOpt')}
                    <input value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} className="intake-input" />
                  </label>
                </div>
                <button type="submit" disabled={saving} className="mt-7 flex w-full items-center justify-center gap-2 bg-[#C9A227] px-6 py-4 font-semibold text-[#3D2F06] transition hover:bg-[#A8871A] disabled:opacity-50">
                  {saving ? t('eligibility.sending') : t('eligibility.submit')} <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}