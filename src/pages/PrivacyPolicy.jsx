import { Link } from 'react-router-dom';
import { usePageMeta } from '@/lib/usePageMeta';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

const SECTIONS = [
  {
    h: 'What information we collect',
    p: 'When you contact us or book a consultation, we collect the details you provide: your name, email address, phone number, and the facts of your immigration matter. If you proceed to retain us, we collect the documents and information needed to prepare your application.',
  },
  {
    h: 'How we use your information',
    p: 'We use your information to assess your matter, prepare and submit applications on your behalf, communicate with you and with immigration authorities, and meet our professional and regulatory obligations as a regulated Canadian immigration consultant.',
  },
  {
    h: 'Who we share it with',
    p: 'We share your information only as necessary to advance your matter, with your consent, or where required by law. This may include government agencies handling your application and, with your permission, translators, interpreters, or other professionals supporting your case.',
  },
  {
    h: 'How we store it',
    p: 'Your information is stored electronically in access controlled systems. We retain files for the period required by our regulator and professional standards, and then securely destroy them.',
  },
  {
    h: 'Your rights',
    p: 'You may request access to the personal information we hold about you, ask us to correct it, or ask us to stop using it for a specific purpose. Contact us at info@externaimmigration.com to exercise any of these rights.',
  },
  {
    h: 'Contact',
    p: 'Questions about this policy or how we handle your information can be sent to info@externaimmigration.com or by phone at +1-437-605-8005.',
  },
];

export default function PrivacyPolicy() {
  usePageMeta({ title: 'Privacy Policy | Externa Immigration Solutions Inc', description: 'How Externa Immigration Solutions Inc collects, uses, and protects your personal information.' });
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />
      <main className="mx-auto max-w-[1440px] px-5 pb-24 pt-36 lg:px-[8vw]">
        <p className="eyebrow">Legal</p>
        <h1 className="section-title">Privacy Policy</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#55605A]">Externa Immigration Solutions Inc is committed to protecting the privacy and confidentiality of the information you share with us. This policy explains what we collect and how we use it.</p>
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