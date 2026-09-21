import PathwayLanding from '@/components/landing/PathwayLanding';
import { usePageMeta } from '@/lib/usePageMeta';

const LAUNCH_DATE = '2026-10-05T23:59:59-04:00';

const config = {
  pathway: 'entrepreneur_pathway',
  returnPath: '/entrepreneur-pathway',
  sourceLabel: 'Entrepreneur Pathway',
  situation: 'Entrepreneur and investor pathway',
  launchDate: LAUNCH_DATE,
  hero: {
    eyebrow: 'Entrepreneur and Investor Pathway',
    title: 'Build your Canadian business and your permanent residence at the same time',
    subtitle: 'C11 work permits, owner operator LMIA, and provincial and federal investor streams each have their own logic. Register for a strategy built around your business, your capital, and your family.',
    trustLine: 'RCIC-IRB regulated · Flat fee · Strategy before you spend on a business',
    priceLabel: '$119',
  },
  benefits: [
    { title: 'C11 suitability', text: 'We assess whether your business concept qualifies under the significant benefit C11 work permit and what evidence strengthens it.' },
    { title: 'Owner operator LMIA strategy', text: 'Where LMIA is the right route, we structure the owner operator role and the job offer correctly from day one.' },
    { title: 'Provincial nominee business streams', text: 'We match your investment level and sector to the PNP business streams actively open.' },
    { title: 'Investment and net worth positioning', text: 'We clarify the capital, source of funds, and net worth thresholds each program expects.' },
    { title: 'Business plan alignment', text: 'We outline what your business plan must demonstrate so immigration officers see genuine business intent.' },
    { title: 'Family and transition planning', text: 'Your spouse and your path to permanent residence are planned from the start.' },
  ],
  includes: [
    'Full assessment across C11, owner operator LMIA, and investor streams',
    'Suitability opinion for your business concept and capital',
    'Provincial nominee business stream matching',
    'Source of funds and net worth roadmap',
    'Business plan requirements brief',
    'One review and direct messaging for 30 days',
  ],
  register: {
    price: '$119',
    priceNote: 'A single registration fee unlocks your strategy session and a written pathway plan. Full representation is quoted separately and credited against this fee.',
    title: 'Register for the Entrepreneur Pathway',
  },
  faqs: [
    { q: 'Is $119 the total cost?', a: 'The $119 registration covers your strategy assessment and written plan. Full representation is quoted separately and this fee is credited toward it.' },
    { q: 'Do I need to buy a business first?', a: 'No. We recommend building the strategy before you invest. Registering first protects you from choosing the wrong stream.' },
    { q: 'What capital is required?', a: 'It varies by stream. Some C11 permits have no fixed minimum; investor programs set higher thresholds. We assess your situation.' },
    { q: 'Can my spouse work?', a: 'In most streams, yes. Your plan sets out work rights for your spouse and the timeline to permanent residence.' },
  ],
  finalCta: {
    title: 'Start your business immigration strategy before intake closes',
    text: 'Registration takes two minutes. Your strategy and written plan follow within days.',
  },
};

export default function EntrepreneurPathway() {
  usePageMeta('Entrepreneur and Investor Pathway to Canada | Externa Immigration', 'Register for a C11, owner operator LMIA, and investor stream strategy session. Personalized business immigration plan for entrepreneurs. Flat fee.');
  return <PathwayLanding config={config} />;
}