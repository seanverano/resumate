//feature section in the homepage

import React, { useEffect } from "react";
import FeatImgOne from "../../assets/feature-one.png";
import FeatImgTwo from "../../assets/feature-two.png";
import FeatImgThree from "../../assets/feature-three.png";
import FeatImgFour from "../../assets/feature-four.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  const features = [
    {
      title: "Smooth Navigation",
      description: "Enjoy seamless navigation for a smooth user experience.",
      image: FeatImgFour,
    },
    {
      title: "Streamlined Templates",
      description: "Intuitive templates for your effortless resume creation.",
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
  ];

  return (
    <section className="py-16 bg-[#ffffff]">
      <div className="container mx-auto px-4">
        <h2
          className="font-jakarta text-[#8424BC] text-3xl font-bold text-center mb-8 "
          data-aos="fade-up"
        >
          Features Built to Land Your Dream Job
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#E1C6ED] p-6 rounded-md flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full md:w-1/3 lg:w-1/4 h-auto mb-4 rounded"
              />
              <h3 className="text-[#000000] font-jakarta text-xl font-semibold mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-[#323232] text-lg font-noto text-center">
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
