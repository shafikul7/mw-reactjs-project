import img1 from "../../assets/images/industry/Brainbi.svg";
import img2 from "../../assets/images/industry/celtEnglish.svg";
import img3 from "../../assets/images/industry/Infostream.svg";
import img4 from "../../assets/images/industry/windoware.svg";
import img5 from "../../assets/images/industry/woo-study.svg";

const IndustryLeaders = () => {
  const Images = [
    {
      id: 1,
      image: img1,
    },
    {
      id: 2,
      image: img2,
    },
    {
      id: 3,
      image: img3,
    },
    {
      id: 4,
      image: img4,
    },
    {
      id: 5,
      image: img5,
    },
    {
      id: 6,
      image: img1,
    },
    // {
    //     id: 7,
    //     image: img1
    // },
    // {
    //     id: 8,
    //     image: img2
    // },
    // {
    //     id: 9,
    //     image: img3
    // },
    // {
    //     id: 10,
    //     image: img4
    // },
    // {
    //     id: 11,
    //     image: img5
    // },
    // {
    //     id: 12,
    //     image: img1
    // }
    // ,
    // {
    //     id: 13,
    //     image: img5
    // },
    // {
    //     id: 14,
    //     image: img1
    // }
  ];

  return (
    <div className="bg-bgColor">
      <h1 className="text-center text-[48px] font-bold leading-[60px]">
        We are Trusted by <span className="text-secondary ">Industry</span>{" "}
        Leaders
      </h1>
      {/* <div className="grid grid-cols-3 lg:grid-cols-6 gap-x-8"> */}
      <div className="flex flex-nowrap  py-8 px-8">
        {Images.map((content) => (
          <div className=" " key={content.id}>
            <div
              className="flex lg:w-[320px] lg:h-[148px] w-[120px] h-[56px] justify-center align-middle  border-2 border-rose-600 rounded-md  border-gradient2"
              key={content.id}
            >
              <img src={content.image} />
            </div>
          </div>
        ))}
      </div>
      <div className="lg:flex flex-nowrap  hidden ">
        {Images.map((content) => (
          <div className="" key={content.id}>
            <div
              className="flex lg:w-[320px] lg:h-[148px] w-[120px] h-[56px] justify-center align-middle  border-2 border-rose-600 rounded-md border-gradient1"
              key={content.id}
            >
              <img src={content.image} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryLeaders;
