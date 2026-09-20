export const ROW_GRID =
  'grid items-center gap-x-3 px-5 lg:gap-x-4 grid-cols-[1fr_6.5rem_1.25rem] lg:grid-cols-[1fr_5.5rem_5.5rem_5.5rem_1.25rem]';

export const tabs = [
  { id: 'family', label: 'Bring family here' },
  { id: 'come', label: 'Come to Canada' },
  { id: 'pr', label: 'Become permanent' },
  { id: 'status', label: 'Stay or fix my status' },
  { id: 'prcard', label: 'PR card & citizenship' },
  { id: 'refused', label: 'Something was refused', dot: true },
  { id: 'hearings', label: 'Hearings & appeals' },
  { id: 'business', label: 'Business & employers' },
];

export const DEFAULT_MATRIX = [
  { label: 'Strategy, route, evidence, what to avoid', full: true, diy: true, review: 'Limited' },
  { label: 'Who submits', full: 'We do', diy: 'You do', review: 'You do' },
  { label: 'Named as your authorized representative', full: true, diy: false, review: false },
  { label: 'Payment', full: 'Staged', diy: 'In full', review: 'In full' },
  { label: 'All forms completed by us', full: true, diy: false, review: false },
  { label: 'All supporting letters drafted by us', full: true, diy: false, review: false },
  { label: "Representative's submission letter", full: true, diy: false, review: false },
  { label: 'We liaise with the immigration authority after submission', full: true, diy: false, review: false },
  { label: 'Written review of every form and letter', full: true, diy: true, review: true },
  { label: 'Personalised document checklist', full: true, diy: true, review: true },
  { label: 'Consultations', full: 'As required', diy: '60 min', review: '45 min' },
  { label: 'Follow-up session', full: true, diy: '30 min', review: '15 min' },
  { label: 'Email support while you prepare', full: true, diy: true, review: false },
  { label: 'Guidance if the immigration authority contacts you', full: true, diy: '12 months', review: false },
  { label: 'Secure client portal', full: true, diy: true, review: 'Drop-off' },
  { label: 'Evening and weekend appointments', full: true, diy: true, review: true },
];

export const DEFAULT_ADDONS = [
  { service: 'Spouse open work permit', full: '+$650', diy: '+$300', review: '+$175' },
  { service: 'Visitor visa', full: '+$650', diy: '+$300', review: '+$175' },
  { service: 'ATIP / GCMS notes', full: '+$75', diy: '+$75', review: '+$75' },
  { service: 'Status extension or restoration', full: '+$400', diy: '+$250', review: '+$100' },
];

export const SCHEDULING_NOTE =
  "On hearing dates. Our availability for weekday hearings and conferences is currently limited. Tell us what you're facing and we'll tell you honestly whether we can act throughout, act on the written stages only, or refer you to someone who should take it. We won't take a retainer and work it out later.";

