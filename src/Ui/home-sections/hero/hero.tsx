import Image from "next/image";
import EarthWidget from "../../../widgets/earth-widget";
import ColoredText from "@/shared/components/colored-text";
import DotGrid from "@/shared/components/DotsAnimation/Dotgrid";

export default function Hero() {
  return (
  <div
  id="hero"
  className="relative flex flex-col xl:flex-row justify-between items-center h-screen px-4 md:px-10 lg:px-20 font-semibold"
>
  {/* Text Section */}
  <div className="flex flex-col gap-5 text-center xl:text-left mt-27 xl:mt-0 order-1 xl:order-none">
    <div className="text-4xl sm:text-5xl md:text-6xl font-bold">
      Transform Your{" "}
      <ColoredText text=" Business " /> 
      Digitally
    </div>
    <p className="text-base sm:text-lg md:text-xl text-[#e0e1dd] max-w-md mx-auto xl:mx-0">
      <span className="text-[#cfe80e]">“</span>
      We deliver cutting-edge{" "}
      <ColoredText text="IT solutions " /> that drive innovation,
      accelerate <br />
      growth, and transform the way you do business.
    </p>
  </div>

  {/* Earth Widget */}
  <div className="w-full max-w-md xl:max-w-xl mb-10 xl:mb-0 order-2 xl:order-none">
    <EarthWidget />
  </div>

  {/* Decorative Dot Grid */}
  <div className="hidden xl:block absolute top-[40%] left-[85%]">
    <DotGrid row={5} col={6} />
  </div>
</div>
  );
}
