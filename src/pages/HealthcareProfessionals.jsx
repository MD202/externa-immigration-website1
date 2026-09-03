import { useLanguage } from '@/lib/LanguageContext';
import { usePageMeta } from '@/lib/usePageMeta';
import ServiceHero from '@/components/service/ServiceHero';
import PatternRows from '@/components/service/PatternRows';
import ServiceList from '@/components/service/ServiceList';
import TextSection from '@/components/service/TextSection';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

const HERO_IMG = 'https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/043ff4100_generated_image.png';

export default function HealthcareProfessionals() {
  const { t } = useLanguage();
  usePageMeta(t('healthcare.meta.title'), t('healthcare.meta.description'));
  const programs = [1, 2, 3, 4].map((i) => ({ lead: t(`healthcare.programs.r${i}l`), body: t(`healthcare.programs.r${i}b`) }));
  const hear = [1, 2, 3, 4, 5].map((i) => ({ lead: t(`healthcare.hear.r${i}l`), body: t(`healthcare.hear.r${i}b`) }));
  const handle = [1, 2, 3, 4, 5].map((i) => t(`healthcare.handle.i${i}`));
  return (
    <main className="bg-[#FBFAF8]">
      <Header />
      <ServiceHero eyebrow={t('healthcare.hero.eyebrow')} headline={t('healthcare.hero.headline')} body={t('healthcare.hero.body')} ctaLabel={t('healthcare.hero.cta')} ctaTo="/strategy-session" secondary={t('healthcare.hero.secondary')} image={HERO_IMG} />
      <TextSection heading={t('healthcare.clocks.heading')} paragraphs={[t('healthcare.clocks.p1'), t('healthcare.clocks.p2'), t('healthcare.clocks.p3'), t('healthcare.clocks.p4')]} variant="dark" centered />
      <PatternRows heading={t('healthcare.programs.heading')} intro={t('healthcare.programs.intro')} rows={programs} variant="light" />
      <PatternRows heading={t('healthcare.hear.heading')} rows={hear} variant="light" />
      <ServiceList heading={t('healthcare.handle.heading')} items={handle} />
      <Footer />
    </main>
  );
}