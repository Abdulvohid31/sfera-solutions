import Image from "next/image";
import EarthWidget from "../earth-widget";
import ColoredText from "@/shared/components/colored-text";
import DotGrid from "@/shared/components/DotsAnimation/Dotgrid";

export default function Hero() {
  return (
    <div
      id="hero"
      className="flex justify-between items-center h-screen font-semibold"
    >
      <div className=" flex flex-col gap-5">
        <p className="text-6xl">Transform Your <ColoredText text=" Business " />
           Digitally
        </p>
        <p>
          We deliver cutting-edge  <ColoredText text="IT solutions " /> that drive innovation, accelerate <br />
          growth, and transform the way you do business.
        </p>
      </div>
      <EarthWidget />
     <div className="absolute top-160 left-[85%]">
       <DotGrid row={5} col={6} />
     </div>
    </div>
  );
}
