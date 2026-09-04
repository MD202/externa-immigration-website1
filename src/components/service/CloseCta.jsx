import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/site/Reveal';
import { useLanguage } from '@/lib/LanguageContext';

export default function CloseCta({ label }) {
  const { t } = useLanguage();
  return (
    <section className="bg-[#FBFAF8] px-5 py-16 text-center lg:px-[8vw] lg:py-24">
      <div className="mx-auto max-w-[720px]">
        <Reveal>
          <div className="flex flex-col items-center gap-4">
            <Link to="/strategy-session" className="btn btn-primary">{label} <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/fees" className="text-sm font-semibold text-[#B8860B] underline underline-offset-[6px] decoration-1 transition hover:decoration-2">{t('nav.seeFees')}</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}