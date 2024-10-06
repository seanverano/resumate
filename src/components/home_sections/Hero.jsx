//hero section (under header/navbar) in the homepage

import React from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import HeroImage from "../../assets/hero-img.jpg";

const Hero = () => {
  const navigate = useNavigate();

  const buildResume = () => navigate("/build-resume");
  return (
    <section className="flex items-center justify-between h-screen max-w-screen-lg mx-auto p-8 mt-4">
      <div className="flex-1">
        <h1 className="text-center font-jakarta text-8xl font-bold mb-2">
          <span className="text-[#323232]">Résu</span>
          <span className="text-[#8424BC]">mate</span>
        </h1>
        <h2 className="text-center text-xl mx-2 font-noto text-[#323232] mb-4">
          Your journey to a standout resume starts here.
        </h2>
        <h2 className="text-center text-lg mx-2 font-noto italic text-[#8D9099] mb-4">
          "Success is where preparation meets opportunity"
        </h2>
        <h2 className="text-center text-lg font-noto italic text-[#8D9099] mb-4">
          — Zig Ziglar
        </h2>
        <div className="flex justify-center">
          <button
            onClick={buildResume}
            className="text-sm font-jakarta font-bold text-[#FFFFFF] bg-[#8424BC] rounded-lg px-4 py-2 hover:bg-transparent hover:text-[#8424BC] transition duration-300"
          >
            Get Started
          </button>
          <HashLink
            to="#feature-section"
            className="text-sm font-jakarta font-bold
            text-[#323232] bg-[#ECEEEE] rounded-lg px-4 py-2
            hover:bg-transparent hover:text-[#8424BC] transition duration-300
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
