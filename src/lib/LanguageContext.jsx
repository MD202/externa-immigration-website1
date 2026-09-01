import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const STORAGE_KEY = 'externa-lang';
const tFallback = (path) => {
  const keys = path.split('.');
  let val = translations;
  for (const k of keys) val = val?.[k];
  return val?.en || path;
};
const LanguageContext = createContext({ lang: 'en', setLang: () => {}, t: tFallback });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem(STORAGE_KEY) || 'en'; } catch { return 'en'; }
  });
  useEffect(() => { try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* ignore */ } }, [lang]);
  const t = (path) => {
    const keys = path.split('.');
    let val = translations;
    for (const k of keys) val = val?.[k];
    return val?.[lang] || val?.en || path;
  };
  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);