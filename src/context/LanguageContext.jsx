import React, { createContext, useState, useContext, useEffect } from 'react';

// كنصاوبو الـ Context
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // اللغة الافتراضية هي الإنجليزية
  const [language, setLanguage] = useState('EN');
  
  // باش نبدلو اتجاه السيت للعربية (RTL)
  useEffect(() => {
    if (language === 'AR') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom Hook باش نعيطو للغة بسهولة ف أي بلاصة
export const useLanguage = () => useContext(LanguageContext);