import React from 'react';
import Heading62 from '../common/Heading62';
import Paragraph from '../common/Paragraph';



function Rent_Heading() {
  return (
    <div className='mx-auto w-[82%]'>
      <Paragraph text={'Deals from Oct 21 - Oct 28'} customClass={'!text-[#00AEEF] text-start !mx-[0px] !pt-0 text-[18px] font-normal'}/>
      <Heading62 text={'Exclusive Weekend Hangar Rentals'} customClass={'text-black text-start !pt-2 w-full xl:!w-[50%] !text-[#282828] !leading-[43px] !mx-[0px] lg:text-[36px] '}/>
    </div>
  )
}

export default Rent_Heading;