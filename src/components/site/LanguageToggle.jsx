import { useLanguage } from '@/lib/LanguageContext';

export default function LanguageToggle({ dark = false }) {
  const { lang, setLang } = useLanguage();
  const langs = [
    { code: 'en', label: 'EN' },
    { code: 'ta', label: 'தமிழ்' },
    { code: 'hi', label: 'हिंदी' },
  ];
  const inactive = dark ? 'text-white/50 hover:text-white/80' : 'text-[#0E3B3B]/50 hover:text-[#0E3B3B]';
  return (
    <div className="flex items-center text-xs">
      {langs.map((l, i) => (
        <span key={l.code} className="flex items-center">
          {i > 0 && <span className={dark ? 'text-white/20' : 'text-[#0E3B3B]/20'}>·</span>}
          <button
            onClick={() => setLang(l.code)}
            className={`px-2 py-1 transition ${lang === l.code ? 'text-[#6B1E1E]' : inactive}`}
          >
            {l.label}
          </button>
        </span>
      ))}
    </div>
  );
}