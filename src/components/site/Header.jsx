import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Compass, Menu, X } from "lucide-react";

export default function Header() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const onScroll = () => setCompact(window.scrollY > 40); onScroll(); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  const links = [["Expertise", "#services"], ["Appeals", "#appeals"], ["Our approach", "#approach"], ["About", "#about"]];
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${compact ? "bg-[#0F2433] py-3 shadow-xl" : "bg-[#0F2433]/70 py-5 backdrop-blur-md"}`}>
    <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 lg:px-[8vw]">
      <a href="#top" className="flex items-center gap-3 text-white"><Compass className="h-8 w-8 text-[#C5A059]" /><span className="font-heading text-lg leading-none">North Passage<span className="mt-1 block font-body text-[9px] uppercase tracking-[.28em] text-[#D1E3ED]">Canadian Immigration</span></span></a>
      <nav className="hidden items-center gap-8 lg:flex">{links.map(([label, href]) => <a key={href} href={href} className="text-sm text-white/75 transition hover:text-white">{label}</a>)}<Link to="/strategy-session" className="border border-[#C5A059] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#C5A059] hover:text-[#0F2433]">Book a strategy session</Link></nav>
      <button onClick={() => setOpen(!open)} className="text-white lg:hidden" aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="mx-5 mt-4 grid gap-1 border-t border-white/15 bg-[#0F2433] py-4 lg:hidden">{links.map(([label, href]) => <a onClick={() => setOpen(false)} key={href} href={href} className="px-3 py-3 text-white/80">{label}</a>)}<Link to="/strategy-session" className="m-3 bg-[#C5A059] px-4 py-3 text-center font-semibold text-[#0F2433]">Book a strategy session</Link></nav>}
  </header>;
}