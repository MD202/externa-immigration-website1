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

const HERO_IMG = 'https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/90dda2851_generated_image.png';

export default function RefusedApplications() {
  const { t } = useLanguage();
  usePageMeta(t('refused.meta.title'), t('refused.meta.description'));
  const process = [1, 2, 3, 4, 5].map((i) => ({ n: `0${i}`, title: t(`refused.process.s${i}t`), body: t(`refused.process.s${i}b`) }));
  const hear = [1, 2, 3, 4].map((i) => ({ lead: t(`refused.hear.r${i}l`), body: t(`refused.hear.r${i}b`) }));
  const handle = [1, 2, 3, 4, 5, 6].map((i) => t(`refused.handle.i${i}`));
  return (
    <main className="bg-[#FBFAF8]">
      <Header />
      <ServiceHero eyebrow={t('refused.hero.eyebrow')} headline={t('refused.hero.headline')} body={t('refused.hero.body')} ctaLabel={t('refused.hero.cta')} ctaTo="/strategy-session" image={HERO_IMG} />
      <PatternRows heading={t('refused.mistake.heading')} rows={[{ lead: t('refused.mistake.lead'), body: t('refused.mistake.body') }]} close={t('refused.mistake.close')} variant="light" />
      <NumberedProcess eyebrow={t('refused.process.eyebrow')} steps={process} variant="dark" />
      <PatternRows heading={t('refused.hear.heading')} rows={hear} variant="light" />
      <ServiceList heading={t('refused.handle.heading')} items={handle} />
      <TextSection heading={t('refused.lang.heading')} paragraphs={[t('refused.lang.body')]} variant="light" />
      <TextSection heading={t('refused.honesty.heading')} paragraphs={[t('refused.honesty.p1'), t('refused.honesty.p2')]} variant="light" />
      <CloseCta label={t('refused.close.cta')} />
      <Footer />
    </main>
  );
}