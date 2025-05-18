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
          <h1 className="mb-6 drop-shadow-lg text-slate-950">
            Perfect Simplicity.<br />Honest Flavor.
          </h1>
          <p className="font-light text-lg md:text-xl mb-8 drop-shadow-md text-slate-50">
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
    </section>;
};
export default Hero;