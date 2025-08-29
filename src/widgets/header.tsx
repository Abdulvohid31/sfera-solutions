"use client";
import ColoredText from "@/shared/components/colored-text";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "@/app/assets/sfera-logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const headeritems: (string | string[])[] = [
    "home",
    "projects",
    "about",
    ["ENG", "RU", "UZ"],
  ];
  const SelectItems = headeritems[headeritems.length - 1] as string[];

  return (
    <header className="w-full fixed top-0 left-0 flex justify-between items-center py-5 px-6 md:px-10 lg:px-20 bg-[#0d1b2a]/90 backdrop-blur-md z-50">
      {/* Logo */}
      <Link href={"/"} className="z-50">
        <Image width={160} src={Logo} alt="logo" />
      </Link>

      <button
        className="md:hidden z-50 flex flex-col justify-between w-6 h-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`block h-0.5 w-full bg-[#e0e1dd] transform transition duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block h-0.5 w-full bg-[#e0e1dd] transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block h-0.5 w-full bg-[#e0e1dd] transform transition duration-300 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>
      <ul
        className={`flex flex-col md:flex-row gap-6 md:gap-10 text-[#e0e1dd] items-center 
  fixed md:static top-0 right-0 h-screen md:h-auto w-2/3 md:w-auto bg-[#0d1b2a] md:bg-transparent 
  p-8 md:p-0 transition-transform duration-300 ease-in-out 
  ${isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"} z-40 md:z-auto`}
      >
        {headeritems.slice(0, 4).map((item, index) => {
          if (Array.isArray(item)) return null; // til tanlash uchun
          const href = item === "home" ? "/" : `/${item}`;
          const isActive = pathname === href;

          return (
            <li
              key={index}
              className={`flex items-center gap-1 cursor-pointer transition-colors ${
                isActive
                  ? "text-yellow-400 font-semibold"
                  : "hover:text-yellow-300"
              }`}
            >
              <ColoredText text="#" />
              <Link href={href} onClick={() => setIsOpen(false)}>
                {item}
              </Link>
            </li>
          );
        })}

        <li>
          <select className="bg-transparent border border-gray-600 px-3 py-1 rounded-lg text-sm text-[#e0e1dd]">
            {SelectItems.map((item: string, i: number) => (
              <option key={i} value={item.toLowerCase()}>
                {item}
              </option> 
            ))}
          </select>
        </li>
      </ul>
    </header>
  );
};

export default Header;
