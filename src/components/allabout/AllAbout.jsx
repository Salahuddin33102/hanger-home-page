import React from 'react'
import Heading62 from '../common/Heading62';
import Paragraph from '../common/Paragraph';
import Button from '../common/Button';

function AllAbout() {
    return (

<div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-[30px] lg:gap-[47px] w-full max-w-[1200px] mx-auto px-4 pt-20'>
  {/* Text Section */}
  <div className='flex-1 text-center lg:text-start'>
    <Heading62 
      text={'Discover What Hangar Direct is All About'} 
      customClass={'text-black !text-[24px] md:!text-[30px] lg:!text-[36px] mx-[0px] !pt-[0px] !w-full !leading-[1.2]'} 
    />
    <Paragraph 
      text={'At Hangar Direct, we’re revolutionizing the way you buy, sell, and rent aircraft hangars. As the first C2C (customer-to-customer) hangar marketplace, we connect hangar owners with pilots, businesses, and aviation enthusiasts seeking the perfect space for their aircraft.'} 
      customClass={'!text-black !text-[16px] md:!text-[18px] mx-[0px] !w-full !leading-[22px] !pt-[20px] !pb-[15px]'} 
    />

    <div className='pb-5 xl:pb-[56px]'>
      <li className='text-[16px] md:text-[18px] font-normal text-[#282828B2]'>Simple Hassle-Free Rentals</li>
      <li className='text-[16px] md:text-[18px] font-normal text-[#282828B2]'>Community-Driven Marketplace</li>
      <li className='text-[16px] md:text-[18px] font-normal text-[#282828B2]'>Comprehensive Hangar Listings</li>
      <li className='text-[16px] md:text-[18px] font-normal text-[#282828B2]'>Competitive Pricing</li>
    </div>

    <Button 
      text={'Read More'} 
      customClass={'!text-[#00AEEF] !px-[41px] !py-[7px] !border !border-[#00AEEF] !bg-white'} 
    />
  </div>

  {/* Image Section */}
  <div className='w-full lg:w-1/2 flex justify-center lg:justify-end'>
    <img src="/images/image (21).png" alt="" className='h-auto max-h-[432px] w-full md:w-[80%] lg:w-auto' />
  </div>
</div>


    )
}

export default AllAbout;