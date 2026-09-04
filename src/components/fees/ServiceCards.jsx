import { Link } from 'react-router-dom';

// Card-based service pricing (replaces tables).
export function ServiceCard({ service, full, guided, review }) {
  return (
    <div className="border border-[#1E2A4A]/10 bg-white p-5">
      <h4 className="font-heading text-base leading-snug text-[#1E2A4A]">{service}</h4>
      <div className="mt-4 grid grid-cols-3 gap-2">
        <div><p className="text-[10px] font-semibold uppercase tracking-[.1em] text-[#1E2A4A]/40">Full</p><p className="mt-1 font-semibold text-[#1E2A4A]">{full}</p></div>
        <div><p className="text-[10px] font-semibold uppercase tracking-[.1em] text-[#1E2A4A]/40">Guided</p><p className="mt-1 text-[#1E2A4A]/70">{guided || '—'}</p></div>
        <div><p className="text-[10px] font-semibold uppercase tracking-[.1em] text-[#1E2A4A]/40">Review</p><p className="mt-1 text-[#1E2A4A]/70">{review || '—'}</p></div>
      </div>
    </div>
  );
}

export function SimpleCard({ service, fee, featured }) {
  return (
    <div className={`flex items-center justify-between gap-4 p-5 ${featured ? 'border-2 border-[#B8860B] bg-white' : 'border border-[#1E2A4A]/10 bg-white'}`}>
      <span className="text-sm leading-relaxed text-[#1E2A4A]/80">{service}</span>
      <span className="shrink-0 font-heading text-lg text-[#1E2A4A]">{fee}</span>
    </div>
  );
}

export function IadCard({ service, written, full }) {
  return (
    <div className="border border-[#1E2A4A]/10 bg-white p-5">
      <h4 className="font-heading text-base leading-snug text-[#1E2A4A]">{service}</h4>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div><p className="text-[10px] font-semibold uppercase tracking-[.1em] text-[#1E2A4A]/40">Written stages</p><p className="mt-1 text-[#1E2A4A]/70">{written}</p></div>
        <div><p className="text-[10px] font-semibold uppercase tracking-[.1em] text-[#1E2A4A]/40">Full (incl. ADR & hearing)</p><p className="mt-1 font-semibold text-[#1E2A4A]">{full}</p></div>
      </div>
    </div>
  );
}

const Price = ({ label, value, strong }) => (
  <span className="flex items-baseline gap-1.5">
    <span className="text-[10px] font-semibold uppercase tracking-[.1em] text-[#1E2A4A]/40">{label}</span>
    <span className={strong ? 'font-semibold text-[#1E2A4A]' : 'text-[#1E2A4A]/70'}>{value || '—'}</span>
  </span>
);

// Row-based fee display with a Book now action.
export function FeeRow({ cat, row, onCompare }) {
  return (
    <div className="group flex flex-col gap-3 border-b border-[#1E2A4A]/10 py-5 transition-colors hover:bg-[#FBFAF8] sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-3">
      <p className="text-sm font-medium leading-snug text-[#1E2A4A] sm:max-w-[40%]">{row.service}</p>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
        {cat.kind === 'tier' && (<><Price label="Full" value={row.full} strong /><Price label="Guided" value={row.guided} /><Price label="Review" value={row.review} /></>)}
        {cat.kind === 'iad' && (<><Price label="Written" value={row.written} /><Price label="Full" value={row.full} strong /></>)}
        {cat.kind === 'simple' && <span className="font-heading text-lg text-[#1E2A4A]">{row.fee}</span>}
      </div>
      {cat.kind === 'tier' ? (
        <button onClick={() => onCompare?.(row)} className="btn shrink-0 bg-[#DC2626] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#B91C1C]">Compare packages</button>
      ) : (
        <Link to="/strategy-session" className="btn shrink-0 border border-[#1E2A4A]/20 px-5 py-2.5 text-sm font-semibold text-[#1E2A4A] transition hover:border-[#B8860B] hover:text-[#B8860B]">Book now</Link>
      )}
    </div>
  );
}