import ColoredText from "@/shared/components/colored-text";
import ProjectExampleCard from "@/shared/components/project-example-card";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ProjectExaples = () => {
  const projectsList = [
    {
      Image: "https://picsum.photos/504",
      Name: "Bookers",

      discription:
        "A unified platform for barbers to manage schedules and accept online bookings.",
      liveLink: "https://bookers.uz",
    },
    {
      Image: "https://picsum.photos/501",
      Name: "Geodezist",
      discription:
        "Assessment platform streamlining candidate testing and hiring process.",
      liveLink: "https://geodizist.uz",
    },
    {
      Image: "https://picsum.photos/506",
      Name: "Qr Pay",
      discription:
        "Contactless payment platform with QR support and admin tools.",
      liveLink: "https://qrpay.uz",
    },
  ];
  return (
    <div className="flex flex-col gap-5 z-50 mt-5 xl:mt-40 px-4 md:px-8 lg:px-16">
  {/* Header */}
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
    <p className="text-3xl md:text-4xl font-semibold flex items-center gap-2">
      <ColoredText text="#" />
      projects
    </p>
    <Link
      className="text-sm flex justify-center items-center gap-1 hover:text-[#cfe80e] transition-colors duration-200"
      href={"/projects"}
    >
      <span>
        <span className="text-[#cfe80e]">“</span>see more projects
      </span>
      <FaArrowRight />
    </Link>
  </div>

  {/* Projects Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-10">
    {projectsList?.map((item, index) => (
      <ProjectExampleCard
        key={index}
        Image={item.Image}
        Name={item.Name}
        discription={item.discription}
        liveLink={item.liveLink}
      />
    ))}
  </div>
</div>

  );
};

export default ProjectExaples;
