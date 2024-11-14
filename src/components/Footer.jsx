
import React from 'react';
import { Link } from 'react-router-dom';
import Button from './common/Button';
import Heading62 from './common/Heading62';

const FooterList = ({ title, items, links }) => {
    return (
        <div className=''>
            <h3 className="font-bold text-lg text-left text-black leading-[39px]">{title}</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index} className="flex  items-center text-left text-[16px] font-normal font-inter leading-[39px] ">
                        {links && links[index] ? (
                            <Link to={links[index]} className=' text-[#0A142F]'>{item}</Link>
                        ) : (
                            item
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

function Footer() {
    return (
        <footer className="mb-20 mx-auto w-[96%] xl:w-[75%]">
        
                <hr className='  border-[#00AEEF]' />
                <div className="py-[68px] ">
                    <div className="flex gap-[36px] justify-start md:justify-center xl:gap-[56px] flex-wrap  ">
                        <FooterList
                            title="Hosting"
                            items={["Promote Hangar", "How to host responsibly"]}
                            links={["/promote-hangar", "/how-to-host-responsibly"]}
                        />

                        <FooterList
                            title="Support"
                            items={[
                                "Contact us",
                                "Safety information",
                                "Cancellation options",

                            ]}
                            links={[
                                "/contact-us",
                                "/safety-information",
                                "/cancellation-options",

                            ]}
                        />

                        <FooterList
                            title="Quick Links"
                            items={[
                                "Our Partners",
                                "Newsroom",
                                "Visit our community forum",
                                "Footprint Calculator",
                                "About us",
                            ]}
                            links={[
                                "/our-partners",
                                "/newsroom",
                                "/community-forum",
                                "/footprint-calculator",
                                "/about-us",
                            ]}
                        />
                      <div className='lg:pl-[43px] flex-1'>
                      <Heading62 text={'Sign In to get exclusive discounts !'} customClass={'!text-black !pt-0 !leading-[30px] !text-[16px] !w-full !text-start'} />
                        <div className='flex border rounded-md max-w-[307px] mt-[17px] '>
                            <input type="text" placeholder='Enter your email' className='text-[14px]  pl-3 border-none' />
                            <Button text={'subscribe'} customClass={'!rounded-none !rounded-r-md'} onClick={alert} />
                            
                        </div>
                        <p className='text-[16px] font-bold leading-[29px] pt-[19px]'>Social Links</p>
                            <div className='flex gap-5 pb-4 items-center'>
                                <img src="/images/Shape.png" alt="" className='w-[17px]' />
                                <p className='text-[14px] font-normal'>ABC Company, 123 East, 17th Street, St. louis 10001</p>
                            </div>
                            <div className='flex gap-5 items-center'>
                                <img src="/images/Rounded_1_.png" alt=""  className='w-[17px] h-[17px]'/>
                                <p  className='text-[14px] font-normal'>(123) 456-7890</p>
                            </div>

                      </div>
                    </div>

                </div>
                <hr className='  border-[#00AEEF]' />

        

        </footer>
    );
}

export default Footer;