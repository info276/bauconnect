import React, { createContext, useState, useContext } from 'react';
import { sk } from '../locales/sk';
import { de } from '../locales/de';
import { en } from '../locales/en';

const LanguageContext = createContext();

const translations = {
  sk,
  de,
  en
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('sk');

  const t = translations[language];

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
