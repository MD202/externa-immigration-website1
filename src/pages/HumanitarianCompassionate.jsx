import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { usePageMeta } from '@/lib/usePageMeta';
import ServiceHero from '@/components/service/ServiceHero';
import PatternRows from '@/components/service/PatternRows';
import TextSection from '@/components/service/TextSection';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Reveal from '@/components/site/Reveal';

const HERO_IMG = 'https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/929ea20db_generated_image.png';
const PAD = 'py-16 lg:py-24';

export default function HumanitarianCompassionate() {
  const { t } = useLanguage();
  usePageMeta(t('hc.meta.title'), t('hc.meta.description'));
  const ifYou = [1, 2, 3, 4, 5].map((i) => ({ lead: t(`hc.ify.r${i}l`), body: t(`hc.ify.r${i}b`) }));
  const build = [1, 2, 3, 4, 5, 6].map((i) => ({ lead: t(`hc.build.r${i}l`), body: t(`hc.build.r${i}b`) }));
  return (
    <main className="bg-[#FBFAF8]">
      <Header />
      <ServiceHero eyebrow={t('hc.hero.eyebrow')} headline={t('hc.hero.headline')} body={t('hc.hero.body')} ctaLabel={t('hc.hero.cta')} ctaTo="/#where" redButton={false} size="quiet" variant="light" image={HERO_IMG} />
      <TextSection heading={t('hc.what.heading')} paragraphs={[t('hc.what.p1'), t('hc.what.p2'), t('hc.what.p3')]} variant="light" pad={PAD} />
      <PatternRows heading={t('hc.ify.heading')} rows={ifYou} variant="light" hover={false} pad={PAD} />
      <PatternRows heading={t('hc.build.heading')} intro={t('hc.build.intro')} rows={build} variant="light" hover={false} pad={PAD} />
      <section className="bg-[#FBFAF8] px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="font-heading text-2xl text-[#1E2A4A]">{t('hc.review.heading')}</h2>
            <p className="mt-4 text-base leading-relaxed text-[#1E2A4A]/65">{t('hc.review.body')}</p>
          </Reveal>
        </div>
      </section>
      <TextSection heading={t('hc.honesty.heading')} paragraphs={[t('hc.honesty.p1'), t('hc.honesty.p2')]} variant="light" pad={PAD} />
      <TextSection paragraphs={[t('hc.also.body')]} variant="light" pad={PAD} />
      <section className="bg-[#FBFAF8] px-5 py-16 text-center lg:py-24">
        <div className="mx-auto max-w-[720px]">
          <Reveal>
            <Link to="/strategy-session" className="btn btn-primary">{t('hc.close.cta')} <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}