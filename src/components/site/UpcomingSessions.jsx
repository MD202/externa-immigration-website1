import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// "Upcoming sessions" homepage section: two bookable paid information sessions
// linking to their dedicated landing pages.
const sessions = [
  {
    tag: 'Healthcare',
    title: 'Healthcare Information Session',
    desc: 'A focused session for healthcare professionals to understand Canadian permanent residence options, licensing considerations and next steps before you apply.',
    price: '$59',
    priceNote: '+ HST · Single session',
    to: '/healthcare-pathway',
  },
  {
    tag: 'Entrepreneur',
    title: 'Entrepreneur Information Session (C11 / Investment)',
    desc: 'A focused session for business owners exploring owner-operator and investment-related pathways, with a clear picture of eligibility before committing.',
    price: '$119',
    priceNote: '+ HST · Single session',
    to: '/entrepreneur-pathway',
  },
];

export default function UpcomingSessions() {
  return (
    <section id="upcoming-sessions" className="scroll-mt-[130px] bg-[#F8FAFC] px-5 py-20 lg:px-[8vw] lg:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow">Upcoming sessions</p>
        <h2 className="section-title">Information sessions now open</h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#1E2A4A]/65">Not ready for a full consultation? Start with a focused information session. Understand your options first, then decide whether to proceed.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {sessions.map((s) => (
            <div key={s.tag} className="flex h-full flex-col border border-[#1E2A4A]/10 bg-white p-8">
              <span className="text-xs font-semibold uppercase tracking-[.18em] text-[#B8860B]">{s.tag}</span>
              <h3 className="mt-4 font-heading text-2xl leading-tight text-[#1E2A4A]">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#1E2A4A]/60">{s.desc}</p>
              <div className="mt-6 flex items-end gap-2">
                <span className="font-heading text-3xl text-[#1E2A4A]">{s.price}</span>
                <span className="mb-1 text-xs text-[#1E2A4A]/50">{s.priceNote}</span>
              </div>
              <Link to={s.to} className="mt-7 inline-flex items-center gap-2 self-start border border-[#B8860B] px-6 py-3 text-sm font-semibold text-[#B8860B] transition hover:bg-[#B8860B] hover:text-white">Book my information session <ArrowRight className="h-4 w-4" /></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}