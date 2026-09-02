import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { usePageMeta } from '@/lib/usePageMeta';
import ServiceHero from '@/components/service/ServiceHero';
import PatternRows from '@/components/service/PatternRows';
import NumberedProcess from '@/components/service/NumberedProcess';
import Reveal from '@/components/site/Reveal';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

export default function RefusedApplications() {
  const { t } = useLanguage();
  usePageMeta(t('refused.meta.title'), t('refused.meta.description'));
  const process = [
    { n: '01', title: t('refused.process.s1t'), body: t('refused.process.s1b') },
    { n: '02', title: t('refused.process.s2t'), body: t('refused.process.s2b') },
    { n: '03', title: t('refused.process.s3t'), body: t('refused.process.s3b') },
    { n: '04', title: t('refused.process.s4t'), body: t('refused.process.s4b') },
    { n: '05', title: t('refused.process.s5t'), body: t('refused.process.s5b') },
  ];
  const also = [
    { lead: t('refused.also.r1l'), body: t('refused.also.r1b') },
    { lead: t('refused.also.r2l'), body: t('refused.also.r2b') },
  ];
  return (
    <main className="bg-white">
      <Header />
      <ServiceHero eyebrow={t('refused.hero.eyebrow')} headline={t('refused.hero.headline')} body={t('refused.hero.body')} ctaLabel={t('refused.hero.cta')} ctaTo="/strategy-session" />
      <PatternRows heading={t('refused.mistake.heading')} rows={[{ lead: t('refused.mistake.lead'), body: t('refused.mistake.body') }]} close={t('refused.mistake.close')} variant="light" />
      <NumberedProcess eyebrow={t('refused.process.eyebrow')} steps={process} variant="dark" />
      <section id="fairness" className="bg-[#FBFAF8] px-5 py-28 lg:px-[8vw] lg:py-40">
        <div className="mx-auto max-w-[1240px]">
          <Reveal>
            <div className="border border-[#1E2A4A]/15 border-l-2 border-l-[#DC2626] bg-white p-8 lg:p-12">
              <h2 className="font-heading text-3xl text-[#1E2A4A]">{t('refused.fairness.eyebrow')}</h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#1E2A4A]/70">{t('refused.fairness.p1')}</p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#1E2A4A]/70">{t('refused.fairness.p2')}</p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#1E2A4A]/70">{t('refused.fairness.p3')}</p>
              <div className="mt-8 flex items-center gap-4">
                <span className="font-mono text-xs uppercase tracking-[.18em] text-[#DC2626]">URGENT</span>
                <Link to="/strategy-session" className="btn btn-primary">{t('refused.fairness.cta')} <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="bg-[#1E2A4A] px-5 py-28 text-white lg:px-[8vw] lg:py-40">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="max-w-2xl">
            <h2 className="section-title text-white">{t('refused.appeals.heading')}</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/60">{t('refused.appeals.p1')}</p>
            <p className="mt-4 text-lg leading-relaxed text-white/60">{t('refused.appeals.p2')}</p>
            <p className="mt-4 text-lg leading-relaxed text-white/60">{t('refused.appeals.p3')}</p>
          </Reveal>
        </div>
      </section>
      <PatternRows eyebrow={t('refused.also.heading')} heading={t('refused.also.sub')} rows={also} variant="light" />
      <section className="bg-[#FBFAF8] px-5 py-28 text-center lg:py-36">
        <div className="mx-auto max-w-[720px]">
          <Reveal>
            <p className="text-lg leading-relaxed text-[#1E2A4A]/70">{t('refused.close.bring')}</p>
            <Link to="/strategy-session" className="btn btn-primary mt-8">{t('refused.close.cta')} <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}