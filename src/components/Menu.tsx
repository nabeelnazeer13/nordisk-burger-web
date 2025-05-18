
import React, { useEffect } from "react";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: string;
}

const menuItems: MenuItem[] = [
  {
    name: "Classic Westers",
    description: "Premium Swedish beef, homemade aioli, lettuce, tomato, pickled red onion on a freshly baked bun",
    price: "109 kr",
    category: "burgers"
  },
  {
    name: "Forest Mushroom",
    description: "Premium beef, wild mushrooms, caramelized onions, truffle mayo, aged cheese, and arugula",
    price: "129 kr",
    category: "burgers"
  },
  {
    name: "Nordic Blue",
    description: "Premium beef, mild blue cheese, caramelized pears, bacon, and balsamic glaze",
    price: "139 kr",
    category: "burgers"
  },
  {
    name: "Hand-Cut Potato Fries",
    description: "Swedish potatoes with sea salt and herbs",
    price: "45 kr",
    category: "sides"
  },
  {
    name: "Root Vegetables",
    description: "Seasonal Nordic root vegetables with dill and juniper",
    price: "49 kr",
    category: "sides"
  },
  {
    name: "Lingonberry Soda",
    description: "Housemade with wild lingonberries and minimal sugar",
    price: "39 kr",
    category: "drinks"
  },
];

const Menu: React.FC = () => {
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

  const categorizedItems = {
    burgers: menuItems.filter(item => item.category === "burgers"),
    sides: menuItems.filter(item => item.category === "sides"),
    drinks: menuItems.filter(item => item.category === "drinks"),
  };

  return (
    <section id="menu" className="section bg-nordic-wood/10">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12 fade-in-section">
          <h2 className="mb-4">Our Menu</h2>
          <p>Each item is crafted with purpose, using locally sourced ingredients. Nothing unnecessary, everything essential.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-4xl mx-auto">
          <div className="fade-in-section">
            <h3 className="text-xl font-medium mb-6 pb-2 border-b border-nordic-green/20">Burgers</h3>
            <div className="space-y-8">
              {categorizedItems.burgers.map((item, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-serif font-medium text-lg group-hover:text-nordic-green transition-colors duration-200">{item.name}</h4>
                    <span className="font-medium text-nordic-green">{item.price}</span>
                  </div>
                  <p className="text-sm text-nordic-charcoal/75">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="fade-in-section mb-12">
              <h3 className="text-xl font-medium mb-6 pb-2 border-b border-nordic-green/20">Sides</h3>
              <div className="space-y-8">
                {categorizedItems.sides.map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="font-serif font-medium text-lg group-hover:text-nordic-green transition-colors duration-200">{item.name}</h4>
                      <span className="font-medium text-nordic-green">{item.price}</span>
                    </div>
                    <p className="text-sm text-nordic-charcoal/75">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="fade-in-section">
              <h3 className="text-xl font-medium mb-6 pb-2 border-b border-nordic-green/20">Drinks</h3>
              <div className="space-y-8">
                {categorizedItems.drinks.map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="font-serif font-medium text-lg group-hover:text-nordic-green transition-colors duration-200">{item.name}</h4>
                      <span className="font-medium text-nordic-green">{item.price}</span>
                    </div>
                    <p className="text-sm text-nordic-charcoal/75">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 fade-in-section">
          <a href="#" className="btn btn-primary rounded-full">Full Menu & Allergens</a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
