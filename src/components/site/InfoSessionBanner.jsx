import { X, ArrowRight } from 'lucide-react';

// Dismissible announcement bar fixed across the very top of the homepage.
// Bright fluorescent-green so it can't be missed; navy text + pulsing live dot.
// Visibility is owned by Home (so it can offset the header); this component
// is purely presentational.
export default function InfoSessionBanner({ onDismiss }) {
  return (
    <div className="fixed inset-x-0 top-0 z-[120] bg-[#00FF87] text-[#1E2A4A]">
      <div className="relative mx-auto flex max-w-[1440px] items-center justify-center gap-3 px-10 py-2.5 text-center lg:px-[8vw]">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1E2A4A] opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1E2A4A]" />
        </span>
        <p className="text-xs font-semibold leading-tight sm:text-sm">Information sessions for healthcare and entrepreneur pathways are now open.</p>
        <a href="#upcoming-sessions" className="inline-flex items-center gap-1 whitespace-nowrap text-xs font-bold underline underline-offset-2 sm:text-sm">See sessions <ArrowRight className="h-3 w-3" /></a>
        <button onClick={onDismiss} aria-label="Dismiss announcement" className="absolute right-4 text-[#1E2A4A]/70 transition hover:text-[#1E2A4A] lg:right-[8vw]"><X className="h-4 w-4" /></button>
      </div>
    </div>
  );
}