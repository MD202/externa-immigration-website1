import { useLanguage } from '@/lib/LanguageContext';
import { usePageMeta } from '@/lib/usePageMeta';
import ServiceHero from '@/components/service/ServiceHero';
import TextSection from '@/components/service/TextSection';
import NumberedProcess from '@/components/service/NumberedProcess';
import PatternRows from '@/components/service/PatternRows';
import ServiceList from '@/components/service/ServiceList';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import CloseCta from '@/components/service/CloseCta';

const HERO_IMG = 'https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/929ea20db_generated_image.png';
const PAD = 'py-14 lg:py-20';

export default function HumanitarianCompassionate() {
  const { t } = useLanguage();
  usePageMeta(t('hc.meta.title'), t('hc.meta.description'));
  const build = [1, 2, 3, 4, 5, 6].map((i) => ({ n: `0${i}`, title: t(`hc.build.r${i}l`), body: t(`hc.build.r${i}b`) }));
  const hear = [1, 2, 3, 4].map((i) => ({ lead: t(`hc.hear.r${i}l`), body: t(`hc.hear.r${i}b`) }));
  const handle = [1, 2, 3, 4, 5, 6].map((i) => t(`hc.handle.i${i}`));
  return (
    <main className="bg-[#FBFAF8]">
      <Header />
      <ServiceHero eyebrow={t('hc.hero.eyebrow')} headline={t('hc.hero.headline')} body={t('hc.hero.body')} ctaLabel={t('hc.hero.cta')} ctaTo="/#where" redButton={false} size="quiet" variant="light" image={HERO_IMG} />
      <TextSection heading={t('hc.what.heading')} paragraphs={[t('hc.what.p1'), t('hc.what.p2'), t('hc.what.p3')]} variant="light" pad={PAD} />
      <NumberedProcess heading={t('hc.build.heading')} intro={t('hc.build.intro')} steps={build} variant="light" />
      <PatternRows heading={t('hc.hear.heading')} rows={hear} variant="light" />
      <ServiceList heading={t('hc.handle.heading')} items={handle} />
      <TextSection heading={t('hc.lang.heading')} paragraphs={[t('hc.lang.body')]} variant="light" pad={PAD} />
      <TextSection heading={t('hc.honesty.heading')} paragraphs={[t('hc.honesty.p1'), t('hc.honesty.p2')]} variant="light" pad={PAD} />
      <CloseCta label={t('hc.close.cta')} />
      <Footer />
    </main>
  );
}