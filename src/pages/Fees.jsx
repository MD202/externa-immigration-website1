import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import NorthStarCursor from '@/components/site/NorthStarCursor';
import { useLanguage } from '@/lib/LanguageContext';

export default function Fees() {
  const { t } = useLanguage();
  const items = [
    { title: t('fees.i1t'), fee: t('fees.i1f'), desc: t('fees.i1d') },
    { title: t('fees.i2t'), fee: t('fees.i2f'), desc: t('fees.i2d') },
    { title: t('fees.i3t'), fee: t('fees.i3f'), desc: t('fees.i3d') },
    { title: t('fees.i4t'), fee: t('fees.i4f'), desc: t('fees.i4d') },
    { title: t('fees.i5t'), fee: t('fees.i5f'), desc: t('fees.i5d') },
    { title: t('fees.i6t'), fee: t('fees.i6f'), desc: t('fees.i6d') },
    { title: t('fees.i7t'), fee: t('fees.i7f'), desc: t('fees.i7d') },
    { title: t('fees.i8t'), fee: t('fees.i8f'), desc: t('fees.i8d') },
  ];
  return (
    <main className="overflow-hidden bg-[#F4F7F9]">
      <NorthStarCursor />
      <Header />
      <section className="px-5 pt-32 pb-20 lg:px-[8vw] lg:pt-40">
        <div className="mx-auto max-w-[1440px]">
          <Link to="/" className="mb-10 inline-flex items-center gap-2 text-sm text-[#0F2433]/55 transition hover:text-[#C8102E]">
            <ArrowLeft className="h-4 w-4" /> {t('fees.back')}
          </Link>
          <p className="eyebrow">{t('fees.eyebrow')}</p>
          <h1 className="section-title">{t('fees.title')}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#0F2433]/65">{t('fees.intro')}</p>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {items.map((item) => (
              <div key={item.title} className="flex flex-col justify-between border border-[#0F2433]/8 bg-white p-7 shadow-sm transition hover:shadow-md">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-2xl text-[#0F2433]">{item.title}</h3>
                  <span className="whitespace-nowrap font-heading text-xl text-[#C8102E]">{item.fee}</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[#0F2433]/55">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[#0F2433]/45">{t('fees.note')}</p>
          <Link to="/strategy-session" className="mt-8 inline-flex items-center gap-3 bg-[#C8102E] px-6 py-4 font-semibold text-white transition hover:bg-[#A00D24]">
            {t('fees.cta')} <ArrowUpRight />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}