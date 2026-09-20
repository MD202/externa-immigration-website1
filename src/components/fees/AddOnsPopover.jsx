import { useState } from 'react';

// Hover-revealed add-ons list.
export default function AddOnsPopover({ rows }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="inline-flex items-center gap-1.5 rounded-full border border-[#B8860B] px-4 py-2 text-sm font-semibold text-[#B8860B] transition hover:bg-[#B8860B] hover:text-white"
      >
        See add-ons
      </button>
      {open && (
        <div className="absolute left-0 top-full z-30 mt-2 w-[min(92vw,440px)] border border-[#1E2A4A]/12 bg-white p-5 shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-[.12em] text-[#B8860B]">Add-ons &amp; companion</p>
          <p className="mt-1 text-xs text-[#1E2A4A]/55">Bundled with a package at the add-on rate, not the standalone rate.</p>
          <div className="mt-3 max-h-[340px] overflow-y-auto">
            {rows.map((r, i) => (
              <div key={i} className="border-t border-[#1E2A4A]/8 py-2.5 first:border-t-0">
                <p className="text-xs leading-snug text-[#1E2A4A]/80">{r.service}</p>
                <div className="mt-1 flex flex-wrap gap-x-5 gap-y-1 text-xs">
                  <span><span className="text-[#1E2A4A]/40">Full </span><span className="font-semibold text-[#1E2A4A]">{r.full}</span></span>
                  <span><span className="text-[#1E2A4A]/40">Guided </span><span className="text-[#1E2A4A]/70">{r.guided || ', '}</span></span>
                  <span><span className="text-[#1E2A4A]/40">Review </span><span className="text-[#1E2A4A]/70">{r.review || ', '}</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}