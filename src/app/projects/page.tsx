import Container from "@/shared/components/container";
import Header from "@/widgets/header";
import React from "react";
import BookersPhoto from "./assets/bookers4.webp";
import GeodezistPhoto from "./assets/geodezistclientdark.webp";
import QrPayPhoto from "./assets/qrpay.webp";
import Image from "next/image";
import ColoredText from "@/shared/components/colored-text";
import Rectangle from "@/app/assets/Rectangle.png";
import halfOfLogo from "@/app/assets/halg-of-logo.png";
import SeconHalfOfLogo from "@/app/assets/second-part-of-logo.png";

const Projects = () => {
  const productList = [
    {
      image: BookersPhoto,
      projectsName: "Bookers",
      discription: `Bookers is a unified platform designed for barbershops to streamline their 
        booking process. The solution includes a mobile application for clients, allowing them 
        to easily schedule appointments in advance, view available time slots, and receive 
        reminders. For barbers and shop managers, a web-based admin panel enables efficient 
        management of appointments, customer records, and staff schedules. The system is built 
        to improve customer satisfaction, reduce no-shows, and optimize business operations.`,
      servises: ["Mobile App", "Web-admin dashboard"],
      link: "https://bookers.uz",
    },
    {
      image: GeodezistPhoto,
      projectsName: "Geodezist",
      discription: `Geodezist is an interactive web-based quiz platform created to assess and
       improve the knowledge of geodesy specialists. The platform offers a variety of topic-based
        tests that help professionals evaluate their expertise, identify areas for improvement, and prepare for certification or 
      job applications. With a simple and user-friendly interface, users can take timed quizzes, receive instant results, and track their progress over time.`,
      servises: ["web-site"],
      link: "https://geodezist.uz",
    },
    {
      image: QrPayPhoto,
      projectsName: "Qr-pay",
      discription: `QR Pay is a QR-based payment solution that lets customers pay in Russian Rubles (RUB) while merchants receive funds in Uzbek Som (UZS)—automatically 
      converted at the moment of payment. The system streamlines cross-border payments, reduces manual reconciliation, and provides transparent rates and fees in real time.`,
      servises: ["Mobile App", "Web-admin dashboard"],
    },
  ];
  return (
    <div className="bg-[#000723] min-w-screen">
      <Container className="">
        <Header />
        <div className="pt:20 lg:pt-50 w-full flex flex-col gap-5 justify-center items-center py-20">
          <h1 className="text-6xl ">
            Our <ColoredText text="projects" />
          </h1>
          <p className="text-xl ">
            Explore our latest <ColoredText text="projects" /> and see how we've
            helped businesses transform their digital presence and achieve their
            goals.
          </p>
        </div>
        <div className="flex flex-col gap-10 mt-10">
          {productList.map((item, i) => (
            <div
              key={i}
              className={`flex gap-10 z-[1] hover:bg-black/30 transition-all p-10 rounded-2xl ${
                i % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Image container */}
              <div className="w-full rounded-2xl relative group overflow-hidden transition">
                <Image
                  className="w-full rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  src={item.image}
                  alt={item.projectsName}
                />

                {/* Overlay with blur + buttons */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                  <button className="bg-[#e0e1dd] backdrop-blur-sm cursor-pointer text-black px-5 py-2 rounded-full font-medium hover:bg-[#000723] hover:text-[#e0e1dd] transition">
                    <a target="_blank" href={item.link}>
                      View more
                    </a>
                  </button>
                </div>
              </div>

              {/* Text section */}
              <div className="flex flex-col w-full gap-5 ">
                <h1 className="text-4xl my-4">
                  <ColoredText text="“" />
                  {item.projectsName}
                </h1>
                <p className="text-[18px]">{item.discription}</p>
                <div className="flex gap-3">
                  {item?.servises?.map((item) => (
                    <>
                      <div className="border select-none hover:text-[#6b25ff] backdrop-blur-sm w-fit p-2 px-5 rounded-2xl">
                        {item}
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <div className="absolute select-none top-160 left-0 rotate-50 opacity-80 z-[0]  lg:block hidden">
        <Image src={halfOfLogo} alt="" />
      </div>
      <div className=" lg:block hidden absolute select-none rotate-10 right-[-150px] top-300 ">
        <Image src={SeconHalfOfLogo} alt="Rectangle" />
      </div>
      <div className=" lg:block hidden absolute select-none rotate-10 right-0 top-50 ">
        <Image src={SeconHalfOfLogo} alt="Rectangle" />
      </div>
    </div>
  );
};

export default Projects;
