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