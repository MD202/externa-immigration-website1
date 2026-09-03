import { useLanguage } from '@/lib/LanguageContext';
import Reveal from '@/components/site/Reveal';
import HoverRevealCards from '@/components/site/HoverRevealCards';

export default function PainSection() {
  const { t } = useLanguage();
  // row 4 ("prove your marriage is real") removed per request
  const rows = [1, 2, 3, 5, 6, 7, 8].map((i) => ({ lead: t(`home.pain.r${i}l`), body: t(`home.pain.r${i}b`) }));
  return (
    <section className="bg-[#FBFAF8] px-5 py-20 lg:px-[8vw] lg:py-40">
      <div className="mx-auto max-w-[1240px]">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{t('home.pain.eyebrow')}</p>
          <h2 className="section-title">{t('home.pain.heading')}</h2>
        </Reveal>
        <HoverRevealCards rows={rows} variant="light" columns={3} />
      </div>
    </section>
  );
}