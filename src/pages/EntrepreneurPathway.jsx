import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import EntrepreneurHero from '@/components/landing/EntrepreneurHero';
import EntrepreneurLearn from '@/components/landing/EntrepreneurLearn';
import EntrepreneurAudience from '@/components/landing/EntrepreneurAudience';
import EntrepreneurIncluded from '@/components/landing/EntrepreneurIncluded';
import EntrepreneurRegister from '@/components/landing/EntrepreneurRegister';
import EntrepreneurDisclaimer from '@/components/landing/EntrepreneurDisclaimer';
import EntrepreneurWhyAttend from '@/components/landing/EntrepreneurWhyAttend';
import EntrepreneurFinalCta from '@/components/landing/EntrepreneurFinalCta';
import { usePageMeta } from '@/lib/usePageMeta';

const hero = {
  eyebrow: 'Entrepreneur Immigration',
  title: 'Your business idea is only part of the equation.',
  subtitle: 'A live online information session for entrepreneurs, business owners and aspiring founders who want to understand the Canadian immigration landscape before investing time and money into a business plan.',
  pill: 'Live Group Session · $119 + HST',
  ctaLabel: 'Save your seat',
};

const learn = {
  title: 'What you\u2019ll learn',
  items: [
    { n: '01', title: 'What entrepreneur immigration actually looks like', text: 'Understand the difference between owning a Canadian business, operating a business and qualifying for an immigration program.' },
    { n: '02', title: 'Federal & provincial options', text: 'Get an overview of the different types of business and entrepreneur immigration pathways that may be available, depending on your profile and the programs in effect.' },
    { n: '03', title: 'Start a business vs. immigrate through a business', text: 'Learn why simply incorporating a company or investing money in Canada does not automatically create a pathway to permanent residence.' },
    { n: '04', title: 'What immigration officers may look at', text: 'Understand the types of factors that can matter, including business experience, education, language, investment, source of funds, ownership, management experience and business activity.' },
    { n: '05', title: 'Buying vs. starting a business', text: 'Explore some of the immigration considerations when looking at an existing Canadian business versus starting a new venture.' },
    { n: '06', title: 'Common mistakes', text: 'Learn about common misconceptions entrepreneurs encounter when planning Canadian immigration through business.' },
  ],
};

const audience = {
  title: 'Who should attend?',
  intro: 'This session is designed for:',
  cards: [
    { title: 'Aspiring entrepreneurs', text: 'Considering starting a business in Canada.' },
    { title: 'Business owners', text: 'Already operating a business in Canada or overseas.' },
    { title: 'Investors & prospective buyers', text: 'Considering purchasing or investing in a Canadian business.' },
    { title: 'International founders', text: 'Building a startup or innovative business and exploring Canadian options.' },
    { title: 'Temporary residents', text: 'Already in Canada and considering longer-term immigration options connected to entrepreneurship.' },
    { title: 'Families planning their move', text: 'Wanting to understand how entrepreneurship may fit into a broader family immigration plan.' },
  ],
};

const included = {
  title: 'What\u2019s included',
  items: [
    { label: 'Live group session', text: 'A structured presentation covering the major immigration considerations for entrepreneurs.' },
    { label: 'Practical examples', text: 'Understand how different business profiles can raise different immigration questions.' },
    { label: 'Live Q&A', text: 'Ask general questions during the session.' },
    { label: 'Take-away guide', text: 'Receive a practical checklist of information and documents to consider when exploring your options.' },
    { label: 'Current information', text: 'The session is based on the immigration rules and program information available at the time of the session.' },
  ],
};

const register = {
  pathway: 'entrepreneur_pathway',
  returnPath: '/entrepreneur-pathway',
  sourceLabel: 'Entrepreneur Information Session',
  situation: 'Entrepreneur information session',
  eyebrow: 'Save your seat',
  title: 'Your $119 seat',
  subtitle: 'Understand the landscape before you invest in the business.',
  price: '$119',
  priceSubline: '+ HST',
  details: 'Live online · Educational · Q&A included',
  tag: 'One-time group session',
  note: 'Limited seats may be offered to keep the Q&A useful and manageable.',
  ctaLabel: 'Save my seat',
};

const disclaimer = {
  eyebrow: 'Important',
  title: 'This session is not an application',
  intro: 'Your $119 payment is for attendance at the group information session and the educational materials provided with it.',
  notIncludedLabel: 'It does not include:',
  notIncluded: [
    'Individual eligibility assessment',
    'Business plan preparation',
    'Immigration application preparation',
    'Application submission',
    'Legal or accounting advice',
    'Investment advice',
    'Business incorporation',
    'Guaranteed eligibility or approval',
    'Individual legal representation',
  ],
  closing: 'If you require individual advice or representation after the session, those services can be discussed separately.',
};

const whyAttend = {
  eyebrow: 'Why attend?',
  title: 'Before you invest in the business, understand the immigration landscape.',
  paragraphs: [
    'There is a lot of online information about business immigration to Canada.',
    'Some of it is outdated. Some applies only to specific provinces. Some applies only to specific applicants.',
    'This session gives you a structured starting point so you can understand what questions you should be asking before taking the next step.',
  ],
};

const finalCta = {
  price: '$119 + HST',
  priceNote: 'Live group information session',
  ctaLabel: 'Save my seat',
  disclaimer: 'Externa Immigration Solutions Inc. is represented by a Regulated Canadian Immigration Consultant (RCIC-IRB). This is an educational group session and does not constitute an individual eligibility assessment or guarantee of eligibility, nomination, invitation, approval, processing time or permanent residence. Immigration programs and requirements may change.',
};

export default function EntrepreneurPathway() {
  usePageMeta('Entrepreneur Immigration Information Session | Externa Immigration', 'A live online group information session for entrepreneurs and business owners to understand the Canadian business immigration landscape before investing. $119 + HST.');
  return (
    <main className="bg-white">
      <Header />
      <EntrepreneurHero {...hero} />
      <EntrepreneurLearn {...learn} />
      <EntrepreneurAudience {...audience} />
      <EntrepreneurIncluded {...included} />
      <EntrepreneurRegister {...register} />
      <EntrepreneurDisclaimer {...disclaimer} />
      <EntrepreneurWhyAttend {...whyAttend} />
      <EntrepreneurFinalCta {...finalCta} />
      <Footer />
    </main>
  );
}