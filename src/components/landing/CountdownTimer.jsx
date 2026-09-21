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

// Fixed-date countdown. Shows days/hours/minutes/seconds until the target,
// then a "closed" state once it passes. Content stays visible without JS.
export default function CountdownTimer({ target, className = '' }) {
  const [remaining, setRemaining] = useState(() => calcRemaining(target));

  useEffect(() => {
    const id = setInterval(() => setRemaining(calcRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (remaining.total <= 0) {
    return <div className={`font-heading text-2xl text-white ${className}`}>Intake closed</div>;
  }

  const units = [
    { label: 'Days', value: remaining.days },
    { label: 'Hours', value: remaining.hours },
    { label: 'Minutes', value: remaining.minutes },
    { label: 'Seconds', value: remaining.seconds },
  ];

  return (
    <div className={`flex gap-3 sm:gap-4 ${className}`}>
      {units.map((u) => (
        <div key={u.label} className="flex flex-col items-center">
          <div className="min-w-[3.25rem] border border-[#B8860B]/40 bg-white/5 px-3 py-3 text-center font-heading text-2xl text-white sm:min-w-[4rem] sm:text-3xl">
            {String(u.value).padStart(2, '0')}
          </div>
          <span className="mt-2 text-[10px] uppercase tracking-[.2em] text-white/50">{u.label}</span>
        </div>
      ))}
    </div>
  );
}