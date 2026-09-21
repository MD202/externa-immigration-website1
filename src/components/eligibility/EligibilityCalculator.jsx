import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { useLanguage } from '@/lib/LanguageContext';

const SITUATION_MAP = {
  q1o1: { titleKey: 'services.t2', descKey: 'services.x2' },
  q1o2: { titleKey: 'services.t4', descKey: 'services.x4' },
  q1o3: { titleKey: 'services.t1', descKey: 'services.x1' },
  q1o4: { titleKey: 'services.t8', descKey: 'services.x8' },
  q1o5: { titleKey: 'services.t5', descKey: 'services.x5' },
  q1o6: { titleKey: 'services.t6', descKey: 'services.x6' },
  q1o7: { titleKey: 'services.t9', descKey: 'services.x9' },
  q1o8: { titleKey: 'services.t7', descKey: 'services.x7' },
};

const SCORE = {
  ageOpt1: 12, ageOpt2: 10, ageOpt3: 6,
  eduOpt1: 6, eduOpt2: 9, eduOpt3: 11, eduOpt4: 13,
  expOpt1: 0, expOpt2: 6, expOpt3: 8,
  langOpt1: 4, langOpt2: 8, langOpt3: 12,
};
const MAX_SCORE = 12 + 13 + 8 + 12;

const QUESTIONS = [
  { key: 'q1', options: ['q1o1', 'q1o2', 'q1o3', 'q1o4', 'q1o5', 'q1o6', 'q1o7', 'q1o8'] },
  { key: 'qAge', options: ['ageOpt1', 'ageOpt2', 'ageOpt3'] },
  { key: 'qEdu', options: ['eduOpt1', 'eduOpt2', 'eduOpt3', 'eduOpt4'] },
  { key: 'qExp', options: ['expOpt1', 'expOpt2', 'expOpt3'] },
  { key: 'qLang', options: ['langOpt1', 'langOpt2', 'langOpt3'] },
];

const FACTOR_KEYS = ['qAge', 'qEdu', 'qExp', 'qLang'];

