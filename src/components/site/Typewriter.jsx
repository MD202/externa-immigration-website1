import { useEffect, useState } from 'react';

// Types each phrase, holds, erases, then moves to the next — looping.
export default function Typewriter({ phrases, typeSpeed = 70, deleteSpeed = 35, holdMs = 1800, className }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];
    let timeout;
    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
    } else {
      const next = deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1);
      timeout = setTimeout(() => setText(next), deleting ? deleteSpeed : typeSpeed);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, phrases, typeSpeed, deleteSpeed, holdMs]);

  const current = phrases[index % phrases.length];

  return (
    <span className={`relative inline-block whitespace-nowrap ${className || ''}`} aria-live="polite">
      {/* Invisible full-phrase sizer reserves a stable width so the surrounding
          headline never reflows while characters are typed or erased. */}
      <span aria-hidden="true" className="invisible">{current}</span>
      <span className="absolute left-0 top-0">
        {text}
        <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-[#B8860B] align-middle" style={{ height: '1em' }} aria-hidden="true" />
      </span>
    </span>
  );
}