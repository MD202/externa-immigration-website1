import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { usePageMeta } from '@/lib/usePageMeta';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Reveal from '@/components/site/Reveal';

const CICC_URL = 'https://register.college-ic.ca/';

export default function About() {
  const { t } = useLanguage();
  usePageMeta(t('about.meta.title'), t('about.meta.description'));
  const creds = [t('about.s3.r1'), t('about.s3.r2'), t('about.s3.r3'), t('about.s3.r4')];
  return (
    <main className="bg-[#FBFAF8]">
      <Header />
      <section className="px-5 pt-32 pb-20 lg:px-[8vw] lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-[720px]">
          <Reveal>
            <h1 className="font-heading text-[40px] leading-[1.08] text-[#1E2A4A] sm:text-5xl lg:text-[56px]">{t('about.s1.heading')}</h1>
            <p className="mt-6 text-lg leading-relaxed text-[#1E2A4A]/70">{t('about.s1.body')}</p>
            <p className="mt-6 font-heading text-xl text-[#1E2A4A]">{t('about.s1.licensee')}</p>
            <a href={CICC_URL} target="_blank" rel="noopener noreferrer" className="link-arrow mt-3">{t('about.s1.verify')} <ExternalLink className="h-4 w-4" /></a>
          </Reveal>
        </div>
      </section>
      <section className="px-5 py-20 lg:px-[8vw] lg:py-28">
        <div className="mx-auto max-w-[720px]">
          <Reveal>
            <h2 className="font-heading text-3xl text-[#1E2A4A]">{t('about.s2.heading')}</h2>
            <p className="mt-6 text-lg leading-relaxed text-[#1E2A4A]/70">{t('about.s2.body')}</p>
          </Reveal>
        </div>
      </section>
      <section className="px-5 py-20 lg:px-[8vw] lg:py-28">
        <div className="mx-auto max-w-[720px]">
          <Reveal>
            <h2 className="font-heading text-3xl text-[#1E2A4A]">{t('about.s3.heading')}</h2>
            <ul className="mt-6 border-t border-[#1E2A4A]/10">
              {creds.map((c, i) => (
                <li key={i} className="border-b border-[#1E2A4A]/10 py-5 text-base leading-relaxed text-[#1E2A4A]/75">{c}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}