import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdCall } from "react-icons/md";

const Header = () => {
  return (
    <div className="top-header lg:bg-headerBgLg bg-headerBgSm">
      <div className="container">
        <div className="p-[12px] flex align-middle justify-between">
          <div className="flex gap-2 align-middle justify-start">
            <MdCall className="text-white" />
            <a href="" className="text-white text-xs lg:text-sm">
              +880 1750 02040
            </a>
            <BiLogoGmail className="text-white" />
            <a href="" className="text-white text-xs lg:text-sm">
              contact@mediusware.com
            </a>
          </div>
          <div className="flex justify-end  gap-3 text-white ">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
