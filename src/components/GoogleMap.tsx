import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import enTranslations from "../locales/en.json";
import svTranslations from "../locales/sv.json";

const GoogleMap: React.FC = () => {
  const { language } = useLanguage();
  const t = language === 'en' ? enTranslations : svTranslations;
  const address = "Gjörwellsgatan 28, 112 60 Stockholm";
  const encodedAddress = encodeURIComponent(address);
  
  // Static map image URL using a placeholder service
  const staticMapUrl = `https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop&crop=center`;
  
  return (
    <section id="map" className="section bg-nordic-wood/10">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 fade-in-section">
           <h2 className="mb-4">{t.map.title}</h2>
           <p className="text-nordic-charcoal/75 mb-2">{t.map.description}</p>
           <p className="font-medium text-nordic-green">{t.map.address}</p>
          </div>
          
          <div className="fade-in-section">
            <div className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden shadow-lg border border-nordic-wood/30 group cursor-pointer">
              {/* Static Map Image with Click to Open */}
              <a 
                href="https://share.google/uWtDqkgFTN46KdOXV"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full relative"
                aria-label={t.map.openInMaps}
              >
                <img
                  src={staticMapUrl}
                  alt={`Map showing location of ${t.map.address}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Overlay with location info */}
                <div className="absolute inset-0 bg-gradient-to-t from-nordic-charcoal/70 via-transparent to-transparent">
                  <div className="absolute bottom-6 left-6 right-6 text-nordic-offwhite">
                    <div className="bg-nordic-offwhite/95 backdrop-blur-sm text-nordic-charcoal px-4 py-3 rounded-lg shadow-lg">
                      <h3 className="font-medium text-lg mb-1">Burgers by Westers</h3>
                      <p className="text-sm opacity-75">{t.map.address}</p>
                    </div>
                  </div>
                </div>
                
                {/* Click indicator */}
                <div className="absolute top-4 right-4 bg-nordic-offwhite/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs font-medium text-nordic-charcoal">{t.map.clickToOpen}</p>
                </div>
                
                {/* Location pin icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 bg-nordic-terracotta rounded-full shadow-lg flex items-center justify-center animate-bounce">
                    <svg 
                      className="w-5 h-5 text-nordic-offwhite" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://share.google/uWtDqkgFTN46KdOXV"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary rounded-full shadow-lg"
              >
                {t.map.openInMaps}
              </a>
              <a 
                href="https://qopla.com/restaurant/burgers-by-westers/q28p0EbrAW/order"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-nordic-terracotta text-nordic-offwhite hover:bg-nordic-terracotta/90 rounded-full shadow-lg"
              >
                {t.map.orderOnline}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;