import React, { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import enTranslations from "../locales/en.json";
import svTranslations from "../locales/sv.json";

const Menu: React.FC = () => {
  const { language } = useLanguage();
  const t = language === 'en' ? enTranslations : svTranslations;

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const fadeObserver = new IntersectionObserver((entries) => {
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

  return (
    <section id="menu" className="section relative">
      <div className="absolute inset-0 pattern-burgers opacity-[0.06] pointer-events-none" />
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-12 fade-in-section">
          <h2 className="mb-2">{t.menu.title}</h2>
          <p className="text-lg text-nordic-charcoal/80">{language === 'en' ? 'A fearless, bold and playful lineup bursting with global flavors.' : 'En orädd, djärv och lekfull meny som exploderar av globala smaker.'}</p>
        </div>

        {/* Placeholder burger grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto fade-in-section">
          {[
            { name: 'Smoke Stack', img: '/placeholder.svg' },
            { name: 'Fire Jam', img: '/placeholder.svg' },
            { name: 'Blue Moon', img: '/placeholder.svg' },
            { name: 'Triple Threat', img: '/placeholder.svg' },
            { name: 'Nordic Classic', img: '/placeholder.svg' },
            { name: 'Global Crunch', img: '/placeholder.svg' },
            { name: 'Miso Thunder', img: '/placeholder.svg' },
            { name: 'Garlic Pop', img: '/placeholder.svg' },
            { name: 'Pepper Drop', img: '/placeholder.svg' },
            { name: 'Neon Heat', img: '/placeholder.svg' },
            { name: 'Sweet Clash', img: '/placeholder.svg' },
          ].map((item, i) => {
            const descEn = 'Placeholder description — you can update this later.';
            const descSv = 'Platshållartext — du kan uppdatera detta senare.';
            return (
              <figure key={i} className="group relative overflow-hidden rounded-2xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.img} alt={`${item.name} placeholder burger`} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-nordic-charcoal/70 to-transparent p-4 text-nordic-offwhite">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-xs opacity-90">{language === 'en' ? descEn : descSv}</p>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div className="text-center mt-16 fade-in-section">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/full-menu.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary rounded-full">{t.menu.fullMenu}</a>
            <a href="https://qopla.com/restaurant/burgers-by-westers/q28p0EbrAW/order" target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-full">
              {t.menu.orderOnline}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;