export const services = [
  // Bring family here
  { id: 'spousal-sponsorship', kind: 'tier', name: 'Spousal / partner sponsorship', full: '$3,200', diy: '$1,900', review: '$550', tabs: ['family', 'refused'], routeNote: 'Inland or outland? Different timelines, different appeal rights, and different consequences if something goes wrong. The fee is the same either way, we\'ll work out which fits your situation in the consultation.', bundle: 'Spouse open work permit added to a sponsorship is charged at the add-on rate, not the standalone rate.', addons: DEFAULT_ADDONS },
  { id: 'spouse-open-work-permit', kind: 'tier', name: 'Spouse open work permit', full: '$1,500', diy: '$900', review: '$375', tabs: ['family', 'come'] },
  { id: 'dependent-child', kind: 'tier', name: 'Dependent child sponsorship', full: '$2,550', diy: '$1,550', review: '$550', tabs: ['family'], addons: DEFAULT_ADDONS },
  { id: 'parents-grandparents', kind: 'tier', name: 'Parents & grandparents sponsorship', full: '$2,550', diy: '$1,550', review: '$550', tabs: ['family'] },
  { id: 'super-visa', kind: 'tier', name: 'Super visa', full: '$1,500', diy: '$900', review: '$375', tabs: ['family', 'prcard'] },
  { id: 'visitor-visa', kind: 'tier', name: 'Visitor visa', full: '$1,700', diy: '$1,000', review: '$550', tabs: ['family', 'come'] },

  // Come to Canada
  { id: 'study-permit', kind: 'tier', name: 'Study permit', full: '$2,100', diy: '$1,000', review: '$500', tabs: ['come'] },
  { id: 'pgwp', kind: 'tier', name: 'Post-graduation work permit', full: '$1,050', diy: '$650', review: '$325', tabs: ['come'] },
  { id: 'closed-work-permit', kind: 'tier', name: 'Closed work permit', full: '$1,275', diy: '$775', review: '$325', tabs: ['come'] },
  { id: 'lmia-exempt', kind: 'tier', name: 'LMIA-exempt work permit', full: '$2,100', diy: '$1,275', review: '$550', tabs: ['come'] },
  { id: 'bridging-open', kind: 'tier', name: 'Bridging open work permit', full: '$1,050', diy: '$650', review: '$325', tabs: ['come'] },
  { id: 'study-permit-after-refusal', kind: 'tier', name: 'Study permit after refusal', full: '$2,600', diy: '$1,400', review: '$650', tabs: ['come', 'refused'] },

  // Become permanent
  { id: 'express-entry-profile', kind: 'tier', name: 'Express Entry profile (pre-ITA)', full: '$1,050', diy: '$650', review: '$375', tabs: ['pr'] },
  { id: 'cec', kind: 'tier', name: 'Canadian Experience Class', full: '$1,900', diy: '$1,150', review: '$550', tabs: ['pr'] },
  { id: 'fsw', kind: 'tier', name: 'Federal Skilled Worker', full: '$2,100', diy: '$1,275', review: '$550', tabs: ['pr'] },
  { id: 'oinp-ee', kind: 'tier', name: 'OINP, Express Entry streams', full: '$2,100', diy: '$1,275', review: '$550', tabs: ['pr'] },
  { id: 'oinp-non-ee', kind: 'tier', name: 'OINP, outside Express Entry', full: '$3,400', diy: '$2,050', review: '$550', tabs: ['pr'] },
  { id: 'other-pnp', kind: 'tier', name: 'Other provincial nominee programmes', full: '$3,400', diy: '$2,050', review: '$550', tabs: ['pr'] },

  // Stay or fix my status
  { id: 'restoration', kind: 'tier', name: 'Restoration of status', full: '$1,050', diy: '$650', review: '$325', tabs: ['status'] },
  { id: 'extension', kind: 'tier', name: 'Status extension', full: '$1,050', diy: '$650', review: '$325', tabs: ['status'] },
  { id: 'change-status', kind: 'tier', name: 'Change of status', full: '$1,050', diy: '$650', review: '$325', tabs: ['status'] },
  { id: 'hc-single', kind: 'tier', name: 'H&C, single applicant', full: '$6,500', diy: '$3,200', review: '$1,200', tabs: ['status', 'refused'] },
  { id: 'hc-children', kind: 'tier', name: 'H&C, with dependent children', full: '$8,500', diy: '$4,200', review: '$1,500', tabs: ['status', 'refused'] },
  { id: 'prra', kind: 'tier', name: 'Pre-removal risk assessment', full: '$4,800', diy: ', ', review: '$1,200', tabs: ['status'] },

  // PR card & citizenship
  { id: 'pr-card-renewal', kind: 'tier', name: 'PR card renewal', full: '$1,050', diy: '$650', review: '$325', tabs: ['prcard'] },
  { id: 'prtd', kind: 'tier', name: 'Travel document (PRTD)', full: '$1,275', diy: '$775', review: '$325', tabs: ['prcard'] },
  { id: 'citizenship', kind: 'tier', name: 'Citizenship application', full: '$1,050', diy: '$650', review: '$325', tabs: ['prcard'] },
  { id: 'proof-citizenship', kind: 'tier', name: 'Proof of citizenship', full: '$1,500', diy: '$900', review: '$375', tabs: ['prcard'] },
  { id: 'status-verification', kind: 'tier', name: 'Status verification', full: '$1,050', diy: '$650', review: '$325', tabs: ['prcard'] },
  { id: 'document-replacement', kind: 'tier', name: 'Document replacement', full: '$1,050', diy: '$650', review: '$325', tabs: ['prcard'] },

  // Something was refused
  { id: 'refusal-analysis', kind: 'simple', name: 'Refusal analysis', fee: '$650', tabs: ['refused'], desc: 'We order your file notes, read what actually happened, and give you a written opinion on your options. Includes the ATIP request.' },
  { id: 'atip', kind: 'simple', name: 'ATIP / GCMS notes', fee: '$75', tabs: ['refused'], desc: 'Order your immigration file notes from the government. $75 with any package, $175 on its own.' },
  { id: 'pfl-response', kind: 'simple', name: 'Procedural fairness letter response', fee: '$2,100', tabs: ['refused'], desc: "A fairness letter is the last chance to answer an officer's concern before a decision. The deadline is short and firm." },
  { id: 'pfl-misrep', kind: 'simple', name: 'Procedural fairness, misrepresentation allegation', fee: '$3,400', tabs: ['refused'], desc: 'If the letter uses the word misrepresentation, treat it as the most serious immigration document you will ever receive.' },
  { id: 'reconsideration', kind: 'simple', name: 'Reconsideration request', fee: '$1,400', tabs: ['refused'], desc: 'Asking the original officer to review the decision again.' },
  { id: 'rebuilt', kind: 'simple', name: 'Rebuilt application after refusal', fee: 'Package + $1,000', tabs: ['refused'], desc: 'A rebuilt application that answers the refusal concern head-on.' },
  { id: 'visitor-visa-after-refusal', kind: 'tier', name: 'Visitor visa after refusal', full: '$2,000', diy: '$1,200', review: '$600', tabs: ['refused'] },
  { id: 'residency-questionnaire', kind: 'simple', name: 'Citizenship residency questionnaire response', fee: '$2,100', tabs: ['refused'], desc: 'Responding to a residency obligation questionnaire on a citizenship application.' },

  // Hearings & appeals
  { id: 'refugee-claim', kind: 'hearing', name: 'Refugee claim, Basis of Claim & hearing', written: '$2,800', full: '$5,800', tabs: ['hearings'] },
  { id: 'rad', kind: 'simple', name: 'Refugee Appeal Division, written appeal', fee: '$4,200', tabs: ['hearings'], desc: "Written appeal submissions within the RAD's strict deadlines." },
  { id: 'sponsorship-appeal', kind: 'hearing', name: 'Sponsorship appeal', written: '$4,500', full: '$8,500', tabs: ['family', 'refused', 'hearings'] },
  { id: 'residency-appeal', kind: 'hearing', name: 'Residency obligation appeal', written: '$4,500', full: '$8,500', tabs: ['prcard', 'hearings'] },
  { id: 'removal-appeal', kind: 'hearing', name: 'Removal order appeal', written: '$5,000', full: '$9,500', tabs: ['hearings'] },
  { id: 'admissibility', kind: 'hearing', name: 'Admissibility hearing', written: ', ', full: '$4,500', tabs: ['hearings'] },
  { id: 'detention-review', kind: 'hearing', name: 'Detention review', written: '$1,800', full: '$1,800', tabs: ['hearings'] },

  // Business & employers
  { id: 'business-assessment', kind: 'simple', name: 'Business route assessment', fee: '$1,200', tabs: ['business'], desc: 'A written assessment of your business, capital and background against the routes that actually fit.' },
  { id: 'start-up-visa', kind: 'tier', name: 'Start-up visa', full: '$6,500', diy: '$3,900', review: '$1,200', tabs: ['business'] },
  { id: 'provincial-entrepreneur', kind: 'tier', name: 'Provincial entrepreneur stream', full: '$6,500', diy: '$3,900', review: '$1,200', tabs: ['pr', 'business'] },
  { id: 'owner-operator', kind: 'tier', name: 'Owner-operator work permit', full: '$4,500', diy: '$2,700', review: '$800', tabs: ['business'] },
  { id: 'intra-company', kind: 'tier', name: 'Intra-company transfer', full: '$3,800', diy: '$2,300', review: '$700', tabs: ['business'] },
  { id: 'lmia', kind: 'tier', name: 'LMIA (employer)', full: '$2,550', diy: '$1,275', review: '$550', tabs: ['business'] },
  { id: 'employer-compliance', kind: 'tier', name: 'Employer compliance review', full: '$1,500', diy: '$900', review: '$375', tabs: ['business'] },
];