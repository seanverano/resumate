// A new page will pop up if the user tries to visit the website on Mobile or devices with less than 1024 width

import React, { useState, useEffect } from "react";

const MobileWarning = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    if (isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "auto";
    };
  }, [isMobile]);

  if (!isMobile) return null;

  return (
    <div
      style={{ zIndex: 9999 }}
      className="overflow-hidden fixed top-0 left-0 w-full h-full bg-[#e1c6ed] bg-opacity-100 flex items-center justify-center"
    >
      <div className="fixed bg-[#ffffff] p-6 rounded-lg shadow-lg max-w-xs text-center">
        <h2 className="text-2xl font-jakarta font-bold text-[#8424BC] mb-4">
          Oops, a little notice!
        </h2>
        <p className="font-noto text-lg text-[#000000] mb-4">
          For a better experience, this site is optimized only for devices with
          a width of 1024px or more (desktop, laptop, and tablets).
        </p>
        <p className="font-noto text-[#000000] mb-4 italic">
          Let’s be honest—nobody wants to craft their resume on a tiny screen,
          right?
        </p>
      </div>
    </div>
  );
};

export default MobileWarning;
