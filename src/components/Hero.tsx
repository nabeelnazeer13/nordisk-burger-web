
import React, { useEffect, useRef } from "react";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const opacity = 1 - Math.min(1, scrollPosition / 700);
        const translateY = scrollPosition * 0.3;
        
        heroRef.current.style.opacity = String(opacity);
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-nordic-green/30 to-transparent z-10"
        style={{ mixBlendMode: 'multiply' }}
      />
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b')] bg-cover bg-center"
        style={{ transform: 'scale(1.1)' }}
      />
      <div className="container relative z-20" ref={heroRef}>
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-nordic-offwhite mb-6 drop-shadow-lg">
            Perfect Simplicity.<br />Honest Flavor.
          </h1>
          <p className="text-nordic-offwhite/90 font-light text-lg md:text-xl mb-8 drop-shadow-md">
            Nordic-inspired burgers crafted with precision,<br />
            quality ingredients, and nothing unnecessary.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#menu" className="btn btn-primary rounded-full">
              Explore Our Menu
            </a>
            <a href="#visit" className="btn border border-nordic-offwhite text-nordic-offwhite hover:bg-nordic-offwhite/10 rounded-full">
              Find Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
