import { ArrowUpRight, Briefcase, HeartHandshake, Landmark, Scale, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/LanguageContext';

export default function ServicesGrid() {
  const { t } = useLanguage();
  const services = [
    { icon: Scale, title: t('services.t1'), text: t('services.x1'), factors: t('services.f1'), span: 'md:col-span-2 bg-[#14222E] text-white' },
    { icon: Users, title: t('services.t2'), text: t('services.x2'), factors: t('services.f2'), span: 'bg-[#1A2D3A] text-white' },
    { icon: HeartHandshake, title: t('services.t3'), text: t('services.x3'), factors: t('services.f3'), span: 'bg-[#0B1B27] text-white border border-white/10' },
    { icon: Briefcase, title: t('services.t4'), text: t('services.x4'), factors: t('services.f4'), span: 'md:col-span-2 bg-[#C5A059] text-[#0B1B27]' },
    { icon: Landmark, title: t('services.t5'), text: t('services.x5'), factors: t('services.f5'), span: 'bg-[#14222E] text-white' },
    { icon: ShieldCheck, title: t('services.t6'), text: t('services.x6'), factors: t('services.f6'), span: 'md:col-span-3 bg-[#1A2D3A] text-white' },
  ];
  return (
    <section id="services" className="bg-[#14222E] px-5 py-28 lg:px-[8vw] lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-3xl">
          <p className="eyebrow">{t('services.eyebrow')}</p>
          <h2 className="section-title text-white">{t('services.title')}</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">{t('services.intro')}</p>
        </div>
        <div className="mt-16 grid gap-3 md:grid-cols-3">
          {services.map(({ icon: Icon, title, text, factors, span }) => (
            <Link to="/strategy-session" key={title} className={`group flex min-h-72 flex-col justify-between p-7 transition duration-500 hover:-translate-y-1 hover:shadow-2xl ${span}`}>
              <div className="flex justify-between">
                <Icon className="h-6 w-6 opacity-80" />
                <ArrowUpRight className="h-5 w-5 opacity-40 transition group-hover:opacity-100" />
              </div>
              <div>
                <h3 className="font-heading text-3xl">{title}</h3>
                <p className="mt-3 max-w-lg leading-relaxed opacity-65">{text}</p>
                <p className="mt-5 border-t border-current/15 pt-4 text-xs uppercase tracking-[.12em] opacity-0 transition duration-300 group-hover:opacity-60">{factors}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}