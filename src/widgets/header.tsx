"use client";
import ColoredText from "@/shared/components/colored-text";
import Link from "next/link";
import React from "react";
import Logo from "@/app/assets/sfera-logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const headeritems: (string | string[])[] | any = [
    "home",
    "portfolio",
    "about",
    "connecting",
    ["ENG", "RU", "UZ"],
  ];
  //   const PoPitems = headeritems.pop()
  const SelectItems = headeritems[headeritems.length - 1] as string[];

  return (
    <header className="w-screen absolute top-0 left-0 flex justify-between items-center py-5 px-10 lg:px-50">
      <Link href={"/"}>
        <Image width={200} src={Logo} alt="logo" />
      </Link>
      <ul className="flex gap-5 text-[#e0e1dd]">
        {headeritems.slice(0, 4).map((item, index)=> {
          if (Array.isArray(item)) return null; // til tanlash uchun bo‘lishi kerak
          const href = item === "home" ? "/" : `/${item}`;
          const isActive = pathname === href;

          return (
            <li
              key={index}
              className={`flex items-center gap-1 cursor-pointer transition-colors ${
                isActive ? "text-yellow-400 font-semibold" : "hover:opacity-80"
              }`}
            >
              <ColoredText text="#" />
              <Link href={href}>{item}</Link>
            </li>
          );
        })}
        <li>
          <select>
            {SelectItems.map((item: any) => (
              <option value="eng">{item}</option>
            ))}
          </select>
        </li>
      </ul>
    </header>
  );
};

export default Header;
