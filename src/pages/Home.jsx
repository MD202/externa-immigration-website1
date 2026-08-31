import Header from '@/components/site/Header';
import Hero from '@/components/site/Hero';
import ValueProps from '@/components/site/ValueProps';
import ProcessTimeline from '@/components/site/ProcessTimeline';
import AppealsSection from '@/components/site/AppealsSection';
import ServicesGrid from '@/components/site/ServicesGrid';
import ApproachSection from '@/components/site/ApproachSection';
import BookingOptions from '@/components/site/BookingOptions';
import ConsultationOutcome from '@/components/site/ConsultationOutcome';
import TrustSection from '@/components/site/TrustSection';
import BusinessFeature from '@/components/site/BusinessFeature';
import FAQSection from '@/components/site/FAQSection';
import Footer from '@/components/site/Footer';
import NorthStarCursor from '@/components/site/NorthStarCursor';

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <NorthStarCursor />
      <Header />
      <Hero />
      <ValueProps />
      <ProcessTimeline />
      <ServicesGrid />
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