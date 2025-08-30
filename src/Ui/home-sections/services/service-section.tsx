import ColoredText from "@/shared/components/colored-text";
import ServicesCard from "@/shared/components/services-card";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaBusinessTime, FaReact } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import { SiOdoo } from "react-icons/si";

const Services = () => {
  const {t}=useTranslation()
  const ServicesList = [
    {
      Icon: <FaFlutter size={30} />,
      title: t("mobileApp"),
      discription:
        t("mobileAppDescription"),
    },
    {
      Icon: <FaReact size={30} />,
      title: t("websiteDevelopment"),
      discription:
      t("websiteDescription")    
    },
    {
      Icon: <SiOdoo size={30} />,
      title: t("erpSolutions"),
      discription:
        t("erpDescription")
    },
    {
      Icon: <IoShareSocial size={30} />,
      title: t("crm"),
      discription:
        t("crmDescription")
    },
    {
      Icon: <FaBusinessTime size={30} />,
      title: t("businessSystematization"),
      discription:
       t("businessSystematizationDescription")
    },
  ];
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
