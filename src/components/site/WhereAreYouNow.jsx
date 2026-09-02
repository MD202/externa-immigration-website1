import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import Reveal from '@/components/site/Reveal';
import Triage from '@/components/site/Triage';

const TAG_KEY = 'externa-triage-tag';

export default function WhereAreYouNow() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [triageOpen, setTriageOpen] = useState(false);
  const rows = [
    { tag: 'URGENT', title: t('wayn.r1t'), sub: t('wayn.r1s'), to: '/services/2', urgent: true },
    { tag: 'REFUSAL', title: t('wayn.r2t'), sub: t('wayn.r2s'), to: '/services/2' },
    { tag: 'STATUS', title: t('wayn.r3t'), sub: t('wayn.r3s'), to: '/services/3' },
    { tag: 'SPONSOR', title: t('wayn.r4t'), sub: t('wayn.r4s'), to: '/services/4' },
    { tag: 'HEALTH', title: t('wayn.r5t'), sub: t('wayn.r5s'), to: '/services/7' },
    { tag: 'BIZ', title: t('wayn.r6t'), sub: t('wayn.r6s'), to: '/services/6' },
    { tag: 'OTHER', title: t('wayn.r7t'), sub: t('wayn.r7s'), triage: true },
  ];
  const go = (row) => {
    try { sessionStorage.setItem(TAG_KEY, row.tag); } catch { /* ignore */ }
    if (row.triage) setTriageOpen(true);
    else navigate(row.to);
  };
  return (
    <section id="where" className="bg-[#1E2A4A] px-5 py-28 text-white lg:px-[8vw] lg:py-40">
      <div className="mx-auto max-w-[1240px]">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{t('wayn.eyebrow')}</p>
          <h2 className="section-title text-white">{t('wayn.heading')}</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">{t('wayn.sub')}</p>
        </Reveal>
        <Reveal className="mt-12 border border-white/14">
          {rows.map((row) => (
            <button key={row.tag} onClick={() => go(row)} className="group relative flex w-full items-center gap-6 border-b border-white/14 px-6 py-6 text-left transition-colors last:border-b-0 hover:bg-white/[.04] lg:min-h-[72px] lg:py-0">
              <span className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-[#B8860B] transition-transform duration-200 group-hover:scale-y-100" />
              <span className="flex-1">
                <span className="block font-heading text-lg text-white">{row.title}</span>
                <span className="mt-0.5 block text-sm text-white/50">{row.sub}</span>
              </span>
              <span className={`hidden font-mono text-xs uppercase tracking-[.18em] sm:block ${row.urgent ? 'text-[#DC2626]' : 'text-[#B8860B]/70'}`}>{row.tag}</span>
              <ChevronRight className="h-5 w-5 shrink-0 text-[#B8860B] transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          ))}
        </Reveal>
        <p className="mt-5 text-xs uppercase tracking-[.18em] text-white/40">{t('wayn.footer')}</p>
      </div>
      {triageOpen && <Triage onClose={() => setTriageOpen(false)} />}
    </section>
  );
}