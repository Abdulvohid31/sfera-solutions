import ColoredText from "@/shared/components/colored-text";
import React from "react";

const Statistics = () => {
  return (
    <div className="mt-5 lg:mt-40 mb-10">
      <div className="mb-10 flex justify-between text-4xl">
        <p>
          <ColoredText text="#" />statistics
        </p>
      </div>

      <div
        // style={{
        //   backgroundImage: `url(${BgImage})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
        className="flex backdrop-blur-sm bg-black/30 justify-between border-y py-20 px-35 w-[119%] ml-[-150px]"
      >
        <div className="flex flex-col justify-center gap-2 items-center">
          <h1 className="text-5xl">
            <ColoredText text="20" />+
          </h1>
          <p>Complated Projects</p>
        </div>
        <div className="flex flex-col justify-center gap-2 items-center">
          <h1 className="text-5xl">15+</h1>
          <p>
            Odoo experts & <ColoredText text="Developers" />
          </p>
        </div>
        <div className="flex flex-col justify-center gap-2 items-center">
          <h1 className="text-5xl">5+</h1>
          <p>
            The <ColoredText text="count of services " /> we can provide
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
