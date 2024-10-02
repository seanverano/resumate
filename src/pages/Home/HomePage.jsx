import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Hero from "../../components/Hero";

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
      <section id="feature-section">sdsd</section>
      <section id="template-section">sds</section>
    </>
  );
}

export default HomePage;
