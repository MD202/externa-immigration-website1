import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

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

  const services = [
    { id: 1, label: t('services.t1') },
    { id: 2, label: t('services.t2') },
    { id: 3, label: t('services.t3') },
    { id: 4, label: t('services.t4') },
    { id: 5, label: t('services.t5') },
    { id: 6, label: t('services.t6') },
    { id: 7, label: t('services.t7') },
    { id: 8, label: t('services.t8') },
    { id: 9, label: t('services.t9') },
  ];
  const aboutLinks = [
    { label: t('nav.aboutUs'), href: '/#about' },
    { label: t('howWeOperate.eyebrow'), href: '/#how-we-operate' },
    { label: t('nav.approach'), href: '/#approach' },
    { label: t('nav.fees'), href: '/fees' },
  ];

  return (
    <header ref={headerRef} className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${compact ? 'bg-white py-3 shadow-lg' : 'bg-white/95 py-4 backdrop-blur-md'}`}>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 lg:px-[8vw]">
        <Link to="/" className="flex items-center gap-3">
          <Compass className="h-8 w-8 text-[#C8102E]" />
          <span className="font-heading text-lg leading-tight text-[#0F2433]">Externa<span className="mt-0.5 block font-body text-[9px] uppercase tracking-[.22em] text-[#0F2433]/55">Immigration Solutions Inc</span></span>
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          <nav className="flex items-center gap-6" aria-label="Main navigation">
            <div className="relative">
              <button onClick={() => setOpenMenu(openMenu === 'services' ? null : 'services')} className="flex items-center gap-1 text-sm text-[#0F2433]/70 transition hover:text-[#C8102E]" aria-expanded={openMenu === 'services'}>
                {t('nav.services')} <ChevronDown className={`h-4 w-4 transition-transform ${openMenu === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {openMenu === 'services' && (
                <div className="absolute top-full left-0 pt-2 w-72">
                  <div className="grid gap-0 border border-[#0F2433]/10 bg-white py-2 shadow-xl">
                    {services.map((s) => (
                      <Link key={s.id} to={`/services/${s.id}`} onClick={() => setOpenMenu(null)} className="px-4 py-2.5 text-sm text-[#0F2433]/70 transition hover:bg-[#F4F7F9] hover:text-[#C8102E]">{s.label}</Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={() => setOpenMenu(openMenu === 'about' ? null : 'about')} className="flex items-center gap-1 text-sm text-[#0F2433]/70 transition hover:text-[#C8102E]" aria-expanded={openMenu === 'about'}>
                {t('nav.about')} <ChevronDown className={`h-4 w-4 transition-transform ${openMenu === 'about' ? 'rotate-180' : ''}`} />
              </button>
              {openMenu === 'about' && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="grid gap-0 border border-[#0F2433]/10 bg-white py-2 shadow-xl">
                    {aboutLinks.map((link) => (
                      <Link key={link.href} to={link.href} onClick={() => setOpenMenu(null)} className="px-4 py-2.5 text-sm text-[#0F2433]/70 transition hover:bg-[#F4F7F9] hover:text-[#C8102E]">{link.label}</Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>
          <Link to="/strategy-session" className="bg-[#C8102E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#A00D24]">{t('nav.book')}</Link>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-[#0F2433] lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2" aria-label="Toggle navigation" aria-expanded={mobileOpen} aria-controls="mobile-nav">{mobileOpen ? <X /> : <Menu />}</button>
      </div>
      {mobileOpen && (
        <nav id="mobile-nav" className="mx-5 mt-3 max-h-[70vh] overflow-y-auto rounded-lg border border-[#0F2433]/10 bg-white py-4 shadow-xl lg:hidden" aria-label="Mobile navigation">
          <p className="px-4 pb-2 text-xs font-semibold uppercase tracking-[.18em] text-[#0F2433]/40">{t('nav.services')}</p>
          {services.map((s) => (
            <Link key={s.id} onClick={() => setMobileOpen(false)} to={`/services/${s.id}`} className="block px-4 py-2.5 text-sm text-[#0F2433]/80">{s.label}</Link>
          ))}
          <div className="my-2 border-t border-[#0F2433]/10" />
          <Link onClick={() => setMobileOpen(false)} to="/#about" className="block px-4 py-3 text-[#0F2433]/80">{t('nav.aboutUs')}</Link>
          <Link onClick={() => setMobileOpen(false)} to="/#how-we-operate" className="block px-4 py-3 text-[#0F2433]/80">{t('howWeOperate.eyebrow')}</Link>
          <Link onClick={() => setMobileOpen(false)} to="/#approach" className="block px-4 py-3 text-[#0F2433]/80">{t('nav.approach')}</Link>
          <Link onClick={() => setMobileOpen(false)} to="/fees" className="block px-4 py-3 text-[#0F2433]/80">{t('nav.fees')}</Link>
          <Link to="/strategy-session" onClick={() => setMobileOpen(false)} className="m-3 bg-[#C8102E] px-4 py-3 text-center font-semibold text-white">{t('nav.book')}</Link>
        </nav>
      )}
    </header>
  );
}