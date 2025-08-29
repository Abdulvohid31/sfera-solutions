import React from "react";

const  ServicesCard = ({
  icon,
  title,
  discription,
}: {
  icon: React.ReactElement;
  title: string;
  discription: string;
}) => {
  return (
    <div className="px-6 py-4 rounded-xl flex flex-col justify-center items-start gap-4 backdrop-blur-sm bg-black/30 shadow-xl md:z-10 z-0">
  <div className="text-[#cfe80e] text-2xl">{icon}</div>
  <h1 className="text-2xl md:text-3xl">
    <span className="text-[#cfe80e]">”</span>
    {title}
  </h1>
  <p className="text-sm md:text-base">{discription}</p>
</div>

  );
};

export default ServicesCard;
