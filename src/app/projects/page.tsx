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
  <Container>
    <Header />
    <div className="pt-20 lg:pt-40 w-full flex flex-col gap-5 justify-center items-center py-16">
      <h1 className="text-4xl sm:text-5xl mt-[3rem] lg:text-6xl text-center">
        Our <ColoredText text="projects" />
      </h1>
      <p className="text-base sm:text-lg lg:text-xl text-center max-w-2xl">
        Explore our latest <ColoredText text="projects" /> and see how we've
        helped businesses transform their digital presence and achieve their
        goals.
      </p>
    </div>

    {/* Projects list */}
    <div className="flex flex-col gap-10 mt-10">
      {productList.map((item, i) => (
        <div
          key={i}
          className={`flex flex-col lg:flex-row gap-6 lg:gap-10 z-[1] hover:bg-black/30 transition-all p-6 lg:p-10 rounded-2xl ${
            i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
        >
          {/* Image container */}
          <div className="w-full lg:w-1/2 rounded-2xl relative group overflow-hidden transition">
            <Image
              className="w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-105"
              src={item.image}
              alt={item.projectsName}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
              <a
                target="_blank"
                href={item.link}
                className="bg-[#e0e1dd] backdrop-blur-sm cursor-pointer text-black px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium hover:bg-[#000723] hover:text-[#e0e1dd] transition"
              >
                View more
              </a>
            </div>
          </div>

          {/* Text section */}
          <div className="flex flex-col w-full lg:w-1/2 gap-4 lg:gap-5">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl my-2">
              <ColoredText text="“" />
              {item.projectsName}
            </h1>
            <p className="text-base sm:text-lg lg:text-[18px]">
              {item.discription}
            </p>
            <div className="flex flex-wrap gap-3">
              {item?.servises?.map((srv, idx) => (
                <div
                  key={idx}
                  className="border text-sm sm:text-base hover:text-[#6b25ff] backdrop-blur-sm w-fit p-2 px-4 sm:px-5 rounded-2xl select-none"
                >
                  {srv}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </Container>

  {/* Background decorative logos */}
  <div className="absolute select-none top-[160px] left-0 rotate-50 opacity-80 z-[0] hidden lg:block">
    <Image src={halfOfLogo} alt="" />
  </div>
  <div className="absolute select-none rotate-10 right-[-150px] top-[300px] hidden lg:block">
    <Image src={SeconHalfOfLogo} alt="Rectangle" />
  </div>
  <div className="absolute select-none rotate-10 right-0 top-[50px] hidden lg:block">
    <Image src={SeconHalfOfLogo} alt="Rectangle" />
  </div>
</div>

  );
};

export default Projects;
