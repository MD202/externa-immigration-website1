import { useLanguage } from '@/lib/LanguageContext';
import { usePageMeta } from '@/lib/usePageMeta';
import ServiceHero from '@/components/service/ServiceHero';
import PatternRows from '@/components/service/PatternRows';
import ServiceList from '@/components/service/ServiceList';
import TextSection from '@/components/service/TextSection';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

const HERO_IMG = 'https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/51313beb1_generated_image.png';

export default function FamilySponsorship() {
  const { t } = useLanguage();
  usePageMeta(t('family.meta.title'), t('family.meta.description'));
  const types = [1, 2, 3, 4].map((i) => ({ lead: t(`family.types.r${i}l`), body: t(`family.types.r${i}b`) }));
  const hear = [
    { lead: t('family.hear.r1l'), body: t('family.hear.r1b') },
    { lead: t('family.hear.r2l'), body: t('family.hear.r2b') },
    { lead: t('family.hear.r3l'), body: t('family.hear.r3b'), link: { label: t('family.hear.r3link'), to: '/refused-applications' } },
    { lead: t('family.hear.r4l'), body: t('family.hear.r4b') },
    { lead: t('family.hear.r5l'), body: t('family.hear.r5b') },
    { lead: t('family.hear.r6l'), body: t('family.hear.r6b') },
    { lead: t('family.hear.r7l'), body: t('family.hear.r7b') },
  ];
  const handle = [1, 2, 3, 4, 5, 6, 7, 8].map((i) => t(`family.handle.i${i}`));
  return (
    <main className="bg-[#FBFAF8]">
      <Header />
      <ServiceHero eyebrow={t('family.hero.eyebrow')} headline={t('family.hero.headline')} body={t('family.hero.body')} ctaLabel={t('family.hero.cta')} ctaTo="/strategy-session" image={HERO_IMG} />
      <TextSection heading={t('family.scrutiny.heading')} paragraphs={[t('family.scrutiny.p1'), t('family.scrutiny.p2')]} variant="light" />
      <PatternRows heading={t('family.types.heading')} intro={t('family.types.intro')} rows={types} variant="light" />
      <PatternRows heading={t('family.hear.heading')} rows={hear} variant="light" />
      <ServiceList heading={t('family.handle.heading')} items={handle} />
      <TextSection heading={t('family.lang.heading')} paragraphs={[t('family.lang.body')]} ctaLabel={t('family.lang.cta')} ctaTo="/strategy-session" variant="light" />
      <Footer />
    </main>
  );
}