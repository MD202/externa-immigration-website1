import { Check } from 'lucide-react';

export default function IntakeStep({ title, options, selected, onSelect }) {
  return (
    <div>
      <h2 className="font-heading text-4xl leading-tight text-[#123B2C] sm:text-5xl">{title}</h2>
      <div className="mt-9 grid gap-3">
        {options.map((option) => {
          const value = typeof option === 'string' ? option : option.value;
          const label = typeof option === 'string' ? option : option.label;
          return (
            <button
              type="button"
              key={value}
              onClick={() => onSelect(value)}
              className={`flex items-center justify-between border p-5 text-left text-lg transition ${selected === value ? 'border-[#C9A227] bg-[#C9A227]/5 text-[#123B2C]' : 'border-[#123B2C]/15 text-[#123B2C]/80 hover:border-[#123B2C]/40'}`}
            >
              <span>{label}</span>
              {selected === value && <Check className="h-5 w-5 text-[#C9A227]" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}