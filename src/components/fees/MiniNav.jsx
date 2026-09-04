const ITEMS = [
  { id: 'consultations', label: 'Consultations' },
  { id: 'tiers', label: 'Tiers' },
  { id: 'fees', label: 'Fees' },
  { id: 'payment', label: 'Payment' },
  { id: 'discounts', label: 'Discounts' },
];

export default function MiniNav() {
  return (
    <div className="sticky top-[68px] z-30 border-b border-[#1E2A4A]/10 bg-[#FBFAF8]/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1240px] gap-6 px-5 py-3 lg:px-[8vw]">
        {ITEMS.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            className="whitespace-nowrap text-xs font-semibold uppercase tracking-[.12em] text-[#1E2A4A]/55 transition hover:text-[#B8860B]"
          >
            {it.label}
          </a>
        ))}
      </div>
    </div>
  );
}