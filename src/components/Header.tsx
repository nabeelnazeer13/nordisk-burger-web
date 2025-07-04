import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-nordic-offwhite/95 backdrop-blur-md shadow-sm py-2 sm:py-3" : "bg-transparent py-3 sm:py-4 md:py-5"}`}>
      <div className="container flex items-center justify-between">
        <a href="#" className="z-50 flex items-center">
          <span className={`font-serif text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium tracking-tight transition-all duration-300 text-nordic-charcoal whitespace-nowrap ${isScrolled ? "" : "bg-nordic-offwhite/90 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg shadow-md"}`}>
            Burgers by Westers
          </span>
        </a>

        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <div className={`${!isScrolled ? "bg-nordic-offwhite/90 backdrop-blur-sm px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg shadow-md" : ""}`}>
            <LanguageToggle />
          </div>

          <button onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"} className={`z-50 p-1.5 sm:p-2 md:hidden transition-all duration-300 ${!isScrolled ? "bg-nordic-offwhite/90 backdrop-blur-sm rounded-lg shadow-md" : ""}`}>
            {isMenuOpen ? <X className="text-nordic-charcoal w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="text-nordic-charcoal w-5 h-5 sm:w-6 sm:h-6" />}
          </button>

          <nav className={`
            fixed inset-0 bg-nordic-offwhite/95 backdrop-blur-md flex flex-col items-center justify-center
            transition-opacity duration-300 md:relative md:inset-auto md:bg-transparent md:backdrop-blur-none md:flex-row md:opacity-100
            ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none md:pointer-events-auto"}
            ${!isScrolled ? "md:bg-nordic-offwhite/90 md:backdrop-blur-sm md:px-2 sm:md:px-3 lg:md:px-4 md:py-1.5 sm:md:py-2 md:rounded-lg md:shadow-md" : ""}
          `}>
            <ul className="flex flex-col md:flex-row items-center gap-4 sm:gap-5 md:gap-2 lg:gap-3 xl:gap-4 text-base sm:text-lg md:text-xs lg:text-sm xl:text-base">
              {["Home", "About", "Menu", "Visit"].map(item => <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className={`relative font-medium transition-colors duration-200 whitespace-nowrap
                    after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 
                    after:bg-nordic-green after:origin-bottom-right after:transition-transform after:duration-300 
                    hover:after:scale-x-100 hover:after:origin-bottom-left hover:text-nordic-green
                    text-nordic-charcoal px-0.5 sm:px-1 md:px-1 lg:px-1.5
                  `} onClick={() => setIsMenuOpen(false)}>
                    {item}
                  </a>
                </li>)}
              <li className="mt-4 sm:mt-6 md:mt-0 md:ml-1 lg:ml-2">
                <a href="#contact" className="btn btn-primary rounded-full shadow-lg text-xs sm:text-sm md:text-xs lg:text-sm xl:text-sm px-2 sm:px-3 md:px-2 lg:px-3 xl:px-4 py-1.5 sm:py-2 md:py-1.5 lg:py-2 whitespace-nowrap" onClick={() => setIsMenuOpen(false)}>
                  Order Now
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>;
};
export default Header;