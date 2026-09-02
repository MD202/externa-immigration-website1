import { useLanguage } from '@/lib/LanguageContext';
import Reveal from '@/components/site/Reveal';

export default function WhyMe() {
  const { t } = useLanguage();
  const points = [1, 2, 3, 4, 5, 6, 7].map((i) => ({ lead: t(`home.whyme.p${i}l`), body: t(`home.whyme.p${i}b`) }));
  return (
    <section className="bg-[#1E2A4A] px-5 py-28 text-white lg:px-[8vw] lg:py-40">
      <div className="mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow">{t('home.whyme.eyebrow')}</p>
            <h2 className="section-title text-white">{t('home.whyme.heading')}</h2>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="border-t border-white/14">
            {points.map((p, i) => (
              <Reveal key={i}>
                <article className="border-b border-white/14 py-8">
                  <p className="font-heading text-xl text-white">{p.lead}</p>
                  <p className="mt-2 max-w-xl text-base leading-relaxed text-white/60">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 max-w-xl">
            <p className="text-base leading-relaxed text-white/55">{t('home.whyme.close')}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}