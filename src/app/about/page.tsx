import Image from "next/image";
import React from "react";
import SferaTeam from "./assets/sfera-team.jpg";
import ColoredText from "@/shared/components/colored-text";
import Header from "@/widgets/header";
import Container from "@/shared/components/container";
import CTO from "./assets/javohirkhoziboyev.png";
import CEO from "./assets/Shaxrixon-rahmatullayev.png";
import PM from "./assets/Dovud-qodirov.png";
import { FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import Footer from "@/widgets/footer";

const About = () => {
  const persons = [
    {
      image: CTO,
      name: "Javokhir Khoziboyev",
      position: "CTO",
      links: [
        {
          link: "",
          Icon: <FaInstagram size={25} />,
        },
        {
          link: "",
          Icon: <FaLinkedin size={25} />,
        },
      ],
    },
    {
      image: CEO,
      name: "Shahrixon Raxmatullayev",
      position: "CTO",
      links: [
        {
          link: "https://www.instagram.com/dovud_khodirov/",
          Icon: <FaInstagram size={25} />,
        },
        {
          link: "www.linkedin.com/in/dovud-qodirov",
          Icon: <FaLinkedin size={25} />,
        },
        {
          link: "https://t.me/Dovud_Qodirov",
          Icon: <FaTelegram size={25} />,
        },
      ],
    },
    {
      image: PM,
      name: "Dovud Qodirov",
      position: "PM",
      links: [
        {
          link: "",
          Icon: <FaInstagram size={25} />,
        },
        {
          link: "",
          Icon: <FaLinkedin size={25} />,
        },
      ],
    },
  ];
  return (
    <div className="bg-[#000723] min-w-screen min-h-screen flex flex-col justify-center items-center">
  <div className="flex justify-center items-center mb-10 lg:mb-20 w-full">
    <Container>
      <Header />

      {/* Title */}
      <div className="pt-24 pb-10 lg:pb-20 flex justify-center mt-[2rem] items-center text-3xl sm:text-4xl lg:text-5xl text-center">
        <ColoredText text="#" /> About us
      </div>

      {/* About section */}
      <div className="mb-10 flex flex-col xl:flex-row justify-between gap-6 lg:gap-10 z-10 p-5 lg:p-10">
        {/* Image */}
        <div className="w-full xl:w-1/2">
          <Image
            className="w-full rounded-xl object-cover"
            src={SferaTeam}
            alt="Sfera IT Team"
          />
        </div>

        {/* Texts */}
        <div className="w-full xl:w-1/2 flex flex-col gap-6 lg:gap-10">
          <div className="text-2xl sm:text-3xl lg:text-4xl mt-5">
            <ColoredText text="”" /> IT outsourcing company
          </div>
          <h2 className="text-lg sm:text-xl lg:text-2xl leading-relaxed">
            Our-company Founded in 2022,{" "}
            <ColoredText text="Sfera IT Solution" /> has been at the forefront
            of digital transformation, helping businesses leverage technology to
            achieve unprecedented growth and efficiency.
          </h2>
          <div className="text-base sm:text-lg lg:text-[18px] text-[#e0e1dd] z-40">
            We combine deep technical expertise with strategic business insight
            to deliver solutions that not only meet your current needs but also
            position you for future success. Our commitment to innovation and
            excellence has made us a trusted partner for companies ranging from
            startups to large enterprises.
          </div>
        </div>
      </div>

      {/* Leaders */}
      <div className="flex flex-col">
        <div className="flex w-full items-start my-10 lg:my-20">
          <h1 className="text-2xl sm:text-3xl ml-[1.2rem] lg:text-4xl">
            <ColoredText text="#" /> our leaders
          </h1>
        </div>

        {/* Grid of leaders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
          {persons.map((person, i) => (
            <div
              key={i}
              className="flex flex-col p-4 lg:p-6 bg-black/30 backdrop-blur-sm rounded-2xl"
            >
              {/* Image */}
              <Image
                src={person.image}
                alt={person.name}
                className="object-cover w-full rounded-2xl h-[250px] sm:h-[300px] lg:h-[350px]"
              />

              {/* Info */}
              <div className="mt-5 flex flex-col gap-3 lg:gap-5">
                <div>
                  <h1 className="text-lg sm:text-xl font-bold">
                    {person.name}
                  </h1>
                  <p className="text-gray-300 text-sm sm:text-base">
                    <ColoredText text={person.position} />
                  </p>
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-2">
                  {person.links.map((linkItem, index) => (
                    <a
                      key={index}
                      href={linkItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors text-lg"
                    >
                      {linkItem.Icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </div>
  <Footer />
</div>

  );
};

export default About;
