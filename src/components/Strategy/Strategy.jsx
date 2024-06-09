import React from 'react';
import strategy from "../../assets/images/Strategy/RectangleBig.jpg";
import strategySmall from "../../assets/images/Strategy/RectangleSmall.jpg";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdLightMode } from "react-icons/md";



const Strategy = () => {
    return (
        <div className=' pt-6 bg-formBg'>
            <div className="container  ">
                <div className="grid grid-cols-2 ">
                    <div className="row-span-5">
                        <p className='text-[#0060AF] font-medium text-[16px] loading-[24px]'>Why Choose Mediusware</p>
                        <h2 className="text-[#002B4F] font-bold text-[48px] loading-[60px]">Build A Strategy That Puts An <span className="text-secondary"> Your Money To Work.</span></h2>
                        <p className="text-[#344054] font-medium text-[16px] loading-[24px]">This is the main factor that sets us apart from our and allows us deliver a Special ist
                            business consul Our team applies its ranging experience strategies us deliver a
                            specialist business consul Our team.</p>
                        <button className='bg-[#C2D9EC] text-[#0060AF] rounded-md px-[16px] py-[8px] font-bold  leading-[26px]'><MdLightMode />
                            10 Years of Experience</button>
                        <div className="">
                            <div className='flex'>
                                <div className=""><IoMdCheckmarkCircleOutline className="text-secondary"/></div>

                                <dev className='text-[#344054] font-medium text-[18px] loading-[26px]'>This is the main factor that sets us apart from our and allows us deliver a Special.</dev>
                            </div>
                            <div className='flex '>
                               <div className=""> <IoMdCheckmarkCircleOutline className="text-secondary"/></div>

                                <dev className='text-[#344054] font-medium text-[18px] loading-[26px]'>This is the main factor that sets us apart from our and allows us deliver a Special.</dev>
                            </div>
                            <div className='flex '>
                                <div className=""><IoMdCheckmarkCircleOutline className="text-secondary"/></div>

                                <div className='text-[#344054] font-medium text-[18px] loading-[26px]'>This is the main factor that sets us apart from our and allows us deliver a Special.</div>
                            </div>
                        </div>
                        {/* gap-[16px] */}
                        <div className="flex">
                            <div className="bg-[#E6EFF7] text-primary py-[16px] px-[32px] rounded-md shadow-lg">
                                <h1 className=" text-[66px]  leading-[72px] font-bold">70+</h1>
                                <p className="text-[18px] leading-[26px] font-medium">Team Members</p>
                            </div>
                            <div className="bg-[#E6F6F4] text-[#008F79] py-[16px] px-[32px] rounded-md shadow-lg">
                                <h1 className="text-[66px] leading-[72px] font-bold">20+</h1>
                                <p className="text-[18px] leading-[26px] font-medium">Countries Worldwide</p>
                            </div>
                            <div className="bg-[#F5E9F4] text-[#831F7A] py-[16px] px-[32px] rounded-md shadow-lg">
                                <h1 className="text-[66px] leading-[72px] font-bold">100%</h1>
                                <p className="text-[18px] leading-[26px] font-medium">Success Rate</p>
                            </div>
                        </div>
                    </div>
                    <div className="row-span-5">
                        <div className="flex">
                            <div className="">
                                <img src={strategy} alt="" />
                            </div>

                            <div className="">
                                <img src={strategySmall} alt="" />
                            </div>

                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
}

export default Strategy;
