import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/site/Reveal';

export default function Callout({ heading, paragraphs = [], ctaLabel, ctaTo, redRule }) {
  return (
    <section className="bg-[#FBFAF8] px-5 py-20 lg:px-[8vw] lg:py-40">
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <div className={`border border-[#1E2A4A]/15 bg-white p-8 lg:p-12 ${redRule ? 'border-l-2 border-l-[#DC2626]' : ''}`}>
            {heading && <h2 className="font-heading text-3xl text-[#1E2A4A]">{heading}</h2>}
            {paragraphs.map((p, i) => <p key={i} className="mt-5 max-w-2xl text-base leading-relaxed text-[#1E2A4A]/70">{p}</p>)}
            {ctaLabel && ctaTo && <Link to={ctaTo} className="btn btn-primary mt-8">{ctaLabel} <ArrowRight className="h-4 w-4" /></Link>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}