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
    <section id="menu" className="section bg-nordic-wood/10">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12 fade-in-section">
          <h2 className="mb-4">{t.menu.title}</h2>
          <p className="text-lg">{t.menu.description}</p>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          {/* BURGERS SECTION */}
          <div className="fade-in-section">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-medium mb-3 text-nordic-green">{t.menu.burgers}</h3>
              <p className="text-sm text-nordic-charcoal/70 mb-6 max-w-3xl mx-auto">
                {t.menu.burgersSubtitle}
              </p>
              
              {/* Pricing Options */}
              <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
                <div className="bg-nordic-offwhite border border-nordic-wood/30 rounded-lg p-4">
                  <h4 className="font-medium text-nordic-charcoal">{t.menu.singlePatty}</h4>
                  <p className="text-xl font-bold text-nordic-green">155 kr</p>
                </div>
                <div className="bg-nordic-offwhite border border-nordic-wood/30 rounded-lg p-4">
                  <h4 className="font-medium text-nordic-charcoal">{t.menu.doublePatty}</h4>
                  <p className="text-xl font-bold text-nordic-green">179 kr</p>
                </div>
                <div className="bg-nordic-offwhite border border-nordic-wood/30 rounded-lg p-4">
                  <h4 className="font-medium text-nordic-charcoal">{t.menu.halloumiSubstitute}</h4>
                  <p className="text-xl font-bold text-nordic-green">145 kr</p>
                </div>
              </div>
            </div>

            <h4 className="text-xl font-medium mb-6 text-center text-nordic-charcoal">{t.menu.burgerSelection}</h4>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                t.menu.items.westersClassic,
                t.menu.items.fireJam,
                t.menu.items.smokeStack,
                t.menu.items.tripleThreat,
                t.menu.items.blueMoon,
                t.menu.items.guldgruvan,
                t.menu.items.bbqJack
              ].map((item, index) => (
                <div key={index} className="group bg-nordic-offwhite/50 rounded-lg p-4 hover:bg-nordic-offwhite transition-colors">
                  <h5 className="font-serif font-medium text-lg group-hover:text-nordic-green transition-colors duration-200 mb-2">
                    {item.name}
                  </h5>
                  <p className="text-sm text-nordic-charcoal/75">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* UPGRADE YOUR FRIES SECTION */}
          <div className="fade-in-section">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-medium mb-3 text-nordic-green">{t.menu.upgradeFries}</h3>
              <p className="text-sm text-nordic-charcoal/70 mb-6">
                {t.menu.upgradeFriesSubtitle}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group bg-nordic-offwhite/50 rounded-lg p-4 hover:bg-nordic-offwhite transition-colors">
                <div className="flex justify-between items-baseline mb-2">
                  <h5 className="font-serif font-medium text-lg group-hover:text-nordic-green transition-colors duration-200">
                    {t.menu.items.bakedPotato.name}
                  </h5>
                  <span className="font-medium text-nordic-green">+40 kr</span>
                </div>
                <p className="text-sm text-nordic-charcoal/75">{t.menu.items.bakedPotato.description}</p>
              </div>
              
              <div className="group bg-nordic-offwhite/50 rounded-lg p-4 hover:bg-nordic-offwhite transition-colors">
                <div className="flex justify-between items-baseline mb-2">
                  <h5 className="font-serif font-medium text-lg group-hover:text-nordic-green transition-colors duration-200">
                    {t.menu.items.cheeseLovers.name}
                  </h5>
                  <span className="font-medium text-nordic-green">+35 kr</span>
                </div>
                <p className="text-sm text-nordic-charcoal/75">{t.menu.items.cheeseLovers.description}</p>
              </div>
              
              <div className="group bg-nordic-offwhite/50 rounded-lg p-4 hover:bg-nordic-offwhite transition-colors">
                <div className="flex justify-between items-baseline mb-2">
                  <h5 className="font-serif font-medium text-lg group-hover:text-nordic-green transition-colors duration-200">
                    {t.menu.items.chiliCheeseFries.name}
                  </h5>
                  <span className="font-medium text-nordic-green">+45 kr</span>
                </div>
                <p className="text-sm text-nordic-charcoal/75">{t.menu.items.chiliCheeseFries.description}</p>
              </div>
              
              <div className="group bg-nordic-offwhite/50 rounded-lg p-4 hover:bg-nordic-offwhite transition-colors">
                <div className="flex justify-between items-baseline mb-2">
                  <h5 className="font-serif font-medium text-lg group-hover:text-nordic-green transition-colors duration-200">
                    {t.menu.items.truffleParmesan.name}
                  </h5>
                  <span className="font-medium text-nordic-green">+45 kr</span>
                </div>
                <p className="text-sm text-nordic-charcoal/75">{t.menu.items.truffleParmesan.description}</p>
              </div>
            </div>
          </div>

          {/* DIRTY FRIES SECTION */}
          <div className="fade-in-section">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-medium mb-6 text-nordic-green">{t.menu.dirtyFries}</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group bg-nordic-offwhite/50 rounded-lg p-4 hover:bg-nordic-offwhite transition-colors">
                <div className="flex justify-between items-baseline mb-2">
                  <h5 className="font-serif font-medium text-lg group-hover:text-nordic-green transition-colors duration-200">
                    {t.menu.items.bakedPotato.name}
                  </h5>
                  <span className="font-medium text-nordic-green">95 kr</span>
                </div>
                <p className="text-sm text-nordic-charcoal/75">{t.menu.items.bakedPotato.description}</p>
              </div>
              
              <div className="group bg-nordic-offwhite/50 rounded-lg p-4 hover:bg-nordic-offwhite transition-colors">
                <div className="flex justify-between items-baseline mb-2">
                  <h5 className="font-serif font-medium text-lg group-hover:text-nordic-green transition-colors duration-200">
                    {t.menu.items.cheeseLovers.name}
                  </h5>
                  <span className="font-medium text-nordic-green">90 kr</span>
                </div>
                <p className="text-sm text-nordic-charcoal/75">{t.menu.items.cheeseLovers.description}</p>
              </div>
              
              <div className="group bg-nordic-offwhite/50 rounded-lg p-4 hover:bg-nordic-offwhite transition-colors">
                <div className="flex justify-between items-baseline mb-2">
                  <h5 className="font-serif font-medium text-lg group-hover:text-nordic-green transition-colors duration-200">
                    {t.menu.items.chiliCheeseFries.name}
                  </h5>
                  <span className="font-medium text-nordic-green">105 kr</span>
                </div>
                <p className="text-sm text-nordic-charcoal/75">{t.menu.items.chiliCheeseFries.description}</p>
              </div>
              
              <div className="group bg-nordic-offwhite/50 rounded-lg p-4 hover:bg-nordic-offwhite transition-colors">
                <div className="flex justify-between items-baseline mb-2">
                  <h5 className="font-serif font-medium text-lg group-hover:text-nordic-green transition-colors duration-200">
                    {t.menu.items.truffleParmesan.name}
                  </h5>
                  <span className="font-medium text-nordic-green">105 kr</span>
                </div>
                <p className="text-sm text-nordic-charcoal/75">{t.menu.items.truffleParmesan.description}</p>
              </div>
            </div>
          </div>

          {/* DIPS & SAUCES SECTION */}
          <div className="fade-in-section">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-medium mb-6 text-nordic-green">{t.menu.dipsAndSauces}</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { item: t.menu.items.garlic, price: "12 kr" },
                { item: t.menu.items.westersDressing, price: "12 kr" },
                { item: t.menu.items.bbq, price: "12 kr" },
                { item: t.menu.items.buffaloSauce, price: "12 kr" },
                { item: t.menu.items.chipotleMayo, price: "15 kr" },
                { item: t.menu.items.houseCheeseSauce, price: "15 kr" },
                { item: t.menu.items.blackPepperMayo, price: "15 kr" },
                { item: t.menu.items.truffleMayo, price: "15 kr" }
              ].map((sauce, index) => (
                <div key={index} className="group bg-nordic-offwhite/50 rounded-lg p-3 hover:bg-nordic-offwhite transition-colors text-center">
                  <h5 className="font-medium text-sm group-hover:text-nordic-green transition-colors duration-200 mb-1">
                    {sauce.item.name}
                  </h5>
                  <p className="text-sm font-medium text-nordic-green">{sauce.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16 fade-in-section">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="btn btn-primary rounded-full">{t.menu.fullMenu}</a>
            <a href="https://qopla.com/restaurant/burgers-by-westers/q28p0EbrAW/order" target="_blank" rel="noopener noreferrer" className="btn bg-nordic-terracotta text-nordic-offwhite hover:bg-nordic-terracotta/90 rounded-full">
              {t.menu.orderOnline}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;