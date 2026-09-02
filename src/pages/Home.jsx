import Header from '@/components/site/Header';
import Hero from '@/components/site/Hero';
import WhereAreYouNow from '@/components/site/WhereAreYouNow';
import ValueProps from '@/components/site/ValueProps';
import HowWeOperate from '@/components/site/HowWeOperate';
import PainPoints from '@/components/site/PainPoints';
import AppealsSection from '@/components/site/AppealsSection';
import ServicesGrid from '@/components/site/ServicesGrid';
import ApproachSection from '@/components/site/ApproachSection';
import BookingOptions from '@/components/site/BookingOptions';
import ConsultationOutcome from '@/components/site/ConsultationOutcome';
import TrustSection from '@/components/site/TrustSection';
import BusinessFeature from '@/components/site/BusinessFeature';
import PathwaysAtAGlance from '@/components/site/PathwaysAtAGlance';
import FAQSection from '@/components/site/FAQSection';
import Footer from '@/components/site/Footer';
import NorthStarCursor from '@/components/site/NorthStarCursor';

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <NorthStarCursor />
      <Header />
      <Hero />
      <WhereAreYouNow />
      <ValueProps />
      <HowWeOperate />
      <PainPoints />
      <ServicesGrid />
      <PathwaysAtAGlance />
      <AppealsSection />
      <ApproachSection />
      <BookingOptions />
      <ConsultationOutcome />
      <TrustSection />
      <BusinessFeature />
      <FAQSection />
      <Footer />
    </main>
  );
}