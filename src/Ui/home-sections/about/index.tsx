import ColoredText from "@/shared/components/colored-text";
import ServicesCard from "@/shared/components/services-card";
import Image from "next/image";
import React from "react";
import SecirityImage from "./assets/security.jpg";


const About = () => {
  return (
    <div className="mt-10 xl:mt-40 px-4 md:px-8 lg:px-16">
  {/* Header */}
  <div className="w-full flex md:flex-row items-start md:items-center text-3xl md:text-4xl mb-10 gap-2">
    <ColoredText text="#" />
    <h1>about us</h1>
  </div>

  {/* Content */}
  <div className="flex flex-col xl:flex-row justify-between gap-8">
    {/* Image */}
    <Image
      className="w-full xl:w-1/2 rounded-xl object-cover"
      src={SecirityImage}
      alt="security"
    />

    {/* Text Content */}
    <div className="w-full xl:w-1/2 flex flex-col gap-6">
      <div className="text-2xl md:text-4xl font-semibold">
        <ColoredText text="”" /> IT outsourcing company
      </div>

      <h2 className="text-xl md:text-3xl font-medium">
        Our-company Founded in 2022, <ColoredText text="Sfera IT Solution" /> 
        has been at the forefront of digital transformation, helping businesses
        leverage technology to achieve unprecedented growth and efficiency.
      </h2>

      <div className="text-sm md:text-base text-[#e0e1dd]">
        We combine deep technical expertise with strategic business insight to 
        deliver solutions that not only meet your current needs but also position 
        you for future success. Our commitment to innovation and excellence has 
        made us a trusted partner for companies ranging from startups to large 
        enterprises.
      </div>
    </div>
  </div>
</div>

  );
};

export default About;
