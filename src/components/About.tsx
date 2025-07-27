import React, { useEffect } from "react";
const About: React.FC = () => {
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
  return <section id="about" className="section bg-nordic-offwhite">
      <div className="container">
        <div className="fade-in-section text-center mb-12">
          <h2 className="mb-6">Nordic calm. Classic taste</h2>
          <p className="mb-4 max-w-3xl mx-auto">
            At Burgers by Westers, we believe that perfection doesn't require complexity. Our philosophy is rooted in the Nordic traditions of "lagom" – the calmness of perfect balance.
          </p>
          <p className="mb-8 max-w-3xl mx-auto">Our flavors are classic but our approach to crafting is Scandinavian : beautiful and functional with a respect for quality.</p>
        </div>
        
        <div className="fade-in-section mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-nordic-green/10 transform rotate-3 rounded-lg"></div>
              <img src="/lovable-uploads/NORDISKBURGARE.png" alt="Nordic landscape representing our philosophy" className="w-full h-96 md:h-[500px] object-cover rounded-lg shadow-md relative z-10" />
            </div>
          </div>
        </div>

        <div className="fade-in-section">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-nordic-wood/30 px-6 py-3 rounded-full">
                <span className="font-medium">Quality Ingredients</span>
              </div>
              <div className="bg-nordic-wood/30 px-6 py-3 rounded-full">
                <span className="font-medium">Sustainable Sourcing</span>
              </div>
              <div className="bg-nordic-wood/30 px-6 py-3 rounded-full">
                <span className="font-medium">Purposeful Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}

export default About;