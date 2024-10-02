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
          <span className="text-[#7175FE] font-bold text-jakarta">
            Sean Dustin Verano
          </span>{" "}
          © 2024 ALL RIGHTS RESERVED
        </p>
        <button
          onClick={viewAttribution}
          className="text-sm font-jakarta font-bold text-[#FFFFFF] bg-[#7175FE] rounded-lg px-4 py-2 hover:bg-transparent hover:text-[#7175FE] transition duration-300 w-auto"
        >
          ATTRIBUTION ⬈
        </button>
      </div>
    </>
  );
}

export default Footer;
