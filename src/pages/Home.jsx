import Header from '@/components/site/Header';
import Hero from '@/components/site/Hero';
import Verification from '@/components/site/Verification';
import PainSection from '@/components/site/PainSection';
import WhyRepresentation from '@/components/site/WhyRepresentation';
import FocusAreas from '@/components/site/FocusAreas';
import WhyMe from '@/components/site/WhyMe';
import OutcomeSection from '@/components/site/OutcomeSection';
import CloseSection from '@/components/site/CloseSection';
import Footer from '@/components/site/Footer';
import NorthStarCursor from '@/components/site/NorthStarCursor';
import MobileStickyBar from '@/components/site/MobileStickyBar';
import { usePageMeta } from '@/lib/usePageMeta';

export default function Home() {
  usePageMeta('Externa Immigration Solutions | RCIC-IRB Immigration Consultant | Sponsorship, H&C, Appeals', 'Licensed Canadian immigration consultant in Markham. Family sponsorship, humanitarian and compassionate applications, refused applications, healthcare professionals and business owners. English, Tamil, Hindi. Evening and weekend consultations.');
  return (
    <main className="bg-white">
      <NorthStarCursor />
      <Header />
      <Hero />
      <Verification />
      <PainSection />
      <WhyRepresentation />
      <FocusAreas />
      <WhyMe />
      <OutcomeSection />
      <CloseSection />
      <Footer />
      <MobileStickyBar />
    </main>
  );
}