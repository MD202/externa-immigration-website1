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

const HERO_IMG = 'https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/51313beb1_generated_image.png';

export default function FamilySponsorship() {
  const { t } = useLanguage();
  usePageMeta(t('family.meta.title'), t('family.meta.description'));
  const types = [1, 2, 3, 4].map((i) => ({ lead: t(`family.types.r${i}l`), body: t(`family.types.r${i}b`) }));
  const steps = [1, 2, 3, 4, 5].map((i) => ({ n: `0${i}`, title: t(`family.steps.s${i}t`), body: t(`family.steps.s${i}b`) }));
  const hear = [1, 2, 3, 4, 5, 6, 7].map((i) => {
    const row = { lead: t(`family.hear.r${i}l`), body: t(`family.hear.r${i}b`) };
    if (i === 3) row.link = { label: t('family.hear.r3link'), to: '/refused-applications' };
    return row;
  });
  const handle = [1, 2, 3, 4, 5, 6, 7, 8].map((i) => t(`family.handle.i${i}`));
  return (
    <main className="bg-[#FBFAF8]">
      <Header />
      <ServiceHero eyebrow={t('family.hero.eyebrow')} headline={t('family.hero.headline')} body={t('family.hero.body')} ctaLabel={t('family.hero.cta')} ctaTo="/strategy-session" image={HERO_IMG} />
      <PatternRows heading={t('family.types.heading')} intro={t('family.types.intro')} rows={types} variant="light" />
      <NumberedProcess eyebrow={t('family.steps.eyebrow')} heading={t('family.steps.heading')} steps={steps} variant="dark" />
      <PatternRows heading={t('family.hear.heading')} rows={hear} variant="light" />
      <ServiceList heading={t('family.handle.heading')} items={handle} />
      <TextSection heading={t('family.lang.heading')} paragraphs={[t('family.lang.body')]} variant="light" />
      <TextSection heading={t('family.honesty.heading')} paragraphs={[t('family.honesty.p1'), t('family.honesty.p2')]} variant="light" />
      <CloseCta label={t('nav.bookCta')} />
      <Footer />
    </main>
  );
}