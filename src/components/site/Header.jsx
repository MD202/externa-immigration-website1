import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Header() {
  const { t } = useLanguage();
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const aboutLinks = [
    { label: t('nav.aboutUs'), href: '#about', external: false },
    { label: t('nav.approach'), href: '#approach', external: false },
    { label: t('nav.fees'), href: '/fees', external: true },
  ];
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${compact ? 'bg-white py-3 shadow-lg' : 'bg-white/95 py-4 backdrop-blur-md'}`}>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 lg:px-[8vw]">
        <a href="#top" className="flex items-center gap-3">
          <Compass className="h-8 w-8 text-[#C8102E]" />
          <span className="font-heading text-lg leading-tight text-[#0F2433]">Externa<span className="mt-0.5 block font-body text-[9px] uppercase tracking-[.22em] text-[#0F2433]/55">Immigration Solutions Inc</span></span>
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          <nav className="flex items-center gap-6" aria-label="Main navigation">
            <a href="#services" className="text-sm text-[#0F2433]/70 transition hover:text-[#C8102E]">{t('nav.services')}</a>
            <div className="relative" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
              <button className="flex items-center gap-1 text-sm text-[#0F2433]/70 transition hover:text-[#C8102E]" aria-expanded={aboutOpen}>
                {t('nav.about')} <ChevronDown className="h-4 w-4" />
              </button>
              {aboutOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="grid gap-1 border border-[#0F2433]/10 bg-white py-2 shadow-xl">
                    {aboutLinks.map(link => link.external ? (
                      <Link key={link.href} to={link.href} className="px-4 py-2 text-sm text-[#0F2433]/70 hover:text-[#C8102E]">{link.label}</Link>
                    ) : (
                      <a key={link.href} href={link.href} className="px-4 py-2 text-sm text-[#0F2433]/70 hover:text-[#C8102E]">{link.label}</a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>
          <Link to="/strategy-session" className="bg-[#C8102E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#A00D24]">{t('nav.book')}</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="text-[#0F2433] lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2" aria-label="Toggle navigation" aria-expanded={open} aria-controls="mobile-nav">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav id="mobile-nav" className="mx-5 mt-3 grid gap-1 rounded-lg border border-[#0F2433]/10 bg-white py-4 shadow-xl lg:hidden" aria-label="Mobile navigation">
          <a onClick={() => setOpen(false)} href="#services" className="px-4 py-3 text-[#0F2433]/80">{t('nav.services')}</a>
          <a onClick={() => setOpen(false)} href="#about" className="px-4 py-3 text-[#0F2433]/80">{t('nav.aboutUs')}</a>
          <a onClick={() => setOpen(false)} href="#approach" className="px-4 py-3 text-[#0F2433]/80">{t('nav.approach')}</a>
          <Link onClick={() => setOpen(false)} to="/fees" className="px-4 py-3 text-[#0F2433]/80">{t('nav.fees')}</Link>
          <Link to="/strategy-session" className="m-3 bg-[#C8102E] px-4 py-3 text-center font-semibold text-white">{t('nav.book')}</Link>
        </nav>
      )}
    </header>
  );
}