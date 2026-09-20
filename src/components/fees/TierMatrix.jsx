// Three-tier feature comparison matrix with toggleable columns. "We/us" voice.
const tiers = [
  { key: 'full', name: 'Full Representation', sub: 'We represent you, end to end', featured: true },
  { key: 'guided', name: 'DIY (with our guidance)', sub: 'You file. We guide you.' },
  { key: 'review', name: 'Review Only', sub: 'We review your work' },
];

const features = [
  { label: 'Who submits', full: 'We do', guided: 'You do', review: 'You do' },
  { label: 'Named as your authorized representative', full: '✓', guided: ', ', review: ', ' },
  { label: 'Payment', full: 'Staged', guided: 'In full, upfront', review: 'In full, upfront' },
  { label: 'Personalised document checklist', full: '✓', guided: '✓', review: '✓' },
  { label: 'All forms completed by us', full: '✓', guided: ', ', review: ', ' },
  { label: 'All supporting letters drafted by us', full: '✓', guided: ', ', review: ', ' },
  { label: 'Written review of every form and letter you prepare', full: '✓', guided: '✓', review: '✓' },
  { label: 'Strategy, route, evidence, what to avoid', full: '✓', guided: '✓', review: 'Limited to what you\'ve prepared' },
  { label: 'Representative\'s submission letter', full: '✓', guided: ', ', review: ', ' },
  { label: 'Consultations', full: 'As required', guided: 'One 60 min session', review: 'One 45 min session' },
  { label: 'Follow up session', full: '✓', guided: 'One 30 min before you file', review: 'One 15 min' },
  { label: 'Email support while you prepare', full: '✓', guided: '✓', review: ', ' },
  { label: 'Secure client portal', full: '✓', guided: '✓', review: 'Drop off link' },
  { label: 'We liaise with the immigration authority after submission', full: '✓', guided: ', ', review: ', ' },
  { label: 'Guidance if the immigration authority contacts you', full: '✓', guided: '✓, 12 months', review: ', ' },
  { label: 'Evening and weekend appointments', full: '✓', guided: '✓', review: '✓' },
];

const Cell = ({ v, strong }) => {
  const isCheck = v === '✓';
  const isDash = v === ', ';
  return (
    <span className={strong ? 'font-semibold text-[#1E2A4A]' : ''}>
      {isCheck ? <span className="text-[#B8860B]">✓</span> : isDash ? <span className="text-[#1E2A4A]/25">, </span> : v}
    </span>
  );
};

export default function TierMatrix({ show = { full: true, guided: true, review: true } }) {
  const visible = tiers.filter((t) => show[t.key]);
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse min-w-[560px]">
        <thead>
          <tr>
            <th className="w-[34%] py-5 pr-4 text-left align-bottom" />
            {visible.map((t) => (
              <th key={t.key} className={`px-4 py-5 text-center align-bottom ${t.featured ? 'bg-[#1E2A4A] text-white' : 'text-[#1E2A4A]'}`}>
                {t.featured && <span className="block text-[10px] font-semibold uppercase tracking-[.16em] text-[#B8860B]">Most people choose this</span>}
                <span className={`mt-1 block font-heading text-xl ${t.featured ? 'text-white' : ''}`}>{t.name}</span>
                <span className={`mt-1 block text-xs ${t.featured ? 'text-white/55' : 'text-[#1E2A4A]/55'}`}>{t.sub}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((f, i) => (
            <tr key={i} className="border-b border-[#1E2A4A]/8 last:border-0">
              <td className="py-3.5 pr-4 text-sm leading-relaxed text-[#1E2A4A]/70">{f.label}</td>
              {visible.map((t) => (
                <td key={t.key} className={`px-4 py-3.5 text-center text-sm ${t.featured ? 'bg-[#1E2A4A]/[.04]' : 'text-[#1E2A4A]/65'}`}>
                  <Cell v={f[t.key]} strong={t.featured} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}