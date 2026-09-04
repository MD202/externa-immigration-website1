import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import Logo from '@/components/site/Logo';
import { useLanguage } from '@/lib/LanguageContext';

const PHONE = '+1-647-909-9603';

export default function Header() {
  const { t } = useLanguage();
  const [compact, setCompact] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e) => { if (headerRef.current && !headerRef.current.contains(e.target)) setOpenMenu(null); };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const focusedAreas = [
    { label: t('nav.familySponsorship'), to: '/family-sponsorship' },
    { label: t('nav.hc'), to: '/humanitarian-compassionate' },
    { label: t('nav.refused'), to: '/refused-applications' },
    { label: t('nav.healthcare'), to: '/healthcare-professionals' },
    { label: t('nav.entrepreneurs'), to: '/entrepreneurs' },
    { label: t('nav.otherServices'), to: '/other-services' },
  ];
  const aboutLinks = [
    { label: t('nav.aboutUs'), to: '/about' },
    { label: t('nav.questions'), to: '/questions' },
    { label: t('nav.fees'), to: '/fees' },
    { label: t('nav.contact'), to: '/contact' },
  ];

  const dropdown = (label, items, name) => (
    <div className="relative">
      <button onClick={() => setOpenMenu(openMenu === name ? null : name)} className="flex items-center gap-1 text-sm text-[#1E2A4A]/70 transition hover:text-[#B8860B]" aria-expanded={openMenu === name}>
        {label} <ChevronDown className={`h-4 w-4 transition-transform ${openMenu === name ? 'rotate-180' : ''}`} />
      </button>
      {openMenu === name && (
        <div className="absolute top-full left-0 pt-2 w-56">
          <div className="grid gap-0 border border-[#1E2A4A]/10 bg-white py-2">
            {items.map((s) => (
              <Link key={s.to} to={s.to} onClick={() => setOpenMenu(null)} className="px-4 py-3 text-sm text-[#1E2A4A]/70 transition hover:text-[#B8860B]">{s.label}</Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <header ref={headerRef} className={`fixed inset-x-0 top-0 z-[100] bg-white shadow-sm transition-all duration-300 ${compact ? 'py-3' : 'py-4'}`}>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 lg:px-[8vw]">
        <Link to="/" className="flex items-center gap-3">
          <Logo className="h-11 w-11" />
          <span className="font-heading text-2xl leading-tight text-[#1E2A4A]">Externa<span className="mt-1 block font-body text-[11px] uppercase tracking-[.22em] text-[#1E2A4A]/55">Immigration Solutions Inc</span></span>
        </Link>
        <div className="hidden items-center gap-8 lg:flex">
          <nav className="flex items-center gap-6" aria-label="Main navigation">
            {dropdown(t('nav.focusedAreas'), focusedAreas, 'focusedAreas')}
            {dropdown(t('nav.about'), aboutLinks, 'about')}
          </nav>
          <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-sm text-[#1E2A4A]/70 transition hover:text-[#B8860B]"><Phone className="h-4 w-4 text-[#B8860B]" /> {PHONE}</a>
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-[#1E2A4A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B] focus-visible:ring-offset-2" aria-label="Toggle navigation" aria-expanded={mobileOpen} aria-controls="mobile-nav">{mobileOpen ? <X /> : <Menu />}</button>
        </div>
      </div>
      {mobileOpen && (
        <nav id="mobile-nav" className="mx-5 mt-3 max-h-[70vh] overflow-y-auto border border-[#1E2A4A]/10 bg-white py-4 lg:hidden" aria-label="Mobile navigation">
          <p className="px-4 pb-2 text-xs font-semibold uppercase tracking-[.18em] text-[#1E2A4A]/40">{t('nav.focusedAreas')}</p>
          {focusedAreas.map((s) => (
            <Link key={s.to} onClick={() => setMobileOpen(false)} to={s.to} className="block px-4 py-2.5 text-sm text-[#1E2A4A]/80">{s.label}</Link>
          ))}
          <div className="my-2 border-t border-[#1E2A4A]/10" />
          {aboutLinks.map((link) => (
            <Link key={link.to} onClick={() => setMobileOpen(false)} to={link.to} className="block px-4 py-3 text-[#1E2A4A]/80">{link.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}