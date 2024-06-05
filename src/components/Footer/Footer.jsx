import React from 'react';
import footer from "../../assets/images/footer/Footer.jpg";
import foLogo from "../../assets/images/footer/Group.png";

const Footer = () => {
    const myFooter = {
        backgroundImage: `url(${footer})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
        
    };
    return (
        <div className='bg-center' style={myFooter}>
            <div className='container flex flex-wrap text-[16px] text-[#EAECF0] font-normal leading-[24px] pt-[148px] pl-[112px] pb-[146px] pr-[112px]'>
                <div className="logo">
                    <img src={foLogo} alt="footer logo" />
                    <p className="">We shape the art of technology</p>
                    <div className="">
                        <h1 className='text-[18px] text-[#EAECF0] font-normal leading-[24px]'>Bangladesh Address</h1>
                    </div>
                    <div className="">
                        <i className=''></i>
                        <p className="">18/5 Ring Road, Mohammadpur, Dhaka</p>
                    </div>
                    <div className="">
                        <i className=''></i>
                        <p className="">+8801750020408</p>
                    </div>
                    <div className="">
                        <i className=''></i>
                        <p className="">Monday to Friday: 12 PM - 9 PM</p>
                    </div>

                    <div className="text-[18px] text-[#EAECF0] font-normal leading-[24px]">
                        <h1>USA Address</h1>
                    </div>
                    <div className="">
                        <i className=''></i>
                        <p className="">1903 commonwealth st,
                            Houston tx 77006</p>
                    </div>
                    <div className="">
                        <i className=''></i>
                        <p className="">+1 (978) 431-0122</p>
                    </div>
                    <div className="">
                        <i className=''></i>
                        <p className="">career@mediusware.com</p>
                    </div>
                    <div className="">
                        <i className=''></i>
                        <p className="">Monday to Friday: 12 PM - 9 PM</p>
                    </div>



                </div>

                <div className="services">
                    <div className=""><h1 className='text-[24px] text-[#EAECF0] font-medium leading-[24px]'>Services</h1></div>
                    <div className=""><a href="" className="">Software Development </a></div>
                    <div className=""><a href="" className="">UI/UX Design & Dev</a></div>
                    <div className=""><a href="" className="">Web Development</a></div>
                    <div className=""><a href="" className="">API Integration</a></div>
                    <div className=""><a href="" className="">Mobile App Design</a></div>
                    <div className=""><a href="" className="">Front-End developers</a></div>
                    <div className=""><a href="" className="">Full-Stack Developers</a></div>
                    <div className=""><a href="" className="">NodeJs Developers</a></div>
                    <div className=""><a href="" className="">JavaScript Developers</a></div>
                    <div className=""><a href="" className="">React Developers</a></div>
                    <div className=""><a href="" className="">PHP Developers</a></div>
                    <div className=""><a href="" className="">Rust Developers</a></div>
                    <div className=""><a href="" className="">GoLang Developers  </a></div>


                </div>
                <div className="services2">
                    <div className=""><a href="" className="">Python Developers</a></div>
                    <div className=""><a href="" className="">IOS Developers</a></div>
                    <div className=""><a href="" className="">Android Developers</a></div>
                    <div className=""><a href="" className="">WordPress Developers</a></div>
                    <div className=""><a href="" className="">nopCommerce Developers</a></div>
                    <div className=""><a href="" className="">SQL Developers</a></div>
                    <div className=""><a href="" className="">NoSQL Developers</a></div>
                    <div className=""><a href="" className="">QA Engineers</a></div>
                    <div className=""><a href="" className="">Scrum Master</a></div>
                    <div className=""><a href="" className="">DevOps Engineer</a></div>
                </div>
                <div className="company">
                    <div className=""><h1 className='text-[24px] text-[#EAECF0] font-medium leading-[24px]'>Company</h1></div>
                    <div className=""><a href="">Services</a></div>
                    <div className=""><a href="">About Us</a></div>
                    <div className=""><a href="">FAQs</a></div>
                    <div className=""><a href="">Contact</a></div>
                </div>
                <div className="getInTouch">
                    <div className="">
                        <h1 className='text-[24px] text-[#EAECF0] font-medium leading-[24px]'>Get In Touch</h1>
                    </div>
                    <div className="">
                        <i className=''></i>
                        <p className="">+88 0145481421512 ( Reception )</p>
                    </div>
                    <div className="">
                        <i className=''></i>
                        <p className="">Sales@mediusware.com( Marketing & Sales )</p>
                    </div>
                    <div className="">
                        <i className=''></i>
                        <p className="">+1 (978) 431-0122 ( Marketing & Sales )</p>
                    </div>
                    <div className="">
                        <i className=''></i>
                        <p className="">career@mediusware.com ( Marketing & Sales )</p>
                    </div>
                    <div className="">
                        <i className=''></i>
                        <p className="">+1 (978) 431-0122 ( HR )</p>
                    </div>
                    <div className="">
                        <i className=''></i>
                        <p className="">career@mediusware.com (HR)</p>
                    </div>
                    <div className="">
                        <i className=''></i>
                        <p className="">Monday to Friday: 12 PM - 9 PM</p>
                    </div>
                    <div className="">
                        <a href="#" className=""><i className="">1</i></a>
                        <a href="#" className=""><i className="">2</i></a>
                        <a href="#" className=""><i className="">3</i></a>
                        <a href="#" className=""><i className="">4</i></a>
                    </div>


                </div>

            </div>
            <div>
                <p className='text-center text-white text-normal text-[18px] border-t border-[#344054]'>&copy; 2023 Mediusware. All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;
