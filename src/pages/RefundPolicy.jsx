import { Link } from 'react-router-dom';
import { usePageMeta } from '@/lib/usePageMeta';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

const SECTIONS = [
  {
    h: 'Consultations',
    p: 'Consultation fees are charged at the time of booking and are refundable only if the consultation has not yet taken place. A consultation may be rescheduled at no cost with at least 24 hours notice. If we cancel a consultation, the fee is refunded in full. Once the consultation has been held, the fee is earned and is not refundable.',
  },
  {
    h: 'Refusal analysis and fixed services',
    p: 'Refusal analysis, ATIP requests, and other fixed scope services are paid in full before work begins. If you request a refund before the work has started, the fee is returned in full. Once the work has begun, the fee is earned and is not refundable, because the deliverable is the analysis itself.',
  },
  {
    h: 'Full representation',
    p: 'Full representation is billed in stages as set out in your retainer agreement. Each stage is earned as the corresponding work is completed. A stage is refundable only if that stage of work has not yet begun; once it has, the stage fee is earned and is not refundable.',
  },
  {
    h: 'DIY and Review Only',
    p: 'DIY and Review Only services are fixed scope and fixed price, paid in full before work begins. They are refundable only if the review or drafting has not yet started; once it has, the fee is earned and is not refundable.',
  },
  {
    h: 'Government fees and disbursements',
    p: 'Government fees, courier, translation, interpretation, and affidavit costs are paid on your behalf at cost. These are not refundable once they have been submitted to the relevant authority, as the work of filing them has been done.',
  },
  {
    h: 'How to request a refund',
    p: 'To request a refund, write to info@externaimmigration.com. Refunds are processed to the original method of payment within 10 business days.',
  },
];

export default function RefundPolicy() {
  usePageMeta({ title: 'Refund Policy | Externa Immigration Solutions Inc', description: 'How refunds work for consultations, refusal analysis, and representation services at Externa Immigration Solutions Inc.' });
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />
      <main className="mx-auto max-w-[1440px] px-5 pb-24 pt-36 lg:px-[8vw]">
        <p className="eyebrow">Legal</p>
        <h1 className="section-title">Refund Policy</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#55605A]">We want you to know exactly what is refundable and what is not before you pay. The governing principle is simple: a refund is available only for work that has not yet been done. Once work on your matter has begun, the fee is earned and is not refundable.</p>
        <div className="mt-12 grid max-w-3xl gap-10">
          {SECTIONS.map((s) => (
            <section key={s.h}>
              <h2 className="font-heading text-2xl text-[#1E2A4A]">{s.h}</h2>
              <p className="mt-3 text-base leading-relaxed text-[#55605A]">{s.p}</p>
            </section>
          ))}
        </div>
        <Link to="/" className="link-arrow mt-14">Return to Home</Link>
      </main>
      <Footer />
    </div>
  );
}