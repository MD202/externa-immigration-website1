import { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { useLanguage } from '@/lib/LanguageContext';
import { usePageMeta } from '@/lib/usePageMeta';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Reveal from '@/components/site/Reveal';
import { Image } from '@/components/ui/image';

const TAG_KEY = 'externa-triage-tag';
const PHONE = '+1-437-605-8005';
const HERO_IMG = 'https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/929ea20db_generated_image.png';
const CONSENT_TEXT = "I consent to being contacted by Externa about my inquiry using the details I've provided, and I agree to receive the newsletter by email. This form is an inquiry, not a booking or paid consultation.";

export default function Contact() {
  const { t } = useLanguage();
  usePageMeta(t('contact.meta.title'), t('contact.meta.description'));
  const [form, setForm] = useState({ full_name: '', email: '', phone: '', where: '', situation: '', briefly: '', language: 'English' });
  const [loc, setLoc] = useState('inside');
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [consent, setConsent] = useState(false);
  const opts = [1, 2, 3, 4, 5, 6, 7, 8].map((i) => t(`contact.opt${i}`));
  const langs = [t('contact.lang.en'), t('contact.lang.ta'), t('contact.lang.hi')];

  const set = (k, v) => setForm({ ...form, [k]: v });
  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      let tag = '';
      try { tag = sessionStorage.getItem(TAG_KEY) || ''; } catch { /* ignore */ }
      await base44.entities.Lead.create({
        full_name: form.full_name,
        email: form.email,
        phone: form.phone,
        situation: `Location: ${loc === 'inside' ? 'Inside Canada' : 'Outside Canada'}\nWhere you are: ${form.where}\nSituation: ${form.situation}\nPreferred language: ${form.language}\n\n${form.briefly}`,
        recommended_pathway: form.situation,
        urgency: tag,
        status: 'new',
      });
      try {
        const [firstName, ...rest] = (form.full_name || '').split(' ');
        await base44.functions.invoke('appendLeadToSheet', {
          source: 'Contact Us',
          firstName, lastName: rest.join(' '), email: form.email, phone: form.phone,
          lookingFor: form.situation, urgency: tag,
          notes: `Location: ${loc}, Where: ${form.where}, Language: ${form.language}, Briefly: ${form.briefly}`,
        });
      } catch (sheetErr) { console.error('Sheet log failed:', sheetErr); }
      setDone(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="bg-[#FBFAF8]">
      <Header />
      <section className="relative overflow-hidden bg-[#13203F] text-white">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Image src={HERO_IMG} fittingType="fill" className="h-full w-full opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#13203F]/80 via-[#13203F]/60 to-[#13203F]" />
        </div>
        <div className="relative mx-auto max-w-[1440px] px-5 pt-36 pb-8 lg:px-[8vw] lg:pt-44 lg:pb-10">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[.24em] text-[#B8860B]">{t('contact.hero.eyebrow')}</p>
            <h1 className="mt-5 font-heading text-[40px] leading-[1.06] sm:text-5xl lg:text-[56px]">{t('contact.hero.headline')}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">{t('contact.hero.body')}</p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pt-8 pb-16 lg:px-[8vw] lg:pt-10 lg:pb-24">
        <div className="mx-auto max-w-[680px]">
          <Reveal>
            <div className="border-b border-[#1E2A4A]/12 pb-6">
              <p className="text-base text-[#1E2A4A]/70">{t('contact.call.label')}</p>
              <a href={`tel:${PHONE}`} className="mt-1 inline-block font-heading text-2xl text-[#1E2A4A] transition hover:text-[#B8860B]">{PHONE}</a>
              <p className="mt-1 text-sm text-[#1E2A4A]/55">{t('contact.call.hours')}</p>
            </div>
          </Reveal>
          <Reveal className="mt-8">
            <p className="intake-label mb-3">{t('contact.loc.label')}</p>
            <div className="grid grid-cols-2 gap-3">
              <button type="button" onClick={() => setLoc('inside')} className={`flex flex-col items-start gap-1 border p-5 text-left transition ${loc === 'inside' ? 'border-[#B8860B] bg-[#B8860B]/5' : 'border-[#1E2A4A]/20 hover:border-[#1E2A4A]/40'}`}>
                <span className="flex items-center gap-2 font-heading text-lg text-[#1E2A4A]"><MapPin className="h-4 w-4 text-[#B8860B]" /> {t('contact.loc.inside')}</span>
                <span className="text-sm text-[#1E2A4A]/55">{t('contact.loc.insideHint')}</span>
              </button>
              <button type="button" onClick={() => setLoc('outside')} className={`flex flex-col items-start gap-1 border p-5 text-left transition ${loc === 'outside' ? 'border-[#B8860B] bg-[#B8860B]/5' : 'border-[#1E2A4A]/20 hover:border-[#1E2A4A]/40'}`}>
                <span className="flex items-center gap-2 font-heading text-lg text-[#1E2A4A]"><MapPin className="h-4 w-4 text-[#B8860B]" /> {t('contact.loc.outside')}</span>
                <span className="text-sm text-[#1E2A4A]/55">{t('contact.loc.outsideHint')}</span>
              </button>
            </div>
          </Reveal>

          {done ? (
            <Reveal className="mt-10 border border-[#1E2A4A]/15 bg-white p-8">
              <h2 className="font-heading text-2xl text-[#1E2A4A]">{t('contact.success.title')}</h2>
              <p className="mt-3 text-base leading-relaxed text-[#1E2A4A]/70">{t('contact.success.body')}</p>
            </Reveal>
          ) : (
            <form onSubmit={submit} className="mt-10 grid gap-7">
              <label className="intake-label">{t('contact.name')}*
                <input required value={form.full_name} onChange={(e) => set('full_name', e.target.value)} className="intake-input" />
              </label>
              <label className="intake-label">{t('contact.email')}*
                <input required type="email" value={form.email} onChange={(e) => set('email', e.target.value)} className="intake-input" />
              </label>
              <label className="intake-label">{t('contact.phone')}
                <input value={form.phone} onChange={(e) => set('phone', e.target.value)} className="intake-input" />
              </label>
              <label className="intake-label">{t('contact.where')}
                <input value={form.where} onChange={(e) => set('where', e.target.value)} className="intake-input" />
              </label>
              <label className="intake-label">{t('contact.situation')}
                <select value={form.situation} onChange={(e) => set('situation', e.target.value)} className="intake-input">
                  <option value="" disabled></option>
                  {opts.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </label>
              <label className="intake-label">{t('contact.briefly')}
                <textarea rows={4} value={form.briefly} onChange={(e) => set('briefly', e.target.value)} className="intake-input resize-none" />
              </label>
              <label className="intake-label">{t('contact.language')}
                <select value={form.language} onChange={(e) => set('language', e.target.value)} className="intake-input">
                  {langs.map((l) => <option key={l} value={l}>{l}</option>)}
                </select>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1 h-5 w-5 accent-[#B8860B]" required />
                <span className="text-sm leading-relaxed text-[#1E2A4A]/70">{CONSENT_TEXT}</span>
              </label>
              <button type="submit" disabled={submitting || !consent} className="btn btn-primary mt-2 disabled:opacity-60">{t('contact.submit')} <ArrowRight className="h-4 w-4" /></button>
            </form>
          )}
          <div className="mt-10 grid gap-2 text-sm text-[#1E2A4A]/60">
            <p>{t('contact.reply')}</p>
            <p>{t('contact.nodocs')}</p>
            <p>{t('contact.evening')}</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}