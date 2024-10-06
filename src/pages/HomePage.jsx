//homepage/landing page/about page

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/home_sections/Hero";
import Features from "../components/home_sections/Features";
import Templates from "../components/home_sections/Templates";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="flex flex-col bg-[#FFFFFF]">
          <Header />
          <div>
            <section id="home-section">
              <Hero />
            </section>
          </div>
          <section id="feature-section">
            <Features />
          </section>
          <section id="template-section">
            <Templates />
          </section>
          <div>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;
