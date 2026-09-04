import { useState } from 'react';
import { X, Send } from 'lucide-react';

const PHONE = '16479099603'; // +1 647 909 9603, country code + number, no plus
const DEFAULT_MSG = "Hello, I'd like to ask about an immigration matter.";

const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const quickReplies = [
  { label: 'Book a consultation', text: "I'd like to book a consultation." },
  { label: 'Check my eligibility', text: 'Can you help assess my eligibility for Canadian immigration?' },
  { label: 'My application was refused', text: 'My application was refused and I need help with next steps.' },
  { label: 'Family sponsorship', text: 'I have a question about family sponsorship.' },
];

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const openChat = (text) => {
    const msg = (text || message || DEFAULT_MSG).trim();
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-5 right-5 z-[150] flex flex-col items-end gap-3">
      {open && (
        <div className="w-[300px] overflow-hidden rounded-xl border border-[#1E2A4A]/12 bg-white shadow-[0_24px_48px_-20px_rgba(30,42,74,0.4)] sm:w-[320px]">
          <div className="flex items-center justify-between bg-[#1E2A4A] px-4 py-3">
            <div className="flex items-center gap-2">
              <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
              <div>
                <p className="text-sm font-semibold text-white">Externa Immigration</p>
                <p className="text-[11px] text-white/60">Typically replies within a day</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="text-white/60 transition hover:text-white"><X className="h-5 w-5" /></button>
          </div>
          <div className="p-4">
            <p className="text-sm leading-relaxed text-[#1E2A4A]/70">Hi there 👋 Tell us briefly what you need, or pick a quick option below — we'll continue the conversation on WhatsApp.</p>
            <div className="mt-3 grid gap-2">
              {quickReplies.map((q) => (
                <button key={q.label} onClick={() => openChat(q.text)} className="rounded-md border border-[#1E2A4A]/15 px-3 py-2 text-left text-sm text-[#1E2A4A] transition hover:border-[#B8860B] hover:bg-[#B8860B]/5">{q.label}</button>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2">
              <input value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') openChat(); }} placeholder="Type a message…" className="flex-1 rounded-md border border-[#1E2A4A]/15 px-3 py-2 text-sm text-[#1E2A4A] outline-none transition focus:border-[#B8860B]" />
              <button onClick={() => openChat()} aria-label="Send message" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#25D366] text-white transition hover:bg-[#1ebe5d]"><Send className="h-4 w-4" /></button>
            </div>
          </div>
        </div>
      )}
      <button onClick={() => setOpen(!open)} aria-label={open ? 'Close WhatsApp chat' : 'Open WhatsApp chat'} className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_-8px_rgba(37,211,102,0.6)] transition hover:bg-[#1ebe5d]">
        {open ? <X className="h-6 w-6" /> : <WhatsAppIcon className="h-7 w-7" />}
      </button>
    </div>
  );
}