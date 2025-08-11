import ColoredText from "@/shared/components/colored-text";
import Link from "next/link";
import React from "react";
import Logo from '@/app/assets/sfera-logo.png'
import Image from "next/image";

const Header = () => {
  const headeritems: (string | string[])[] | any = [
    "home",
    "about",
    "connecting",
    ["ENG", "RU", "UZ"],
  ];
  //   const PoPitems = headeritems.pop()
  const SelectItems = headeritems[headeritems.length - 1];
  console.log(SelectItems);

  return (
    <header className="w-screen absolute top-0 left-0 flex justify-between items-center py-5 px-10 lg:px-50">
      <Link href={"/"}>
      <Image width={200} src={Logo} alt="logo"/>
      </Link>
      <ul className="flex gap-3 text-[#e0e1dd]">
        {headeritems.slice(0, 3).map((item: any) => (
          <li className="flex">
            <ColoredText text="#" />
            {item}
          </li>
        ))}
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
