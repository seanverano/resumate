//Home section footer

import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const viewAttribution = () => navigate("/attribution");
  return (
    <>
      <div className="bg-[#ECEEEE] py-4 flex flex-col items-center">
        <p className="font-noto text-[#323232] text-center mb-2">
          Developed by{" "}
          <span className="text-[#8424BC] font-bold text-jakarta">
            Sean Dustin Verano
          </span>{" "}
          © 2024 ALL RIGHTS RESERVED
        </p>
        <button
          onClick={viewAttribution}
          className="text-lg font-jakarta font-bold text-[#FFFFFF] bg-[#8424BC] rounded-lg px-4 py-2 hover:bg-transparent hover:text-[#8424BC] transition duration-300 w-auto"
        >
          ATTRIBUTION{" "}
          <svg
            className="w-5 inline-block"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 17l10-10m-10 0h10v10"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default Footer;
