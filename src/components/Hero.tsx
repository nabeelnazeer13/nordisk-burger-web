import React, { useEffect, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import enTranslations from "../locales/en.json";
import svTranslations from "../locales/sv.json";
const Hero: React.FC = () => {
  const {
    language
  } = useLanguage();
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
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <section id="home" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 brand-gradient">
      <div className="absolute inset-0 pattern-burgers opacity-[0.08]" />

      {/* Floating decorative vectors */}
      <div className="pointer-events-none absolute -top-10 -right-10 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 w-72 h-72 rounded-full bg-white/10 blur-2xl" />

      {/* Side-by-side layout to match reference */}
      <div className="container relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-14">
          {/* Burger image - scroll scales on scroll */}
          <div className="relative z-10">
            <img ref={burgerRef} src="/lovable-uploads/313109ff-1100-475b-bf95-4972ec557f0f.png" alt="Signature burger on wooden board" loading="eager" className="w-[520px] sm:w-[680px] md:w-[840px] drop-shadow-2xl will-change-transform" style={{
            transform: 'translateY(0px) scale(1)',
            transformOrigin: 'center center'
          }} />
          </div>

          {/* Headline and actions */}
          <div ref={heroRef} className="max-w-sm sm:max-w-lg md:max-w-xl text-center md:text-left">
            <h1 className="mb-6 block w-full bg-white/80 backdrop-blur-sm px-6 sm:px-8 py-4 rounded-2xl shadow-lg text-nordic-charcoal">
              {t.hero.title.split('\n').map((line, index) => <React.Fragment key={index}>
                  {line}
                  {index < t.hero.title.split('\n').length - 1 && <br />}
                </React.Fragment>)}
            </h1>
            <div className="flex items-center justify-center md:justify-start gap-4 max-w-xs sm:max-w-none mx-auto md:mx-0 rounded">
              <a href="#menu" className="btn btn-accent rounded-full shadow-lg hover-scale mx-[2px]">
                {t.hero.exploreMenu}
              </a>
              <a href="https://share.google/uWtDqkgFTN46KdOXV" target="_blank" rel="noopener noreferrer" className="btn bg-white/80 backdrop-blur-sm border border-nordic-charcoal/10 text-nordic-charcoal hover:bg-nordic-charcoal hover:text-nordic-offwhite rounded-full transition-all duration-300 shadow-lg px-6 py-3">
                {t.hero.findUs}
              </a>
              <a href="https://qopla.com/restaurant/burgers-by-westers/q28p0EbrAW/order" target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-full shadow-lg">
                {t.hero.orderOnline}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;