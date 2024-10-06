//preloader

import React from "react";
import "../components/Preloader.css";
import Logo from "../assets/logo.png";

const Preloader = () => {
  return (
    <div className="preloader-container bg-[#E1C6ED]">
      <div className="w-4/5 flex flex-col items-center justify-center bg-[#ffffff] px-6 py-10 rounded-lg shadow-lg">
        <img src={Logo} alt="Logo" className="preloader-logo w-2/5" />
        <h1 className="title text-[#8424bc] font-jakarta mt-8">
          Time to build yours?
        </h1>
        <div className="marker-loader"></div>
      </div>
    </div>
  );
};

export default Preloader;
