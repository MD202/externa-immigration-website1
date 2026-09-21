import { useEffect, useState } from 'react';

function calcRemaining(target) {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    total: diff,
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

// Pulsing "Live" badge plus a days/hours/minutes/seconds countdown to a fixed
// session date. Adapts to dark or light hero backgrounds via `variant`.
export default function SessionCountdown({ target, accent = '#00FF87', variant = 'dark', label = 'Live group session' }) {
  const [remaining, setRemaining] = useState(() => calcRemaining(target));
  useEffect(() => {
    const id = setInterval(() => setRemaining(calcRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const numColor = variant === 'dark' ? 'text-white' : 'text-[#123B35]';
  const subColor = variant === 'dark' ? 'text-white/55' : 'text-[#202624]/55';
  const boxBorder = accent + '55';
  const boxBg = variant === 'dark' ? accent + '14' : accent + '1a';

  const LiveBadge = (
    <div className="inline-flex items-center gap-2">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ backgroundColor: accent }} />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full" style={{ backgroundColor: accent }} />
      </span>
      <span className="text-xs font-semibold uppercase tracking-[.18em]" style={{ color: accent }}>{remaining.total > 0 ? label : 'Live now'}</span>
    </div>
  );

  if (remaining.total <= 0) {
    return <div className="flex flex-col items-center gap-3">{LiveBadge}</div>;
  }

  const units = [
    { label: 'Days', value: remaining.days },
    { label: 'Hours', value: remaining.hours },
    { label: 'Minutes', value: remaining.minutes },
    { label: 'Seconds', value: remaining.seconds },
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      {LiveBadge}
      <div className="flex gap-2.5 sm:gap-3">
        {units.map((u) => (
          <div key={u.label} className="flex flex-col items-center">
            <div className={`min-w-[2.75rem] border px-2.5 py-2 text-center font-heading text-2xl sm:min-w-[3.25rem] sm:text-3xl ${numColor}`} style={{ borderColor: boxBorder, backgroundColor: boxBg }}>
              {String(u.value).padStart(2, '0')}
            </div>
            <span className={`mt-1.5 text-[9px] uppercase tracking-[.16em] sm:text-[10px] ${subColor}`}>{u.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}