import React from "react";
import Header from "../components/Header";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Templates from "../components/sections/Templates";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <div className="flex flex-col bg-[#FFFFFF]">
        <Header />
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
