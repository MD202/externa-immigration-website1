import { useEffect, useRef, useState } from 'react';
import Reveal from '@/components/site/Reveal';

export default function NumberedProcess({ steps, eyebrow, heading, variant = 'dark' }) {
  const dark = variant === 'dark';
  const ref = useRef(null);
  const [drawn, setDrawn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setDrawn(true); obs.disconnect(); } }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <section className={`${dark ? 'bg-[#1E2A4A] text-white' : 'bg-[#FBFAF8] text-[#1E2A4A]'} px-5 py-20 lg:px-[8vw] lg:py-40`}>
      <div className="mx-auto max-w-[1240px]">
        <Reveal className="max-w-2xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {heading && <h2 className={`section-title ${dark ? 'text-white' : ''}`}>{heading}</h2>}
        </Reveal>
        <div ref={ref} className="relative mt-14">
          <span aria-hidden="true" className={`absolute left-0 top-1 h-[calc(100%-0.5rem)] w-px origin-top bg-[#B8860B] transition-transform duration-[1400ms] ease-out ${drawn ? 'scale-y-100' : 'scale-y-0'}`} />
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <article className="relative pb-12 pl-10 last:pb-0">
                <span className="font-mono text-sm text-[#B8860B]">{s.n}</span>
                <h3 className={`mt-2 font-heading text-2xl ${dark ? 'text-white' : 'text-[#1E2A4A]'}`}>{s.title}</h3>
                <p className={`mt-3 max-w-2xl text-base leading-relaxed ${dark ? 'text-white/60' : 'text-[#1E2A4A]/65'}`}>{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}