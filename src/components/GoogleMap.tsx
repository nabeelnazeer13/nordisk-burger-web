import React from "react";

const GoogleMap: React.FC = () => {
  const address = "Gjörwellsgatan 28, 112 60 Stockholm";
  const encodedAddress = encodeURIComponent(address);
  
  return (
    <section id="map" className="section bg-nordic-wood/10">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 fade-in-section">
            <h2 className="mb-4">Find Us</h2>
            <p className="text-nordic-charcoal/75 mb-2">Visit us at our Stockholm location</p>
            <p className="font-medium text-nordic-green">{address}</p>
          </div>
          
          <div className="fade-in-section">
            <div className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden shadow-lg border border-nordic-wood/30">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dO_BcqCGAOtmF8&q=${encodedAddress}&zoom=15&maptype=roadmap`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Burgers by Westers Location"
                className="w-full h-full"
              />
              
              {/* Fallback for when Google Maps doesn't load */}
              <div className="absolute inset-0 bg-nordic-blue/10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-nordic-offwhite/95 backdrop-blur-sm px-6 py-4 rounded-lg shadow-md text-center">
                  <p className="font-medium text-nordic-charcoal mb-2">Interactive Map</p>
                  <p className="text-sm text-nordic-charcoal/75">Click to explore our location</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary rounded-full shadow-lg"
              >
                Open in Google Maps
              </a>
              <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-nordic-blue text-nordic-charcoal hover:bg-nordic-blue/90 rounded-full shadow-lg"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;