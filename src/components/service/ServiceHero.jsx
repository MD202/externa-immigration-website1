import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function ServiceHero({ eyebrow, headline, body, ctaLabel, ctaTo, onCtaClick, secondary, redButton = true, size = 'default', variant = 'dark', image }) {
  const dark = variant === 'dark';
  const headlineSize = size === 'quiet' ? 'text-[40px] sm:text-5xl lg:text-[56px]' : 'text-[40px] sm:text-5xl lg:text-[64px]';
  return (
    <section className={`relative flex min-h-[88vh] items-center overflow-hidden ${dark ? 'bg-[#13203F] text-white' : 'bg-[#FBFAF8] text-[#1E2A4A]'}`}>
      {image && (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Image src={image} fittingType="fill" className="h-full w-full opacity-40" />
          <div className={`absolute inset-0 ${dark ? 'bg-gradient-to-br from-[#13203F]/90 via-[#13203F]/72 to-[#13203F]/92' : 'bg-gradient-to-br from-[#FBFAF8]/88 via-[#FBFAF8]/72 to-[#FBFAF8]/92'}`} />
        </div>
      )}
      <div className="relative mx-auto w-full max-w-[1240px] px-5 pt-32 pb-16 lg:px-[8vw]">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className={`mt-5 max-w-3xl font-heading leading-[1.05] ${headlineSize}`}>{headline}</h1>
        {body && <p className={`mt-6 max-w-xl text-lg leading-relaxed ${dark ? 'text-white/60' : 'text-[#1E2A4A]/65'}`}>{body}</p>}
        {ctaLabel && (ctaTo || onCtaClick) && (
          <div className="mt-8">
            {redButton ? (
              onCtaClick ? (
                <button type="button" onClick={onCtaClick} className="btn btn-gold">{ctaLabel} <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></button>
              ) : (
                <Link to={ctaTo} className="btn btn-gold">{ctaLabel} <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
              )
            ) : (
              onCtaClick ? (
                <button type="button" onClick={onCtaClick} className={`btn px-9 py-4 ${dark ? 'border border-white/40 text-white hover:border-white' : 'border border-[#1E2A4A]/40 text-[#1E2A4A] hover:border-[#1E2A4A]'}`}>{ctaLabel} <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></button>
              ) : (
                <Link to={ctaTo} className={`btn px-9 py-4 ${dark ? 'border border-white/40 text-white hover:border-white' : 'border border-[#1E2A4A]/40 text-[#1E2A4A] hover:border-[#1E2A4A]'}`}>{ctaLabel} <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
              )
            )}
          </div>
        )}
        {secondary && <p className={`mt-6 max-w-md text-sm ${dark ? 'text-white/45' : 'text-[#1E2A4A]/50'}`}>{secondary}</p>}
      </div>
    </section>
  );
}