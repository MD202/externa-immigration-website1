import { useLanguage } from '@/lib/LanguageContext';
import { usePageMeta } from '@/lib/usePageMeta';
import ServiceHero from '@/components/service/ServiceHero';
import PatternRows from '@/components/service/PatternRows';
import TextSection from '@/components/service/TextSection';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Reveal from '@/components/site/Reveal';

export default function Entrepreneurs() {
  const { t } = useLanguage();
  usePageMeta(t('entrepreneurs.meta.title'), t('entrepreneurs.meta.description'));
  const hear = [1, 2, 3, 4, 5, 6].map((i) => ({ lead: t(`entrepreneurs.hear.r${i}l`), body: t(`entrepreneurs.hear.r${i}b`) }));
  const dos = [1, 2, 3, 4, 5, 6].map((i) => t(`entrepreneurs.do.i${i}`));
  const donts = [1, 2, 3].map((i) => t(`entrepreneurs.dont.i${i}`));
  return (
    <main className="bg-[#FBFAF8]">
      <Header />
      <ServiceHero eyebrow={t('entrepreneurs.hero.eyebrow')} headline={t('entrepreneurs.hero.headline')} ctaLabel={t('entrepreneurs.hero.cta')} ctaTo="/strategy-session" />
      <TextSection heading={t('entrepreneurs.read.heading')} paragraphs={[t('entrepreneurs.read.p1'), t('entrepreneurs.read.p2'), t('entrepreneurs.read.p3')]} variant="dark" centered />
      <PatternRows heading={t('entrepreneurs.hear.heading')} rows={hear} variant="light" />
      <section className="bg-[#1E2A4A] px-5 py-20 text-white lg:px-[8vw] lg:py-40">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="max-w-2xl">
            <h2 className="section-title text-white">{t('entrepreneurs.dd.heading')}</h2>
          </Reveal>
          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="font-heading text-xl text-[#B8860B]">{t('entrepreneurs.do.heading')}</p>
              <ul className="mt-5 border-t border-white/14">
                {dos.map((d, i) => <li key={i} className="border-b border-white/14 py-4 text-base text-white/75">{d}</li>)}
              </ul>
            </Reveal>
            <Reveal>
              <p className="font-heading text-xl text-[#B8860B]">{t('entrepreneurs.dont.heading')}</p>
              <ul className="mt-5 border-t border-white/14">
                {donts.map((d, i) => <li key={i} className="border-b border-white/14 py-4 text-base text-white/75">{d}</li>)}
              </ul>
            </Reveal>
          </div>
          <Reveal className="mt-8 max-w-2xl">
            <p className="text-base leading-relaxed text-white/60">{t('entrepreneurs.dd.note')}</p>
          </Reveal>
        </div>
      </section>
      <TextSection heading={t('entrepreneurs.ask.heading')} paragraphs={[t('entrepreneurs.ask.body')]} ctaLabel={t('entrepreneurs.ask.cta')} ctaTo="/strategy-session" variant="light" />
      <Footer />
    </main>
  );
}