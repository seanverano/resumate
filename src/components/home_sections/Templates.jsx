//template section in the homepage
import UnusPreview from "../../assets/unus-preview.jpg";
import DuoPreview from "../../assets/duo-preview.jpg";
import React from "react";

const Templates = () => {
  const templates = [
    {
      title: "Unus",
      description:
        "A sleek, minimalist design inspired by Harvard's popular resume template.",
      image: UnusPreview,
    },
    {
      title: "Duo",
      description:
        "Two-column layout with contact info and skills on the left for a clean, organized look.",
      image: DuoPreview,
    },
  ];

  return (
    <section className="py-16 bg-[#ffffff]">
      <div className="container mx-auto px-4">
        <h2 className="font-jakarta text-[#7175FE] text-3xl font-bold text-center mb-8">
          Templates Designed to Elevate Your Resume
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-stretch">
          {templates.map((template, index) => (
            <div
              key={index}
              className="flex-1 md:mx-4 mb-8 md:mb-0 flex flex-col"
            >
              <img
                src={template.image}
                alt={template.title}
                className="w-full h-auto mb-4 rounded transition-transform transform hover:scale-105 shadow-lg box-border bg-white"
              />
              <h3 className="font-jakarta text-xl text-[#323232] font-semibold mb-2 text-center">
                {template.title}
              </h3>
              <p className="font-noto text-[#323232] text-center flex-grow">
                {template.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Templates;
