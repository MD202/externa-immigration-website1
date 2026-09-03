import { useLanguage } from '@/lib/LanguageContext';
import Reveal from '@/components/site/Reveal';
import { Image } from '@/components/ui/image';

export default function WhyMe() {
  const { t } = useLanguage();
  const WHYME_IMG = 'https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/b433380ba_generated_image.png';
  const points = [
    { lead: t('home.whyme.p1l'), body: t('home.whyme.p1b') },
    { lead: t('home.whyme.p2l'), body: t('home.whyme.p2b') },
    { lead: t('home.whyme.p3l'), body: t('home.whyme.p3b') },
    { lead: t('home.whyme.p4l'), langs: true },
    { lead: t('home.whyme.p5l') },
    { lead: t('home.whyme.p6l'), body: t('home.whyme.p6b') },
  ];
  return (
    <section className="relative overflow-hidden bg-[#1E2A4A] px-5 py-20 text-white lg:px-[8vw] lg:py-40">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true" style={{ background: 'linear-gradient(120deg, rgba(184,134,11,0.10), transparent 45%)' }} />
      <div className="relative mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <div className="mb-8 overflow-hidden border border-white/10">
              <Image src={WHYME_IMG} fittingType="fill" className="aspect-[4/3] w-full" />
            </div>
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
                  {p.body && <p className="mt-2 max-w-xl text-base leading-relaxed text-white/60">{p.body}</p>}
                  {p.langs && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {['English', 'தமிழ்', 'हिंदी'].map((l) => (
                        <span key={l} className="border border-[#B8860B]/40 bg-gradient-to-br from-white/[.08] to-transparent px-4 py-2 font-heading text-base text-white">{l}</span>
                      ))}
                    </div>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}