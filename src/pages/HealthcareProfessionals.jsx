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

const HERO_IMG = 'https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/043ff4100_generated_image.png';

export default function HealthcareProfessionals() {
  const { t } = useLanguage();
  usePageMeta(t('healthcare.meta.title'), t('healthcare.meta.description'));
  const programs = [1, 2, 3, 4].map((i) => ({ lead: t(`healthcare.programs.r${i}l`), body: t(`healthcare.programs.r${i}b`) }));
  const steps = [1, 2, 3, 4].map((i) => ({ n: `0${i}`, title: t(`healthcare.steps.s${i}t`), body: t(`healthcare.steps.s${i}b`) }));
  const hear = [1, 2, 3, 4, 5].map((i) => ({ lead: t(`healthcare.hear.r${i}l`), body: t(`healthcare.hear.r${i}b`) }));
  const handle = [1, 2, 3, 4, 5].map((i) => t(`healthcare.handle.i${i}`));
  return (
    <main className="bg-[#FBFAF8]">
      <Header />
      <ServiceHero eyebrow={t('healthcare.hero.eyebrow')} headline={t('healthcare.hero.headline')} body={t('healthcare.hero.body')} ctaLabel={t('healthcare.hero.cta')} ctaTo="/strategy-session" secondary={t('healthcare.hero.secondary')} image={HERO_IMG} />
      <PatternRows heading={t('healthcare.programs.heading')} intro={t('healthcare.programs.intro')} rows={programs} variant="light" />
      <NumberedProcess eyebrow={t('healthcare.steps.eyebrow')} heading={t('healthcare.steps.heading')} steps={steps} variant="dark" />
      <PatternRows heading={t('healthcare.hear.heading')} rows={hear} variant="light" />
      <ServiceList heading={t('healthcare.handle.heading')} items={handle} />
      <TextSection heading={t('healthcare.lang.heading')} paragraphs={[t('healthcare.lang.body')]} variant="light" />
      <TextSection heading={t('healthcare.honesty.heading')} paragraphs={[t('healthcare.honesty.p1'), t('healthcare.honesty.p2')]} variant="light" />
      <CloseCta label={t('nav.bookCta')} />
      <Footer />
    </main>
  );
}