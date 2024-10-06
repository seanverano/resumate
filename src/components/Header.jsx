//Home section header (navbar)

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const buildResume = () => navigate("/build-resume");

  return (
    <header className="fixed top-4 z-50 w-full">
      <nav className="bg-[#ECEEEE] bg-opacity-50 backdrop-filter backdrop-blur-lg saturate-180 rounded-full shadow-lg mx-auto w-[90%]">
        {" "}
        <div className="flex items-center justify-between px-6 py-2">
          <div className="flex items-center">
            <Link to="/">
              <img src={Logo} alt="Resumate Logo" className="w-20 h-auto" />
            </Link>
          </div>

          <ul className="flex flex-row items-center list-none ml-auto">
            <li className="mx-2">
              <HashLink
                to="#home-section"
                className="text-sm font-jakarta text-[#323232] cursor-pointer"
              >
                Home
              </HashLink>
            </li>
            <li className="mx-2">
              <HashLink
                to="#feature-section"
                className="text-sm font-jakarta text-[#323232] cursor-pointer"
              >
                Features
              </HashLink>
            </li>
            <li className="mx-2">
              <HashLink
                to="#template-section"
                className="text-sm font-jakarta text-[#323232] cursor-pointer"
              >
                Templates
              </HashLink>
            </li>
            <li className="mx-2">
              <button
                onClick={buildResume}
                className="text-sm font-jakarta font-bold text-[#FFFFFF] bg-[#8424BC] rounded-lg px-4 py-2 hover:bg-transparent hover:text-[#8424BC] transition duration-300"
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
