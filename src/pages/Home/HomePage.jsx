import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

function HomePage() {
  const navigate = useNavigate();

  const buildResume = () => {
    navigate("/template");
  };

  return (
    <>
      <div className="flex flex-col">
        <Header />
        <button onClick={buildResume}>Getting Started</button>
      </div>
      <section>sdsd</section>
      <section>sds</section>
    </>
  );
}

export default HomePage;
