import React from "react";
import { BiPhone } from "react-icons/bi";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black/30 w-full backdrop-blur-sm text-gray-300 py-10 ">
      <div className="max-w-[80%] mx-auto  px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">MyCompany</h2>
          <p className="text-sm">
            We provide the best services to our customers. Quality, reliability
            and efficiency are our core values.
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact us</h3>
          <div className="flex flex-col gap-5">
            <div className="flex gap-2 items-center">
              <BiPhone size={20} />
              <p>+998 (99) 961 - 51 - 20</p>
            </div>
            <div className="flex gap-2 items-center">
              <MdEmail size={20} />
              <p>sferaitsolutions@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm">
        © {new Date().getFullYear()} Sfera IT solution.
      </div>
    </footer>
  );
};

export default Footer;
