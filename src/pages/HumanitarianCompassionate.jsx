import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { usePageMeta } from '@/lib/usePageMeta';
import ServiceHero from '@/components/service/ServiceHero';
import TextSection from '@/components/service/TextSection';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Reveal from '@/components/site/Reveal';

const HERO_IMG = 'https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/929ea20db_generated_image.png';
const PAD = 'py-14 lg:py-20';

export default function HumanitarianCompassionate() {
  const { t } = useLanguage();
  usePageMeta(t('hc.meta.title'), t('hc.meta.description'));
  const ifYou = [1, 2, 3, 4, 5].map((i) => ({ lead: t(`hc.ify.r${i}l`), body: t(`hc.ify.r${i}b`) }));
  const build = [1, 2, 3, 4, 5, 6].map((i) => ({ lead: t(`hc.build.r${i}l`), body: t(`hc.build.r${i}b`) }));
  return (
    <main className="bg-[#FBFAF8]">
      <Header />
      <ServiceHero eyebrow={t('hc.hero.eyebrow')} headline={t('hc.hero.headline')} body={t('hc.hero.body')} ctaLabel={t('hc.hero.cta')} ctaTo="/#where" redButton={false} size="quiet" variant="light" image={HERO_IMG} />
      <TextSection heading={t('hc.what.heading')} paragraphs={[t('hc.what.p1'), t('hc.what.p2'), t('hc.what.p3')]} variant="light" pad={PAD} />
      <section className="bg-[#FBFAF8] px-5 py-14 lg:px-[8vw] lg:py-20">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="max-w-2xl">
            <h2 className="section-title">{t('hc.ify.heading')}</h2>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden border border-[#1E2A4A]/10 bg-[#1E2A4A]/10 sm:grid-cols-2">
            {ifYou.map((r, i) => (
              <Reveal key={i}>
                <div className="h-full bg-[#FBFAF8] p-7">
                  <p className="font-heading text-xl text-[#1E2A4A]">{r.lead}</p>
                  <p className="mt-2 text-base leading-relaxed text-[#1E2A4A]/65">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#1E2A4A] px-5 py-14 text-white lg:px-[8vw] lg:py-20">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="max-w-2xl">
            <h2 className="section-title text-white">{t('hc.build.heading')}</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/60">{t('hc.build.intro')}</p>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden border border-white/14 bg-white/14 sm:grid-cols-2">
            {build.map((r, i) => (
              <Reveal key={i}>
                <div className="h-full bg-[#1E2A4A] p-7">
                  <p className="font-heading text-xl text-white">{r.lead}</p>
                  <p className="mt-2 text-base leading-relaxed text-white/60">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <TextSection heading={t('hc.honesty.heading')} paragraphs={[t('hc.honesty.p1')]} variant="light" pad={PAD} />
      <section className="bg-[#FBFAF8] px-5 py-14 text-center lg:py-20">
        <div className="mx-auto max-w-[720px]">
          <Reveal>
            <Link to="/strategy-session" className="btn btn-primary">{t('hc.close.cta')} <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}