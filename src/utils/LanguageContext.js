import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Initialize from localStorage, fallback to 'en' if nothing stored
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("preferredLanguage") || "en";
  });

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLang = prev === "en" ? "es" : "en";
      // Save to localStorage whenever language changes
      localStorage.setItem("preferredLanguage", newLang);
      return newLang;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};