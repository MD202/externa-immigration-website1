import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { usePageMeta } from '@/lib/usePageMeta';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Reveal from '@/components/site/Reveal';

export default function OtherServices() {
  const { t } = useLanguage();
  usePageMeta(t('other.meta.title'), t('other.meta.description'));
  const entries = [
    { id: 'express-entry', title: t('other.e1t'), body: t('other.e1b') },
    { id: 'pnp', title: t('other.e2t'), body: t('other.e2b') },
    { id: 'work-permits', title: t('other.e3t'), body: t('other.e3b') },
    { id: 'study-permits', title: t('other.e4t'), body: t('other.e4b'), link: { label: t('other.e4link'), to: '/refused-applications' } },
    { id: 'pgwp', title: t('other.e5t'), body: t('other.e5b') },
    { id: 'visitor-visas', title: t('other.e6t'), body: t('other.e6b') },
    { id: 'super-visas', title: t('other.e7t'), body: t('other.e7b') },
    { id: 'restoration', title: t('other.e8t'), body: t('other.e8b'), link: { label: t('other.e8link'), to: '/humanitarian-compassionate' } },
    { id: 'pr-card', title: t('other.e9t'), body: t('other.e9b'), link: { label: t('other.e9link'), to: '/refused-applications' } },
    { id: 'citizenship', title: t('other.e10t'), body: t('other.e10b') },
    { id: 'prra', title: t('other.e11t'), body: t('other.e11b') },
    { id: 'employer-services', title: t('other.e12t'), body: t('other.e12b') },
  ];
  return (
    <main className="bg-[#FBFAF8]">
      <Header />
      <section className="px-5 pt-32 pb-14 lg:px-[8vw] lg:pt-40">
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="max-w-2xl">
            <h1 className="font-heading text-[40px] leading-[1.05] text-[#1E2A4A] sm:text-5xl lg:text-[64px]">{t('other.heading')}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#1E2A4A]/65">{t('other.intro')}</p>
          </Reveal>
        </div>
      </section>
      <section className="px-5 pb-24 lg:px-[8vw] lg:pb-32">
        <div className="mx-auto max-w-[1240px]">
          <div className="border-t border-[#1E2A4A]/10">
            {entries.map((e) => (
              <Reveal key={e.id}>
                <article id={e.id} className="group relative scroll-mt-32 border-b border-[#1E2A4A]/10 py-10 pl-6 transition hover:bg-[#1E2A4A]/[.02]">
                  <span className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-[#B8860B] transition-transform duration-200 group-hover:scale-y-100" />
                  <h2 className="font-heading text-2xl text-[#1E2A4A]">{e.title}</h2>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#1E2A4A]/65">{e.body}</p>
                  {e.link && <Link to={e.link.to} className="link-arrow mt-4">{e.link.label} <ArrowRight className="h-4 w-4" /></Link>}
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 max-w-2xl">
            <p className="text-lg text-[#1E2A4A]/70">{t('other.ask.body')} <Link to="/contact" className="link-arrow">{t('other.ask.link')} <ArrowRight className="h-4 w-4" /></Link> {t('other.ask.tail')}</p>
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}