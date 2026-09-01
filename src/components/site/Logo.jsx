import { useId } from 'react';

// Logo mark paths (extracted from the uploaded SVGs, background removed, viewBox cropped to the mark).
// viewBox spans x:649–851, y:497–804 — the mark itself.
const VIEW_BOX = '649 497 202 308';
const TOP_PATH = 'M 850.398438 497.394531 L 850.398438 560.542969 L 649.597656 655.136719 L 649.597656 591.988281 Z M 850.398438 497.394531';
const BOTTOM_PATH = 'M 850.398438 658.449219 L 712.789062 723.269531 L 749.671875 740.644531 L 850.398438 693.1875 L 850.398438 756.359375 L 749.671875 803.796875 L 649.597656 756.660156 L 649.597656 689.871094 L 850.398438 595.300781 Z M 850.398438 658.449219';

export default function Logo({ className = 'h-9 w-9', variant = 'default' }) {
  const id = useId();
  const clipTop = `logo-clip-top-${id}`;
  const clipBottom = `logo-clip-bottom-${id}`;
  // default = navy + teal (for light backgrounds); light = off-white (for dark backgrounds)
  const topColor = variant === 'light' ? '#f4f7f9' : '#009d9a';
  const bottomColor = variant === 'light' ? '#f4f7f9' : '#0E3B3B';
  return (
    <svg viewBox={VIEW_BOX} className={className} aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      <defs>
        <clipPath id={clipTop}><path d="M 649.460938 497.394531 L 850.460938 497.394531 L 850.460938 656 L 649.460938 656 Z M 649.460938 497.394531" clipRule="nonzero" /></clipPath>
        <clipPath id={clipBottom}><path d="M 649.460938 595 L 850.460938 595 L 850.460938 804 L 649.460938 804 Z M 649.460938 595" clipRule="nonzero" /></clipPath>
      </defs>
      <g clipPath={`url(#${clipTop})`}><path fill={topColor} d={TOP_PATH} fillOpacity="1" fillRule="nonzero" /></g>
      <g clipPath={`url(#${clipBottom})`}><path fill={bottomColor} d={BOTTOM_PATH} fillOpacity="1" fillRule="nonzero" /></g>
    </svg>
  );
}