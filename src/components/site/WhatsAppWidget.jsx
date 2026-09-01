import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

// Replace this number with the real WhatsApp business number (international format, no + or spaces).
const WHATSAPP_NUMBER = '16479099603';

export default function WhatsAppWidget() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const message = encodeURIComponent(
    "Hello, I'd like to ask about a Canadian immigration matter."
  );
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 overflow-hidden rounded-xl border border-[#0E3B3B]/10 bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-[#25D366] px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <span className="font-heading text-base">WhatsApp</span>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close" className="text-white/90 transition hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-4">
            <p className="text-sm leading-relaxed text-[#0E3B3B]/70">
              {t('footer.whatsappIntro')}
            </p>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebe5d]"
            >
              <MessageCircle className="h-4 w-4" />
              {t('footer.whatsappCta')}
            </a>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Open WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:bg-[#1ebe5d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
      </button>
    </div>
  );
}