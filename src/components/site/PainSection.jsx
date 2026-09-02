import { useLanguage } from '@/lib/LanguageContext';
import Reveal from '@/components/site/Reveal';

export default function PainSection() {
  const { t } = useLanguage();
  const rows = [1, 2, 3, 4, 5, 6, 7, 8].map((i) => ({ lead: t(`home.pain.r${i}l`), body: t(`home.pain.r${i}b`) }));
  return (
    <section className="bg-[#FBFAF8] px-5 py-28 lg:px-[8vw] lg:py-40">
      <div className="mx-auto max-w-[1240px]">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{t('home.pain.eyebrow')}</p>
          <h2 className="section-title">{t('home.pain.heading')}</h2>
        </Reveal>
        <div className="mt-14 border-t border-[#1E2A4A]/10">
          {rows.map((row, i) => (
            <Reveal key={i}>
              <article className="group relative border-b border-[#1E2A4A]/10 py-8 pl-6 transition hover:bg-[#1E2A4A]/[.02]">
                <span className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-[#B8860B] transition-transform duration-200 group-hover:scale-y-100" />
                <p className="font-heading text-xl text-[#1E2A4A]">{row.lead}</p>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-[#1E2A4A]/65">{row.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 max-w-2xl">
          <p className="font-heading text-2xl italic text-[#1E2A4A]">{t('home.pain.close')}</p>
        </Reveal>
      </div>
    </section>
  );
}