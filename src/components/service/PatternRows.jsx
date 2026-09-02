import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/site/Reveal';

export default function PatternRows({ rows, variant = 'light', eyebrow, heading, intro, close, hover = true, id, pad = 'py-20 lg:py-40' }) {
  const dark = variant === 'dark';
  return (
    <section id={id} className={`${dark ? 'bg-[#1E2A4A] text-white' : 'bg-[#FBFAF8] text-[#1E2A4A]'} px-5 lg:px-[8vw] ${pad}`}>
      <div className="mx-auto max-w-[1240px]">
        {(eyebrow || heading || intro) && (
          <Reveal className="max-w-2xl">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {heading && <h2 className={`section-title ${dark ? 'text-white' : ''}`}>{heading}</h2>}
            {intro && <p className={`mt-6 text-lg leading-relaxed ${dark ? 'text-white/60' : 'text-[#1E2A4A]/65'}`}>{intro}</p>}
          </Reveal>
        )}
        <div className={`mt-14 border-t ${dark ? 'border-white/14' : 'border-[#1E2A4A]/10'}`}>
          {rows.map((row, i) => (
            <Reveal key={i}>
              <article className={`group relative border-b py-8 pl-6 ${dark ? 'border-white/14' : 'border-[#1E2A4A]/10'} ${hover ? (dark ? 'transition hover:bg-white/[.04]' : 'transition hover:bg-[#1E2A4A]/[.02]') : ''}`}>
                {hover && <span className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-[#B8860B] transition-transform duration-200 group-hover:scale-y-100" />}
                <p className={`font-heading text-xl ${dark ? 'text-white' : 'text-[#1E2A4A]'}`}>{row.lead}</p>
                {row.body && <p className={`mt-2 max-w-2xl text-base leading-relaxed ${dark ? 'text-white/60' : 'text-[#1E2A4A]/65'}`}>{row.body}</p>}
                {row.link && <Link to={row.link.to} className="link-arrow mt-3">{row.link.label} <ArrowRight className="h-4 w-4" /></Link>}
              </article>
            </Reveal>
          ))}
        </div>
        {close && (
          <Reveal className="mt-12 max-w-2xl">
            <p className={`font-heading text-2xl italic ${dark ? 'text-white' : 'text-[#1E2A4A]'}`}>{close}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}