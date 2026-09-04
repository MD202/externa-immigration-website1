import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { usePageMeta } from '@/lib/usePageMeta';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Reveal from '@/components/site/Reveal';
import HearRows from '@/components/site/HearRows';
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
  const cards = [
    card(t, 'e1', 'other.e1t', 'other.e1b'),
    card(t, 'e2', 'other.e2t', 'other.e2b'),
    card(t, 'e3', 'other.e3t', 'other.e3b'),
    card(t, 'e4', 'other.e4t', 'other.e4b', { label: t('other.e4link'), to: '/refused-applications' }),
    card(t, 'e5', 'other.e5t', 'other.e5b'),
    card(t, 'e6', 'other.e6t', 'other.e6b'),
    card(t, 'e7', 'other.e7t', 'other.e7b'),
    card(t, 'e8', 'other.e8t', 'other.e8b', { label: t('other.e8link'), to: '/humanitarian-compassionate' }),
    card(t, 'e9', 'other.e9t', 'other.e9b', { label: t('other.e9link'), to: '/refused-applications' }),
    card(t, 'e10', 'other.e10t', 'other.e10b'),
    card(t, 'e11', 'other.e11t', 'other.e11b'),
    card(t, 'e12', 'other.e12t', 'other.e12b', { label: t('other.e12link'), to: '/refused-applications' }),
    card(t, 'b1', 'other.business.b1t', 'other.business.b1b'),
    card(t, 'b2', 'other.business.b2t', 'other.business.b2b'),
    card(t, 'b3', 'other.business.b3t', 'other.business.b3b'),
  ];
  const steps = [1, 2, 3, 4].map((i) => ({ n: `0${i}`, title: t(`other.steps.s${i}t`), body: t(`other.steps.s${i}b`) }));
  const hear = [1, 2, 3].map((i) => {
    const row = { lead: t(`other.hear.r${i}l`), body: t(`other.hear.r${i}b`) };
    if (i === 2) row.link = { label: t('nav.refused'), to: '/refused-applications' };
    if (i === 3) row.link = { label: t('nav.hc'), to: '/humanitarian-compassionate' };
    return row;
  });
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
      <HearRows heading={t('other.hear.heading')} items={hear} />
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