// import React from "react";
import { FaBars } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

import logo from "../../assets/images/logo/logomain.svg";

const Navbar = () => {
  //   const navLinks = document.querySelector(".nav-links");
  //   function onToggleMenu(e) {
  //     e.name = e.name === "menu" ? "close" : "menu";
  //     navLinks.classList.toggle("top-[96px]");
  //   }
  return (
    // h-16
    <nav className="flex items-center justify-between md:container container py-[24px] px-[112px]">
      <div className=" whitespace-nowrap">
        <img src={logo} alt="Company Logo" />
      </div>

      <div className="nav-links dropdown-menu duration-600 md:static absolute top-full left-0 max-lg:bg-[#FFFFFF30] w-full flex flex-col gap-4 items-center py-2 text-lg font-semibold lg:static lg:flex-row lg:justify-end max-sm:bg-white">
        <ul className="flex flex-col items-center  gap-2  lg:flex-row lg:gap-8">
          <li className="text-[#0060af]">HOME</li>
          <li className="hover:text-[#0060af] ">SERVICES</li>
          <li className="hover:text-[#0060af]">PROJECTS</li>
          <li className="hover:text-[#0060af]  whitespace-nowrap">
            WHY MEDIUSWARE
          </li>
          {/* mr-[28px] */}
          <li className="hover:text-[#0060af] ">BLOG</li>
          <li className="hover:text-[#0060af] ">CAREER</li>
          <li className="hover:text-[#0060af] whitespace-nowrap">OUR TEAM</li>
          <li className="">
            <button
              type="button"
              className="bg-[#0060af] text-white p-2 rounded-md whitespace-nowrap flex  gap-3"
            >
              <i>
                <FiPhoneCall className="justify-center align-middle" />
              </i>
              Book a call
            </button>
          </li>
        </ul>
      </div>

      <div className="toggle-button lg:hidden">
        {/* <ion-icon
          onclick="onToggleMenu(this)"
          name="menu"
          className="text-3xl cursor-pointer md:hidden"
        ></ion-icon> */}
        <FaBars
          onclick="onToggleMenu(this)"
          name="menu"
          className="text-3xl cursor-pointer md:hidden"
        />
      </div>
    </nav>
  );
};

export default Navbar;
