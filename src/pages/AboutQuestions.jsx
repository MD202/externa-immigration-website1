import { useEffect, useRef, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { usePageMeta } from '@/lib/usePageMeta';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Reveal from '@/components/site/Reveal';
import { Image } from '@/components/ui/image';

const CICC_URL = 'https://register.college-ic.ca/';
const ABOUT_IMG = 'https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/2d8179e35_generated_image.png';

export default function AboutQuestions() {
  const { t } = useLanguage();
  const location = useLocation();
  const questionsRef = useRef(null);
  const [open, setOpen] = useState(null);
  const isQuestions = location.pathname === '/questions';
  usePageMeta(
    isQuestions ? t('questions.meta.title') : t('about.meta.title'),
    isQuestions ? t('questions.meta.description') : t('about.meta.description')
  );

  useEffect(() => {
    if (isQuestions && questionsRef.current) {
      questionsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [isQuestions]);

  const creds = [t('about.s3.r1'), t('about.s3.r2'), t('about.s3.r3')];
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => ({ value: `q${i}`, q: t(`questions.q${i}`), a: t(`questions.a${i}`) }));
  const services = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((s) => ({
    title: t(`services.t${s}`),
    faqs: [1, 2].map((q) => ({ value: `s${s}q${q}`, q: t(`faq.s${s}q${q}`), a: t(`faq.s${s}a${q}`) })),
  }));

  const Accordion = ({ it }) => {
    const isOpen = open === it.value;
    return (
      <div className="border-b border-[#1E2A4A]/12">
        <button onClick={() => setOpen(isOpen ? null : it.value)} className="flex w-full items-center justify-between gap-4 py-5 text-left" aria-expanded={isOpen}>
          <span className="font-heading text-lg text-[#1E2A4A]">{it.q}</span>
          <ChevronDown className={`h-5 w-5 shrink-0 text-[#B8860B] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className="overflow-hidden">
            <p className="text-base leading-relaxed text-[#1E2A4A]/70">{it.a}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="bg-[#FBFAF8]">
      <Header />

      {/* About this practice */}
      <section className="px-5 pt-32 pb-16 lg:px-[8vw] lg:pt-40 lg:pb-20">
        <div className="mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">ABOUT</p>
            <h1 className="mt-4 font-heading text-[40px] leading-[1.08] text-[#1E2A4A] sm:text-5xl lg:text-[56px]">{t('about.s1.heading')}</h1>
            <p className="mt-6 text-lg leading-relaxed text-[#1E2A4A]/70">{t('about.s1.body')}</p>
            <a href={CICC_URL} target="_blank" rel="noopener noreferrer" className="link-arrow mt-6">{t('about.s1.verify')} <ExternalLink className="h-4 w-4" /></a>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src={ABOUT_IMG} alt="" fittingType="fill" className="h-full w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* How this practice works */}
      <section className="bg-white px-5 py-16 lg:px-[8vw] lg:py-20">
        <div className="mx-auto max-w-[720px]">
          <Reveal>
            <h2 className="font-heading text-3xl text-[#1E2A4A]">{t('about.s2.heading')}</h2>
            <p className="mt-6 text-lg leading-relaxed text-[#1E2A4A]/70">{t('about.s2.body')}</p>
          </Reveal>
        </div>
      </section>

      {/* Credentials */}
      <section className="px-5 py-16 lg:px-[8vw] lg:py-20">
        <div className="mx-auto max-w-[720px]">
          <Reveal>
            <h2 className="font-heading text-3xl text-[#1E2A4A]">{t('about.s3.heading')}</h2>
            <ul className="mt-6 border-t border-[#1E2A4A]/10">
              {creds.map((c, i) => (
                <li key={i} className="border-b border-[#1E2A4A]/10 py-5 text-base leading-relaxed text-[#1E2A4A]/75">{c}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Questions */}
      <section ref={questionsRef} className="bg-[#F4EEE2] px-5 py-16 scroll-mt-20 lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <p className="eyebrow">QUESTIONS</p>
            <h2 className="mt-4 font-heading text-[40px] leading-[1.08] text-[#1E2A4A] sm:text-5xl lg:text-[56px]">{t('questions.heading')}</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#1E2A4A]/65">{t('faq.blurb')}</p>
          </Reveal>
          <Reveal className="mt-8">
            <div className="border-t border-[#1E2A4A]/12">
              {items.map((it) => <Accordion key={it.value} it={it} />)}
            </div>
          </Reveal>
          <Reveal className="mt-12">
            <p className="eyebrow">{t('questions.serviceEyebrow')}</p>
            <h3 className="mt-3 font-heading text-3xl text-[#1E2A4A]">{t('questions.serviceHeading')}</h3>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#1E2A4A]/65">{t('questions.serviceIntro')}</p>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {services.map((svc) => (
              <Reveal key={svc.title}>
                <div className="h-full border border-[#1E2A4A]/12 bg-[#FBFAF8] p-6">
                  <p className="font-heading text-xl text-[#1E2A4A]">{svc.title}</p>
                  <div className="mt-3 border-t border-[#1E2A4A]/10">
                    {svc.faqs.map((it) => <Accordion key={it.value} it={it} />)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}