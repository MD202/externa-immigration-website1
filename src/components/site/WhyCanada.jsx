import { Image } from '@/components/ui/image';
import { HeartPulse, Users, Briefcase, Home, GraduationCap, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import Reveal from '@/components/site/Reveal';

export default function WhyCanada() {
  const { t } = useLanguage();
  const benefits = [
    { icon: HeartPulse, title: t('whyCanada.b1t'), body: t('whyCanada.b1b') },
    { icon: Users, title: t('whyCanada.b2t'), body: t('whyCanada.b2b') },
    { icon: Briefcase, title: t('whyCanada.b3t'), body: t('whyCanada.b3b') },
    { icon: Home, title: t('whyCanada.b4t'), body: t('whyCanada.b4b') },
    { icon: GraduationCap, title: t('whyCanada.b5t'), body: t('whyCanada.b5b') },
    { icon: ShieldCheck, title: t('whyCanada.b6t'), body: t('whyCanada.b6b') },
  ];
  return (
    <section id="why-canada" className="bg-[#F8FAFC] px-5 py-28 lg:px-[8vw] lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-6">
            <Image src="https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/d95edd2a6_generated_image.png" alt="Vibrant Canadian cityscape at golden hour" className="aspect-[4/3] w-full" fittingType="fill" />
          </Reveal>
          <Reveal delay={150} className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow">{t('whyCanada.eyebrow')}</p>
            <h2 className="section-title">{t('whyCanada.title')}</h2>
            <p className="mt-6 text-lg leading-relaxed text-[#1E293B]/65">{t('whyCanada.intro')}</p>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 80} className="h-full">
              <article className="group h-full bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-11 w-11 items-center justify-center bg-[#047857]/8 text-[#047857] transition group-hover:bg-[#047857] group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-heading text-lg text-[#1E293B]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1E293B]/60">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}