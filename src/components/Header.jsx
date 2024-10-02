import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();

  const goHome = () => navigate("/");
  const viewFeatures = () => navigate("#feature-section");
  const viewTemplates = () => navigate("#template-section");
  const buildResume = () => navigate("/template");

  return (
    <header className="fixed top-4 z-50 w-full">
      <nav className="bg-[#ECEEEE] bg-opacity-20 backdrop-filter backdrop-blur-lg saturate-180 rounded-full shadow-lg mx-auto w-[90%]">
        {" "}
        <div className="flex items-center justify-between px-6 py-2">
          <div className="flex items-center">
            <Link to="/">
              <img src={Logo} alt="Resumate Logo" className="w-20 h-auto" />
            </Link>
          </div>

          {/* Navbar in HomePage */}
          <ul className="flex flex-row items-center list-none ml-auto">
            <li className="mx-2">
              <button
                onClick={goHome}
                className="text-sm font-jakarta text-[#323232]"
              >
                Home
              </button>
            </li>
            <li className="mx-2">
              <button
                onClick={viewFeatures}
                className="text-sm font-jakarta text-[#323232]"
              >
                Features
              </button>
            </li>
            <li className="mx-2">
              <button
                onClick={viewTemplates}
                className="text-sm font-jakarta text-[#323232]"
              >
                Templates
              </button>
            </li>
            <li className="mx-2">
              <button
                onClick={buildResume}
                className="text-sm font-jakarta font-bold text-[#FFFFFF] bg-[#7175FE] rounded-lg px-4 py-2 hover:bg-transparent hover:text-[#7175FE] transition duration-300"
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
