import PathwayLanding from '@/components/landing/PathwayLanding';
import { usePageMeta } from '@/lib/usePageMeta';

const LAUNCH_DATE = '2026-10-05T23:59:59-04:00';

const config = {
  pathway: 'healthcare_pathway',
  returnPath: '/healthcare-pathway',
  sourceLabel: 'Healthcare Pathway',
  situation: 'Healthcare worker pathway',
  launchDate: LAUNCH_DATE,
  hero: {
    eyebrow: 'Healthcare Worker Pathway',
    title: 'Your fastest route to Canadian permanent residence as a healthcare professional',
    subtitle: 'Nurses, personal support workers, lab technologists and allied health staff are in demand across Canada. Register to lock in a pathway assessment and a step by step plan built around your credentials.',
    trustLine: 'RCIC-IRB regulated · Transparent flat fee · No obligation beyond registration',
    priceLabel: '$59',
  },
  benefits: [
    { title: 'Eligibility mapped to your credentials', text: 'We match your nursing or allied health diploma, license and experience to the right federal or provincial stream.' },
    { title: 'Language and exam roadmap', text: 'Clear guidance on IELTS, NNAS, NCLEX or provincial licensing so nothing stalls your file.' },
    { title: 'Employer and LMIA strategy', text: 'Where a job offer or LMIA strengthens your case, we position you for it; where it is not needed, we do not add it.' },
    { title: 'Provincial nominee insight', text: 'We flag the provinces actively recruiting healthcare workers and the deadlines that matter.' },
    { title: 'Family included', text: 'Your registration covers planning for your spouse and dependents on the same pathway.' },
    { title: 'Prior refusal review', text: 'If a previous attempt failed, we review why before you apply again.' },
  ],
  includes: [
    'Full eligibility assessment against current healthcare streams',
    'Credential and licensing roadmap for NNAS and provincial colleges',
    'Personalized step by step action plan',
    'Document checklist tailored to your profession',
    'One review of your assembled file after you submit it',
    'Direct messaging with your consultant for 30 days',
  ],
  register: {
    price: '$59',
    priceNote: 'A single registration fee unlocks your full pathway assessment and action plan. No hidden costs and no retainer required to start.',
    title: 'Register for the Healthcare Worker Pathway',
  },
  faqs: [
    { q: 'Is $59 the total cost?', a: 'The $59 registration covers your assessment and action plan. If you later retain us for full representation, that fee is quoted separately and this amount is credited toward it.' },
    { q: 'Do I need a job offer?', a: 'Not always. Several healthcare streams do not require an employer or LMIA. We confirm what your profile needs.' },
    { q: 'Which professions qualify?', a: 'Nurses, personal support workers, medical lab technologists, physiotherapists, pharmacists and many allied health roles. We assess your specific title.' },
    { q: 'How fast can I move?', a: 'Timelines depend on the stream and your documents. Your action plan sets realistic dates.' },
  ],
  finalCta: {
    title: 'Lock in your healthcare pathway before intake closes',
    text: 'Registration takes two minutes. Your assessment and action plan follow within days.',
  },
};

export default function HealthcarePathway() {
  usePageMeta('Healthcare Worker Pathway to Canada | Externa Immigration', 'Register for a personalized healthcare worker immigration pathway assessment and action plan. Nurses, PSWs, lab technologists and allied health professionals. Flat fee.');
  return <PathwayLanding config={config} />;
}