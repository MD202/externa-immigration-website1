import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { usePageMeta } from '@/lib/usePageMeta';
import ServiceHero from '@/components/service/ServiceHero';
import NumberedProcess from '@/components/service/NumberedProcess';
import ServiceList from '@/components/service/ServiceList';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import CloseCta from '@/components/service/CloseCta';
import Reveal from '@/components/site/Reveal';

const HERO_IMG = 'https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/043ff4100_generated_image.png';

export default function HealthcareProfessionals() {
  const { t } = useLanguage();
  usePageMeta(t('healthcare.meta.title'), t('healthcare.meta.description'));
  const [tab, setTab] = useState('outside');
  const [openFaq, setOpenFaq] = useState(0);
  const outside = [1, 2, 3, 4].map((i) => ({ title: t(`healthcare.programs.r${i}l`), body: t(`healthcare.programs.r${i}b`), body2: t(`healthcare.programs.r${i}b2`), key: t(`healthcare.programs.r${i}key`) }));
  const inCanada = [1, 2, 3, 4].map((i) => ({ title: t(`healthcare.programs.inc.r${i}l`), body: t(`healthcare.programs.inc.r${i}b`), body2: t(`healthcare.programs.inc.r${i}b2`), key: t(`healthcare.programs.inc.r${i}key`) }));
  const cards = tab === 'outside' ? outside : inCanada;
  const steps = [1, 2, 3, 4].map((i) => ({ n: `0${i}`, title: t(`healthcare.steps.s${i}t`), body: t(`healthcare.steps.s${i}b`) }));
  const hear = [1, 2, 3, 4, 5].map((i) => ({ lead: t(`healthcare.hear.r${i}l`), body: t(`healthcare.hear.r${i}b`) }));
  const handle = [1, 2, 3, 4, 5].map((i) => t(`healthcare.handle.i${i}`));
  return (
    <main className="bg-[#FBFAF8]">
      <Header />
      <ServiceHero eyebrow={t('healthcare.hero.eyebrow')} headline={t('healthcare.hero.headline')} body={t('healthcare.hero.body')} ctaLabel={t('healthcare.hero.cta')} ctaTo="/strategy-session" image={HERO_IMG} />
      <section className="bg-[#FBFAF8] px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="max-w-2xl">
            <h2 className="section-title">{t('healthcare.programs.heading')}</h2>
            <p className="mt-6 text-lg leading-relaxed text-[#1E2A4A]/65">{t('healthcare.programs.intro')}</p>
          </Reveal>
          <div className="mt-8 inline-flex rounded-full border border-[#1E2A4A]/15 bg-white p-1">
            <button onClick={() => setTab('outside')} className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${tab === 'outside' ? 'bg-[#1E2A4A] text-white' : 'text-[#1E2A4A]/60 hover:text-[#1E2A4A]'}`}>{t('healthcare.programs.outsideCanada')}</button>
            <button onClick={() => setTab('inCanada')} className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${tab === 'inCanada' ? 'bg-[#1E2A4A] text-white' : 'text-[#1E2A4A]/60 hover:text-[#1E2A4A]'}`}>{t('healthcare.programs.inCanada')}</button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {cards.map((c, i) => (
              <Reveal key={i}>
                <article className="flex h-full flex-col border border-[#1E2A4A]/10 bg-white p-8 transition hover:-translate-y-1 hover:border-[#B8860B]/40 hover:shadow-[0_18px_40px_-24px_rgba(30,42,74,0.35)]">
                  <h3 className="font-heading text-2xl text-[#1E2A4A]">{c.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-[#1E2A4A]/70">{c.body}</p>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-[#1E2A4A]/60">{c.body2}</p>
                  <p className="mt-6 border-t border-[#1E2A4A]/10 pt-4 text-sm font-semibold uppercase tracking-[.08em] text-[#B8860B]">{c.key}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <NumberedProcess eyebrow={t('healthcare.steps.eyebrow')} heading={t('healthcare.steps.heading')} steps={steps} variant="dark" />
      <section className="bg-white px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[900px]">
          <Reveal><p className="eyebrow">{t('healthcare.hear.heading')}</p></Reveal>
          <div className="mt-8 border-t border-[#1E2A4A]/10">
            {hear.map((row, i) => (
              <div key={i} className="border-b border-[#1E2A4A]/10">
                <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left" aria-expanded={openFaq === i}>
                  <span className="font-heading text-lg text-[#1E2A4A]">{row.lead}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-[#B8860B] transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-out ${openFaq === i ? 'max-h-60 pb-6' : 'max-h-0'}`}>
                  <p className="text-base leading-relaxed text-[#1E2A4A]/70">{row.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ServiceList heading={t('healthcare.handle.heading')} items={handle} />
      <section className="bg-[#FBFAF8] px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-10 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow">{t('healthcare.lang.heading')}</p>
            <p className="mt-4 text-lg leading-relaxed text-[#1E2A4A]/70">{t('healthcare.lang.body')}</p>
          </Reveal>
          <Reveal>
            <p className="eyebrow">{t('healthcare.honesty.heading')}</p>
            <p className="mt-4 text-lg leading-relaxed text-[#1E2A4A]/70">{t('healthcare.honesty.p1')}</p>
            <p className="mt-3 text-lg leading-relaxed text-[#1E2A4A]/70">{t('healthcare.honesty.p2')}</p>
          </Reveal>
        </div>
      </section>
      <CloseCta label={t('nav.bookCta')} />
      <Footer />
    </main>
  );
}