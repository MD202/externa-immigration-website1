export default function IntakeProgress({ step }) {
  return <div className="mb-10"><div className="mb-3 flex justify-between text-xs uppercase tracking-[.18em] text-[#0F2433]/50"><span>Confidential intake</span><span>{step} / 3</span></div><div className="h-px bg-[#0F2433]/15"><div className="h-px bg-[#C5A059] transition-all duration-500" style={{ width: `${step * 33.33}%` }} /></div></div>;
}