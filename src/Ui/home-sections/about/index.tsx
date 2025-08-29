import ColoredText from "@/shared/components/colored-text";
import ServicesCard from "@/shared/components/services-card";
import Image from "next/image";
import React from "react";
import SecirityImage from "./assets/security.jpg";
import { t } from "i18next";
import { useTranslation } from "react-i18next";


const About = () => {
  const {t}=useTranslation()
  return (
    <div className="mt-10 xl:mt-40 px-4 md:px-8 lg:px-16">
  {/* Header */}
  <div className="w-full flex md:flex-row items-start md:items-center text-3xl md:text-4xl mb-10 gap-2">
    <ColoredText text="#" />
    <h1>{t("about_us")}</h1>
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
        <ColoredText text="”" /> {t("It_outsourcing_company")}
      </div>

      <h2 className="text-xl md:text-3xl font-medium">
        {t("aboutUs")}
        <ColoredText text="Sfera IT Solution" />
      </h2>

      <div className="text-sm md:text-base text-[#e0e1dd]">
        {t("company.mission")}
      </div>
    </div>
  </div>
</div>

  );
};

export default About;
