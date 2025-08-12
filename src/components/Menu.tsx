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
          <p className="text-lg text-nordic-charcoal/80">{language === 'en' ? 'A playful selection of bold, modern burgers.' : 'En lekfull samling djärva, moderna burgare.'}</p>
        </div>

        {/* Placeholder burger grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto fade-in-section">
          {[
            { name: 'Smoke Stack', img: '/pexels-chevanon-1108117.jpg' },
            { name: 'Fire Jam', img: '/pexels-chevanon-1108117.jpg' },
            { name: 'Blue Moon', img: '/pexels-chevanon-1108117.jpg' },
            { name: 'Triple Threat', img: '/pexels-chevanon-1108117.jpg' },
            { name: 'Nordic Classic', img: '/pexels-chevanon-1108117.jpg' },
            { name: 'Global Crunch', img: '/pexels-chevanon-1108117.jpg' },
          ].map((item, i) => {
            const descEn = 'A bold, flavorful burger layered with melty cheese and house sauce.';
            const descSv = 'En djärv, smakrik burgare med smält ost och husets sås.';
            return (
              <article key={i} className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.img} alt={`${item.name} placeholder burger`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                  <p className="text-sm text-nordic-charcoal/75">{language === 'en' ? descEn : descSv}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-16 fade-in-section">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="btn btn-secondary rounded-full">{t.menu.fullMenu}</a>
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