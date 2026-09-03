import { useLanguage } from '@/lib/LanguageContext';
import Reveal from '@/components/site/Reveal';

export default function WhyMe() {
  const { t } = useLanguage();
  // Only the languages and evenings points remain; the attacking points were removed per request
  const points = [5, 6].map((i) => ({ lead: t(`home.whyme.p${i}l`), body: t(`home.whyme.p${i}b`) }));
  return (
    <section className="relative overflow-hidden bg-[#1E2A4A] px-5 py-20 text-white lg:px-[8vw] lg:py-40">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true" style={{ background: 'linear-gradient(120deg, rgba(184,134,11,0.10), transparent 45%)' }} />
      <div className="relative mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-12">
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
        </div>
      </div>
    </section>
  );
}