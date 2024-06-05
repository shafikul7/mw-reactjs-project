import React from 'react';
import strategy from "../../assets/images/Strategy/RectangleBig.jpg";
import strategySmall from "../../assets/images/Strategy/RectangleSmall.jpg";

const Strategy = () => {
    return (
        <div className=''>
            <div className="container">
                <div className="flex">
                    <div className="">
                        <p>Why Choose Mediusware</p>
                        <h2 className="">Build A Strategy That Puts An Your Money To Work.</h2>
                        <p className="">This is the main factor that sets us apart from our and allows us deliver a Special ist
                            business consul Our team applies its ranging experience strategies us deliver a
                            specialist business consul Our team.</p>
                        <button className='bg-[#C2D9EC] text-[#0060AF] rounded-md px-[16px] py-[8px] font-bold  leading-[26px]'>10 Years of Experience</button>
                        <div>
                            <i>1</i>
                            <p>This is the main factor that sets us apart from our and allows us deliver a Special.</p>
                        </div>
                        <div>
                            <i>2</i>
                            <p>This is the main factor that sets us apart from our and allows us deliver a Special.</p>
                        </div>
                        <div>
                            <i>3</i>
                            <p>This is the main factor that sets us apart from our and allows us deliver a Special.</p>
                        </div>
                        <div className="flex">
                            <div className="bg-[#E6EFF7] text-primary py-[16px] px-[32px] rounded-xl">
                                <h1 className=" text-[66px]  leading-[72px] font-bold">70+</h1>
                                <p className="text-[18px] leading-[26px] font-medium">Team Members</p>
                            </div>
                            <div className="bg-[#E6F6F4] text-[#008F79] py-[16px] px-[32px] rounded-xl">
                                <h1 className="text-[66px] leading-[72px] font-bold">20+</h1>
                                <p className="text-[18px] leading-[26px] font-medium">Countries Worldwide</p>
                            </div>
                            <div className="bg-[#F5E9F4] text-[#831F7A] py-[16px] px-[32px] rounded-xl">
                                <h1 className="text-[66px] leading-[72px] font-bold">100%</h1>
                                <p className="text-[18px] leading-[26px] font-medium">Success Rate</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <img src={strategy} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Strategy;
