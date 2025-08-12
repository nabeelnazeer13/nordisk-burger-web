import React, { useEffect, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import enTranslations from "../locales/en.json";
import svTranslations from "../locales/sv.json";

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = language === 'en' ? enTranslations : svTranslations;
  const heroRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (heroRef.current) {
            const scrollPosition = window.scrollY;
            const opacity = 1 - Math.min(1, scrollPosition / 500);
            const translateY = scrollPosition * 0.2;
            heroRef.current.style.opacity = String(opacity);
            heroRef.current.style.transform = `translateY(${translateY}px)`;
          }
          if (burgerRef.current) {
            const scrollPosition = window.scrollY;
            const progress = Math.min(1, scrollPosition / 800);
            const scale = 1 - progress * 0.35; // scales from 1 to ~0.65
            const burgerTranslate = progress * 40; // gentle slide down
            burgerRef.current.style.transform = `translateY(${burgerTranslate}px) scale(${scale})`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 brand-gradient">
      <div className="absolute inset-0 pattern-burgers opacity-[0.08]" />

      {/* Floating decorative vectors */}
      <div className="pointer-events-none absolute -top-10 -right-10 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 w-72 h-72 rounded-full bg-white/10 blur-2xl" />

      {/* Center burger that scales on scroll */}
      <div className="absolute top-24 sm:top-20 left-1/2 -translate-x-1/2 z-10">
        <img
          ref={burgerRef}
          src="/pexels-chevanon-1108117.jpg"
          alt="Signature burger"
          loading="eager"
          className="w-[420px] sm:w-[520px] md:w-[640px] drop-shadow-2xl will-change-transform"
          style={{ transform: 'translateY(0px) scale(1)', transformOrigin: 'center center' }}
        />
      </div>

      <div className="container relative z-20" ref={heroRef}>
        <div className="max-w-sm sm:max-w-lg md:max-w-2xl mx-auto text-center mt-[360px] sm:mt-[380px] md:mt-[460px]">
          <h1 className="mb-4 inline-block bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg text-nordic-charcoal">
            {t.hero.title.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < t.hero.title.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
          <p className="text-nordic-charcoal/80 mb-8">{language === 'en' ? 'Bold flavors. Simple pleasures.' : 'Djärva smaker. Enkel njutning.'}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xs sm:max-w-md mx-auto">
            <a href="#menu" className="btn btn-accent rounded-full shadow-lg hover-scale">
              {t.hero.exploreMenu}
            </a>
            <a href="https://share.google/uWtDqkgFTN46KdOXV" target="_blank" rel="noopener noreferrer" className="btn bg-white/80 backdrop-blur-sm border border-nordic-charcoal/10 text-nordic-charcoal hover:bg-nordic-charcoal hover:text-nordic-offwhite rounded-full transition-all duration-300 shadow-lg">
              {t.hero.findUs}
            </a>
            <a href="https://qopla.com/restaurant/burgers-by-westers/q28p0EbrAW/order" target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-full shadow-lg">
              {t.hero.orderOnline}
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;