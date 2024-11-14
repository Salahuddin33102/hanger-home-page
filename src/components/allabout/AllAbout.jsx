import React from 'react'
import Heading62 from '../common/Heading62';
import Paragraph from '../common/Paragraph';
import Button from '../common/Button';

function AllAbout() {
    return (
        <div className='      lg:flex   gap-[47px]    mx-auto max-w-[86%] pt-20'>
            <div className='flex-1'>
                <Heading62 text={'Discover What Hangar Direct is All About'} customClass={'text-black !text-[36px] mx-[0px] !pt-[0px] !w-full !leading-[43px] !text-start'} />
                <Paragraph text={'At Hangar Direct, we’re revolutionizing the way you buy, sell, and rent aircraft hangars. As the first C2C (customer-to-customer) hangar marketplace, we connect hangar owners with pilots, businesses, and aviation enthusiasts seeking the perfect space for their aircraft.'} customClass={'!text-black !text-[18px] mx-[0px] !w-full !text-start !text-[#282828B2] !leading-[22px] !pt-[20px] !pb-[15px]'} />


                <div className='pb-5  xl:pb-[56px]'>

                    <li className='text-[18px] font-normal text-[#282828B2] ' >Simple Hassle Free Rentals</li>
                    <li className='text-[18px] font-normal text-[#282828B2] '>Community- Driven Marketplace</li>
                    <li className='text-[18px] font-normal text-[#282828B2] '>Comprehensive Hangar Listings</li>
                    <li className='text-[18px] font-normal text-[#282828B2] '>Competitive Pricing</li>
                </div>

                <Button text={'Read More'} customClass={'!text-[#00AEEF] !px-[41px] !py-[7px] !border !border-[#00AEEF] !bg-white '} />
            </div>
            <div className='  w-full lg:w-1/2 pt-5  lg:pt-0 hidden lg:block'>
                <img src="/images/image (21).png" alt="" className=' h-[432px] w-full' />
            </div>
        </div>
    )
}

export default AllAbout;