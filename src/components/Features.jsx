import React from "react";
import FeatImgOne from "../assets/feature-one.png";
import FeatImgTwo from "../assets/feature-two.png";
import FeatImgThree from "../assets/feature-three.png";

const Features = () => {
  const features = [
    {
      title: "Streamlined Templates",
      description:
        "Using user-friendly templates, craft your resume effortlessly.",
      image: FeatImgOne,
    },
    {
      title: "Instant Feedback",
      description: "See instant previews of your resume as you make changes.",
      image: FeatImgTwo,
    },
    {
      title: "PDF Ready",
      description: "Easily download your resume in PDF format.",
      image: FeatImgThree,
    },
    {
      title: "Feature 4 (Coming Soon)",
      description: "Stay tuned for exciting new features!",
    },
  ];

  return (
    <section className="py-16 bg-[#ffffff]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#EBF5FF] p-6 rounded-md transition-transform transform hover:scale-105 flex flex-col items-center"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full md:w-1/3 lg:w-1/4 h-auto mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-[#323232] text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
