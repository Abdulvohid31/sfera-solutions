"use client";
import ColoredText from "@/shared/components/colored-text";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Logo from "@/app/assets/sfera-logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n/i18n";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const { t } = useTranslation(); 

  const [lang, setLang] = useState<"uz" | "ru" | "en">(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("i18nextLng");
      const shortLang = savedLang ? savedLang.substring(0, 2) : "uz";
      return (shortLang as "uz" | "ru" | "en") || "uz";
    }
    return "uz";
  });

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang); 
      localStorage.setItem("i18nextLng", lang);
    }
  }, [lang]);

  const headeritems: (string | string[])[] = [
    "home",
    "projects",
    "about",
    ["EN", "RU", "UZ"],
  ];
  const SelectItems = headeritems[headeritems.length - 1] as string[];

  const selectedLangLabel = lang === "en" ? "EN" : lang === "ru" ? "RU" : "UZ";

  return (
    <header className="w-full fixed top-0 left-0 flex justify-between items-center py-5 px-6 md:px-10 lg:px-20 bg-[#0d1b2a]/90 backdrop-blur-md z-50">
      <Link href={"/"} className="z-50">
        <Image width={160} src={Logo} alt="logo" />
      </Link>

      {/* Hamburger */}
      <button
        className="md:hidden z-50 flex flex-col justify-between w-6 h-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`block h-0.5 w-full bg-[#e0e1dd] transform transition ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-[#e0e1dd] transition-opacity ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-[#e0e1dd] transform transition ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Menu */}
      <ul
        className={`flex flex-col md:flex-row gap-6 md:gap-10 text-[#e0e1dd] items-center 
          fixed md:static top-0 right-0 h-screen md:h-auto w-2/3 md:w-auto bg-[#0d1b2a] md:bg-transparent 
          p-8 md:p-0 transition-transform duration-300 ease-in-out 
          ${
            isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
          } z-40 md:z-auto`}
      >
        {headeritems.slice(0, 3).map((item, index) => {
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
                {t(item)}
              </Link>
            </li>
          );
        })}

        {/* Language Dropdown */}
        <li className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1 border border-gray-600 px-3 py-1 rounded-lg text-sm text-[#e0e1dd] hover:bg-[#1b263b] transition"
          >
            {selectedLangLabel} <ChevronDown size={16} />
          </button>

          {langOpen && (
            <ul className="absolute right-0 mt-2 w-28 bg-[#0d1b2a] border border-gray-700 rounded-lg shadow-lg">
              {SelectItems.map((item, i) => (
                <li
                  key={i}
                  className="px-4 py-2 cursor-pointer hover:bg-[#1b263b] uppercase"
                  onClick={() => {
                    setLang(item.toLowerCase() as "uz" | "ru" | "en");
                    setLangOpen(false);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </header>
  );
};

export default Header;
