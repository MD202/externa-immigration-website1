import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const TAG_KEY = 'externa-triage-tag';

export default function Triage({ onClose }) {
  const { t } = useLanguage();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '', q4: '' });
  const [result, setResult] = useState(null);

  const steps = (() => {
    const s = ['q1', 'q2'];
    if (answers.q1 === 'in') s.push('q3');
    s.push('q4');
    return s;
  })();
  const total = steps.length;
  const currentKey = steps[step];

  const questions = {
    q1: { prompt: t('triage.q1'), options: [{ v: 'in', label: t('triage.q1o1') }, { v: 'out', label: t('triage.q1o2') }] },
    q2in: { prompt: t('triage.q2in'), options: [{ v: 'valid', label: t('triage.q2in1') }, { v: 'expiring', label: t('triage.q2in2') }, { v: 'expired', label: t('triage.q2in3') }, { v: 'notsure', label: t('triage.q2in4') }] },
    q2out: { prompt: t('triage.q2out'), options: [{ v: 'nurse', label: t('triage.q2out1') }, { v: 'business', label: t('triage.q2out2') }, { v: 'skilled', label: t('triage.q2out3') }, { v: 'sponsor', label: t('triage.q2out4') }] },
    q3in: { prompt: t('triage.q3in'), options: [{ v: 'sponsoring', label: t('triage.q3in1') }, { v: 'pr', label: t('triage.q3in2') }, { v: 'refused', label: t('triage.q3in3') }, { v: 'fix', label: t('triage.q3in4') }] },
    q4: { prompt: t('triage.q4'), options: [{ v: 'fairness', label: t('triage.q4o1') }, { v: 'refusal', label: t('triage.q4o2') }, { v: 'other', label: t('triage.q4o3') }, { v: 'none', label: t('triage.q4o4') }] },
  };
  const qConfig = currentKey === 'q2' ? (answers.q1 === 'in' ? questions.q2in : questions.q2out) : currentKey === 'q3' ? questions.q3in : questions[currentKey];

  const route = (a) => {
    let key;
    if (a.q4 === 'fairness') key = 'URGENT';
    else if (a.q4 === 'refusal' || a.q3 === 'refused') key = 'REFUSAL';
    else if (a.q2 === 'expired' || a.q3 === 'fix') key = 'HC';
    else if (a.q3 === 'sponsoring' || a.q2 === 'sponsor') key = 'SPONSOR';
    else if (a.q2 === 'nurse') key = 'HEALTH';
    else if (a.q2 === 'business') key = 'BIZ';
    else key = 'GENERAL';
    setResult(key);
    try { sessionStorage.setItem(TAG_KEY, key); } catch { /* ignore */ }
  };

  const choose = (value) => {
    const next = { ...answers, [currentKey]: value };
    setAnswers(next);
    if (currentKey === 'q4') route(next);
    else setStep(step + 1);
  };

  const results = {
    URGENT: { tag: t('triage.urgentTag'), head: t('triage.urgentHead'), body: t('triage.urgentBody'), bring: t('triage.urgentBring'), cta: t('triage.ctaUrgent'), urgent: true },
    REFUSAL: { tag: t('triage.refusalTag'), head: t('triage.refusalHead'), body: t('triage.refusalBody'), bring: t('triage.refusalBring'), cta: t('triage.ctaBook') },
    HC: { tag: t('triage.hcTag'), head: t('triage.hcHead'), body: t('triage.hcBody'), bring: t('triage.hcBring'), cta: t('triage.ctaBook') },
    SPONSOR: { tag: t('triage.sponsorTag'), head: t('triage.sponsorHead'), body: t('triage.sponsorBody'), bring: t('triage.sponsorBring'), cta: t('triage.ctaBook') },
    HEALTH: { tag: t('triage.healthTag'), head: t('triage.healthHead'), body: t('triage.healthBody'), bring: t('triage.healthBring'), cta: t('triage.ctaBook') },
    BIZ: { tag: t('triage.bizTag'), head: t('triage.bizHead'), body: t('triage.bizBody'), bring: t('triage.bizBring'), cta: t('triage.ctaBook') },
    GENERAL: { tag: t('triage.generalTag'), head: t('triage.generalHead'), body: t('triage.generalBody'), bring: t('triage.generalBring'), cta: t('triage.ctaBook') },
  };
  const r = result ? results[result] : null;

  return (
    <div className="fixed inset-0 z-[200] overflow-y-auto bg-[#0E1A33]/95" role="dialog" aria-modal="true">
      <div className="mx-auto min-h-full max-w-3xl px-5 py-12 lg:px-8">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[.24em] text-[#B8860B]">{t('wayn.eyebrow')}</p>
          <button onClick={onClose} aria-label={t('triage.close')} className="text-white/60 transition hover:text-white"><X className="h-6 w-6" /></button>
        </div>

        {!r && (
          <div className="mt-10">
            <div className="flex items-center gap-2" aria-label={`Question ${step + 1} of ${total}`}>
              {steps.map((s, i) => (
                <span key={i} className={`h-1.5 w-8 rounded-full transition-colors ${i <= step ? 'bg-[#B8860B]' : 'bg-white/20'}`} />
              ))}
            </div>
            <h2 className="mt-8 font-heading text-3xl text-white sm:text-4xl">{qConfig.prompt}</h2>
            <div className="mt-8 grid gap-3">
              {qConfig.options.map((opt) => (
                <button key={opt.v} onClick={() => choose(opt.v)} className="group relative flex w-full items-center border border-[#1E2A4A]/12 bg-white px-6 py-5 text-left text-[#1E2A4A] shadow-sm transition hover:border-[#1E2A4A]/25 hover:shadow-md">
                  <span className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-[#1E2A4A] transition-transform duration-200 group-hover:scale-y-100" />
                  <span className="font-heading text-lg">{opt.label}</span>
                </button>
              ))}
            </div>
            {step > 0 && (
              <button onClick={() => setStep(step - 1)} className="mt-8 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white">
                <ArrowLeft className="h-4 w-4" /> {t('triage.back')}
              </button>
            )}
          </div>
        )}

        {r && (
          <div className="mt-10">
            <span className={`font-mono text-xs uppercase tracking-[.18em] ${r.urgent ? 'text-[#DC2626]' : 'text-[#B8860B]'}`}>{r.tag}</span>
            <h2 className="mt-3 font-heading text-3xl text-white sm:text-4xl">{r.head}</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">{r.body}</p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[.12em] text-[#B8860B]">{t('triage.bring')}</p>
            <p className="mt-2 text-base leading-relaxed text-white/60">{r.bring}</p>
            <Link to="/strategy-session" className="btn btn-primary mt-8">{r.cta} <ArrowRight className="h-4 w-4" /></Link>
            <p className="mt-6 max-w-xl text-xs leading-relaxed text-white/40">{t('triage.disclaimer')}</p>
          </div>
        )}
      </div>
    </div>
  );
}