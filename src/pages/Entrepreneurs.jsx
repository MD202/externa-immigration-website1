import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { usePageMeta } from '@/lib/usePageMeta';
import ServiceHero from '@/components/service/ServiceHero';
import NumberedProcess from '@/components/service/NumberedProcess';
import ServiceList from '@/components/service/ServiceList';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import CloseCta from '@/components/service/CloseCta';
import Reveal from '@/components/site/Reveal';
import HearRows from '@/components/site/HearRows';

const HERO_IMG = 'https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/e0c6dad26_generated_image.png';

export default function Entrepreneurs() {
  const { t } = useLanguage();
  usePageMeta(t('entrepreneurs.meta.title'), t('entrepreneurs.meta.description'));
  const [tab, setTab] = useState('canada');
  const canadaWide = [
    { title: t('entrepreneurs.programs.r1l'), body: t('entrepreneurs.programs.r1b'), body2: t('entrepreneurs.programs.r1b2'), key: t('entrepreneurs.programs.r1key') },
    { title: t('entrepreneurs.programs.r3l'), body: t('entrepreneurs.programs.r3b'), body2: t('entrepreneurs.programs.r3b2'), key: t('entrepreneurs.programs.r3key') },
    { title: t('entrepreneurs.programs.r4l'), body: t('entrepreneurs.programs.r4b'), body2: t('entrepreneurs.programs.r4b2'), key: t('entrepreneurs.programs.r4key') },
  ];
  const provinceBased = [
    { title: t('entrepreneurs.programs.r2l'), body: t('entrepreneurs.programs.r2b'), body2: t('entrepreneurs.programs.r2b2'), key: t('entrepreneurs.programs.r2key') },
    { title: t('entrepreneurs.programs.ont.l'), body: t('entrepreneurs.programs.ont.b'), body2: t('entrepreneurs.programs.ont.b2'), key: t('entrepreneurs.programs.ont.key'), status: t('entrepreneurs.programs.ont.status') },
    { title: t('entrepreneurs.programs.bc.l'), body: t('entrepreneurs.programs.bc.b'), body2: t('entrepreneurs.programs.bc.b2'), key: t('entrepreneurs.programs.bc.key') },
    { title: t('entrepreneurs.programs.ab.l'), body: t('entrepreneurs.programs.ab.b'), body2: t('entrepreneurs.programs.ab.b2'), key: t('entrepreneurs.programs.ab.key') },
    { title: t('entrepreneurs.programs.atlantic.l'), body: t('entrepreneurs.programs.atlantic.b'), body2: t('entrepreneurs.programs.atlantic.b2'), key: t('entrepreneurs.programs.atlantic.key') },
  ];
  const cards = tab === 'canada' ? canadaWide : provinceBased;
  const steps = [1, 2, 3, 4, 5].map((i) => ({ n: `0${i}`, title: t(`entrepreneurs.steps.s${i}t`), body: t(`entrepreneurs.steps.s${i}b`) }));
  const hear = [1, 2, 3, 4, 5, 6].map((i) => ({ lead: t(`entrepreneurs.hear.r${i}l`), body: t(`entrepreneurs.hear.r${i}b`) }));
  const dos = [1, 2, 3, 4, 5, 6].map((i) => t(`entrepreneurs.do.i${i}`));
  return (
    <main className="bg-[#FBFAF8]">
      <Header />
      <ServiceHero eyebrow={t('entrepreneurs.hero.eyebrow')} headline={t('entrepreneurs.hero.headline')} body={t('entrepreneurs.hero.body')} ctaLabel={t('entrepreneurs.hero.cta')} ctaTo="/strategy-session" image={HERO_IMG} />
      <section className="bg-[#FBFAF8] px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="max-w-2xl">
            <h2 className="section-title">{t('entrepreneurs.programs.heading')}</h2>
            <p className="mt-6 text-lg leading-relaxed text-[#1E2A4A]/65">{t('entrepreneurs.programs.intro')}</p>
          </Reveal>
          <div className="mt-8 inline-flex rounded-full border border-[#1E2A4A]/15 bg-white p-1">
            <button onClick={() => setTab('canada')} className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${tab === 'canada' ? 'bg-[#1E2A4A] text-white' : 'text-[#1E2A4A]/60 hover:text-[#1E2A4A]'}`}>{t('entrepreneurs.programs.canadaWide')}</button>
            <button onClick={() => setTab('province')} className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${tab === 'province' ? 'bg-[#1E2A4A] text-white' : 'text-[#1E2A4A]/60 hover:text-[#1E2A4A]'}`}>{t('entrepreneurs.programs.provinceBased')}</button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {cards.map((c, i) => (
              <Reveal key={i}>
                <article className={`flex h-full flex-col border p-8 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(30,42,74,0.35)] ${c.status ? 'border-[#8C2F39]/30 bg-[#FBF6F6] hover:border-[#8C2F39]/50' : 'border-[#1E2A4A]/10 bg-white hover:border-[#B8860B]/40'}`}>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className={`font-heading text-2xl ${c.status ? 'text-[#1E2A4A]/55' : 'text-[#1E2A4A]'}`}>{c.title}</h3>
                    {c.status && <span className="shrink-0 rounded-full border border-[#8C2F39]/40 px-3 py-1 text-xs font-semibold uppercase tracking-[.08em] text-[#8C2F39]">{c.status}</span>}
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-[#1E2A4A]/70">{c.body}</p>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-[#1E2A4A]/60">{c.body2}</p>
                  <p className={`mt-6 border-t pt-4 text-sm font-semibold uppercase tracking-[.08em] ${c.status ? 'border-[#1E2A4A]/10 text-[#8C2F39]' : 'border-[#1E2A4A]/10 text-[#B8860B]'}`}>{c.key}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <NumberedProcess eyebrow={t('entrepreneurs.steps.eyebrow')} heading={t('entrepreneurs.steps.heading')} steps={steps} variant="dark" />
      <HearRows heading={t('entrepreneurs.hear.heading')} items={hear} />
      <ServiceList heading={t('entrepreneurs.do.heading')} items={dos} />
      <section className="bg-[#FBFAF8] px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-10 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow">{t('entrepreneurs.lang.heading')}</p>
            <p className="mt-4 text-lg leading-relaxed text-[#1E2A4A]/70">{t('entrepreneurs.lang.body')}</p>
          </Reveal>
          <Reveal>
            <p className="eyebrow">{t('entrepreneurs.honesty.heading')}</p>
            <p className="mt-4 text-lg leading-relaxed text-[#1E2A4A]/70">{t('entrepreneurs.honesty.p1')}</p>
            <p className="mt-3 text-lg leading-relaxed text-[#1E2A4A]/70">{t('entrepreneurs.honesty.p2')}</p>
          </Reveal>
        </div>
      </section>
      <CloseCta label={t('entrepreneurs.close.cta')} />
      <Footer />
    </main>
  );
}