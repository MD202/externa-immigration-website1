import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Menu, X } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import LanguageToggle from './LanguageToggle';

export default function Header() {
  const { t } = useLanguage();
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    { label: t('nav.expertise'), href: '#services', external: false },
    { label: t('nav.appeals'), href: '#appeals', external: false },
    { label: t('nav.approach'), href: '#approach', external: false },
    { label: t('nav.about'), href: '#about', external: false },
    { label: t('nav.fees'), href: '/fees', external: true },
  ];
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${compact ? 'bg-[#0B1B27] py-3 shadow-xl' : 'bg-[#0B1B27]/80 py-5 backdrop-blur-md'}`}>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 lg:px-[8vw]">
        <a href="#top" className="flex items-center gap-3 text-white">
          <Compass className="h-8 w-8 text-[#C5A059]" />
          <span className="font-heading text-lg leading-none">Externa<span className="mt-1 block font-body text-[9px] uppercase tracking-[.22em] text-[#D1E3ED]">Immigration Solutions Inc</span></span>
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          <nav className="flex items-center gap-6">
            {links.map((link) => link.external ? (
              <Link key={link.href} to={link.href} className="text-sm text-white/70 transition hover:text-white">{link.label}</Link>
            ) : (
              <a key={link.href} href={link.href} className="text-sm text-white/70 transition hover:text-white">{link.label}</a>
            ))}
          </nav>
          <LanguageToggle />
          <Link to="/strategy-session" className="border border-[#C5A059] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#C5A059] hover:text-[#0B1B27]">{t('nav.book')}</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="text-white lg:hidden" aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="mx-5 mt-4 grid gap-1 border-t border-white/15 bg-[#0B1B27] py-4 lg:hidden">
          {links.map((link) => link.external ? (
            <Link onClick={() => setOpen(false)} key={link.href} to={link.href} className="px-3 py-3 text-white/80">{link.label}</Link>
          ) : (
            <a onClick={() => setOpen(false)} key={link.href} href={link.href} className="px-3 py-3 text-white/80">{link.label}</a>
          ))}
          <div className="px-3 py-3"><LanguageToggle /></div>
          <Link to="/strategy-session" className="m-3 bg-[#C5A059] px-4 py-3 text-center font-semibold text-[#0B1B27]">{t('nav.book')}</Link>
        </nav>
      )}
    </header>
  );
}