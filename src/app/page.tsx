"use client";
import ColoredText from "@/shared/components/colored-text";
import Container from "@/shared/components/container";
import Hero from "@/Ui/home-sections/hero/hero";
import { FaArrowUp, FaInstagram, FaLinkedin } from "react-icons/fa";
import LineImage from "@/app/assets/Line.png";
import Rectangle from "@/app/assets/Rectangle.png";
import halfOfLogo from "@/app/assets/halg-of-logo.png";
import SeconHalfOfLogo from "@/app/assets/second-part-of-logo.png";
import Image from "next/image";
import Header from "@/widgets/header";
import DotGrid from "@/shared/components/DotsAnimation/Dotgrid";
import ProjectExaples from "@/Ui/home-sections/projects/projectExaples";
import Quote from "@/Ui/Quote";
import Statistics from "@/Ui/home-sections/statistics";
import Services from "@/Ui/home-sections/services/service-section";
import Footer from "@/widgets/footer";
import Link from "next/link";
import About from "@/Ui/home-sections/about";
import { useTranslation } from "react-i18next";
export default function Home() {
  const {t}=useTranslation()
  return (
    <div className="w-[100vw] max-w-screen flex flex-col justify-center font-semibold items-center  bg-[#000723]">
      <Container className="">
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
        <Header />
        <Hero />
        <div className="mt-[-23rem] md:mt-[-40rem] lg:mt-[20rem]">
          <Quote
          text={t("aboutTitle")}
          author="Javokhir Khoziboyev CTO"
        />
        </div>
        <About />

        <ProjectExaples />
        {/* <Statistics /> */}
        <Services />
        <div className="my-32 w-full flex justify-center items-center">
          <button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "instant",
              });
            }}
            className="bg-[#4637B4] group relative inline-flex items-center overflow-hidden rounded-full px-15 py-6 transition"
          >
            <div className="absolute inset-0 flex items-center [container-type:inline-size]">
              <div className="absolute h-[100cqw] w-[100cqw] animate-spin bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)] opacity-0 transition duration-300 group-hover:opacity-100"></div>
            </div>
            <div className="absolute inset-0.5 rounded-full backdrop-blur-sm bg-black/90"></div>
            <div className="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 rounded-full bg-white/10 opacity-50 blur-md transition-all duration-500 group-hover:h-2/3 group-hover:opacity-100"></div>
            <div className="relative inline-flex items-center gap-2">
              <span className="font-mona mt-px bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200">
                <FaArrowUp color="gray" size={30} />
              </span>
            </div>
          </button>
        </div>
      </Container>
      <Footer />
      <div className="absolute select-none top-160 left-25 rotate-50 opacity-80  transform  lg:block hidden">
        <Image src={halfOfLogo} alt="" />
      </div>
      <div className=" lg:block hidden absolute select-none right-0 top-15 ">
        <Image src={Rectangle} alt="Rectangle" />
      </div>
      <div className=" lg:block hidden absolute select-none rotate-10 right-[-150px] top-400 ">
        <Image src={SeconHalfOfLogo} alt="Rectangle" />
      </div>
      <div className=" lg:block hidden absolute select-none right-[-50px] rotate-12 top-800 ">
        <Image src={halfOfLogo} alt="Rectangle" />
      </div>
      <div className="lg:block hidden absolute select-none right-50 top-830 ">
        <Image src={SeconHalfOfLogo} alt="Rectangle" />
      </div>
    </div>
  );
}
