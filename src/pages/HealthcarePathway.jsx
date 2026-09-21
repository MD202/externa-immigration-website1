import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import HealthcareHero from '@/components/landing/HealthcareHero';
import LandingNumbered from '@/components/landing/LandingNumbered';
import LandingAudience from '@/components/landing/LandingAudience';
import LandingOccupations from '@/components/landing/LandingOccupations';
import LandingWhatYouGet from '@/components/landing/LandingWhatYouGet';
import LandingDisclaimer from '@/components/landing/LandingDisclaimer';
import LandingWhyUs from '@/components/landing/LandingWhyUs';
import HealthcareRegister from '@/components/landing/HealthcareRegister';
import HealthcareFAQ from '@/components/landing/HealthcareFAQ';
import LandingFinalCta from '@/components/landing/LandingFinalCta';
import { usePageMeta } from '@/lib/usePageMeta';

const hero = {
  eyebrow: 'Healthcare Immigration',
  title: 'Understand your options before you apply.',
  subtitle: 'A focused information session for healthcare professionals exploring Canadian permanent residence.',
  price: '$59',
  priceNote: '+ HST · Single session',
  ctaLabel: 'Book my information session',
  cards: [
    { label: 'Your profile', title: 'Occupation · experience · education' },
    { label: 'Your options', title: 'Federal · provincial · regional' },
    { label: 'Your next step', title: 'A practical direction forward' },
  ],
};

const stopGuessing = {
  eyebrow: 'Before you apply',
  title: 'Stop guessing. Start with your options.',
  intro: 'Healthcare immigration is not one size fits all.',
  factorsLabel: 'Your options can depend on your:',
  factors: ['Profession', 'NOC', 'Work experience', 'Location', 'Licence', 'Education', 'Language results', 'Canadian experience', 'Job offer', 'Family situation'],
  change: 'And immigration programs can change.',
  highlight: "That's why we start with your profile, not a generic checklist.",
  subheading: "In your session, we'll help you understand:",
  items: [
    { n: '01', title: 'Where you may fit', text: 'We review the key aspects of your background and identify immigration programs or categories that may be relevant to your profile.' },
    { n: '02', title: 'What could strengthen your profile', text: 'Understand the importance of factors such as Canadian work experience, language testing, education, licensing, employment and other eligibility requirements.' },
    { n: '03', title: 'Licensing and credential considerations', text: 'Healthcare immigration and healthcare licensing are different processes. We explain where credential assessment, professional licensing or registration may fit into your overall plan.' },
    { n: '04', title: 'Federal and provincial options', text: 'We discuss relevant federal and provincial pathways that may be worth exploring based on your circumstances.' },
    { n: '05', title: 'What to do next', text: 'Leave with a practical roadmap showing the information, documents and next steps you should consider before deciding whether to proceed.' },
  ],
};

const audience = {
  eyebrow: 'Who this is for',
  title: 'Who is this for?',
  intro: 'This session may be useful if you are:',
  cards: [
    { title: 'A healthcare professional outside Canada', text: 'Exploring how your education, professional experience and credentials could translate into Canadian immigration options.' },
    { title: 'Already working in Canada', text: 'Trying to understand whether your current occupation and Canadian experience may support a future PR strategy.' },
    { title: 'An internationally educated healthcare professional', text: 'Trying to understand the relationship between immigration, credential assessment and professional licensing.' },
    { title: 'A healthcare worker with a previous refusal', text: 'Looking for a clearer understanding of what may have affected a previous application or strategy.' },
    { title: 'Unsure which program applies', text: 'Seeing different information online and wanting to understand which requirements actually matter to your situation.' },
  ],
};

const occupations = {
  eyebrow: 'Healthcare occupations',
  title: 'Healthcare occupations can include',
  intro: 'Depending on the immigration program and the applicable eligibility criteria, healthcare occupations may include:',
  list: ['Registered nurses', 'Licensed practical nurses', 'Physicians', 'Pharmacists', 'Physiotherapists', 'Occupational therapists', 'Medical laboratory technologists', 'Medical radiation technologists', 'Respiratory therapists', 'Medical sonographers', 'Dental professionals', 'Nurse aides', 'Other eligible healthcare and allied health occupations'],
  notes: [
    'Eligibility is determined by the requirements of the specific immigration program and your individual circumstances.',
    'IRCC currently has a healthcare and social services category under Express Entry, while healthcare workers may also have other federal, provincial or regional options depending on their profile.',
  ],
};

const whatYouGet = {
  eyebrow: 'What you get',
  title: 'What you get for $59',
  subheading: 'A focused information session',
  stages: [
    { label: 'Before the session', text: 'You provide basic information about your education, occupation, work experience and current situation.' },
    { label: 'During the session', text: 'We discuss the immigration considerations most relevant to your profile and explain potential pathways to explore.' },
    { label: 'After the session', text: 'You receive a practical next step direction so you know what to investigate, prepare or discuss before moving forward.' },
  ],
  checklistTitle: 'Your $59 session includes:',
  checklist: [
    'Profile-based discussion of potential immigration options',
    'Review of your stated occupation and relevant experience',
    'General discussion of credential and licensing considerations',
    'Key eligibility factors to investigate',
    'Federal and provincial pathway overview',
    'Initial document and next step checklist',
    'Opportunity to ask questions about your situation',
  ],
};

