import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceMatrix from './ServiceMatrix';
import { DEFAULT_MATRIX, DEFAULT_ADDONS, SCHEDULING_NOTE, ROW_GRID } from './feesData';

function AddonsTable({ rows }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left">
            <th className="py-2 pr-4 font-medium text-white/60">Add-on</th>
            <th className="px-2 py-2 text-center font-heading text-[#B8860B]">Full</th>
            <th className="px-2 py-2 text-center font-heading text-white/60">DIY</th>
            <th className="px-2 py-2 text-center font-heading text-white/60">Review</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-white/10">
              <td className="py-2 pr-4 text-white/80">{r.service}</td>
              <td className="px-2 py-2 text-center tabular-nums text-white/90">{r.full}</td>
              <td className="px-2 py-2 text-center tabular-nums text-white/70">{r.diy}</td>
              <td className="px-2 py-2 text-center tabular-nums text-white/70">{r.review}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PriceCells({ svc }) {
  if (svc.kind === 'tier') {
    return (
      <>
        <span className="text-right tabular-nums font-medium text-[#1E2A4A]">{svc.full}</span>
        <span className="hidden text-right tabular-nums text-[#55605A] lg:block">{svc.diy}</span>
        <span className="hidden text-right tabular-nums text-[#55605A] lg:block">{svc.review}</span>
      </>
    );
  }
  if (svc.kind === 'simple') {
    return (
      <>
        <span className="text-right tabular-nums font-medium text-[#1E2A4A]">{svc.fee}</span>
        <span className="hidden lg:block" />
        <span className="hidden lg:block" />
      </>
    );
  }
  if (svc.kind === 'hearing') {
    return (
      <>
        <span className="text-right">
          <span className="block text-[10px] font-semibold uppercase tracking-[.08em] text-[#55605A]">Written</span>
          <span className="block tabular-nums font-medium text-[#1E2A4A]">{svc.written}</span>
          <span className="mt-1.5 block text-[10px] font-semibold uppercase tracking-[.08em] text-[#55605A]">Hearing</span>
          <span className="block tabular-nums font-medium text-[#1E2A4A]">{svc.full}</span>
        </span>
        <span className="hidden lg:block" />
        <span className="hidden lg:block" />
      </>
    );
  }
  return (
    <>
      <span className="text-right tabular-nums font-medium text-[#1E2A4A]">{svc.full}</span>
      <span className="hidden lg:block" />
      <span className="hidden lg:block" />
    </>
  );
}

export default function ServiceRow({ svc, open, onToggle }) {
  const tier = svc.kind === 'tier';
  const hearing = svc.kind === 'hearing';
  const simple = svc.kind === 'simple';
  return (
    <div id={svc.id} className="relative border-t border-[#1E2A4A]/10">
      <button
        onClick={onToggle}
        className={`group relative w-full py-5 text-left transition-colors hover:bg-white ${ROW_GRID}`}
        aria-expanded={open}
      >
        <span className="absolute left-0 top-0 h-0 w-0.5 bg-[#B8860B] transition-all duration-300 group-hover:h-full" />
        <span className="font-heading text-base text-[#1E2A4A] lg:text-lg">{svc.name}</span>
        <PriceCells svc={svc} />
        <span className="flex justify-end text-[#B8860B]">
          <ChevronRight className={`h-5 w-5 transition-transform duration-300 ${open ? 'rotate-90' : ''}`} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="exp"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="bg-[#1E2A4A] px-5 py-8 text-white lg:px-8">
              {tier && (
                <>
                  {svc.routeNote && <p className="mb-6 max-w-2xl text-sm leading-relaxed text-white/70">{svc.routeNote}</p>}
                  <div className="mb-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[.16em] text-[#B8860B]">What each tier includes</p>
                    <ServiceMatrix matrix={svc.matrix || DEFAULT_MATRIX} />
                  </div>
                  <div className="mb-6 rounded bg-white/5 p-5">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[.16em] text-[#B8860B]">Add-ons</p>
                    <AddonsTable rows={svc.addons || DEFAULT_ADDONS} />
                  </div>
                  {svc.bundle && <p className="mb-6 text-sm text-[#B8860B]">{svc.bundle}</p>}
                </>
              )}
              {hearing && (
                <div className="mb-6 max-w-2xl">
                  <p className="text-sm leading-relaxed text-white/80">{SCHEDULING_NOTE}</p>
                  <p className="mt-5 mb-3 text-xs font-semibold uppercase tracking-[.16em] text-[#B8860B]">Full representation</p>
                  <div className="grid max-w-sm gap-2">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <span className="text-sm text-white/70">Written stages</span>
                      <span className="tabular-nums font-medium">{svc.written}</span>
                    </div>
                    <div className="flex items-center justify-between pb-2">
                      <span className="text-sm text-white/70">Including hearing</span>
                      <span className="tabular-nums font-medium">{svc.full}</span>
                    </div>
                  </div>
                </div>
              )}
              {simple && svc.desc && <p className="mb-6 max-w-2xl text-sm leading-relaxed text-white/80">{svc.desc}</p>}
              <Link to="/strategy-session" className="btn btn-primary">Book a consultation <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}