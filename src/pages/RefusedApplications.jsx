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

const HERO_IMG = 'https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/90dda2851_generated_image.png';

export default function RefusedApplications() {
  const { t } = useLanguage();
  usePageMeta(t('refused.meta.title'), t('refused.meta.description'));
  const [openFaq, setOpenFaq] = useState(0);
  const process = [1, 2, 3, 4, 5].map((i) => ({ n: `0${i}`, title: t(`refused.process.s${i}t`), body: t(`refused.process.s${i}b`) }));
  const cards = [
    { title: t('refused.appeals.c1l'), body: t('refused.appeals.c1b'), key: t('refused.appeals.c1key') },
    { title: t('refused.appeals.c2l'), body: t('refused.appeals.c2b') },
    { title: t('refused.appeals.c3l'), body: t('refused.appeals.c3b') },
    { title: t('refused.appeals.c4l'), body: t('refused.appeals.c4b') },
  ];
  const hear = [1, 2, 3, 4].map((i) => ({ lead: t(`refused.hear.r${i}l`), body: t(`refused.hear.r${i}b`) }));
  const handle = [1, 2, 3, 4, 5, 6].map((i) => t(`refused.handle.i${i}`));
  return (
    <main className="bg-[#FBFAF8]">
      <Header />
      <ServiceHero eyebrow={t('refused.hero.eyebrow')} headline={t('refused.hero.headline')} body={t('refused.hero.body')} ctaLabel={t('refused.hero.cta')} ctaTo="/strategy-session" image={HERO_IMG} />
      <section className="bg-[#FBFAF8] px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">{t('refused.mistake.heading')}</p>
            <p className="mt-4 font-heading text-3xl leading-tight text-[#1E2A4A] sm:text-4xl">{t('refused.mistake.lead')}</p>
            <p className="mt-5 text-lg leading-relaxed text-[#1E2A4A]/65">{t('refused.mistake.body')}</p>
            <p className="mt-4 text-base font-semibold text-[#B8860B]">{t('refused.mistake.close')}</p>
          </Reveal>
          <Reveal className="mt-14">
            <p className="eyebrow">{t('refused.appeals.heading')}</p>
          </Reveal>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {cards.map((c, i) => (
              <Reveal key={i}>
                <article className="flex h-full flex-col border border-[#1E2A4A]/10 bg-white p-8 transition hover:-translate-y-1 hover:border-[#B8860B]/40 hover:shadow-[0_18px_40px_-24px_rgba(30,42,74,0.35)]">
                  <h3 className="font-heading text-2xl text-[#1E2A4A]">{c.title}</h3>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-[#1E2A4A]/70">{c.body}</p>
                  {c.key && <p className="mt-6 border-t border-[#1E2A4A]/10 pt-4 text-sm font-semibold uppercase tracking-[.08em] text-[#B8860B]">{c.key}</p>}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <NumberedProcess eyebrow={t('refused.process.eyebrow')} steps={process} variant="dark" />
      <section className="bg-white px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[900px]">
          <Reveal><p className="eyebrow">{t('refused.hear.heading')}</p></Reveal>
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
      <ServiceList heading={t('refused.handle.heading')} items={handle} />
      <section className="bg-[#FBFAF8] px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-10 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow">{t('refused.lang.heading')}</p>
            <p className="mt-4 text-lg leading-relaxed text-[#1E2A4A]/70">{t('refused.lang.body')}</p>
          </Reveal>
          <Reveal>
            <p className="eyebrow">{t('refused.honesty.heading')}</p>
            <p className="mt-4 text-lg leading-relaxed text-[#1E2A4A]/70">{t('refused.honesty.p1')}</p>
            <p className="mt-3 text-lg leading-relaxed text-[#1E2A4A]/70">{t('refused.honesty.p2')}</p>
          </Reveal>
        </div>
      </section>
      <CloseCta label={t('refused.close.cta')} />
      <Footer />
    </main>
  );
}