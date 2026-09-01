import { Link } from 'react-router-dom';
import { Compass, BadgeCheck, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const CICC_URL = 'https://college-ic.ca/protecting-the-public/find-an-immigration-consultant/';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#0A1A26] px-5 py-16 text-white lg:px-[8vw]">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-4">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <Compass className="text-[#C8102E]" />
              <span className="font-heading text-xl">Externa<span className="mt-1 block font-body text-[9px] uppercase tracking-[.22em] text-white/55">Immigration Solutions Inc</span></span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/45">{t('footer.tagline')}</p>
            <p className="mt-4 flex items-center gap-2 text-sm text-white/55"><MapPin className="h-4 w-4 text-[#C8102E]" /> {t('truststrip.location')}</p>
            <p className="mt-1 text-sm text-white/55">{t('footer.remoteFirst')}</p>
            <p className="mt-1 text-sm text-white/55">{t('footer.languages')}</p>
            <div className="mt-5 flex gap-3">
              <a href="#" aria-label="Facebook" className="text-white/40 transition hover:text-[#C8102E]"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="text-white/40 transition hover:text-[#C8102E]"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="LinkedIn" className="text-white/40 transition hover:text-[#C8102E]"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[.2em] text-[#C5A059]">{t('footer.navigate')}</p>
            <div className="mt-5 grid gap-2.5 text-sm text-white/60">
              <Link to="/services/1" className="transition hover:text-[#C8102E]">{t('services.t1')}</Link>
              <Link to="/services/2" className="transition hover:text-[#C8102E]">{t('services.t2')}</Link>
              <Link to="/services/3" className="transition hover:text-[#C8102E]">{t('services.t3')}</Link>
              <Link to="/services/4" className="transition hover:text-[#C8102E]">{t('services.t4')}</Link>
              <Link to="/services/5" className="transition hover:text-[#C8102E]">{t('services.t5')}</Link>
              <Link to="/services/8" className="transition hover:text-[#C8102E]">{t('services.t8')}</Link>
              <Link to="/services/9" className="transition hover:text-[#C8102E]">{t('services.t9')}</Link>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[.2em] text-[#C5A059]">{t('nav.about')}</p>
            <div className="mt-5 grid gap-3 text-sm text-white/60">
              <a href="#about" className="transition hover:text-[#C8102E]">{t('nav.aboutUs')}</a>
              <a href="#how-we-operate" className="transition hover:text-[#C8102E]">{t('howWeOperate.eyebrow')}</a>
              <a href="#approach" className="transition hover:text-[#C8102E]">{t('nav.approach')}</a>
              <Link to="/fees" className="transition hover:text-[#C8102E]">{t('nav.fees')}</Link>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[.2em] text-[#C5A059]">{t('footer.begin')}</p>
            <Link to="/strategy-session" className="mt-5 inline-flex border-b border-[#C8102E] pb-2 font-heading text-2xl text-white">{t('footer.book')}</Link>
            <a href={CICC_URL} target="_blank" rel="noopener noreferrer" className="mt-6 flex items-center gap-2 text-sm text-white/70 transition hover:text-[#C8102E]">
              <BadgeCheck className="h-5 w-5 text-[#C8102E]" />
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