import { useLanguage } from '@/lib/LanguageContext';

export default function LanguageToggle({ dark = false }) {
  const { lang, setLang } = useLanguage();
  const langs = [
    { code: 'en', label: 'EN' },
    { code: 'ta', label: 'தமிழ்' },
    { code: 'hi', label: 'हिंदी' },
  ];
  const inactive = dark ? 'text-white/50 hover:text-white/80' : 'text-[#1E293B]/50 hover:text-[#1E293B]';
  return (
    <div className="flex items-center text-xs">
      {langs.map((l, i) => (
        <span key={l.code} className="flex items-center">
          {i > 0 && <span className={dark ? 'text-white/20' : 'text-[#1E293B]/20'}>·</span>}
          <button
            onClick={() => setLang(l.code)}
            className={`px-2 py-1 transition ${lang === l.code ? 'text-[#047857]' : inactive}`}
          >
            {l.label}
          </button>
        </span>
      ))}
    </div>
  );
}