//preloader

import React from "react";
import "../components/Preloader.css";
import Logo from "../assets/logo.png";

const Preloader = () => {
  return (
    <div className="preloader-container bg-[#E1C6ED]">
      <img src={Logo} alt="Logo" className="preloader-logo w-2/5" />
      <h1 className="title text-[#8424bc] font-jakarta mt-8">Loading...</h1>
      <div className="marker-loader"></div>
    </div>
  );
};

export default Preloader;
