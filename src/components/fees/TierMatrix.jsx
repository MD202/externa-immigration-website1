// Three-tier feature comparison matrix. Full Representation column highlighted.
const features = [
  { label: 'Who submits', full: 'I do', guided: 'You do', review: 'You do' },
  { label: 'Named as your authorized representative', full: '✓', guided: '—', review: '—' },
  { label: 'Payment', full: 'Staged', guided: 'In full, upfront', review: 'In full, upfront' },
  { label: 'Personalised document checklist', full: '✓', guided: '✓', review: '✓' },
  { label: 'All forms completed by me', full: '✓', guided: '—', review: '—' },
  { label: 'All supporting letters drafted by me', full: '✓', guided: '—', review: '—' },
  { label: 'Written review of every form and letter you prepare', full: '✓', guided: '✓', review: '✓' },
  { label: 'Strategy — route, evidence, what to avoid', full: '✓', guided: '✓', review: 'Limited to what you\'ve prepared' },
  { label: 'Representative\'s submission letter', full: '✓', guided: '—', review: '—' },
  { label: 'Commissioning of forms and declarations', full: '✓', guided: '—', review: '—' },
  { label: 'Consultations', full: 'As required', guided: 'One 60-min session', review: 'One 45-min session' },
  { label: 'Follow-up session', full: '✓', guided: 'One 30-min before you file', review: 'One 15-min' },
  { label: 'Email support while you prepare', full: '✓', guided: '✓', review: '—' },
  { label: 'Secure client portal', full: '✓', guided: '✓', review: 'Drop-off link' },
  { label: 'I deal with IRCC after submission', full: '✓', guided: '—', review: '—' },
  { label: 'Guidance if IRCC contacts you', full: '✓', guided: '✓ — 12 months', review: '—' },
  { label: 'Evening and weekend appointments', full: '✓', guided: '✓', review: '✓' },
];

const Cell = ({ v, strong }) => {
  const isCheck = v === '✓';
  const isDash = v === '—';
  return (
    <span className={strong ? 'font-semibold text-[#1E2A4A]' : ''}>
      {isCheck ? <span className="text-[#B8860B]">✓</span> : isDash ? <span className="text-[#1E2A4A]/25">—</span> : v}
    </span>
  );
};

export default function TierMatrix() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse min-w-[680px]">
        <thead>
          <tr>
            <th className="w-[34%] py-5 pr-4 text-left align-bottom" />
            <th className="bg-[#1E2A4A] px-4 py-5 text-center align-bottom text-white">
              <span className="block text-[10px] font-semibold uppercase tracking-[.16em] text-[#B8860B]">Most people choose this</span>
              <span className="mt-1 block font-heading text-xl">Full Representation</span>
              <span className="mt-1 block text-xs text-white/55">I act for you, end to end</span>
            </th>
            <th className="px-4 py-5 text-center align-bottom text-[#1E2A4A]">
              <span className="block font-heading text-xl">Guided</span>
              <span className="mt-1 block text-xs text-[#1E2A4A]/55">You file. I prepare you.</span>
            </th>
            <th className="px-4 py-5 text-center align-bottom text-[#1E2A4A]">
              <span className="block font-heading text-xl">File Review</span>
              <span className="mt-1 block text-xs text-[#1E2A4A]/55">Checked before you send</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {features.map((f, i) => (
            <tr key={i} className="border-b border-[#1E2A4A]/8 last:border-0">
              <td className="py-3.5 pr-4 text-sm leading-relaxed text-[#1E2A4A]/70">{f.label}</td>
              <td className="bg-[#1E2A4A]/[.04] px-4 py-3.5 text-center text-sm"><Cell v={f.full} strong /></td>
              <td className="px-4 py-3.5 text-center text-sm text-[#1E2A4A]/65"><Cell v={f.guided} /></td>
              <td className="px-4 py-3.5 text-center text-sm text-[#1E2A4A]/65"><Cell v={f.review} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}