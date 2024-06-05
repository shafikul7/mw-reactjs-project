// import React from 'react';
import {
  default as img1,
  default as img5,
} from "../../assets/images/IndustryExpertise/industryA.png";
import img2 from "../../assets/images/IndustryExpertise/industryB.png";
import img3 from "../../assets/images/IndustryExpertise/industryC.png";
import img4 from "../../assets/images/IndustryExpertise/industryD.png";
import img6 from "../../assets/images/IndustryExpertise/industryF.png";
import img7 from "../../assets/images/IndustryExpertise/industryG.png";
import img8 from "../../assets/images/IndustryExpertise/industryH.png";

const IndustryExpertise = () => {
  const Expertise = [
    {
      id: 1,
      image: img1,
      heading: "Bank",
    },
    {
      id: 2,
      image: img2,
      heading: "Real estate",
    },
    {
      id: 3,
      image: img3,
      heading: "Transport",
    },
    {
      id: 4,
      image: img4,
      heading: "Media",
    },
    {
      id: 5,
      image: img5,
      heading: "Education",
    },
    {
      id: 6,
      image: img6,
      heading: "Government",
    },
    {
      id: 7,
      image: img7,
      heading: "Construction",
    },
    {
      id: 8,
      image: img8,
      heading: "Medical",
    },
    {
      id: 9,
      image: img5,
      heading: "Government",
    },
    {
      id: 10,
      image: img6,
      heading: "Transport",
    },
    {
      id: 11,
      image: img7,
      heading: "Government",
    },
    {
      id: 12,
      image: img8,
      heading: "Transport",
    },
  ];
  return (
    <div className="">
      <div className="container">
        <h1 className="text-center text-[48px] font-bold leading-[60px]">
          Industry <span className="text-secondary">Expertise</span>
        </h1>
        <p className="text-center text-[24px] font-normal leading-[32px]">
          Explore our expertise in crafting innovative solutions across various
          domains—discover the perfect fit for yours!
        </p>
        {/* grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  */}
        <div className=" flex flex-wrap gap-[32px]">
          {Expertise.map((content) => (
            //
            <div
              className="lg:w-[400px] w-[167px] m-0 lg:h-[400px] h-[188px] border-2 border-rose-600 rounded-md lg:p-[40px] p-[16px] bg-[#FCFCFD] "
              key={content.id}
            >
              {/* object-center */}
              <img src={content.image} className="" />
              <h1 className="text-[30px] lg:text-[48px] text-paraColor leading-[60px] font-bold text-center">
                {content.heading}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryExpertise;
