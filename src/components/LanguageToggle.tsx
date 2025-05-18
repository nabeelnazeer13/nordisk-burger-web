
import React, { useState } from "react";

const LanguageToggle: React.FC = () => {
  const [language, setLanguage] = useState<"en" | "sv">("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "sv" : "en");
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center justify-center text-sm font-medium transition-colors"
      aria-label={`Switch to ${language === "en" ? "Swedish" : "English"}`}
    >
      <span className={`${language === "en" ? "opacity-100 font-medium" : "opacity-60"} mr-1.5`}>EN</span>
      <span className="mx-0.5">/</span>
      <span className={`${language === "sv" ? "opacity-100 font-medium" : "opacity-60"} ml-1.5`}>SV</span>
    </button>
  );
};

export default LanguageToggle;
