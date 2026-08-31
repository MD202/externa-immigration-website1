import { Check } from "lucide-react";

export default function IntakeStep({ title, options, selected, onSelect }) {
  return <div><h2 className="font-heading text-4xl leading-tight text-[#0F2433] sm:text-5xl">{title}</h2><div className="mt-9 grid gap-3">{options.map((option) => <button type="button" key={option} onClick={() => onSelect(option)} className={`flex items-center justify-between border p-5 text-left text-lg transition ${selected === option ? "border-[#C5A059] bg-[#C5A059]/10" : "border-[#0F2433]/15 hover:border-[#0F2433]/50"}`}><span>{option}</span>{selected === option && <Check className="h-5 w-5 text-[#8A6C31]" />}</button>)}</div></div>;
}