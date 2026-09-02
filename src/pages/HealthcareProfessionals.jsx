import { useLanguage } from '@/lib/LanguageContext';
import { usePageMeta } from '@/lib/usePageMeta';
import ServiceHero from '@/components/service/ServiceHero';
import PatternRows from '@/components/service/PatternRows';
import ServiceList from '@/components/service/ServiceList';
import TextSection from '@/components/service/TextSection';
import Callout from '@/components/service/Callout';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

export default function HealthcareProfessionals() {
  const { t } = useLanguage();
  usePageMeta(t('healthcare.meta.title'), t('healthcare.meta.description'));
  const hear = [1, 2, 3, 4, 5].map((i) => ({ lead: t(`healthcare.hear.r${i}l`), body: t(`healthcare.hear.r${i}b`) }));
  const handle = [1, 2, 3, 4, 5, 6].map((i) => t(`healthcare.handle.i${i}`));
  return (
    <main className="bg-[#FBFAF8]">
      <Header />
      <ServiceHero eyebrow={t('healthcare.hero.eyebrow')} headline={t('healthcare.hero.headline')} ctaLabel={t('healthcare.hero.cta')} ctaTo="/strategy-session" secondary={t('healthcare.hero.secondary')} />
      <TextSection heading={t('healthcare.clocks.heading')} paragraphs={[t('healthcare.clocks.p1'), t('healthcare.clocks.p2'), t('healthcare.clocks.p3'), t('healthcare.clocks.p4')]} variant="dark" centered />
      <PatternRows heading={t('healthcare.hear.heading')} rows={hear} variant="light" />
      <ServiceList heading={t('healthcare.handle.heading')} items={handle} />
      <Callout heading={t('healthcare.warn.heading')} paragraphs={[t('healthcare.warn.p1'), t('healthcare.warn.p2')]} ctaLabel={t('healthcare.warn.cta')} ctaTo="/strategy-session" />
      <Footer />
    </main>
  );
}