//homepage/landing page/about page

import React from "react";
import Header from "../components/Header";
import Hero from "../components/home_sections/Hero";
import Features from "../components/home_sections/Features";
import Templates from "../components/home_sections/Templates";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <div className="flex flex-col bg-[#FFFFFF]">
        <Header className="animate__animated animate__fadeIn animate__duration-4000 animate__delay-6s" />
        <div>
          <section id="home-section">
            <Hero />
          </section>
        </div>
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
    </>
  );
}

export default HomePage;
