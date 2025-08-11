import ColoredText from "@/shared/components/colored-text";
import Container from "@/shared/components/container";
import Hero from "@/widgets/hero/hero";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import LineImage from "@/app/assets/Line.png";
import Image from "next/image";
import Header from "@/widgets/header";
import DotGrid from "@/shared/components/DotsAnimation/Dotgrid";
export default function Home() {
  return (
    <div className="min-w-screen flex justify-center font-semibold items-center bg-[#000723]">
      <div className="absolute top-10 left-10"></div>
      <div className="lg:block hidden absolute  top-[5%] left-[1%]">
        <ul className="flex flex-col items-center gap-2 text-[#e0e1dd]">
          <li>
            <Image width={1.5} src={LineImage} alt="Line" />
          </li>
          <li className="hover:text-[#cfe80e]">
            <a
              target="_blank"
              href="https://www.linkedin.com/company/sfera-it-solution/"
            >
              <FaInstagram />
            </a>
          </li>
          <li className="hover:text-[#cfe80e]">
            <a
              target="_blank"
              href="https://www.linkedin.com/company/sfera-it-solution/"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="hover:text-[#cfe80e]"></li>
          <li className="hover:text-[#cfe80e]"></li>
        </ul>
      </div>
      <Container className="">
        <Header />
        <Hero />
      </Container>
    </div>
  );
}
