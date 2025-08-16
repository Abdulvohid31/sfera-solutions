import ColoredText from "@/shared/components/colored-text";
import ServicesCard from "@/shared/components/services-card";
import Image from "next/image";
import React from "react";
import SecirityImage from "./assets/security.jpg";


const About = () => {
  return (
    <div className="xl:mt-40 mt-10">
      <div className="w-full text-4xl flex mb-10">
        <ColoredText text="#" />
        <h1>about us</h1>
      </div>
      <div className="mb-10 flex-col xl:flex-row flex justify-between gap-5">
        <Image
          className="w-full rounded-xl"
          src={SecirityImage}
          alt="security"
        />
        <div className="w-full flex flex-col gap-10 z-30">
          <div className="text-4xl">
            <ColoredText text="”" /> IT outsourcing company
          </div>
          <h2 className="text-3xl">
            Our-company Founded in 2022,{" "}
            <ColoredText text="Sfera IT Solution" /> has been at the forefront
            of digital transformation, helping businesses leverage technology to
            achieve unprecedented growth and efficiency.
          </h2>
          <div className="text-[18px] text-[#e0e1dd] z-40">
            We combine deep technical expertise with strategic business insight
            to deliver solutions that not only meet your current needs but also
            position you for future success. Our commitment to innovation and
            excellence has made us a trusted partner for companies ranging from
            startups to large enterprises.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
