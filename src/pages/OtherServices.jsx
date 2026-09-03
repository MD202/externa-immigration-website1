import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { usePageMeta } from '@/lib/usePageMeta';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Reveal from '@/components/site/Reveal';
import { Image } from '@/components/ui/image';
import NumberedProcess from '@/components/service/NumberedProcess';
import PatternRows from '@/components/service/PatternRows';
import ServiceList from '@/components/service/ServiceList';
import TextSection from '@/components/service/TextSection';
import CloseCta from '@/components/service/CloseCta';

const HERO_IMG = 'https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/9642c4524_generated_image.png';

export default function OtherServices() {
  const { t } = useLanguage();
  usePageMeta(t('other.meta.title'), t('other.meta.description'));
  const [tab, setTab] = useState('individual');
  const individual = [
    { id: 'express-entry', title: t('other.e1t'), body: t('other.e1b') },
    { id: 'pnp', title: t('other.e2t'), body: t('other.e2b') },
    { id: 'work-permits', title: t('other.e3t'), body: t('other.e3b') },
    { id: 'study-permits', title: t('other.e4t'), body: t('other.e4b'), link: { label: t('other.e4link'), to: '/refused-applications' } },
    { id: 'pgwp', title: t('other.e5t'), body: t('other.e5b') },
    { id: 'visitor-visas', title: t('other.e6t'), body: t('other.e6b') },
    { id: 'super-visas', title: t('other.e7t'), body: t('other.e7b') },
    { id: 'restoration', title: t('other.e8t'), body: t('other.e8b'), link: { label: t('other.e8link'), to: '/humanitarian-compassionate' } },
    { id: 'pr-card', title: t('other.e9t'), body: t('other.e9b'), link: { label: t('other.e9link'), to: '/refused-applications' } },
    { id: 'citizenship', title: t('other.e10t'), body: t('other.e10b') },
    { id: 'prra', title: t('other.e11t'), body: t('other.e11b') },
  ];
  const business = [
    { id: 'lmia', title: t('other.business.b1t'), body: t('other.business.b1b') },
    { id: 'compliance', title: t('other.business.b2t'), body: t('other.business.b2b') },
    { id: 'employer-permits', title: t('other.business.b3t'), body: t('other.business.b3b') },
  ];
  const cards = tab === 'individual' ? individual : business;
  const steps = [1, 2, 3, 4].map((i) => ({ n: `0${i}`, title: t(`other.steps.s${i}t`), body: t(`other.steps.s${i}b`) }));
  const hear = [1, 2, 3].map((i) => ({ lead: t(`other.hear.r${i}l`), body: t(`other.hear.r${i}b`) }));
  const handle = [1, 2, 3, 4, 5, 6].map((i) => t(`other.handle.i${i}`));
  return (
    <main className="bg-[#FBFAF8]">
      <Header />
      <section className="relative overflow-hidden bg-[#13203F] text-white">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Image src={HERO_IMG} fittingType="fill" className="h-full w-full opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#13203F]/90 via-[#13203F]/72 to-[#13203F]/92" />
        </div>
        <div className="relative mx-auto max-w-[1240px] px-5 pt-32 pb-16 lg:px-[8vw]">
          <Reveal className="max-w-2xl">
            <h1 className="font-heading text-[40px] leading-[1.05] sm:text-5xl lg:text-[64px]">{t('other.heading')}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">{t('other.intro')}</p>
          </Reveal>
        </div>
      </section>
      <section className="px-5 pt-16 lg:px-[8vw] lg:pt-20">
        <div className="mx-auto max-w-[1240px]">
          <div className="inline-flex rounded-full border border-[#1E2A4A]/15 bg-white p-1">
            <button onClick={() => setTab('individual')} className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${tab === 'individual' ? 'bg-[#1E2A4A] text-white' : 'text-[#1E2A4A]/60 hover:text-[#1E2A4A]'}`}>Individual</button>
            <button onClick={() => setTab('business')} className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${tab === 'business' ? 'bg-[#1E2A4A] text-white' : 'text-[#1E2A4A]/60 hover:text-[#1E2A4A]'}`}>Business</button>
          </div>
        </div>
      </section>
      <section className="px-5 pb-24 pt-10 lg:px-[8vw] lg:pb-32">
        <div className="mx-auto max-w-[1240px]">
          {tab === 'business' && (
            <Reveal className="mb-8 max-w-2xl">
              <p className="text-lg leading-relaxed text-[#1E2A4A]/65">{t('other.business.intro')}</p>
            </Reveal>
          )}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((e) => (
              <Reveal key={e.id}>
                <article id={e.id} className="group flex h-full flex-col scroll-mt-32 border border-[#1E2A4A]/10 bg-white p-7 transition hover:-translate-y-1 hover:border-[#B8860B]/40 hover:shadow-[0_18px_40px_-24px_rgba(30,42,74,0.35)]">
                  <h2 className="font-heading text-xl text-[#1E2A4A]">{e.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#1E2A4A]/65">{e.body}</p>
                  {e.link && <Link to={e.link.to} className="link-arrow mt-5 self-start">{e.link.label} <ArrowRight className="h-4 w-4" /></Link>}
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 max-w-2xl">
            <p className="text-lg text-[#1E2A4A]/70">{t('other.ask.body')} <Link to="/contact" className="link-arrow">{t('other.ask.link')} <ArrowRight className="h-4 w-4" /></Link> {t('other.ask.tail')}</p>
          </Reveal>
        </div>
      </section>
      <NumberedProcess eyebrow={t('other.steps.eyebrow')} heading={t('other.steps.heading')} steps={steps} variant="dark" />
      <PatternRows heading={t('other.hear.heading')} rows={hear} variant="light" />
      <ServiceList heading={t('other.handle.heading')} items={handle} />
      <TextSection heading={t('other.lang.heading')} paragraphs={[t('other.lang.body')]} variant="light" />
      <TextSection heading={t('other.honesty.heading')} paragraphs={[t('other.honesty.p1'), t('other.honesty.p2')]} variant="light" />
      <CloseCta label={t('nav.bookCta')} />
      <Footer />
    </main>
  );
}