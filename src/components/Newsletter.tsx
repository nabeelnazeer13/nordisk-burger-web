
import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import enTranslations from "../locales/en.json";
import svTranslations from "../locales/sv.json";
import { toast } from "sonner";

const Newsletter: React.FC = () => {
  const { language } = useLanguage();
  const t = language === 'en' ? enTranslations : svTranslations;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success(t.newsletter.successTitle, {
        description: t.newsletter.successDescription
      });
      setName("");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="section bg-nordic-green text-nordic-offwhite">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-4">{t.newsletter.title}</h2>
          <p className="text-nordic-offwhite/80 mb-8">
            {t.newsletter.description}
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-0 sm:flex sm:gap-3 max-w-md mx-auto">
            <div className="flex-1">
              <input
                type="text"
                placeholder={t.newsletter.firstNamePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-md bg-white/10 focus:bg-white/20 border-0 text-nordic-offwhite placeholder:text-nordic-offwhite/60 focus:ring-2 focus:ring-nordic-offwhite transition-colors"
              />
            </div>
            <div className="flex-1">
              <input
                type="email"
                placeholder={t.newsletter.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-md bg-white/10 focus:bg-white/20 border-0 text-nordic-offwhite placeholder:text-nordic-offwhite/60 focus:ring-2 focus:ring-nordic-offwhite transition-colors"
              />
            </div>
            <div>
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full sm:w-auto px-6 py-3 rounded-md bg-nordic-terracotta text-nordic-offwhite font-medium hover:bg-nordic-terracotta/90 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? t.newsletter.signingUp : t.newsletter.signUp}
              </button>
            </div>
          </form>
          
          <p className="text-xs text-nordic-offwhite/60 mt-4">
            {t.newsletter.privacyText}
          </p>
          
          <div className="mt-8">
            <a href="https://qopla.com/restaurant/burgers-by-westers/q28p0EbrAW/order" target="_blank" rel="noopener noreferrer" className="btn bg-nordic-terracotta text-nordic-offwhite hover:bg-nordic-terracotta/90 rounded-full shadow-lg">
              {t.newsletter.orderOnline}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
