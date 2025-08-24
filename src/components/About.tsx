import React, { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import enTranslations from "../locales/en.json";
import svTranslations from "../locales/sv.json";
const About: React.FC = () => {
  const {
    language
  } = useLanguage();
  const t = language === 'en' ? enTranslations : svTranslations;
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
  return (
    <section id="about" className="section relative bg-white/80 backdrop-blur">
      <div className="absolute inset-0 pattern-burgers opacity-[0.05] pointer-events-none" />
      <div className="container relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 fade-in-section">
          {/* Founders photo */}
          <figure className="relative overflow-hidden rounded-3xl shadow-md">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src="/lovable-uploads/f24d6d7c-155f-457b-9e79-2a2727cbdae9.png"
                alt={
                  language === 'en'
                    ? 'Two brothers behind Burgers by Westers in the kitchen'
                    : 'Två bröder bakom Burgers by Westers i köket'
                }
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <figcaption className="sr-only">{language === 'en' ? 'Founders' : 'Grundare'}</figcaption>
          </figure>

          {/* Story */}
          <article className="space-y-5">
            <h2 className="mb-2">
              {language === 'en'
                ? 'Bold burgers. Global soul.'
                : 'Djärva burgare. Global själ.'}
            </h2>

            <p className="text-lg text-nordic-charcoal/80">
              {language === 'en'
                ? 'Simon and Kristian built Burgers by Westers with a simple promise: be bold and explore flavors from around the world. With mixed heritage and years of traveling kitchens and street markets, they fuse techniques and traditions into honest, craveable burgers.'
                : 'Simon och Kristian startade Burgers by Westers med ett enkelt löfte: vara djärva och utforska smaker från hela världen. Med blandad bakgrund och år av resor genom kök och street markets förenar de tekniker och traditioner till ärliga, oemotståndliga burgare.'}
            </p>

            <p className="text-nordic-charcoal/80">
              {language === 'en'
                ? 'Our craft is Scandinavian at heart—clean design, quality ingredients, and precision—while our flavor map spans the globe.'
                : 'Vårt hantverk är skandinaviskt i grunden—ren design, kvalitetsråvaror och precision—samtidigt som vår smakkompass sträcker sig över hela världen.'}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="bg-white/70 px-4 py-2 rounded-full shadow-sm font-medium">{language === 'en' ? 'Bold flavor explorers' : 'Djärva smakutforskare'}</span>
              <span className="bg-white/70 px-4 py-2 rounded-full shadow-sm font-medium">{language === 'en' ? 'Fusion roots' : 'Rötter i fusion'}</span>
              <span className="bg-white/70 px-4 py-2 rounded-full shadow-sm font-medium">{language === 'en' ? 'Globally inspired' : 'Globalt inspirerade'}</span>
            </div>

            <div className="pt-4">
              <a
                href="https://qopla.com/restaurant/burgers-by-westers/q28p0EbrAW/order"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary rounded-full shadow-lg"
              >
                {t.about.orderOnline}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
export default About;