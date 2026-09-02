import Header from '@/components/site/Header';
import Hero from '@/components/site/Hero';
import PainSection from '@/components/site/PainSection';
import WhyRepresentation from '@/components/site/WhyRepresentation';
import Verification from '@/components/site/Verification';
import FocusAreas from '@/components/site/FocusAreas';
import WhyMe from '@/components/site/WhyMe';
import OutcomeSection from '@/components/site/OutcomeSection';
import CloseSection from '@/components/site/CloseSection';
import Footer from '@/components/site/Footer';
import NorthStarCursor from '@/components/site/NorthStarCursor';
import MobileStickyBar from '@/components/site/MobileStickyBar';

export default function Home() {
  return (
    <main className="bg-white">
      <NorthStarCursor />
      <Header />
      <Hero />
      <PainSection />
      <WhyRepresentation />
      <Verification />
      <FocusAreas />
      <WhyMe />
      <OutcomeSection />
      <CloseSection />
      <Footer />
      <MobileStickyBar />
    </main>
  );
}