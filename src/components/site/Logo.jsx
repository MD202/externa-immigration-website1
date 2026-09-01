import { useId } from 'react';

export default function Logo({ className = 'h-9 w-9' }) {
  const id = useId();
  const gradId = `externa-logo-${id}`;
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C5A059" />
          <stop offset="100%" stopColor="#C8102E" />
        </linearGradient>
      </defs>
      <rect x="7" y="7" width="34" height="34" transform="rotate(45 24 24)" fill={`url(#${gradId})`} rx="2" />
      <path d="M 30 14 L 19 14 Q 16 14 16 17 L 16 21 Q 16 24 19 24 L 25 24" stroke="#0F2433" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M 30 34 L 19 34 Q 16 34 16 31 L 16 27 Q 16 24 19 24 L 25 24" stroke="#0F2433" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}