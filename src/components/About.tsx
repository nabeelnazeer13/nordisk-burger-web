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
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="fade-in-section">
            <div className="relative">
              <div className="absolute inset-0 bg-nordic-green/10 transform rotate-3 rounded-lg"></div>
              <img src="/lovable-uploads/NORDISKBURGARE.png" alt="Nordic landscape representing our philosophy" className="w-full h-96 md:h-[500px] object-cover rounded-lg shadow-md relative z-10" />
            </div>
          </div>

          <div className="fade-in-section">
            <h2 className="mb-6">The Essence of Nordic Simplicity</h2>
            <p className="mb-4">
              At Burgers by Westers, we believe that perfection doesn't require complexity. Our philosophy is rooted in the Nordic tradition of "lagom" – the art of perfect balance.
            </p>
            <p className="mb-6">Our flavors are classic but our approach to crafting these flavors embodies quintessential Scandinavian values: simplicity, functionality, and a profound respect for quality materials.</p>
            <div className="flex flex-wrap gap-4 mt-8">
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
            <img 
              src="/ChatGPT Image Jul 24, 2025 at 08_00_24 PM-3.jpg" 
              srcSet="/ChatGPT Image Jul 24, 2025 at 08_00_24 PM-3.jpg 768w, /ChatGPT Image Jul 24, 2025 at 08_00_24 PM.jpg 1024w"
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="Nordic landscape representing our philosophy" 
              className="w-full h-auto object-cover rounded-lg shadow-md relative z-10" 
            />
          </div>
        </div>
      </div>
    </section>;
}

export default About;