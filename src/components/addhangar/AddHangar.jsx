import React from 'react'
import Heading62 from '../common/Heading62';
import Button from '../common/Button';

function AddHangar() {
  return (
    <div className='h-[402px] rounded-[20px] mt-8 bg-no-repeat  mx-auto w-[90%] lg:w-[70%] mb-10'
      style={{   backgroundImage: "url('/images/image (26).png')"}}
      >
   <div className='    pl-[30px] md:pl-[75px] !pt-[59px] '>
   <Heading62 text={'Add your hangar and open your doors to Rental Income'} customClass={'!mx-0 !leading-[44px] !text-start !text-[20px] md:!text-[36px] !pt-0 pb-[20px]'}/>
   <Button text={'Add Hangar'} customClass={'!mx-0'}/>
   </div>
    </div>
  
  )
}

export default AddHangar;