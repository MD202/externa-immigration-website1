import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import WhatsAppWidget from '@/components/site/WhatsAppWidget';
import EligibilityCalculator from '@/components/eligibility/EligibilityCalculator';

export default function Eligibility() {
  return (
    <main className="min-h-screen bg-[#FBFAF8]">
      <Header />
      <section className="px-5 pt-32 pb-24 lg:px-[8vw] lg:pt-40 lg:pb-32">
        <EligibilityCalculator />
      </section>
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}