import React, { useEffect, useRef } from "react";
const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const opacity = 1 - Math.min(1, scrollPosition / 500); // Adjusted for shorter section
        const translateY = scrollPosition * 0.3;
        heroRef.current.style.opacity = String(opacity);
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <section id="home" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-nordic-green/30 to-transparent z-10" style={{
      mixBlendMode: 'multiply'
    }} />
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: "url('/lovable-uploads/40c6b861-6878-483d-93a7-9def60bb805d.png')",
      transform: 'scale(1.1)'
    }} />
      <div className="container relative z-20" ref={heroRef}>
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="mb-6 inline-block bg-nordic-offwhite/90 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg text-nordic-charcoal">
            Perfect Simplicity.<br />Honest Flavor.
          </h1>
          <p className="font-light text-lg md:text-xl mb-8 inline-block bg-nordic-offwhite/85 backdrop-blur-sm px-5 py-2 rounded-lg shadow-md text-nordic-charcoal/90">
            Nordic-inspired burgers crafted with precision,<br />
            quality ingredients, and nothing unnecessary.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#menu" className="btn btn-primary rounded-full shadow-lg">
              Explore Our Menu
            </a>
            <a href="#map" className="btn bg-nordic-offwhite/90 backdrop-blur-sm border border-nordic-charcoal/20 text-nordic-charcoal hover:bg-nordic-charcoal hover:text-nordic-offwhite rounded-full transition-all duration-300 shadow-lg">
              Find Us
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;