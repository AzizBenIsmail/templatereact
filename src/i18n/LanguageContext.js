import { createContext, useContext, useEffect, useMemo, useCallback, useState } from 'react';
import { localeOptions, translations } from './translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('fr');

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  const t = useCallback(
    (key, fallback = '') => {
      const value = key.split('.').reduce((obj, part) => obj?.[part], translations[locale]);
      return value ?? (fallback || key);
    },
    [locale]
  );

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      isRTL: locale === 'ar',
      localeOptions,
    }),
    [locale, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useTranslation() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useTranslation must be used inside LanguageProvider');
  }

  return context;
}