export default function EligibilityCalculator() {
  const { t } = useLanguage();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ q1: '', qAge: '', qEdu: '', qExp: '', qLang: '' });
  const [contact, setContact] = useState({ full_name: '', email: '', phone: '' });
  const [saving, setSaving] = useState(false);
  const [sent, setSent] = useState(false);

  const total = QUESTIONS.length;
  const isResult = step >= total;

  const choose = (qKey, value) => {
    setAnswers((a) => ({ ...a, [qKey]: value }));
    setStep((s) => s + 1);
  };

  const reset = () => {
    setStep(0);
    setAnswers({ q1: '', qAge: '', qEdu: '', qExp: '', qLang: '' });
  };

  const raw = SCORE[answers.qAge] + SCORE[answers.qEdu] + SCORE[answers.qExp] + SCORE[answers.qLang];
  const score = Math.round((raw / MAX_SCORE) * 100);
  const band = score >= 75 ? 'bandStrong' : score >= 50 ? 'bandPromising' : 'bandDeveloping';
  const svc = SITUATION_MAP[answers.q1];

  const submit = async (e) => {
    e.preventDefault();
    setSaving(true);
    await base44.entities.Lead.create({
      first_name: contact.full_name,
      last_name: '',
      pathway: svc ? t(svc.titleKey) : '',
      email: contact.email,
      phone: contact.phone,
      owner: 'Unassigned',
      status: 'new',
      session_date: '',
      notes: `${t(`eligibility.${answers.q1}`)} · ${score}/100 · ${t(`eligibility.${band}`)}`,
    });
    setSaving(false);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="mx-auto max-w-xl text-center">
        <h1 className="font-heading text-4xl text-[#1E2A4A] sm:text-5xl">{t('eligibility.successTitle')}</h1>
        <p className="mt-5 text-lg leading-relaxed text-[#1E2A4A]/60">{t('eligibility.successBody')}</p>
        <Link to="/" className="btn btn-outline mt-8">{t('eligibility.successBack')}</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <p className="eyebrow">{t('eligibility.eyebrow')}</p>
      <h1 className="section-title">{t('eligibility.title')}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#1E2A4A]/65">{t('eligibility.subtitle')}</p>

      {!isResult ? (
        <div className="mt-14">
          <div className="h-px w-full bg-[#1E2A4A]/10">
            <div className="h-px bg-[#B8860B] transition-all duration-500" style={{ width: `${(step / total) * 100}%` }} />
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[.18em] text-[#1E2A4A]/50">
            {t('eligibility.stepOf').replace('{n}', String(step + 1)).replace('{total}', String(total))}
          </p>
          <h2 className="mt-4 font-heading text-3xl leading-tight text-[#1E2A4A] sm:text-4xl">{t(`eligibility.${QUESTIONS[step].key}`)}</h2>
          <div className="mt-10">
            {QUESTIONS[step].options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => choose(QUESTIONS[step].key, opt)}
                className="group relative flex w-full items-center justify-between gap-4 border-b border-[#1E2A4A]/10 px-5 py-6 text-left transition hover:bg-[#1E2A4A]/[0.02]"
              >
                <span className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-[#B8860B] transition-transform duration-200 group-hover:scale-y-100" />
                <span className="text-lg text-[#1E2A4A]/80">{t(`eligibility.${opt}`)}</span>
                <ArrowRight className="h-5 w-5 shrink-0 text-[#B8860B] transition-transform group-hover:translate-x-1" />
              </button>
            ))}
          </div>
          {step > 0 && (
            <button type="button" onClick={() => setStep(step - 1)} className="mt-8 flex items-center gap-2 text-sm text-[#1E2A4A]/55 transition hover:text-[#1E2A4A]">
              <ArrowLeft className="h-4 w-4" /> {t('eligibility.back')}
            </button>
          )}
        </div>
      ) : (
        <div className="mt-14">
          <p className="eyebrow">{t('eligibility.scoreLabel')}</p>
          <div className="mt-4 flex items-end gap-3">
            <span className="font-heading text-7xl leading-none text-[#B8860B] sm:text-8xl">{score}</span>
            <span className="mb-2 text-2xl text-[#1E2A4A]/40">/100</span>
          </div>
          <p className="mt-3 font-heading text-2xl text-[#1E2A4A]">{t(`eligibility.${band}`)}</p>

          <div className="mt-10 border-t border-[#1E2A4A]/10 pt-8">
            <p className="eyebrow">{t('eligibility.resultEyebrow')}</p>
            <h2 className="mt-3 font-heading text-3xl text-[#1E2A4A]">{svc ? t(svc.titleKey) : ''}</h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-[#1E2A4A]/65">{svc ? t(svc.descKey) : ''}</p>
          </div>

          <div className="mt-8 border-t border-[#1E2A4A]/10 pt-8">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-[#1E2A4A]/50">{t('eligibility.factorsLabel')}</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {FACTOR_KEYS.map((k) => (
                <li key={k} className="flex justify-between gap-4 border-b border-[#1E2A4A]/10 pb-3 text-sm">
                  <span className="text-[#1E2A4A]/55">{t(`eligibility.${k}`)}</span>
                  <span className="text-right font-medium text-[#1E2A4A]">{t(`eligibility.${answers[k]}`)}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 border-l-2 border-[#B8860B] bg-white px-5 py-4 text-sm italic leading-relaxed text-[#1E2A4A]/60">{t('eligibility.resultNote')}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/strategy-session" className="btn btn-primary">{t('eligibility.bookConsult')} <ArrowRight className="h-4 w-4" /></Link>
            <button type="button" onClick={reset} className="btn btn-outline"><RotateCcw className="h-4 w-4" /> {t('eligibility.recalc')}</button>
          </div>

          <form onSubmit={submit} className="mt-12 border-t border-[#1E2A4A]/10 pt-10">
            <h3 className="font-heading text-2xl text-[#1E2A4A]">{t('eligibility.formTitle')}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#1E2A4A]/55">{t('eligibility.formSubtitle')}</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="intake-label">{t('eligibility.fullName')}
                <input required value={contact.full_name} onChange={(e) => setContact({ ...contact, full_name: e.target.value })} className="intake-input" />
              </label>
              <label className="intake-label">{t('eligibility.email')}
                <input required type="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} className="intake-input" />
              </label>
              <label className="intake-label sm:col-span-2">{t('eligibility.phoneOpt')}
                <input value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} className="intake-input" />
              </label>
            </div>
            <button type="submit" disabled={saving} className="btn btn-primary mt-7 disabled:opacity-50">
              {saving ? t('eligibility.sending') : t('eligibility.submit')} <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}