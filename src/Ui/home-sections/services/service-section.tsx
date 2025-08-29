import ColoredText from "@/shared/components/colored-text";
import ServicesCard from "@/shared/components/services-card";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaBusinessTime, FaReact } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import { SiOdoo } from "react-icons/si";

const Services = () => {
  const ServicesList = [
    {
      Icon: <FaFlutter size={30} />,
      title: "Mobile App (Android/IOS)",
      discription:
        "We develop modern, fast and user-friendly mobile applications for iOS and Android platforms. We combine software design, usability and create a unique solution for your business.",
    },
    {
      Icon: <FaReact size={30} />,
      title: "Website Development",
      discription:
        "We develop SEO optimized, fast and responsive websites. We provide modern design and convenient features for your business.",
    },
    {
      Icon: <SiOdoo size={30} />,
      title: "ERP Solutions (odoo)",
      discription:
        "Through Odoo ERP, we create the opportunity to manage your business processes in a single system - integrating sales, warehouse, finance, and other modules.",
    },
    {
      Icon: <IoShareSocial size={30} />,
      title: "CRM",
      discription:
        "We install and configure CRM systems to effectively manage customer relationships and consolidate customer information into a single database.",
    },
    {
      Icon: <FaBusinessTime size={30} />,
      title: "Business Systematization",
      discription:
        "We help you save time and resources by automating all your business processes. We create a systematic approach to increasing your efficiency.",
    },
  ];
  const {t}=useTranslation()
  return (
    <div className="mt-5 lg:mt-40 mb-10 px-4 md:px-8 lg:px-16">
  {/* Section Header */}
  <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
    <p className="text-3xl md:text-4xl font-semibold flex items-center gap-2">
      <ColoredText text="#" />
      {t("our_services")}
    </p>
  </div>

  {/* Services Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
    {ServicesList.map((item, index) => (
      <ServicesCard
        key={index}
        icon={item.Icon}
        title={item.title}
        discription={item.discription}
      />
    ))}
  </div>
</div>

  );
};

export default Services;
