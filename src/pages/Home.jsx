import Header from '@/components/site/Header';
import Hero from '@/components/site/Hero';
import TrustStrip from '@/components/site/TrustStrip';
import AppealsSection from '@/components/site/AppealsSection';
import ServicesGrid from '@/components/site/ServicesGrid';
import ApproachSection from '@/components/site/ApproachSection';
import TrustSection from '@/components/site/TrustSection';
import BusinessFeature from '@/components/site/BusinessFeature';
import Footer from '@/components/site/Footer';
import NorthStarCursor from '@/components/site/NorthStarCursor';

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#0B1B27]">
      <NorthStarCursor />
      <Header />
      <Hero />
      <TrustStrip />
      <AppealsSection />
      <ServicesGrid />
      <ApproachSection />
      <TrustSection />
      <BusinessFeature />
      <Footer />
    </main>
  );
}