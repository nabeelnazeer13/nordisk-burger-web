import React, { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import enTranslations from "../locales/en.json";
import svTranslations from "../locales/sv.json";
const About: React.FC = () => {
  const {
    language
  } = useLanguage();
  const t = language === 'en' ? enTranslations : svTranslations;
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2
    };
    const fadeObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, observerOptions);
    const sections = document.querySelectorAll(".fade-in-section");
    sections.forEach(section => {
      fadeObserver.observe(section);
    });
    return () => {
      sections.forEach(section => {
        fadeObserver.unobserve(section);
      });
    };
  }, []);
  return <section id="about" className="section relative bg-white/80 backdrop-blur">
      <div className="absolute inset-0 pattern-burgers opacity-[0.05] pointer-events-none" />
      <div className="container relative">
        <div className="fade-in-section text-center mb-12">
          <h2 className="mb-2">{t.about.title}</h2>
          
          <p className="mb-4 max-w-3xl mx-auto">
            {t.about.description1}
          </p>
          <p className="mb-8 max-w-3xl mx-auto">{t.about.description2}</p>
        </div>
        
        <div className="fade-in-section mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-nordic-terracotta/20 transform rotate-3 rounded-lg"></div>
              <img src="/lovable-uploads/NORDISKBURGARE.png" alt="Nordic landscape representing our philosophy" className="w-full h-auto max-h-64 sm:max-h-80 md:h-[500px] object-contain rounded-lg shadow-md relative z-10" />
            </div>
          </div>
        </div>

        <div className="fade-in-section">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/70 px-6 py-3 rounded-full shadow-sm">
                <span className="font-medium">{t.about.qualityIngredients}</span>
              </div>
              <div className="bg-white/70 px-6 py-3 rounded-full shadow-sm">
                <span className="font-medium">{t.about.sustainableSourcing}</span>
              </div>
              <div className="bg-white/70 px-6 py-3 rounded-full shadow-sm">
                <span className="font-medium">{t.about.purposefulDesign}</span>
              </div>
            </div>
            <div className="mt-8">
              <a href="https://qopla.com/restaurant/burgers-by-westers/q28p0EbrAW/order" target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-full shadow-lg">
                {t.about.orderOnline}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;