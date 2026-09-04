import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const TAG_KEY = 'externa-triage-tag';

export default function WhereAreYouNow({ onOpenTriage }) {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const rows = [
    { tag: 'URGENT', title: t('wayn.r1t'), sub: t('wayn.r1s'), to: '/refused-applications#fairness', urgent: true },
    { tag: 'REFUSAL', title: t('wayn.r2t'), sub: t('wayn.r2s'), to: '/refused-applications' },
    { tag: 'STATUS', title: t('wayn.r3t'), sub: t('wayn.r3s'), to: '/humanitarian-compassionate' },
    { tag: 'SPONSOR', title: t('wayn.r4t'), sub: t('wayn.r4s'), to: '/family-sponsorship' },
    { tag: 'HEALTH', title: t('wayn.r5t'), sub: t('wayn.r5s'), to: '/healthcare-professionals' },
    { tag: 'BIZ', title: t('wayn.r6t'), sub: t('wayn.r6s'), to: '/entrepreneurs' },
    { tag: 'OTHER', title: t('wayn.r7t'), sub: t('wayn.r7s'), triage: true },
  ];
  const go = (row) => {
    try { sessionStorage.setItem(TAG_KEY, row.tag); } catch { /* ignore */ }
    if (row.triage) onOpenTriage?.();
    else navigate(row.to);
  };
  return (
    <div id="where" className="hero-in border border-white/14 bg-[#1E2A4A] p-6 lg:p-8" style={{ animationDelay: '0.6s' }}>
        <p className="text-xs uppercase tracking-[.24em] text-[#B8860B]">{t('wayn.eyebrow')}</p>
        <h2 className="mt-3 font-heading text-2xl text-white">{t('wayn.heading')}</h2>
        <p className="mt-2 text-sm text-white/50">{t('wayn.sub')}</p>
        <div className="mt-5">
          {rows.map((row) => (
            <button key={row.tag} onClick={() => go(row)} className="group relative flex w-full items-center gap-4 border-b border-white/14 py-4 pl-4 text-left transition-colors last:border-b-0 hover:bg-white/[.04]">
              <span className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-[#B8860B] transition-transform duration-200 group-hover:scale-y-100" />
              <span className="flex-1">
                <span className="block font-heading text-base text-white">{row.title}</span>
                <span className="mt-0.5 block text-xs text-white/50">{row.sub}</span>
              </span>
              <span className={`hidden font-mono text-[10px] uppercase tracking-[.18em] sm:block ${row.urgent ? 'text-[#DC2626]' : 'text-[#B8860B]/70'}`}>{row.tag}</span>
              <ChevronRight className="h-4 w-4 shrink-0 text-[#B8860B] transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          ))}
        </div>
        <p className="mt-4 text-[11px] uppercase tracking-[.18em] text-white/40">{t('wayn.footer')}</p>
      </div>
  );
}