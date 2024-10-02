import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Hero from "../../components/Hero";

function HomePage() {
  const navigate = useNavigate();

  const buildResume = () => {
    navigate("/template");
  };

  return (
    <>
      <div className="flex flex-col bg-[#FFFFFF]">
        <Header />
        <div>
          <Hero />
          <button onClick={buildResume}>Getting Started</button>
        </div>
      </div>
      <section>sdsd</section>
      <section>sds</section>
    </>
  );
}

export default HomePage;
