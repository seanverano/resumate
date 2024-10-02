import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import HeroImage from "../assets/hero-img.jpg";

const Hero = () => {
  const navigate = useNavigate();

  const buildResume = () => navigate("/build-resume");
  return (
    <section className="flex items-center justify-between h-screen max-w-screen-lg mx-auto p-8">
      <div className="flex-1">
        <h1 className="text-center font-jakarta text-6xl font-bold mb-4">
          <span className="text-[#323232]">Résu</span>
          <span className="text-[#7175FE]">mate</span>
        </h1>
        <h2 className="text-center mx-2 font-noto italic text-[#323232] mb-4">
          "Success is where preparation meets opportunity"
        </h2>
        <h2 className="text-center font-noto italic text-[#323232] mb-4">
          — Zig Ziglar
        </h2>
        <p className="text-center font-noto font-bold text-[#323232] mb-4">
          Optimized for desktop, laptop, and tablet use
        </p>
        <div className="flex justify-center">
          <button
            onClick={buildResume}
            className="text-sm font-jakarta font-bold text-[#FFFFFF] bg-[#7175FE] rounded-lg px-4 py-2 hover:bg-transparent hover:text-[#7175FE] transition duration-300"
          >
            Get Started
          </button>
          <HashLink
            to="#feature-section"
            className="text-sm font-jakarta font-bold
            text-[#323232] bg-[#ECEEEE] rounded-lg px-4 py-2
            hover:bg-transparent hover:text-[#7175FE] transition duration-300
            ml-2"
          >
            Learn More
          </HashLink>
        </div>
      </div>

      <div className="flex-1">
        <img src={HeroImage} alt="Hero Decoration" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default Hero;