const disclaimer = {
  eyebrow: 'Important',
  title: 'This is not an application service',
  intro: 'The $59 fee is for an information and pathway discussion session.',
  notIncludedLabel: 'It does not include:',
  notIncluded: [
    'Preparation or submission of a permanent residence application',
    'Express Entry profile submission',
    'Provincial nomination application',
    'Work permit application',
    'Licensing application',
    'NNAS or professional regulatory applications',
    'Legal representation for an immigration proceeding',
    'Guaranteed eligibility, nomination, invitation or permanent residence',
  ],
  closing: 'If you later decide that you need professional representation, that is a separate engagement with separate fees and terms.',
};

const whyUs = {
  eyebrow: 'Why Externa',
  title: 'Clear advice. Practical options. No promises.',
  paragraphs: [
    'Immigration programs have eligibility requirements, changing policies and government processing decisions that are outside the control of any consultant.',
    'Our role is to help you understand the rules, identify relevant options and make informed decisions about your next step.',
  ],
  promises: [
    'No guaranteed approval.',
    'No guaranteed invitation.',
    'No "special connection" with government.',
    'No pressure to retain us.',
  ],
};

const register = {
  pathway: 'healthcare_pathway',
  returnPath: '/healthcare-pathway',
  sourceLabel: 'Healthcare Information Session',
  situation: 'Healthcare information session',
  eyebrow: 'Information session',
  title: 'Your $59 session',
  subtitle: 'One conversation can save you from pursuing the wrong pathway.',
  price: '$59',
  priceSubline: '+ HST',
  paymentType: 'Single payment',
  priceTag: 'Information session · No application required',
  ctaLabel: 'Book my information session',
  postBookingNote: 'After booking, you will receive instructions on what information to provide before your session.',
};

const faqs = [
  { q: 'Do I need a job offer?', a: 'Not necessarily. Different immigration programs have different requirements. Whether a job offer matters depends on the specific pathway and your circumstances.' },
  { q: 'Do I need a Canadian healthcare licence?', a: 'Not necessarily for every immigration pathway. However, immigration eligibility and professional licensing are separate issues. If your intended occupation is regulated, you may need to satisfy the requirements of the relevant provincial or territorial regulatory body before practising.' },
  { q: 'What if I am already working in Canada?', a: 'Bring your current occupation, NOC information, work history and immigration status to the session. We can discuss which factors may be relevant to your future options.' },
  { q: 'What if I have already been refused?', a: 'A previous refusal does not automatically determine what options may be available now. Bring your refusal letter and relevant information so the circumstances can be discussed.' },
  { q: 'Can my spouse and children be included?', a: 'Depending on the immigration program and your circumstances, eligible family members may be included or may have related immigration options. Family circumstances should be considered as part of your overall strategy.' },
  { q: 'Does the $59 cover my entire immigration application?', a: 'No. The $59 fee covers this information session only. If you later retain Externa for professional services, those services will be subject to a separate agreement and fee.' },
];

const finalCta = {
  title: 'Ready to understand your options?',
  line1: "Don't start with an application.",
  line2: 'Start with information.',
  body: 'Healthcare immigration can involve immigration rules, occupational requirements, licensing and provincial considerations. Understanding the pieces first can help you decide what to do next.',
  price: '$59 + HST',
  ctaLabel: 'Book my information session',
  disclaimer: 'Externa Immigration Solutions Inc. is represented by a Regulated Canadian Immigration Consultant (RCIC-IRB). Information provided during an information session is based on the information available at the time of the session and does not guarantee eligibility, nomination, invitation, approval, processing time or permanent residence.',
  closing: 'Professional fees and services are subject to a written agreement where applicable.',
};

export default function HealthcarePathway() {
  usePageMeta('Healthcare Immigration Information Session | Externa Immigration', 'A $59 information session with an RCIC-IRB regulated consultant to understand your healthcare immigration options before you commit to an application.');
  return (
    <main className="bg-[#F7F3EA]">
      <Header />
      <HealthcareHero {...hero} />
      <LandingNumbered {...stopGuessing} />
      <LandingAudience {...audience} />
      <LandingOccupations {...occupations} />
      <LandingWhatYouGet {...whatYouGet} />
      <LandingDisclaimer {...disclaimer} />
      <LandingWhyUs {...whyUs} />
      <HealthcareRegister {...register} />
      <HealthcareFAQ faqs={faqs} title="Questions?" />
      <LandingFinalCta {...finalCta} />
      <Footer />
    </main>
  );
}