import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ServiceHero({ eyebrow, headline, body, ctaLabel, ctaTo, secondary, redButton = true, size = 'default' }) {
  const headlineSize = size === 'quiet' ? 'text-4xl sm:text-5xl lg:text-[56px]' : 'text-4xl sm:text-5xl lg:text-[64px]';
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-[#13203F] text-white">
      <div className="relative mx-auto w-full max-w-[1240px] px-5 pt-32 pb-16 lg:px-[8vw]">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className={`mt-5 max-w-3xl font-heading leading-[1.05] ${headlineSize}`}>{headline}</h1>
        {body && <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">{body}</p>}
        {ctaLabel && ctaTo && (
          <div className="mt-8">
            {redButton ? (
              <Link to={ctaTo} className="btn btn-primary">{ctaLabel} <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
            ) : (
              <Link to={ctaTo} className="btn border border-white/40 px-9 py-4 text-white hover:border-white">{ctaLabel} <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
            )}
          </div>
        )}
        {secondary && <p className="mt-6 max-w-md text-sm text-white/45">{secondary}</p>}
      </div>
    </section>
  );
}