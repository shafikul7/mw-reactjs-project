// import React from "react";
import { LuArrowUpRight } from "react-icons/lu";
import background from "../../assets/images/hero/banner.jpg";
import img4 from "../../assets/images/hero/img1.png";
import img1 from "../../assets/images/hero/img2.png";
import img2 from "../../assets/images/hero/img3.png";
import img3 from "../../assets/images/hero/img4.png";
import img5 from "../../assets/images/hero/img5.png";
import TypewriterEffect from "../TypewriterEffect/TypewriterEffect";

const Hero = () => {
  const myStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="bg-center h-[740px]" style={myStyle}>
      <div className="container">
        <div className="text-center text-white">
          {/* text-white drop-shadow-md xl:text-[80px] md:text-[60px] sm:text-[40px] font-bold text-center  2xl:leading-[100px] xl:leading-[90px] lg:leading-[80px] md:leading-[80px] leading-[50px] xl:pt-[96px] md:pt-[60px] pt-[40px] */}
          <h1 className=" uppercase font-bold lg:text-[80px] text-[32px] leading-[44px] lg:leading-[90px] pt-[96px] ">
            We shape the art of technology
          </h1>
          <TypewriterEffect></TypewriterEffect>

          <p className="text-[24px] leading-[24px] font-normal p-3 text-center">
            Generative-Driven Development with the affordability and scale of
            Nearshore outsourcing all in your time zone.
          </p>
          <p className="text-[24px] leading-[24px] font-normal p-3 text-center">
            all in your time zone.
          </p>
          {/* flex-col md:flex-row mt-6 lg:mt-[56px] gap-[32px] flex*/}
          <div className="text-[22px]">
            {/* class="max-w-[400px] mx-auto hover-effect bg-primary-3 py-3 lg:py-4 px-8 rounded-lg text-white flex md:inline-flex justify-center items-center gap-4" */}
            {/* mx-3 bg-[#0060AF] hover:bg-transparent text-white font-bold hover:text-white py-[18px] px-[32px] border border-blue-500 hover:border-transparent rounded lg:rounded-xl */}
            {/* class=" hover-effect py-3 lg:py-4 px-8 rounded-lg  text-white flex md:inline-flex justify-center items-center gap-4 max-w-[400px] mx-auto border hover:bg-white hover:text-slate-900 transition-colors duration-300" */}
            <a className="mr-5 max-w-[400px]  hover-effect bg-primary-3 py-3 lg:py-4 gap-4 hover-effect  px-8 rounded-lg  text-white flex md:inline-flex justify-center items-center   mx-auto border hover:bg-white hover:text-slate-900 transition-colors duration-300 bg-primary hover:text-primary">
              Request a quote
              <LuArrowUpRight />
            </a>
            <a className="max-w-[400px]  hover-effect py-3 lg:py-4 gap-4 hover-effect  px-8 rounded-lg  text-white flex md:inline-flex justify-center items-center   mx-auto border hover:bg-white hover:text-slate-900 transition-colors duration-300 bg-transparent hover:text-primary">
              Hire Developers
              <LuArrowUpRight />
            </a>
          </div>
        </div>
        <div className="flex align-bottom justify-center pt-7 p-10">
          <div className="flex ">
            <img src={img5} alt="" className="" />
            <img src={img1} alt="" className="" />
          </div>
          <div className="flex align-bottom">
            <img src={img4} alt="" className="" />
            <img src={img2} alt="" className="" />
            <img src={img3} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
