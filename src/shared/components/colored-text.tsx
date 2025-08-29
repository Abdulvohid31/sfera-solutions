import React from "react";

interface ColoredTextProps {
  text: string;
}

const ColoredText = ({ text }: ColoredTextProps) => {
  return <span className="text-[#cfe80e]">{text}</span>;
};

export default ColoredText;
