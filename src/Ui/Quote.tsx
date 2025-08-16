import React from "react";

interface QuoteProps {
  text: string;
  author: string;
}

const Quote: React.FC<QuoteProps> = ({ text, author }) => {
  return (
    <div className="w-full  flex justify-center z-100 items-center my-10">
      <div className=" text-white backdrop-blur-sm bg-black/30 p-6 rounded-lg border-2 border-[#6b25ff]  w-[80%]">
        <div className="flex items-start">
          <span className="text-3xl text-[#cfe80e] mr-2">“</span>
          <p className="text-xl font-mono">{text}</p>
        </div>
        <div className="flex justify-end items-center mt-2">
          <span className="text-2xl text-[#cfe80e] mr-1">”</span>
          <span className="text-sm font-mono text-[#e0e1dd]">- {author}</span>
        </div>
      </div>
    </div>
  );
};

export default Quote;
