import { Check } from 'lucide-react';

export default function IntakeStep({ title, options, selected, onSelect }) {
  return (
    <div>
      <h2 className="font-heading text-4xl leading-tight text-[#1E293B] sm:text-5xl">{title}</h2>
      <div className="mt-9 grid gap-3">
        {options.map((option) => {
          const value = typeof option === 'string' ? option : option.value;
          const label = typeof option === 'string' ? option : option.label;
          return (
            <button
              type="button"
              key={value}
              onClick={() => onSelect(value)}
              className={`flex items-center justify-between border p-5 text-left text-lg transition ${selected === value ? 'border-[#047857] bg-[#047857]/5 text-[#1E293B]' : 'border-[#1E293B]/15 text-[#1E293B]/80 hover:border-[#1E293B]/40'}`}
            >
              <span>{label}</span>
              {selected === value && <Check className="h-5 w-5 text-[#047857]" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}