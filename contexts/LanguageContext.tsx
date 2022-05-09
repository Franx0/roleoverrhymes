// React
import React, { useState } from 'react';
// Languages
import en from '@/languages/en.js';
import es from '@/languages/es.js';

const defaultLanguage = 'en';
const translations: any = { en, es };
interface LanguageInterface {
  [key: string]: String;
};

interface LanguageProviderInterface {
  userLanguage: string,
  dictionary: LanguageInterface,
  userLanguageChange: (selected: string) => boolean
};

export const languageOptions: LanguageInterface = {
  en: 'English',
  es: 'Español'
};

export const LanguageContext = React.createContext({
  userLanguage: defaultLanguage,
  dictionary: translations.en,
  userLanguageChange: (selected: string) => { null }
});

const LanguageProvider = ({ children }: any) => {
  const [userLanguage, setUserLanguage] = useState(getInitialLang);
  const rawSetLanguage: LanguageProviderInterface = {
    userLanguage,
    dictionary: translations[userLanguage],
    userLanguageChange: (selected: string) => {
      const newLanguage: string = languageOptions[selected] ? selected : defaultLanguage
      setUserLanguage(newLanguage);
      window.localStorage.setItem('user-lang', newLanguage);
      return selected !== userLanguage
    }
  };

  return (
    <LanguageContext.Provider value={rawSetLanguage}>
      {children}
    </LanguageContext.Provider>
  );
};

const getInitialLang = (): string => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("user-lang")
    if (typeof storedPrefs === "string") return storedPrefs
  }

  return "en"
}

const useLanguage = () => React.useContext(LanguageContext);

export { LanguageProvider, useLanguage };
