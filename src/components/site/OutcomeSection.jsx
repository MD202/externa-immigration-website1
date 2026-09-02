import { useLanguage } from '@/lib/LanguageContext';
import Reveal from '@/components/site/Reveal';

export default function OutcomeSection() {
  const { t } = useLanguage();
  const items = [
    { title: t('home.outcome.o1t'), body: t('home.outcome.o1b') },
    { title: t('home.outcome.o2t'), body: t('home.outcome.o2b') },
    { title: t('home.outcome.o3t'), body: t('home.outcome.o3b') },
  ];
  return (
    <section className="bg-[#13203F] px-5 py-28 text-white lg:px-[8vw] lg:py-40">
      <div className="mx-auto max-w-[1240px]">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{t('home.outcome.eyebrow')}</p>
          <h2 className="section-title text-white">{t('home.outcome.heading')}</h2>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 100}>
              <article className="border-l-2 border-[#B8860B]/40 pl-6">
                <h3 className="font-heading text-2xl text-white">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-white/60">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}