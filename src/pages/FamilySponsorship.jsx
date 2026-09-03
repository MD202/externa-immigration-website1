import { useState } from 'react';
import { Link } from 'react-router-dom';
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

const HERO_IMG = 'https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/51313beb1_generated_image.png';

export default function FamilySponsorship() {
  const { t } = useLanguage();
  usePageMeta(t('family.meta.title'), t('family.meta.description'));
  const [tab, setTab] = useState('outland');
  const [openFaq, setOpenFaq] = useState(0);
  const outland = [
    { title: t('family.types.r1l'), body: t('family.types.r1b'), body2: t('family.types.r1b2'), key: t('family.types.r1key') },
    { title: t('family.types.r3l'), body: t('family.types.r3b'), body2: t('family.types.r3b2'), key: t('family.types.r3key') },
    { title: t('family.types.r4l'), body: t('family.types.r4b'), body2: t('family.types.r4b2'), key: t('family.types.r4key') },
  ];
  const inland = [
    { title: t('family.types.r2l'), body: t('family.types.r2b'), body2: t('family.types.r2b2'), key: t('family.types.r2key') },
  ];
  const cards = tab === 'outland' ? outland : inland;
  const steps = [1, 2, 3, 4, 5].map((i) => ({ n: `0${i}`, title: t(`family.steps.s${i}t`), body: t(`family.steps.s${i}b`) }));
  const hear = [1, 2, 3, 4, 5, 6, 7].map((i) => {
    const row = { lead: t(`family.hear.r${i}l`), body: t(`family.hear.r${i}b`) };
    if (i === 3) row.link = { label: t('family.hear.r3link'), to: '/refused-applications' };
    return row;
  });
  const handle = [1, 2, 3, 4, 5, 6, 7, 8].map((i) => t(`family.handle.i${i}`));
  return (
    <main className="bg-[#FBFAF8]">
      <Header />
      <ServiceHero eyebrow={t('family.hero.eyebrow')} headline={t('family.hero.headline')} body={t('family.hero.body')} ctaLabel={t('family.hero.cta')} ctaTo="/strategy-session" image={HERO_IMG} />
      <section className="bg-[#FBFAF8] px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="max-w-2xl">
            <h2 className="section-title">{t('family.types.heading')}</h2>
            <p className="mt-6 text-lg leading-relaxed text-[#1E2A4A]/65">{t('family.types.intro')}</p>
          </Reveal>
          <div className="mt-8 inline-flex rounded-full border border-[#1E2A4A]/15 bg-white p-1">
            <button onClick={() => setTab('outland')} className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${tab === 'outland' ? 'bg-[#1E2A4A] text-white' : 'text-[#1E2A4A]/60 hover:text-[#1E2A4A]'}`}>Outland</button>
            <button onClick={() => setTab('inland')} className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${tab === 'inland' ? 'bg-[#1E2A4A] text-white' : 'text-[#1E2A4A]/60 hover:text-[#1E2A4A]'}`}>Inland</button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {cards.map((c, i) => (
              <Reveal key={i}>
                <article className="flex h-full flex-col border border-[#1E2A4A]/10 bg-white p-8 transition hover:-translate-y-1 hover:border-[#B8860B]/40 hover:shadow-[0_18px_40px_-24px_rgba(30,42,74,0.35)]">
                  <h3 className="font-heading text-2xl text-[#1E2A4A]">{c.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-[#1E2A4A]/70">{c.body}</p>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-[#1E2A4A]/60">{c.body2}</p>
                  <p className="mt-6 border-t border-[#1E2A4A]/10 pt-4 text-sm font-semibold uppercase tracking-[.08em] text-[#B8860B]">{c.key}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <NumberedProcess eyebrow={t('family.steps.eyebrow')} heading={t('family.steps.heading')} steps={steps} variant="dark" />
      <section className="bg-white px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto max-w-[900px]">
          <Reveal><p className="eyebrow">{t('family.hear.heading')}</p></Reveal>
          <div className="mt-8 border-t border-[#1E2A4A]/10">
            {hear.map((row, i) => (
              <div key={i} className="border-b border-[#1E2A4A]/10">
                <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left" aria-expanded={openFaq === i}>
                  <span className="font-heading text-lg text-[#1E2A4A]">{row.lead}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-[#B8860B] transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-out ${openFaq === i ? 'max-h-60 pb-6' : 'max-h-0'}`}>
                  <p className="text-base leading-relaxed text-[#1E2A4A]/70">{row.body}</p>
                  {row.link && <Link to={row.link.to} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#B8860B]">{row.link.label} →</Link>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ServiceList heading={t('family.handle.heading')} items={handle} />
      <section className="bg-[#FBFAF8] px-5 py-16 lg:px-[8vw] lg:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-10 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow">{t('family.lang.heading')}</p>
            <p className="mt-4 text-lg leading-relaxed text-[#1E2A4A]/70">{t('family.lang.body')}</p>
          </Reveal>
          <Reveal>
            <p className="eyebrow">{t('family.honesty.heading')}</p>
            <p className="mt-4 text-lg leading-relaxed text-[#1E2A4A]/70">{t('family.honesty.p1')}</p>
          </Reveal>
        </div>
      </section>
      <CloseCta label={t('nav.bookCta')} />
      <Footer />
    </main>
  );
}