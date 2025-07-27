import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "sv" : "en");
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center justify-center text-xs sm:text-sm md:text-xs lg:text-sm font-medium transition-colors text-nordic-charcoal whitespace-nowrap px-1 sm:px-2"
      aria-label={`Switch to ${language === "en" ? "Swedish" : "English"}`}
    >
      <span className={`${language === "en" ? "opacity-100 font-medium" : "opacity-60"} mr-1 sm:mr-1.5`}>EN</span>
      <span className="mx-0.5">/</span>
      <span className={`${language === "sv" ? "opacity-100 font-medium" : "opacity-60"} ml-1 sm:ml-1.5`}>SV</span>
    </button>
  );
};

export default LanguageToggle;