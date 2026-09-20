import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import EligibilityCalculator from '@/components/eligibility/EligibilityCalculator';
import { usePageMeta } from '@/lib/usePageMeta';

export default function Eligibility() {
  usePageMeta('Immigration Eligibility | Externa Immigration Solutions', 'Explore your Canadian immigration eligibility with Externa Immigration Solutions and identify options to discuss with a licensed consultant.');
  return (
    <main className="min-h-screen bg-[#FBFAF8]">
      <Header />
      <section className="px-5 pt-32 pb-24 lg:px-[8vw] lg:pt-40 lg:pb-32">
        <EligibilityCalculator />
      </section>
      <Footer />
    </main>
  );
}
