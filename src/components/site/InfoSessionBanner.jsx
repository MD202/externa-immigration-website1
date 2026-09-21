import { X, ArrowRight } from 'lucide-react';

// Dismissible announcement bar fixed across the very top of the homepage.
// Visibility is owned by Home (so it can offset the header); this component
// is purely presentational.
export default function InfoSessionBanner({ onDismiss }) {
  return (
    <div className="fixed inset-x-0 top-0 z-[120] bg-[#1E2A4A] text-white">
      <div className="relative mx-auto flex max-w-[1440px] items-center justify-center gap-3 px-10 py-2.5 text-center lg:px-[8vw]">
        <span className="hidden bg-[#B8860B] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[.14em] text-white sm:inline">New</span>
        <p className="text-xs leading-tight text-white/90 sm:text-sm">Information sessions for healthcare and entrepreneur pathways are now open.</p>
        <a href="#upcoming-sessions" className="inline-flex items-center gap-1 whitespace-nowrap text-xs font-semibold text-[#B8860B] transition hover:underline sm:text-sm">See sessions <ArrowRight className="h-3 w-3" /></a>
        <button onClick={onDismiss} aria-label="Dismiss announcement" className="absolute right-4 text-white/60 transition hover:text-white lg:right-[8vw]"><X className="h-4 w-4" /></button>
      </div>
    </div>
  );
}