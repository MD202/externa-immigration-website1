import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import PathwayHero from '@/components/landing/PathwayHero';
import PathwayBenefits from '@/components/landing/PathwayBenefits';
import PathwayRegister from '@/components/landing/PathwayRegister';
import PathwayFAQ from '@/components/landing/PathwayFAQ';
import { ArrowRight } from 'lucide-react';

// Shared shell for the two conversion landing pages. Each page passes a
// config object with its content; this composes the funnel sections in order.
export default function PathwayLanding({ config }) {
  return (
    <main className="bg-white">
      <Header />
      <PathwayHero {...config.hero} launchDate={config.launchDate} />
      <PathwayBenefits benefits={config.benefits} includes={config.includes} />
      <PathwayRegister
        pathway={config.pathway}
        price={config.register.price}
        priceNote={config.register.priceNote}
        title={config.register.title}
        returnPath={config.returnPath}
        sourceLabel={config.sourceLabel}
        situation={config.situation}
      />
      <PathwayFAQ faqs={config.faqs} />
      <section className="bg-[#13203F] px-5 py-20 text-center text-white lg:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-heading text-3xl sm:text-4xl">{config.finalCta.title}</h2>
          <p className="mt-4 text-white/65">{config.finalCta.text}</p>
          <a href="#register" className="btn btn-primary mt-8">Register now {config.register.price} <ArrowRight className="h-4 w-4" /></a>
        </div>
      </section>
      <Footer />
    </main>
  );
}