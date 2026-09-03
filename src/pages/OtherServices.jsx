import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { usePageMeta } from '@/lib/usePageMeta';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Reveal from '@/components/site/Reveal';
import ServiceHero from '@/components/service/ServiceHero';
import NumberedProcess from '@/components/service/NumberedProcess';
import ServiceList from '@/components/service/ServiceList';
import CloseCta from '@/components/service/CloseCta';

const HERO_IMG = 'https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/9642c4524_generated_image.png';

const card = (t, id, titleKey, bodyKey, link) => ({
  id,
  title: t(titleKey),
  body: t(bodyKey),
  key: t(`other.keys.${id}`),
  link,
});

export default function OtherServices() {
  const { t } = useLanguage();
  usePageMeta(t('other.meta.title'), t('other.meta.description'));
  const [tab, setTab] = useState('outside');
  const [openFaq, setOpenFaq] = useState(0);
  const outside = [
    card(t, 'e1', 'other.e1t', 'other.e1b'),
    card(t, 'e2', 'other.e2t', 'other.e2b'),
    card(t, 'e3', 'other.e3t', 'other.e3b'),
    card(t, 'e4', 'other.e4t', 'other.e4b', { label: t('other.e4link'), to: '/refused-applications' }),
    card(t, 'e6', 'other.e6t', 'other.e6b'),
    card(t, 'e7', 'other.e7t', 'other.e7b'),
  ];
  const inCanada = [
    card(t, 'e5', 'other.e5t', 'other.e5b'),
    card(t, 'e8', 'other.e8t', 'other.e8b', { label: t('other.e8link'), to: '/humanitarian-compassionate' }),
    card(t, 'e9', 'other.e9t', 'other.e9b', { label: t('other.e9link'), to: '/refused-applications' }),
    card(t, 'e10', 'other.e10t', 'other.e10b'),
    card(t, 'e11', 'other.e11t', 'other.e11b'),
    card(t, 'b1', 'other.business.b1t', 'other.business.b1b'),
    card(t, 'b2', 'other.business.b2t', 'other.business.b2b'),
    card(t, 'b3', 'other.business.b3t', 'other.business.b3b'),
  ];
  const cards = tab === 'outside' ? outside : inCanada;
  const steps = [1, 2, 3, 4].map((i) => ({ n: `0${i}`, title: t(`other.steps.s${i}t`), body: t(`other.steps.s${i}b`) }));
  const hear = [1, 2, 3].map((i) => ({ lead: t(`other.hear.r${i}l`), body: t(`other.hear.r${i}b`) }));
  const handle = [1, 2, 3, 4, 5, 6].map((i) => t(`other.handle.i${i}`));
  return (
    <main className="bg-[#FBFAF8]">
      <Header />
      <ServiceHero eyebrow={t('other.heroEyebrow')} headline={t('other.heading')} body={t('other.intro')} ctaLabel={t('nav.bookCta')} ctaTo="/strategy-session" image={HERO_IMG} />
      <section className="bg-[#FBFAF8] px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="max-w-2xl">
            <h2 className="section-title">{t('other.cardsHeading')}</h2>
            <p className="mt-6 text-lg leading-relaxed text-[#1E2A4A]/65">{t('other.cardsIntro')}</p>
          </Reveal>
          <div className="mt-8 inline-flex rounded-full border border-[#1E2A4A]/15 bg-white p-1">
            <button onClick={() => setTab('outside')} className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${tab === 'outside' ? 'bg-[#1E2A4A] text-white' : 'text-[#1E2A4A]/60 hover:text-[#1E2A4A]'}`}>{t('other.outsideCanada')}</button>
            <button onClick={() => setTab('inCanada')} className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${tab === 'inCanada' ? 'bg-[#1E2A4A] text-white' : 'text-[#1E2A4A]/60 hover:text-[#1E2A4A]'}`}>{t('other.inCanada')}</button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((e) => (
              <Reveal key={e.id}>
                <article id={e.id} className="group flex h-full flex-col scroll-mt-32 border border-[#1E2A4A]/10 bg-white p-7 transition hover:-translate-y-1 hover:border-[#B8860B]/40 hover:shadow-[0_18px_40px_-24px_rgba(30,42,74,0.35)]">
                  <h3 className="font-heading text-xl text-[#1E2A4A]">{e.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#1E2A4A]/65">{e.body}</p>
                  <p className="mt-5 border-t border-[#1E2A4A]/10 pt-4 text-xs font-semibold uppercase tracking-[.08em] text-[#B8860B]">{e.key}</p>
                  {e.link && <Link to={e.link.to} className="link-arrow mt-4 self-start">{e.link.label} <ArrowRight className="h-4 w-4" /></Link>}
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
      <section className="bg-white px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[900px]">
          <Reveal><p className="eyebrow">{t('other.hear.heading')}</p></Reveal>
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
      <ServiceList heading={t('other.handle.heading')} items={handle} />
      <section className="bg-[#FBFAF8] px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-10 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow">{t('other.lang.heading')}</p>
            <p className="mt-4 text-lg leading-relaxed text-[#1E2A4A]/70">{t('other.lang.body')}</p>
          </Reveal>
          <Reveal>
            <p className="eyebrow">{t('other.honesty.heading')}</p>
            <p className="mt-4 text-lg leading-relaxed text-[#1E2A4A]/70">{t('other.honesty.p1')}</p>
            <p className="mt-3 text-lg leading-relaxed text-[#1E2A4A]/70">{t('other.honesty.p2')}</p>
          </Reveal>
        </div>
      </section>
      <CloseCta label={t('nav.bookCta')} />
      <Footer />
    </main>
  );
}