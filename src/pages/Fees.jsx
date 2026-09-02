import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { usePageMeta } from '@/lib/usePageMeta';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Reveal from '@/components/site/Reveal';

export default function Fees() {
  const { t } = useLanguage();
  usePageMeta(t('fees.meta.title'), t('fees.meta.description'));
  const cards = [
    { name: t('fees.card1.name'), price: t('fees.card1.price'), desc: t('fees.card1.desc') },
    { name: t('fees.card2.name'), price: t('fees.card2.price'), desc: t('fees.card2.desc'), badge: t('fees.card2.badge'), featured: true },
    { name: t('fees.card3.name'), price: t('fees.card3.price'), desc: t('fees.card3.desc') },
  ];
  const wont = [t('fees.wont.r1'), t('fees.wont.r2'), t('fees.wont.r3'), t('fees.wont.r4')];
  return (
    <main className="bg-[#FBFAF8]">
      <Header />
      <section className="px-5 pt-32 pb-14 lg:px-[8vw] lg:pt-40">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="max-w-2xl">
            <h1 className="font-heading text-[40px] leading-[1.05] text-[#1E2A4A] sm:text-5xl lg:text-[64px]">{t('fees.heading')}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#1E2A4A]/65">{t('fees.intro')}</p>
          </Reveal>
        </div>
      </section>
      <section className="px-5 pb-20 lg:px-[8vw] lg:pb-28">
        <div className="mx-auto grid max-w-[1240px] gap-5 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={i} delay={i * 60} className="h-full">
              <div className={`flex h-full flex-col p-7 lg:p-10 ${c.featured ? 'bg-[#1E2A4A] text-white' : 'border border-[#1E2A4A]/12 bg-white text-[#1E2A4A]'}`}>
                {c.badge && <span className="font-mono text-xs uppercase tracking-[.18em] text-[#B8860B]">{c.badge}</span>}
                <h2 className="mt-2 font-heading text-2xl">{c.name}</h2>
                <p className="mt-4 font-heading text-4xl">{c.price}</p>
                <p className={`mt-4 text-base leading-relaxed ${c.featured ? 'text-white/70' : 'text-[#1E2A4A]/65'}`}>{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="bg-white px-5 py-20 lg:px-[8vw] lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="max-w-2xl">
            <h2 className="font-heading text-3xl text-[#1E2A4A] sm:text-4xl">{t('fees.rep.heading')}</h2>
            <p className="mt-6 text-lg leading-relaxed text-[#1E2A4A]/70">{t('fees.rep.p1')}</p>
            <p className="mt-4 text-base leading-relaxed text-[#1E2A4A]/65">{t('fees.rep.p2')}</p>
            <Link to="/strategy-session" className="btn btn-primary mt-8">{t('fees.rep.cta')} <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>
      <section className="px-5 py-20 lg:px-[8vw] lg:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-heading text-2xl text-[#1E2A4A]">{t('fees.pay.heading')}</h2>
            <p className="mt-4 text-base leading-relaxed text-[#1E2A4A]/70">{t('fees.pay.body')}</p>
          </Reveal>
          <Reveal>
            <h2 className="font-heading text-2xl text-[#1E2A4A]">{t('fees.wont.heading')}</h2>
            <ul className="mt-4 grid gap-3">
              {wont.map((w, i) => (
                <li key={i} className="flex gap-3 text-base leading-relaxed text-[#1E2A4A]/70">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B8860B]" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}