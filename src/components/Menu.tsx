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

  const burgers = [
    { slug: 'westers-classic', name: { en: 'Westers Classic', sv: 'Westers Classic' }, desc: { en: 'Cheddar, Westers dressing, caramelized onion', sv: 'Cheddar, Westers dressing, karamelliserad lök' }, img: '/lovable-uploads/f7cac5e1-fc74-43b4-b099-862183b06a57.png' },
    { slug: 'fire-jam', name: { en: 'Fire Jam', sv: 'Fire Jam' }, desc: { en: 'Cheddar, fresh jalapeño, pickled jalapeño, caramelized onion, black pepper mayo', sv: 'Cheddar, färsk jalapeño, picklad jalapeño, karamelliserad lök, svartpepparmajonnäs' }, img: '/lovable-uploads/9f6a744b-5f90-4bf0-8b6c-3cf7b6392bb4.png' },
    { slug: 'smoke-stack', name: { en: 'Smoke Stack', sv: 'Smoke Stack' }, desc: { en: 'Bacon jam, cheddar, chipotle mayo, crispy onions', sv: 'Baconmarmelad, cheddar, chipotlemajo, krispig lök' }, img: '/lovable-uploads/1618f9a8-2f0c-4ef8-b9c2-11b96b7c2817.png' },
    { slug: 'triple-threat', name: { en: 'Triple Threat', sv: 'Triple Threat' }, desc: { en: 'Cheddar, house cheese sauce, pepper jack, pickled red onion', sv: 'Cheddar, husets ostsås, pepper jack, picklad rödlök' }, img: '/lovable-uploads/cab85e29-a842-48ab-be97-63a031cb0b34.png' },
    { slug: 'blue-moon', name: { en: 'Blue Moon', sv: 'Blue Moon' }, desc: { en: 'Blue cheese, caramelized onion, buffalo sauce', sv: 'Blåmögelost, karamelliserad lök, buffalo-sås' }, img: '/lovable-uploads/9f6a744b-5f90-4bf0-8b6c-3cf7b6392bb4.png' },
    { slug: 'guldgruvan', name: { en: 'Guldgruvan', sv: 'Guldgruvan' }, desc: { en: 'Truffle mayo, caramelized onion, cheddar', sv: 'Tryffelmajo, karamelliserad lök, cheddar' }, img: '/lovable-uploads/cab85e29-a842-48ab-be97-63a031cb0b34.png' },
    { slug: 'bbq-jack', name: { en: 'BBQ Jack (Vegan)', sv: 'BBQ Jack (Vegan)' }, desc: { en: 'Pulled jackfruit, BBQ sauce, pickled red onion, vegan cheddar', sv: 'Pulled jackfruit, BBQ-sås, picklad rödlök, vegansk cheddar' }, img: '/lovable-uploads/5f5f911c-58fc-4933-862f-ff17e08de5d7.png' },
  ];

  const fries = [
    { slug: 'baked-potato', name: { en: '"Baked Potato"', sv: '"Baked Potato"' }, desc: { en: 'Bacon, scallions, sour cream, aged cheddar', sv: 'Bacon, salladslök, gräddfil, lagrad cheddar' }, img: '/lovable-uploads/a7617517-336a-4b5f-9665-e3b9deb61c3c.png' },
    { slug: 'cheese-lovers', name: { en: 'Cheese Lovers', sv: 'Cheese Lovers' }, desc: { en: 'House cheese sauce, pickled red onion, pickled jalapeño', sv: 'Husets ostsås, picklad rödlök, picklad jalapeño' }, img: '/lovable-uploads/fb803e9a-3d37-4109-bdb0-1dfce2fc2c25.png' },
    { slug: 'chili-cheese-fries', name: { en: 'Chili Cheese Fries', sv: 'Chili Cheese Fries' }, desc: { en: 'Brisket chili, melted cheese, chopped red onion, sour cream', sv: 'Brisketchili, smält ost, hackad rödlök, gräddfil' }, img: '/lovable-uploads/ade226b3-d99a-4d4a-ab9c-b94fdd5549fb.png' },
    { slug: 'truffle-parmesan', name: { en: 'Truffle Parmesan', sv: 'Tryffel Parmesan' }, desc: { en: 'Truffle mayo, grated Grana Padano, pickled red onion', sv: 'Tryffelmajo, riven Grana Padano, picklad rödlök' }, img: '/lovable-uploads/83481cbf-5882-44c6-b634-eff77edc9fe6.png' },
  ];

  const dips = [
    { en: 'Garlic', sv: 'Vitlök' },
    { en: 'Westers Dressing', sv: 'Westers dressing' },
    { en: 'BBQ', sv: 'BBQ' },
    { en: 'Chipotle Mayo', sv: 'Chipotlemajo' },
    { en: 'House Cheese Sauce', sv: 'Husets ostsås' },
    { en: 'Black Pepper Mayo', sv: 'Svartpepparmajo' },
    { en: 'Truffle Mayo', sv: 'Tryffelmajo' },
    { en: 'Buffalo Sauce (Spicy)', sv: 'Buffalo-sås (stark)' },
  ];

  return (
    <section id="menu" className="section relative">
      <div className="absolute inset-0 pattern-burgers opacity-[0.06] pointer-events-none" />
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-12 fade-in-section">
          <h2 className="mb-2">{t.menu.title}</h2>
          <p className="text-lg text-nordic-charcoal/80">{language === 'en' ? 'All burgers are served on potato bread with crispy lettuce, ketchup, mustard, and our own pickles.' : 'Alla burgare serveras på potatisbröd med krispig sallad, ketchup, senap och våra egna pickles.'}</p>
        </div>

        {/* Burgers grid */}
        <div className="fade-in-section">
          <h3 className="mb-4 text-xl font-semibold">{language === 'en' ? 'Burgers' : 'Burgare'}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {burgers.map((item) => (
              <figure key={item.slug} className="group relative overflow-hidden rounded-2xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={`${item.name[language]} burger`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-nordic-charcoal/70 to-transparent p-4 text-nordic-offwhite">
                  <h3 className="text-lg font-bold">{item.name[language]}</h3>
                  <p className="text-xs opacity-90">{item.desc[language]}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Dirty Fries grid */}
        <div className="fade-in-section mt-12">
          <div className="flex items-baseline justify-between mb-4">
            <h3 className="text-xl font-semibold">{language === 'en' ? 'Dirty Fries' : 'Dirty fries'}</h3>
            <p className="text-sm text-nordic-charcoal/70">{language === 'en' ? '250g fries' : '250 g pommes'}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {fries.map((item) => (
              <figure key={item.slug} className="group relative overflow-hidden rounded-2xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={`${item.name[language]} dirty fries`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-nordic-charcoal/70 to-transparent p-4 text-nordic-offwhite">
                  <h3 className="text-lg font-bold">{item.name[language]}</h3>
                  <p className="text-xs opacity-90">{item.desc[language]}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Dips & Sauces */}
        <div className="fade-in-section mt-12 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-3">{language === 'en' ? 'Dips & Sauces' : 'Dipper & såser'}</h3>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-nordic-charcoal/90">
            {dips.map((d, idx) => (
              <li key={idx} className="text-sm">{language === 'en' ? d.en : d.sv}</li>
            ))}
          </ul>
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