import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/site/Reveal';

export default function CloseCta({ label }) {
  return (
    <section className="bg-[#FBFAF8] px-5 py-16 text-center lg:px-[8vw] lg:py-24">
      <div className="mx-auto max-w-[720px]">
        <Reveal>
          <Link to="/strategy-session" className="btn btn-primary">{label} <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
      </div>
    </section>
  );
}