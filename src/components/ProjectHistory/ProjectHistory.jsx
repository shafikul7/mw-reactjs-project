// import React from 'react';
import img1 from "../../assets/images/icon/Clients.svg";
import img2 from "../../assets/images/icon/Experience.svg";
import img3 from "../../assets/images/icon/Group.svg";
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
    // bg-bgColor
    <div className="bg-bgColor pt-4">
      {/* pt-[0px] pb-[96px] px-[112px] */}
      {/* grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-[32px]  gap-[16px] text-center h-[400px] */}
      <div className="container">
        {History.map((content) => (
          // border rounded-md
          <div className=" bg-white flex" key={content.id}>
            <div className="">
              {/* py-[24px] px-[32px] */}
              <img src={content.image} className="" />
              {/* text-base lg:text-[32px] text-paraColor py-[24px] px-[32px] */}
              <h1 className="">{content.heading}</h1>
              {/* lg:text-[80px] text-headerBgSm border-t-2 border-indigo-500 py-[24px] px-[32px] */}
              <h3 className="">{content.count}</h3>
              {/* text-2xl  sm font size*/}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectHistory;
