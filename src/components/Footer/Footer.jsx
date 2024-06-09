// import React from "react";
import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
import footer from "../../assets/images/footer/Footer.jpg";
import foLogo from "../../assets/images/footer/Group.png";
// import { MdCall } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { FaClock, FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const myFooter = {
    backgroundImage: `url(${footer})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="" style={myFooter}>
      <div className="container flex-none md:flex-auto lg:flex text-[16px] text-[#EAECF0] font-normal leading-[24px] pt-[148px] pl-[112px] pb-[146px] pr-[112px]">
        <div className="logo">
          <img src={foLogo} alt="footer logo" />
          <p className="">We shape the art of technology</p>
          <div className="">
            <h1 className="text-[18px] text-[#EAECF0] font-normal leading-[24px]">
              Bangladesh Address
            </h1>
          </div>
          <div className="flex">
            <i className="">
              <FaLocationDot />
            </i>
            <p className="">18/5 Ring Road, Mohammadpur, Dhaka</p>
          </div>
          <div className="flex">
            <i className="">
              <TbPhoneCall />
            </i>
            <p className="">+8801750020408</p>
          </div>
          <div className="flex">
            <i className="">
              <FaClock />
            </i>
            <p className="">Monday to Friday: 12 PM - 9 PM</p>
          </div>

          <div className="text-[18px] text-[#EAECF0] font-normal leading-[24px]">
            <h1>USA Address</h1>
          </div>
          <div className="flex">
            <i className="">
              <FaLocationDot />
            </i>
            <p className="">1903 commonwealth st, Houston tx 77006</p>
          </div>
          <div className="flex">
            <i className="">
              {" "}
              <TbPhoneCall />
            </i>
            <p className="">+1 (978) 431-0122</p>
          </div>
          <div className="flex">
            <i className="">
              <BiLogoGmail className="text-white" />
            </i>
            <p className="">career@mediusware.com</p>
          </div>
          <div className="flex">
            <i className="">
              <FaClock />
            </i>
            <p className="">Monday to Friday: 12 PM - 9 PM</p>
          </div>
        </div>

        <div className="services">
          <div className="">
            <h1 className="text-[24px] text-[#EAECF0] font-medium leading-[24px]">
              Services
            </h1>
          </div>
          <div className="">
            <a href="" className="">
              Software Development{" "}
            </a>
          </div>
          <div className="">
            <a href="" className="">
              UI/UX Design & Dev
            </a>
          </div>
          <div className="">
            <a href="" className="">
              Web Development
            </a>
          </div>
          <div className="">
            <a href="" className="">
              API Integration
            </a>
          </div>
          <div className="">
            <a href="" className="">
              Mobile App Design
            </a>
          </div>
          <div className="">
            <a href="" className="">
              Front-End developers
            </a>
          </div>
          <div className="">
            <a href="" className="">
              Full-Stack Developers
            </a>
          </div>
          <div className="">
            <a href="" className="">
              NodeJs Developers
            </a>
          </div>
          <div className="">
            <a href="" className="">
              JavaScript Developers
            </a>
          </div>
          <div className="">
            <a href="" className="">
              React Developers
            </a>
          </div>
          <div className="">
            <a href="" className="">
              PHP Developers
            </a>
          </div>
          <div className="">
            <a href="" className="">
              Rust Developers
            </a>
          </div>
          <div className="">
            <a href="" className="">
              GoLang Developers{" "}
            </a>
          </div>
        </div>
        <div className="services2">
          <div className="">
            <a href="" className="">
              Python Developers
            </a>
          </div>
          <div className="">
            <a href="" className="">
              IOS Developers
            </a>
          </div>
          <div className="">
            <a href="" className="">
              Android Developers
            </a>
          </div>
          <div className="">
            <a href="" className="">
              WordPress Developers
            </a>
          </div>
          <div className="">
            <a href="" className="">
              nopCommerce Developers
            </a>
          </div>
          <div className="">
            <a href="" className="">
              SQL Developers
            </a>
          </div>
          <div className="">
            <a href="" className="">
              NoSQL Developers
            </a>
          </div>
          <div className="">
            <a href="" className="">
              QA Engineers
            </a>
          </div>
          <div className="">
            <a href="" className="">
              Scrum Master
            </a>
          </div>
          <div className="">
            <a href="" className="">
              DevOps Engineer
            </a>
          </div>
        </div>
        <div className="company">
          <div className="">
            <h1 className="text-[24px] text-[#EAECF0] font-medium leading-[24px]">
              Company
            </h1>
          </div>
          <div className="">
            <a href="">Services</a>
          </div>
          <div className="">
            <a href="">About Us</a>
          </div>
          <div className="">
            <a href="">FAQs</a>
          </div>
          <div className="">
            <a href="">Contact</a>
          </div>
        </div>
        <div className="getInTouch">
          <div className="">
            <h1 className="text-[24px] text-[#EAECF0] font-medium leading-[24px]">
              Get In Touch
            </h1>
          </div>
          <div className="flex">
            <i className="">
              <TbPhoneCall />
            </i>
            <p className="">+88 0145481421512 ( Reception )</p>
          </div>
          <div className="">
            <i className="">
              <BiLogoGmail className="text-white" />
            </i>
            <p className="">Sales@mediusware.com( Marketing & Sales )</p>
          </div>
          <div className="flex">
            <i className="">
              <TbPhoneCall />
            </i>
            <p className="">+1 (978) 431-0122 ( Marketing & Sales )</p>
          </div>
          <div className="">
            <i className="">
              <BiLogoGmail className="text-white" />
            </i>
            <p className="">career@mediusware.com ( Marketing & Sales )</p>
          </div>
          <div className="flex">
            <i className="">
              <TbPhoneCall />
            </i>
            <p className="">+1 (978) 431-0122 ( HR )</p>
          </div>
          <div className="">
            <i className="">
              <BiLogoGmail className="text-white" />
            </i>
            <p className="">career@mediusware.com (HR)</p>
          </div>
          <div className="">
            <i className="">
              <FaClock />
            </i>
            <p className="">Monday to Friday: 12 PM - 9 PM</p>
          </div>
          <div className="flex">
            <a href="#" className="">
              <FaFacebook />
            </a>
            <a href="#" className="">
              <FaLinkedinIn />
            </a>
            <a href="#" className="">
              <FaTwitter />
            </a>
            <a href="#" className="">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-center text-white text-normal text-[18px] border-t border-[#344054] p-6">
          &copy; 2023 Mediusware. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
