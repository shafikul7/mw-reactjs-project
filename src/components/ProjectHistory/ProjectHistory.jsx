// import React from 'react';
import img1 from "../../assets/images/icon/Clients.svg";
import img3 from "../../assets/images/icon/Country.svg";
import img2 from "../../assets/images/icon/Experience.svg";
import img4 from "../../assets/images/icon/Project.svg";

const ProjectHistory = () => {
  const History = [
    {
      id: 1,
      image: img1,
      heading: "Years experience",
      count: "7+",
    },
    {
      id: 2,
      image: img2,
      heading: "Happy Clients",
      count: "500+",
    },
    {
      id: 3,
      image: img3,
      heading: "Countries Served",
      count: "20+",
    },
    {
      id: 4,
      image: img4,
      heading: "Project Complete",
      count: "700+",
    },
  ];

  return (
    // pt-4
    <div className="bg-bgColor pt-[100px] pb-[96px] px-[112px]">
      {/* hover:hidden */}
      {/* class="grid lg:grid-cols-4 grid-cols-2 gap-6" */}
      {/* lg:flex lg:gap-[32px] gap-[16px] */}
      <div className="container grid lg:grid-cols-4 grid-cols-2 lg:gap-6 gap-3 overflow-hidden">
        {History.map((content) => (
          <div
            className=" bg-white w-[167px] h-[188px] md:w-[400px] md:h-[400px] rounded-xl shadow-lg hover:rotate-[-1deg] hover:bg-headerBgSm"
            key={content.id}
          >
            <div className="">
              <img
                src={content.image}
                className="lg:py-[24px] lg:ml-[21px] hover:text-white"
              />
            </div>
            <div className="lg:py-[24px] lg:px-[32px]">
              <h1 className="text-base lg:text-[32px] text-paraColor font-bold hover:text-white">
                {content.heading}
              </h1>
            </div>
            <div className="border-t-2 border-indigo-500 py-[24px] px-[32px]">
              <h3 className="lg:text-[80px] text-2xl text-headerBgSm font-bold hover:text-white">
                {content.count}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* hover:block hidden */}
      {/* <div className="container  flex">
        {History.map((content) => (
          <div className=" bg-white md:w-[400px] md:h-[400px] rounded-xl shadow-lg hover:rotate-[-1deg] hover:bg-headerBgSm" key={content.id}>
            <div className="">
              <img src={content.image} className="py-[24px] ml-[21px] hover:text-white" />
            </div>
            <div className="py-[24px] px-[32px]">
              <h1 className="text-base lg:text-[32px] text-paraColor font-bold hover:text-white">{content.heading}</h1>
            </div>
            <div className="border-t-2 border-indigo-500 py-[24px] px-[32px]">
              <h3 className="lg:text-[80px] text-2xl text-headerBgSm font-bold hover:text-white">{content.count}</h3>
            </div>
          </div>

        ))}
      </div> */}
    </div>
  );
};

export default ProjectHistory;
