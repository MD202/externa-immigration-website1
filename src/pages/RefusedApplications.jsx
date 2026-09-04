import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { usePageMeta } from '@/lib/usePageMeta';
import ServiceHero from '@/components/service/ServiceHero';
import NumberedProcess from '@/components/service/NumberedProcess';
import ServiceList from '@/components/service/ServiceList';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import CloseCta from '@/components/service/CloseCta';
import Reveal from '@/components/site/Reveal';
import HearRows from '@/components/site/HearRows';

const HERO_IMG = 'https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/90dda2851_generated_image.png';

export default function RefusedApplications() {
  const { t } = useLanguage();
  usePageMeta(t('refused.meta.title'), t('refused.meta.description'));
  const process = [1, 2, 3, 4, 5].map((i) => ({ n: `0${i}`, title: t(`refused.process.s${i}t`), body: t(`refused.process.s${i}b`) }));
  const cards = [
    { title: t('refused.appeals.c1l'), body: t('refused.appeals.c1b'), key: t('refused.appeals.c1key') },
    { title: t('refused.appeals.c2l'), body: t('refused.appeals.c2b'), key: t('refused.appeals.c2key') },
    { title: t('refused.appeals.c3l'), body: t('refused.appeals.c3b'), key: t('refused.appeals.c3key') },
    { title: t('refused.appeals.c4l'), body: t('refused.appeals.c4b') },
  ];
  const hear = [1, 2, 3, 4].map((i) => ({ lead: t(`refused.hear.r${i}l`), body: t(`refused.hear.r${i}b`) }));
  const handle = [1, 2, 3, 4, 5, 6].map((i) => t(`refused.handle.i${i}`));
  return (
    <main className="bg-[#FBFAF8]">
      <Header />
      <ServiceHero eyebrow={t('refused.hero.eyebrow')} headline={t('refused.hero.headline')} body={t('refused.hero.body')} ctaLabel={t('refused.hero.cta')} ctaTo="/strategy-session" image={HERO_IMG} />

      <section className="bg-[#13203F] px-5 py-16 text-white lg:px-[8vw] lg:py-20">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="max-w-3xl border-l-4 border-[#DC2626] pl-6 lg:pl-8">
            <p className="eyebrow">{t('refused.fairness.eyebrow')}</p>
            <p className="mt-4 font-heading text-3xl leading-tight sm:text-4xl">{t('refused.fairness.p1')}</p>
            <p className="mt-5 text-lg leading-relaxed text-white/70">{t('refused.fairness.p2')}</p>
            <p className="mt-4 text-base leading-relaxed text-white/80">{t('refused.fairness.p3')}</p>
            <Link to="/contact" className="btn btn-primary mt-8">{t('refused.fairness.cta')} <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#1E2A4A] px-5 py-16 text-white lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">{t('refused.mistake.heading')}</p>
            <p className="mt-4 font-heading text-3xl leading-tight sm:text-4xl">{t('refused.mistake.lead')}</p>
            <p className="mt-5 text-lg leading-relaxed text-white/70">{t('refused.mistake.body')}</p>
            <p className="mt-4 text-base font-semibold text-[#B8860B]">{t('refused.mistake.close')}</p>
          </Reveal>
        </div>
      </section>

      <NumberedProcess eyebrow={t('refused.process.eyebrow')} steps={process} variant="dark" />

      <section className="bg-[#FBFAF8] px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal>
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

      <HearRows heading={t('refused.hear.heading')} items={hear} />

      <section className="bg-[#13203F] px-5 py-16 text-white lg:px-[8vw] lg:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow">{t('refused.analysis.eyebrow')}</p>
            <h2 className="mt-4 font-heading text-3xl leading-tight sm:text-4xl">{t('refused.analysis.heading')}</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">{t('refused.analysis.body')}</p>
            <p className="mt-4 text-sm text-white/55">{t('refused.analysis.note')}</p>
          </Reveal>
          <Reveal className="lg:justify-self-end">
            <div className="w-full max-w-sm border border-white/15 p-8">
              <p className="font-heading text-5xl">{t('refused.analysis.price')}</p>
              <p className="mt-2 text-xs uppercase tracking-[.18em] text-white/50">{t('refused.analysis.eyebrow')}</p>
              <Link to="/strategy-session" className="btn btn-primary mt-6 w-full">{t('refused.analysis.cta')} <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
          </Reveal>
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