//Attribution page for citing references and resources

import React from "react";
import { useNavigate } from "react-router-dom";

function AttributionPage() {
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  return (
    <>
      <section className="font-jakarta bg-[#e1c6ed] flex flex-col items-center justify-center min-h-screen">
        <div className="text-xl text-center bg-[#ffffff] p-10 rounded-lg shadow-lg">
          <p className="text-base font-jakarta font-bold text-[#8424bc] mb-6">
            Attribution & Resources
          </p>
          <p className="text-sm font-noto text-[#000000] mb-2">
            <a href="https://www.https://www.freepik.com/free-vector/customer-support-flat-illustration_13107135.htm#from_view=detail_alsolike">
              Hero Image by freepik
            </a>{" "}
            on Freepik
          </p>
          <p className="text-sm font-noto text-[#000000] mb-2">
            <a
              href="https://www.flaticon.com/free-icons/friends"
              title="friends icons"
            >
              Feature 1 Icon created by Paul J. - Flaticon
            </a>
          </p>
          <p className="text-sm font-noto text-[#000000] mb-2">
            <a
              href="https://www.flaticon.com/free-icons/overview"
              title="overview icons"
            >
              Feature 2 Icon created by Grafixpoint - Flaticon
            </a>
          </p>
          <p className="text-sm font-noto text-[#000000] mb-2">
            <a href="https://www.flaticon.com/free-icons/pdf" title="pdf icons">
              Feature 3 Icon created by kliwir art - Flaticon
            </a>
          </p>
          <p className="text-sm font-noto text-[#000000] mb-2">
            <a
              href="https://www.flaticon.com/free-icons/navigation"
              title="navigation icons"
            >
              Feature 4 Icon created by Freepik - Flaticon
            </a>
          </p>
          <p className="text-sm font-noto text-[#000000] mb-2">
            <a href="https://logo.com/">
              Logo and Favicon created by Sean Dustin Verano
            </a>{" "}
            on LOGO.com
          </p>
          <p className="text-sm font-noto text-[#000000] mb-6">
            <a href="http://www.w3.org/2000/svg" title="due date icons">
              Phone, Email, Location, Link, Arrows, and Download symbols from
              W3C
            </a>
          </p>
          <button
            onClick={goHome}
            className="text-sm font-jakarta font-bold
            text-[#ffffff] bg-[#8424BC] rounded-lg px-4 py-2
            hover:bg-transparent hover:text-[#8424BC] transition duration-300
            ml-2"
          >
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
                d="M11 17l-5-5m0 0l5-5m-5 5h12"
              />
            </svg>{" "}
            Home
          </button>
        </div>
      </section>
    </>
  );
}

export default AttributionPage;
