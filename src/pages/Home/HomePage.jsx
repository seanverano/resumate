import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Features from "../../components/Features";

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
      <section id="template-section">sds</section>
    </>
  );
}

export default HomePage;
