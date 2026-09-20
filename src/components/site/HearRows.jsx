import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/site/Reveal';

// "What we hear most", rendered as stacked, always-open rows with hairline rules.
// No collapse interaction: the copy is the most persuasive writing on the page
// and should be read without a click. Optional per-row `link` adds a cross-link.
export default function HearRows({ heading, items }) {
  return (
    <section className="bg-white px-5 py-16 lg:px-[8vw] lg:py-24">
      <div className="mx-auto max-w-[900px]">
        <Reveal><p className="eyebrow">{heading}</p></Reveal>
        <div className="mt-8 border-t border-[#1E2A4A]/10">
          {items.map((row, i) => (
            <div key={i} className="border-b border-[#1E2A4A]/10 py-6">
              <p className="font-heading text-lg text-[#1E2A4A]">{row.lead}</p>
              <p className="mt-2 text-base leading-relaxed text-[#1E2A4A]/70">{row.body}</p>
              {row.link && (
                <Link to={row.link.to} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#B8860B]">
                  {row.link.label} <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}