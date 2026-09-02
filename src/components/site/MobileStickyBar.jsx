import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/LanguageContext';

export default function MobileStickyBar() {
  const { t } = useLanguage();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.4);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={`fixed inset-x-0 bottom-0 z-50 lg:hidden transition-transform duration-300 ${show ? 'translate-y-0' : 'translate-y-full'}`}>
      <Link to="/strategy-session" className="flex h-14 items-center justify-center bg-[#DC2626] text-base font-semibold text-white">{t('nav.bookCta')}</Link>
    </div>
  );
}