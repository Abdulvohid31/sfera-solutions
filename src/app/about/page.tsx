import Image from "next/image";
import React from "react";
import SferaTeam from "./assets/sfera-team.jpg";
import ColoredText from "@/shared/components/colored-text";
import Header from "@/widgets/header";
import Container from "@/shared/components/container";
import halfOfLogo from "@/app/assets/halg-of-logo.png";
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
      <div className=" flex justify-center items-center mb-20">
        <Container className="">
          <Header />
          <div className="pt-50 pb-20 flex justify-center items-center text-5xl">
            <ColoredText text="#" /> About us
          </div>
          <div className="mb-10 flex-col xl:flex-row flex justify-between gap-5 z-10 p-10 ">
            <div className="w-full">
              <Image
                className="w-full rounded-xl"
                src={SferaTeam}
                alt="security"
              />
            </div>
            <div className="w-full flex flex-col gap-10">
              <div className="text-4xl mt-5">
                <ColoredText text="”" />IT outsourcing company
              </div>
              <h2 className="text-3xl">
                Our-company Founded in 2022,{" "}
                <ColoredText text="Sfera IT Solution" /> has been at the
                forefront of digital transformation, helping businesses leverage
                technology to achieve unprecedented growth and efficiency.
              </h2>
              <div className="text-[18px] text-[#e0e1dd] z-40">
                We combine deep technical expertise with strategic business
                insight to deliver solutions that not only meet your current
                needs but also position you for future success. Our commitment
                to innovation and excellence has made us a trusted partner for
                companies ranging from startups to large enterprises.
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex w-full items-start my-20 justify-start flex-col">
              <h1 className="text-4xl">
                <ColoredText text="#" />
                our leaders
              </h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {persons.map((person, i) => (
                <div
                  key={i}
                  className="flex flex-col p-3 bg-black/30 backdrop-blur-sm rounded-2xl"
                >
                  {/* Image */}
                  <Image
                    src={person.image}
                    alt={person.name}
                    className="object-cover w-[800px] rounded-2xl"
                  />

                  {/* Info */}
                  <div className="mt-5 flex flex-col gap-5">
                    <div className="">
                      <h1 className="text-xl font-bold">{person.name}</h1>
                      <p className="text-gray-300">
                        {" "}
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
                          className="hover:text-blue-400 transition-colors"
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
