import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdCall } from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-headerBgSm lg:py-[12px] lg:px-[112px] py-[12px]">
      <div className="container">
        {/*  lg: */}
        <div className="flex lg:justify-between align-middle lg:gap-3 ">
          {/* gap-2 align-middle  */}
          <div className="flex justify-start">
            <div className="flex gap-2">
              <MdCall className="text-white" />
              <a
                href=""
                className="text-white text-[10px] lg:leading-[20px] leading-[16px] lg:text-[14px] font-medium"
              >
                +880 1750 02040
              </a>
            </div>
            <span className="text-[11px] mx-2 lg:mx-3 align-middle text-white">
              |
            </span>
            <div className="flex gap-2">
              <BiLogoGmail className="text-white" />
              <a
                href=""
                className="text-white text-[10px] lg:leading-[20px] leading-[16px] lg:text-[14px] font-medium"
              >
                contact@mediusware.com
              </a>
            </div>
          </div>
          {/*   lg:gap-3 */}
          <div className="flex justify-end  lg:gap-2 gap-1">
            <FaFacebook className="rounded-full bg-white text-headerBgSm text-[16px] p-[2px]" />
            <FaTwitter className="rounded-full bg-white text-headerBgSm text-[16px] p-[2px]" />
            <FaLinkedinIn className="rounded-full bg-white text-headerBgSm text-[16px] p-[2px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
