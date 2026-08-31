import { useLanguage } from '@/lib/LanguageContext';

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const langs = [
    { code: 'en', label: 'EN' },
    { code: 'ta', label: 'தமிழ்' },
    { code: 'hi', label: 'हिंदी' },
  ];
  return (
    <div className="flex items-center text-xs">
      {langs.map((l, i) => (
        <span key={l.code} className="flex items-center">
          {i > 0 && <span className="text-white/20">·</span>}
          <button
            onClick={() => setLang(l.code)}
            className={`px-2 py-1 transition ${lang === l.code ? 'text-[#C5A059]' : 'text-white/50 hover:text-white/80'}`}
          >
            {l.label}
          </button>
        </span>
      ))}
    </div>
  );
}