import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/site/Reveal';

export default function TextSection({ eyebrow, heading, paragraphs = [], ctaLabel, ctaTo, variant = 'light', centered = false, pad = 'py-20 lg:py-40' }) {
  const dark = variant === 'dark';
  return (
    <section className={`${dark ? 'bg-[#1E2A4A] text-white' : 'bg-[#FBFAF8] text-[#1E2A4A]'} px-5 lg:px-[8vw] ${pad}`}>
      <div className="mx-auto max-w-[1240px]">
        <Reveal className={`${centered ? 'mx-auto max-w-[900px] text-center' : 'max-w-2xl'}`}>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {heading && <h2 className={`${centered ? 'font-heading text-3xl leading-tight sm:text-4xl lg:text-[44px]' : 'section-title'} ${dark ? 'text-white' : ''}`}>{heading}</h2>}
          {paragraphs.map((p, i) => <p key={i} className={`mt-5 text-lg leading-relaxed ${dark ? 'text-white/65' : 'text-[#1E2A4A]/65'}`}>{p}</p>)}
          {ctaLabel && ctaTo && <Link to={ctaTo} className="btn btn-primary mt-8">{ctaLabel} <ArrowRight className="h-4 w-4" /></Link>}
        </Reveal>
      </div>
    </section>
  );
}