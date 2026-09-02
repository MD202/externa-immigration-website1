import Reveal from '@/components/site/Reveal';

export default function ServiceList({ eyebrow, heading, items }) {
  return (
    <section className="bg-[#1E2A4A] px-5 py-20 text-white lg:px-[8vw] lg:py-40">
      <div className="mx-auto max-w-[1240px]">
        <Reveal className="max-w-2xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {heading && <h2 className="section-title text-white">{heading}</h2>}
        </Reveal>
        <ul className="mt-14 border-t border-white/14">
          {items.map((it, i) => (
            <Reveal key={i}>
              <li className="border-b border-white/14 py-5 text-lg text-white/75">{it}</li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}