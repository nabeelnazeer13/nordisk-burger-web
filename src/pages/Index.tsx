
import React, { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Menu from "../components/Menu";
import Newsletter from "../components/Newsletter";
import InstagramFeed from "../components/InstagramFeed";
import Footer from "../components/Footer";

const Index: React.FC = () => {
  useEffect(() => {
    // Update page title
    document.title = "Burgers by Westers | Nordic-inspired Burgers";
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <div className="relative">
          <div className="absolute inset-0 bg-nordic-blue/5 skew-y-3 transform -translate-y-1/2"></div>
          <Newsletter />
        </div>
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
