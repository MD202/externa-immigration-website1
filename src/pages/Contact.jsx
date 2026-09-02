import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { useLanguage } from '@/lib/LanguageContext';
import { usePageMeta } from '@/lib/usePageMeta';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Reveal from '@/components/site/Reveal';

const TAG_KEY = 'externa-triage-tag';

export default function Contact() {
  const { t } = useLanguage();
  usePageMeta(t('contact.meta.title'), t('contact.meta.description'));
  const [form, setForm] = useState({ full_name: '', email: '', phone: '', where: '', situation: '', briefly: '', language: 'English' });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
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
        situation: `Where you are: ${form.where}\nSituation: ${form.situation}\nPreferred language: ${form.language}\n\n${form.briefly}`,
        recommended_pathway: form.situation,
        urgency: tag,
        status: 'new',
      });
      setDone(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="bg-[#FBFAF8]">
      <Header />
      <section className="px-5 pt-32 pb-20 lg:px-[8vw] lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-[680px]">
          <Reveal>
            <h1 className="font-heading text-[40px] leading-[1.08] text-[#1E2A4A] sm:text-5xl lg:text-[56px]">{t('contact.heading')}</h1>
            <p className="mt-5 text-lg leading-relaxed text-[#1E2A4A]/65">{t('contact.intro')}</p>
          </Reveal>
          {done ? (
            <Reveal className="mt-12 border border-[#1E2A4A]/15 bg-white p-8">
              <h2 className="font-heading text-2xl text-[#1E2A4A]">{t('contact.success.title')}</h2>
              <p className="mt-3 text-base leading-relaxed text-[#1E2A4A]/70">{t('contact.success.body')}</p>
            </Reveal>
          ) : (
            <form onSubmit={submit} className="mt-12 grid gap-7">
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
              <button type="submit" disabled={submitting} className="btn btn-primary mt-2 disabled:opacity-60">{t('contact.submit')} <ArrowRight className="h-4 w-4" /></button>
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