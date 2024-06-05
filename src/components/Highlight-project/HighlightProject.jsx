// import React from 'react';
import Highlight from "../../assets/images/highlight.gif";
import img1 from "../../assets/images/tools/img (1).png";
import img2 from "../../assets/images/tools/img (2).png";
import img3 from "../../assets/images/tools/img (3).png";
import img4 from "../../assets/images/tools/img (4).png";
import img5 from "../../assets/images/tools/img (5).png";

const HighlightProject = () => {
  return (
    <div className="">
      <div className="container">
        <h1 className="text-center text-[48px] font-bold leading-[60px]">
          Our Highlight<span className="text-secondary "> Projects</span>
        </h1>
        <p className="text-center text-[24px] font-medium leading-[32px]">Empowering Businesses Through Innovative IT Solutions: A Showcase of Our Highlight Project Excellence.</p>
        <div className="flex">
          <div className="bg-primary">
            <button className="">Industry | Construction</button>
            <h1 className="">VidaDynamics</h1>
            <p className="">At Vida Projects, our goal goes beyond just offering tools, it's about creating a world where construction project management is intuitive,</p>
            <div className="flex">
              <div className="">
                <span className="">40%</span>
                <p className="">Increase in placed order rate</p>
              </div>
              <div className="">
                <span className="">9.10 x</span>
                <p className="">Return on investment</p>
              </div>
              <div className="">
                <span className="">45%</span>
                <p className="">Increase in placed order rate</p>
              </div>
            </div>
            <div className="">
              <h2 className="">Tools</h2>
              <div className="flex">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
              </div>
            </div>
          </div>
          <div className="">
            <img src={Highlight} alt="" />
          </div>
        </div>
      </div>


    </div>
  );
};

export default HighlightProject;
