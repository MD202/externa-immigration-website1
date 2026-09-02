import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import Reveal from '@/components/site/Reveal';

export default function ServicesGrid() {
  const { t } = useLanguage();
  const services = [
    { id: 1, title: t('services.t1'), text: t('services.x1'), factors: t('services.f1') },
    { id: 2, title: t('services.t2'), text: t('services.x2'), factors: t('services.f2') },
    { id: 3, title: t('services.t3'), text: t('services.x3'), factors: t('services.f3') },
    { id: 4, title: t('services.t4'), text: t('services.x4'), factors: t('services.f4') },
    { id: 5, title: t('services.t5'), text: t('services.x5'), factors: t('services.f5') },
    { id: 6, title: t('services.t6'), text: t('services.x6'), factors: t('services.f6') },
    { id: 7, title: t('services.t7'), text: t('services.x7'), factors: t('services.f7') },
    { id: 8, title: t('services.t8'), text: t('services.x8'), factors: t('services.f8') },
    { id: 9, title: t('services.t9'), text: t('services.x9'), factors: t('services.f9') },
  ];
  return (
    <section id="services" aria-label="Immigration services" className="bg-[#F8FAFC] px-5 py-28 lg:px-[8vw] lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{t('services.eyebrow')}</p>
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="mt-6 text-lg leading-relaxed text-[#1E2A4A]/65">{t('services.intro')}</p>
        </Reveal>
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ id, title, text, factors }, i) => (
            <Reveal key={id} delay={i * 60} className="h-full">
              <Link to={`/services/${id}`} className="group relative flex h-full flex-col border border-[#1E2A4A]/10 bg-white p-7 transition duration-300 hover:border-[#B8860B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B]">
                <span className="font-mono text-xs text-[#B8860B]">{String(id).padStart(2, '0')}</span>
                <h3 className="mt-4 font-heading text-xl text-[#1E2A4A]">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#1E2A4A]/60">{text}</p>
                <p className="mt-5 border-t border-[#1E2A4A]/10 pt-4 text-xs uppercase tracking-[.1em] text-[#1E2A4A]/45">{factors}</p>
                <ArrowRight className="absolute right-6 top-7 h-5 w-5 text-[#1E2A4A]/20 transition group-hover:translate-x-1 group-hover:text-[#B8860B]" aria-hidden="true" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}