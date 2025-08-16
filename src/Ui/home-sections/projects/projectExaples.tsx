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
    <div className="flex flex-col z-50  gap-5 xl:mt-40 mt-5">
      <div className="mb-10 flex justify-between text-4xl">
        <p>
          <ColoredText text="#" />
          projects
        </p>
        <Link
          className="text-sm flex justify-center items-center gap-1 hover:text-[#cfe80e]"
          href={"/projects"}
        >
          <span>
            <span className="text-[#cfe80e]">“</span>see more projects
          </span>{" "}
          <FaArrowRight />{" "}
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-30 mb-10 z-50">
        {projectsList?.map((item) => (
          <ProjectExampleCard
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
