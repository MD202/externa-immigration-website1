import { Link } from 'react-router-dom';
import { BadgeCheck, MapPin, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import Logo from '@/components/site/Logo';
import { useLanguage } from '@/lib/LanguageContext';

const CICC_URL = 'https://college-ic.ca/protecting-the-public/find-an-immigration-consultant/';

const TikTokIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#0F172A] px-5 py-16 text-white lg:px-[8vw]">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <Logo variant="light" className="h-9 w-9" />
              <span className="font-heading text-xl leading-tight">Externa<span className="mt-1 block font-body text-[10px] uppercase tracking-[.18em] text-white/55">Immigration Solutions Inc</span></span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/45">{t('footer.tagline')}</p>
            <p className="mt-4 flex items-center gap-2 text-sm text-white/55"><MapPin className="h-4 w-4 text-[#047857]" /> {t('truststrip.location')}</p>
            <p className="mt-1 text-sm text-white/55">{t('footer.remoteFirst')}</p>
            <p className="mt-1 text-sm text-white/55">{t('footer.languages')}</p>
            <a href="mailto:info@externaimmigration.com" className="mt-2 flex items-center gap-2 text-sm text-white/55 transition hover:text-[#047857]">
              <Mail className="h-4 w-4 text-[#047857]" /> info@externaimmigration.com
            </a>
            <div className="mt-5 flex gap-3">
              <a href="#" aria-label="Facebook" className="text-white/40 transition hover:text-[#047857]"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="text-white/40 transition hover:text-[#047857]"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="LinkedIn" className="text-white/40 transition hover:text-[#047857]"><Linkedin className="h-5 w-5" /></a>
              <a href="#" aria-label="TikTok" className="text-white/40 transition hover:text-[#047857]"><TikTokIcon className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[.2em] text-[#047857]">{t('footer.navigate')}</p>
            <div className="mt-5 grid gap-2.5 text-sm text-white/60">
              <Link to="/services/1" className="transition hover:text-[#047857]">{t('services.t1')}</Link>
              <Link to="/services/2" className="transition hover:text-[#047857]">{t('services.t2')}</Link>
              <Link to="/services/3" className="transition hover:text-[#047857]">{t('services.t3')}</Link>
              <Link to="/services/4" className="transition hover:text-[#047857]">{t('services.t4')}</Link>
              <Link to="/services/5" className="transition hover:text-[#047857]">{t('services.t5')}</Link>
              <Link to="/services/8" className="transition hover:text-[#047857]">{t('services.t8')}</Link>
              <Link to="/services/9" className="transition hover:text-[#047857]">{t('services.t9')}</Link>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[.2em] text-[#047857]">{t('nav.about')}</p>
            <div className="mt-5 grid gap-3 text-sm text-white/60">
              <Link to="/#about" className="transition hover:text-[#047857]">{t('nav.aboutUs')}</Link>
              <Link to="/#how-we-operate" className="transition hover:text-[#047857]">{t('howWeOperate.eyebrow')}</Link>
              <Link to="/#approach" className="transition hover:text-[#047857]">{t('nav.approach')}</Link>
              <Link to="/fees" className="transition hover:text-[#047857]">{t('nav.fees')}</Link>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[.2em] text-[#047857]">{t('footer.begin')}</p>
            <Link to="/strategy-session" className="mt-5 inline-flex border-b border-[#047857] pb-2 font-heading text-2xl text-white">{t('footer.book')}</Link>
            <a href={CICC_URL} target="_blank" rel="noopener noreferrer" className="mt-6 flex items-center gap-2 text-sm text-white/70 transition hover:text-[#047857]">
              <BadgeCheck className="h-5 w-5 text-[#047857]" />
              {t('footer.license')}
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs text-white/35 md:flex-row md:justify-between">
          <p>{t('footer.rights')}</p>
          <div className="flex gap-5">
            <a href="#" className="transition hover:text-white/60">{t('footer.privacy')}</a>
            <a href="#" className="transition hover:text-white/60">{t('footer.refund')}</a>
            <span>{t('footer.disclaimer')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}