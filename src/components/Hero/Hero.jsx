// import React from "react";
import background from "../../assets/images/hero/banner.jpg";
import img4 from "../../assets/images/hero/img1.png";
import img1 from "../../assets/images/hero/img2.png";
import img2 from "../../assets/images/hero/img3.png";
import img3 from "../../assets/images/hero/img4.png";
import img5 from "../../assets/images/hero/img5.png";

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
          <h1 className=" uppercase font-bold lg:text-[80px] text-[32px] leading-[44px] lg:leading-[90px] pt-[96px] ">
            We shape the art of technology
          </h1>
          <h1 className="uppercase font-bold lg:text-[80px] text-[32px] leading-[44px] pt-[8px]">
            ERP <span className="text-secondary">Solution|</span>
          </h1>
          <p className="text-[24px] leading-[24px] font-normal p-3">
            Generative-Driven Development with the affordability and scale of
            Nearshore outsourcing all in your time zone.
          </p>
          <div className="text-[22px] ">
            <button className="mx-3 bg-[#0060AF] hover:bg-transparent text-white font-bold hover:text-white py-[18px] px-[32px] border border-blue-500 hover:border-transparent rounded lg:rounded-xl">
              Request a quote
            </button>
            <button className="bg-transparent hover:bg-[#0060AF] text-white font-bold hover:text-white py-[18px] px-[32px] border border-blue-500 hover:border-transparent rounded lg:rounded-xl">
              Hire Developers
            </button>
          </div>
        </div>
        <div className="flex align-bottom justify-center pt-7">
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
