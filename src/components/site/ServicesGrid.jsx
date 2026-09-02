import { ArrowUpRight, Users, HeartHandshake, Landmark, Scale, Briefcase, Stethoscope, FileText, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/LanguageContext';
import Reveal from '@/components/site/Reveal';

export default function ServicesGrid() {
  const { t } = useLanguage();
  const services = [
    { id: 1, icon: Scale, title: t('services.t1'), text: t('services.x1'), factors: t('services.f1') },
    { id: 2, icon: FileCheck, title: t('services.t2'), text: t('services.x2'), factors: t('services.f2') },
    { id: 3, icon: HeartHandshake, title: t('services.t3'), text: t('services.x3'), factors: t('services.f3') },
    { id: 4, icon: Users, title: t('services.t4'), text: t('services.x4'), factors: t('services.f4') },
    { id: 5, icon: Briefcase, title: t('services.t5'), text: t('services.x5'), factors: t('services.f5') },
    { id: 6, icon: Landmark, title: t('services.t6'), text: t('services.x6'), factors: t('services.f6') },
    { id: 7, icon: Stethoscope, title: t('services.t7'), text: t('services.x7'), factors: t('services.f7') },
    { id: 8, icon: Landmark, title: t('services.t8'), text: t('services.x8'), factors: t('services.f8') },
    { id: 9, icon: FileText, title: t('services.t9'), text: t('services.x9'), factors: t('services.f9') },
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
          {services.map(({ id, icon: Icon, title, text, factors }, i) => (
            <Reveal key={id} delay={i * 70} className="h-full">
              <Link to={`/services/${id}`} className="group flex h-full flex-col justify-between bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B]">
                <div className="flex justify-between">
                  <div className="flex h-12 w-12 items-center justify-center bg-[#B8860B]/8 text-[#B8860B] transition group-hover:bg-[#B8860B] group-hover:text-[#FFFFFF]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-[#1E2A4A]/20 transition group-hover:text-[#B8860B]" aria-hidden="true" />
                </div>
                <div className="mt-8">
                  <h3 className="font-heading text-xl text-[#1E2A4A]">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#1E2A4A]/60">{text}</p>
                  <p className="mt-5 border-t border-[#1E2A4A]/10 pt-4 text-xs uppercase tracking-[.1em] text-[#1E2A4A]/45">{factors}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}