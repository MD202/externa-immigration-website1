import { Link } from 'react-router-dom';
import { BadgeCheck, MapPin, Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';
import Logo from '@/components/site/Logo';
import { useLanguage } from '@/lib/LanguageContext';

const CICC_URL = 'https://register.college-ic.ca/';
const PHONE = '+1-437-605-8005';
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Markham%2C%20Ontario%2C%20Canada';

const TikTokIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export default function Footer() {
  const { t } = useLanguage();
  const focusedAreas = [
    { label: t('nav.familySponsorship'), to: '/family-sponsorship' },
    { label: t('nav.hc'), to: '/humanitarian-compassionate' },
    { label: t('nav.refused'), to: '/refused-applications' },
    { label: t('nav.healthcare'), to: '/healthcare-professionals' },
    { label: t('nav.entrepreneurs'), to: '/entrepreneurs' },
    { label: t('nav.otherServices'), to: '/other-services' },
  ];
  return (
    <footer className="bg-[#13203F] px-5 py-16 text-white lg:px-[8vw] lg:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 pb-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <Logo variant="light" className="h-9 w-9" />
              <span className="font-heading text-xl leading-tight">Externa<span className="mt-1 block font-body text-[10px] uppercase tracking-[.18em] text-white/55">Immigration Solutions Inc</span></span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/45">{t('foot.col1.desc')}</p>
            <a href={CICC_URL} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center gap-2 text-sm text-white/55 transition hover:text-[#B8860B]"><BadgeCheck className="h-4 w-4 text-[#B8860B]" /> {t('foot.col1.licence')}</a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="mt-1 flex items-center gap-2 text-sm text-white/55 transition hover:text-[#B8860B]"><MapPin className="h-4 w-4 text-[#B8860B]" /> {t('foot.col1.location')}</a>
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
              {focusedAreas.map((s) => <Link key={s.to} to={s.to} className="transition hover:text-[#B8860B]">{s.label}</Link>)}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[.2em] text-[#B8860B]">{t('foot.col4.title')}</p>
            <div className="mt-5 grid gap-2.5 text-sm text-white/60">
              <Link to="/strategy-session" className="transition hover:text-[#B8860B]">{t('foot.col4.book')}</Link>
              <span className="text-white/45">{t('foot.col4.evening')}</span>
              <Link to="/fees" className="transition hover:text-[#B8860B]">{t('foot.col4.fees')}</Link>
              <Link to="/about#questions" className="transition hover:text-[#B8860B]">{t('foot.col4.questions')}</Link>
              <a href={CICC_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition hover:text-[#B8860B]"><BadgeCheck className="h-4 w-4 text-[#B8860B]" /> {t('foot.col4.verify')}</a>
            </div>
          </div>
        </div>
        <p className="border-t border-white/10 pt-6 text-xs leading-relaxed text-white/40">{t('foot.legal.disclaimer')}</p>
        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/35 md:flex-row md:justify-between">
          <p>{t('foot.legal.rights')}</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="transition hover:text-white/60">{t('foot.legal.privacy')}</Link>
            <Link to="/refund-policy" className="transition hover:text-white/60">{t('foot.legal.refund')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}