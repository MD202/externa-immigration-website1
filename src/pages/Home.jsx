import { useState, useEffect } from 'react';
import Header from '@/components/site/Header';
import Hero from '@/components/site/Hero';
import PainSection from '@/components/site/PainSection';
import WhyRepresentation from '@/components/site/WhyRepresentation';
import FocusAreas from '@/components/site/FocusAreas';
import WhyMe from '@/components/site/WhyMe';
import OutcomeSection from '@/components/site/OutcomeSection';
import CloseSection from '@/components/site/CloseSection';
import Footer from '@/components/site/Footer';
import NorthStarCursor from '@/components/site/NorthStarCursor';
import MobileStickyBar from '@/components/site/MobileStickyBar';
import InfoSessionBanner from '@/components/site/InfoSessionBanner';
import UpcomingSessions from '@/components/site/UpcomingSessions';
import { usePageMeta } from '@/lib/usePageMeta';

const BANNER_KEY = 'externa-info-banner-dismissed';

export default function Home() {
  usePageMeta('Externa Immigration Solutions | RCIC-IRB Immigration Consultant | Sponsorship, H&C, Appeals', 'Licensed Canadian immigration consultant in Markham. Family sponsorship, humanitarian and compassionate applications, refused applications, healthcare professionals and business owners. English, Tamil, Hindi. Evening and weekend consultations.');
  const [bannerVisible, setBannerVisible] = useState(false);
  useEffect(() => {
    try { if (sessionStorage.getItem(BANNER_KEY) !== '1') setBannerVisible(true); } catch (e) {}
  }, []);
  const dismissBanner = () => {
    setBannerVisible(false);
    try { sessionStorage.setItem(BANNER_KEY, '1'); } catch (e) {}
  };
  return (
    <main className="bg-white">
      <NorthStarCursor />
      {bannerVisible && <InfoSessionBanner onDismiss={dismissBanner} />}
      <Header topOffset={bannerVisible ? 40 : 0} />
      {bannerVisible && <div className="h-10" aria-hidden="true" />}
      <Hero />
      <PainSection />
      <WhyRepresentation />
      <FocusAreas />
      <UpcomingSessions />
      <WhyMe />
      <OutcomeSection />
      <CloseSection />
      <Footer />
      <MobileStickyBar />
    </main>
  );
}