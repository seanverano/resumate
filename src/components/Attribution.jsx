import React from "react";
import { useNavigate } from "react-router-dom";

function Attribution() {
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  return (
    <>
      <section className="font-jakarta bg-[#7175FE] flex flex-col items-center justify-center min-h-screen">
        <div className="text-sm text-center">
          <p className="text-[#FFFFFF] mb-2">
            <a href="https://www.freepik.com/free-vector/female-student-listening-webinar-online_9175118.htm?query=writing document">
              Hero Image by pch.vector
            </a>{" "}
            on Freepik
          </p>
          <p className="text-[#FFFFFF] mb-2">
            <a
              href="https://www.flaticon.com/free-icons/friends"
              title="friends icons"
            >
              Feature 1 Icon created by Paul J. - Flaticon
            </a>
          </p>
          <p className="text-[#FFFFFF] mb-2">
            <a
              href="https://www.flaticon.com/free-icons/overview"
              title="overview icons"
            >
              Feature 2 Icon created by Grafixpoint - Flaticon
            </a>
          </p>
          <p className="text-[#FFFFFF] mb-2">
            <a href="https://www.flaticon.com/free-icons/pdf" title="pdf icons">
              Feature 3 Icon created by kliwir art - Flaticon
            </a>
          </p>
          <p className="text-[#FFFFFF] mb-6">
            <a
              href="https://www.flaticon.com/free-icons/due-date"
              title="due date icons"
            >
              Feature 4 Icon created by Moudesain - Flaticon
            </a>
          </p>
        </div>
        <button
          onClick={goHome}
          className="text-base font-jakarta font-bold
            text-[#323232] bg-[#ECEEEE] rounded-lg px-6 py-3
            hover:bg-transparent hover:text-[#ffffff] transition duration-300
            ml-2"
        >
          ← Home
        </button>
      </section>
    </>
  );
}

export default Attribution;
