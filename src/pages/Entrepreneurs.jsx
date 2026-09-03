import { useLanguage } from '@/lib/LanguageContext';
import { usePageMeta } from '@/lib/usePageMeta';
import ServiceHero from '@/components/service/ServiceHero';
import PatternRows from '@/components/service/PatternRows';
import NumberedProcess from '@/components/service/NumberedProcess';
import ServiceList from '@/components/service/ServiceList';
import TextSection from '@/components/service/TextSection';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import CloseCta from '@/components/service/CloseCta';

const HERO_IMG = 'https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/e0c6dad26_generated_image.png';

export default function Entrepreneurs() {
  const { t } = useLanguage();
  usePageMeta(t('entrepreneurs.meta.title'), t('entrepreneurs.meta.description'));
  const programs = [1, 2, 3, 4].map((i) => ({ lead: t(`entrepreneurs.programs.r${i}l`), body: t(`entrepreneurs.programs.r${i}b`) }));
  const steps = [1, 2, 3, 4, 5].map((i) => ({ n: `0${i}`, title: t(`entrepreneurs.steps.s${i}t`), body: t(`entrepreneurs.steps.s${i}b`) }));
  const hear = [1, 2, 3, 4, 5, 6].map((i) => ({ lead: t(`entrepreneurs.hear.r${i}l`), body: t(`entrepreneurs.hear.r${i}b`) }));
  const dos = [1, 2, 3, 4, 5, 6].map((i) => t(`entrepreneurs.do.i${i}`));
  return (
    <main className="bg-[#FBFAF8]">
      <Header />
      <ServiceHero eyebrow={t('entrepreneurs.hero.eyebrow')} headline={t('entrepreneurs.hero.headline')} body={t('entrepreneurs.hero.body')} ctaLabel={t('entrepreneurs.hero.cta')} ctaTo="/strategy-session" image={HERO_IMG} />
      <PatternRows heading={t('entrepreneurs.programs.heading')} intro={t('entrepreneurs.programs.intro')} rows={programs} variant="light" />
      <NumberedProcess eyebrow={t('entrepreneurs.steps.eyebrow')} heading={t('entrepreneurs.steps.heading')} steps={steps} variant="dark" />
      <PatternRows heading={t('entrepreneurs.hear.heading')} rows={hear} variant="light" />
      <ServiceList heading={t('entrepreneurs.do.heading')} items={dos} />
      <TextSection heading={t('entrepreneurs.lang.heading')} paragraphs={[t('entrepreneurs.lang.body')]} variant="light" />
      <TextSection heading={t('entrepreneurs.honesty.heading')} paragraphs={[t('entrepreneurs.honesty.p1'), t('entrepreneurs.honesty.p2')]} variant="light" />
      <CloseCta label={t('entrepreneurs.close.cta')} />
      <Footer />
    </main>
  );
}