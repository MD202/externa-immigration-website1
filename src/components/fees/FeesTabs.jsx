export default function FeesTabs({ tabs, active, onSelect }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-wrap lg:overflow-visible">
      {tabs.map((tb) => (
        <button
          key={tb.id}
          onClick={() => onSelect(tb.id)}
          className={`shrink-0 rounded-full px-4 py-2.5 text-xs font-semibold transition lg:text-sm ${
            active === tb.id
              ? 'bg-[#1E2A4A] text-white'
              : 'border border-[#1E2A4A]/15 bg-white text-[#1E2A4A]/60 hover:text-[#1E2A4A]'
          }`}
        >
          {tb.dot && <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#B8860B] align-middle" />}
          {tb.label}
        </button>
      ))}
    </div>
  );
}