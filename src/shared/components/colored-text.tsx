import React from "react";

const ColoredText = ({ text }: { text: string }) => {
  return <div className="text-[#cfe80e] inline-block">{text}</div>;
};

export default ColoredText;
