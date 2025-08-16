import React from "react";

const ServicesCard = ({
  icon,
  title,
  discription,
}: {
  icon: React.ReactElement;
  title: string;
  discription: string;
}) => {
  return (
    <div className="px-10 py-6 z-50 rounded-xl flex shadow-2xl flex-col justify-center items-start gap-7 backdrop-blur-sm bg-black/30">
      <div className="my-3 text-[#cfe80e]">{icon}</div>
      <h1 className="text-3xl"><span className="text-[#cfe80e]">”</span>{title}</h1>
      <p className="text-[16px]">{discription}</p>
    </div>
  );
};

export default ServicesCard;
