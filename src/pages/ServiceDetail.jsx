import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Compass } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { useLanguage } from '@/lib/LanguageContext';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

const SERVICE_MAP = {
  1: { titleKey: 'services.t1', textKey: 'services.x1', blurbKey: 'services.b1', factorsKey: 'services.f1', pathwayKey: 'services.p1', matter: 'Refugee claim' },
  2: { titleKey: 'services.t2', textKey: 'services.x2', blurbKey: 'services.b2', factorsKey: 'services.f2', pathwayKey: 'services.p2', matter: 'Appeal or refusal' },
  3: { titleKey: 'services.t3', textKey: 'services.x3', blurbKey: 'services.b3', factorsKey: 'services.f3', pathwayKey: 'services.p3', matter: 'Humanitarian and compassionate' },
  4: { titleKey: 'services.t4', textKey: 'services.x4', blurbKey: 'services.b4', factorsKey: 'services.f4', pathwayKey: 'services.p4', matter: 'Family sponsorship' },
  5: { titleKey: 'services.t5', textKey: 'services.x5', blurbKey: 'services.b5', factorsKey: 'services.f5', pathwayKey: 'services.p5', matter: 'Employer' },
  6: { titleKey: 'services.t6', textKey: 'services.x6', blurbKey: 'services.b6', factorsKey: 'services.f6', pathwayKey: 'services.p6', matter: 'Entrepreneurship' },
  7: { titleKey: 'services.t7', textKey: 'services.x7', blurbKey: 'services.b7', factorsKey: 'services.f7', pathwayKey: 'services.p7', matter: 'Other (permits & visas)' },
  8: { titleKey: 'services.t8', textKey: 'services.x8', blurbKey: 'services.b8', factorsKey: 'services.f8', pathwayKey: 'services.p8', matter: 'Permanent residence or PNP' },
  9: { titleKey: 'services.t9', textKey: 'services.x9', blurbKey: 'services.b9', factorsKey: 'services.f9', pathwayKey: 'services.p9', matter: 'Other (permits & visas)' },
};

export default function ServiceDetail() {
  const { id } = useParams();
  const { t } = useLanguage();
  const svc = SERVICE_MAP[id];
  const [saving, setSaving] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ full_name: '', email: '', phone: '', summary: '' });

  if (!svc) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F4F7F9] text-[#0F2433]">
        <div className="text-center">
          <p className="font-heading text-3xl">Service not found</p>
          <Link to="/" className="mt-6 inline-flex border-b border-[#C8102E] pb-1 text-[#C8102E]">Return home</Link>
        </div>
      </main>
    );
  }

  const pathwaySteps = t(svc.pathwayKey).split(' · ');
  const set = (key) => (e) => setForm((c) => ({ ...c, [key]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setSaving(true);
    await base44.entities.Consultation.create({
      ...form,
      matter: svc.matter,
      urgency: 'Not sure',
    });
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

  return (
    <main className="min-h-screen bg-[#F4F7F9]">
      <Header />
      <section className="px-5 pt-32 pb-20 lg:px-[8vw] lg:pt-40">
        <div className="mx-auto max-w-[1440px]">
          <Link to="/#services" className="mb-10 inline-flex items-center gap-2 text-sm text-[#0F2433]/55 transition hover:text-[#C8102E]">
            <ArrowLeft className="h-4 w-4" /> {t('fees.back')}
          </Link>
          <div className="grid gap-12 lg:grid-cols-[60%_40%]">
            {/* Left: pathway details */}
            <div>
              <p className="eyebrow">{t('services.eyebrow')}</p>
              <h1 className="section-title">{t(svc.titleKey)}</h1>
              <p className="mt-6 text-lg leading-relaxed text-[#0F2433]/65">{t(svc.textKey)}</p>
              <p className="mt-5 text-base leading-relaxed text-[#0F2433]/55">{t(svc.blurbKey)}</p>
              <div className="mt-10">
                <p className="text-xs font-semibold uppercase tracking-[.18em] text-[#0F2433]/50">{t('services.potentialSteps')}</p>
                <ol className="mt-6 grid gap-3">
                  {pathwaySteps.map((step, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#C8102E] font-mono text-xs text-white">{String(i + 1).padStart(2, '0')}</span>
                      <span className="font-heading text-lg text-[#0F2433]">{step}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 border-l-2 border-[#C5A059] bg-[#F4F7F9] px-5 py-4 text-sm italic leading-relaxed text-[#0F2433]/60">{t('services.stageNote')}</p>
              </div>
              <div className="mt-10 border-t border-[#0F2433]/10 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[.18em] text-[#0F2433]/50">Key factors</p>
                <p className="mt-3 text-sm text-[#0F2433]/60">{t(svc.factorsKey)}</p>
              </div>
            </div>
            {/* Right: contact form */}
            <div className="bg-white p-8 shadow-sm lg:sticky lg:top-32 lg:self-start">
              <h2 className="font-heading text-2xl text-[#0F2433]">{t('strategy.s3')}</h2>
              <p className="mt-2 text-sm text-[#0F2433]/55">{t('strategy.s3sub')}</p>
              <form onSubmit={submit} className="mt-7 grid gap-5">
                <label className="intake-label">{t('strategy.fullName')}
                  <input required value={form.full_name} onChange={set('full_name')} className="intake-input" />
                </label>
                <label className="intake-label">{t('strategy.email')}
                  <input required type="email" value={form.email} onChange={set('email')} className="intake-input" />
                </label>
                <label className="intake-label">{t('strategy.phoneOpt')}
                  <input value={form.phone} onChange={set('phone')} className="intake-input" />
                </label>
                <label className="intake-label">{t('strategy.summaryOpt')}
                  <textarea rows="4" value={form.summary} onChange={set('summary')} className="intake-input resize-none" />
                </label>
                <button disabled={saving} className="flex items-center justify-center gap-3 bg-[#C8102E] px-6 py-4 font-semibold text-white transition hover:bg-[#A00D24] disabled:opacity-40">
                  {saving ? t('strategy.sending') : t('strategy.submit')} <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}