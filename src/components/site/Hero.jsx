import { Link } from "react-router-dom";
import { ArrowUpRight, BadgeCheck, ChevronRight } from "lucide-react";
import { Image } from "@/components/ui/image";

const intents = ["I have a refusal or appeal", "I want to reunite my family", "I’m exploring PR or business"];
export default function Hero() {
  return <section id="top" className="relative min-h-screen overflow-hidden bg-[#0F2433] text-white">
    <Image src="https://media.base44.com/images/public/6a95f2205a5c2cd9741e0f39/e8bb63d60_generated_8c88c781.jpg" alt="Professional overlooking Toronto at dawn" className="absolute inset-0 h-full w-full opacity-45" fittingType="fill" focalPointX={0.68} />
    <div className="absolute inset-0 bg-gradient-to-r from-[#0F2433] via-[#0F2433]/90 to-[#0F2433]/20" />
    <div className="relative mx-auto grid min-h-screen max-w-[1440px] items-center gap-12 px-5 pb-16 pt-32 lg:grid-cols-12 lg:px-[8vw]">
      <div className="lg:col-span-7"><div className="mb-7 flex items-center gap-3 text-xs uppercase tracking-[.24em] text-[#D1E3ED]"><BadgeCheck className="h-5 w-5 text-[#C5A059]" /> RCIC–IRB representation</div><h1 className="max-w-3xl font-heading text-5xl leading-[1.02] sm:text-6xl lg:text-[82px]">Your Canadian future, <em className="font-normal text-[#D1E3ED]">reclaimed.</em></h1><p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70">Clear strategy for complex immigration matters—from refusals and appeals to family reunification, permanent residence and citizenship.</p><div className="mt-9 flex flex-wrap gap-4"><Link to="/strategy-session" className="group flex items-center gap-3 bg-[#C5A059] px-6 py-4 font-semibold text-[#0F2433]">Discuss your case <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link><a href="#services" className="border border-white/30 px-6 py-4 font-semibold">Explore pathways</a></div></div>
      <aside className="border border-white/20 bg-white/10 p-6 backdrop-blur-xl lg:col-span-5 lg:p-8"><p className="text-xs uppercase tracking-[.24em] text-[#C5A059]">Quick assessment</p><h2 className="mt-3 font-heading text-3xl">Where are you today?</h2><div className="mt-7 grid gap-2">{intents.map((item) => <Link key={item} to="/strategy-session" className="group flex items-center justify-between border-b border-white/15 py-4 text-left text-white/80 transition hover:text-white">{item}<ChevronRight className="h-4 w-4 text-[#C5A059] transition group-hover:translate-x-1" /></Link>)}</div><p className="mt-6 text-xs leading-relaxed text-white/50">Confidential intake · Clear next steps · No obligation</p></aside>
    </div>
  </section>;
}