import { Link } from 'react-router-dom';
import { BadgeCheck, MapPin, Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';
import Logo from '@/components/site/Logo';
import { useLanguage } from '@/lib/LanguageContext';

const CICC_URL = 'https://register.college-ic.ca/';
const PHONE = '+1-647-909-9603';

const TikTokIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export default function Footer() {
  const { t } = useLanguage();
  const inCanada = [
    { label: t('nav.familySponsorship'), to: '/services/4' },
    { label: t('nav.hc'), to: '/services/3' },
    { label: t('nav.refused'), to: '/refused-applications' },
    { label: t('nav.otherServices'), to: '/services/9' },
  ];
  const fromAbroad = [
    { label: t('nav.healthcare'), to: '/services/7' },
    { label: t('nav.entrepreneurs'), to: '/services/6' },
    { label: t('nav.studyWork'), to: '/services/9' },
    { label: t('nav.prExpress'), to: '/services/5' },
  ];
  return (
    <footer className="bg-[#13203F] px-5 py-16 text-white lg:px-[8vw] lg:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <Logo variant="light" className="h-9 w-9" />
              <span className="font-heading text-xl leading-tight">Externa<span className="mt-1 block font-body text-[10px] uppercase tracking-[.18em] text-white/55">Immigration Solutions Inc</span></span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/45">{t('foot.col1.desc')}</p>
            <p className="mt-4 flex items-center gap-2 text-sm text-white/55"><MapPin className="h-4 w-4 text-[#B8860B]" /> {t('foot.col1.location')}</p>
            <p className="mt-1 text-sm text-white/55">{t('foot.col1.remote')}</p>
            <p className="mt-1 text-sm text-white/55">{t('foot.col1.langs')}</p>
            <a href={`tel:${PHONE}`} className="mt-2 flex items-center gap-2 text-sm text-white/55 transition hover:text-[#B8860B]"><Phone className="h-4 w-4 text-[#B8860B]" /> {PHONE}</a>
            <a href="mailto:info@externaimmigration.com" className="mt-1 flex items-center gap-2 text-sm text-white/55 transition hover:text-[#B8860B]"><Mail className="h-4 w-4 text-[#B8860B]" /> info@externaimmigration.com</a>
            <div className="mt-5 flex gap-3">
              <a href="#" aria-label="Facebook" className="text-white/40 transition hover:text-[#B8860B]"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="text-white/40 transition hover:text-[#B8860B]"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="LinkedIn" className="text-white/40 transition hover:text-[#B8860B]"><Linkedin className="h-5 w-5" /></a>
              <a href="#" aria-label="TikTok" className="text-white/40 transition hover:text-[#B8860B]"><TikTokIcon className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[.2em] text-[#B8860B]">{t('foot.col2.title')}</p>
            <div className="mt-5 grid gap-2.5 text-sm text-white/60">
              {inCanada.map((s) => <Link key={s.to + s.label} to={s.to} className="transition hover:text-[#B8860B]">{s.label}</Link>)}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[.2em] text-[#B8860B]">{t('foot.col3.title')}</p>
            <div className="mt-5 grid gap-2.5 text-sm text-white/60">
              {fromAbroad.map((s) => <Link key={s.to + s.label} to={s.to} className="transition hover:text-[#B8860B]">{s.label}</Link>)}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[.2em] text-[#B8860B]">{t('foot.col4.title')}</p>
            <div className="mt-5 grid gap-2.5 text-sm text-white/60">
              <Link to="/strategy-session" className="transition hover:text-[#B8860B]">{t('foot.col4.book')}</Link>
              <span className="text-white/45">{t('foot.col4.evening')}</span>
              <Link to="/fees" className="transition hover:text-[#B8860B]">{t('foot.col4.fees')}</Link>
              <Link to="/questions" className="transition hover:text-[#B8860B]">{t('foot.col4.questions')}</Link>
              <a href={CICC_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition hover:text-[#B8860B]"><BadgeCheck className="h-4 w-4 text-[#B8860B]" /> {t('foot.col4.verify')}</a>
            </div>
          </div>
        </div>
        <div className="border-b border-white/10 py-8 text-center text-xs leading-relaxed text-white/50">
          <p>{t('foot.legal.licensee')}</p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="border border-white/20 px-3 py-1 font-mono uppercase tracking-[.12em] text-white/60">RCIC Licensee</span>
            <span className="border border-white/20 px-3 py-1 font-mono uppercase tracking-[.12em] text-white/60">CAPIC Member</span>
          </div>
        </div>
        <p className="py-8 text-xs leading-relaxed text-white/40">{t('foot.legal.disclaimer')}</p>
        <div className="flex flex-col gap-3 pt-2 text-xs text-white/35 md:flex-row md:justify-between">
          <p>{t('foot.legal.rights')}</p>
          <div className="flex gap-5">
            <a href="#" className="transition hover:text-white/60">{t('foot.legal.privacy')}</a>
            <a href="#" className="transition hover:text-white/60">{t('foot.legal.refund')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}