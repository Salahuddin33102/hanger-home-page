import React from 'react'
import Heading62 from '../common/Heading62';
import Button from '../common/Button';

function AddHangar() {
  return (

  <div 
  className='rounded-[20px] mt-8 flex justify-center mx-auto bg-no-repeat mb-10 h-[402px] bg-center w-[85%]  max-w-[1200px]'
  style={{ backgroundImage: "url('images/image (27).png')" }}
>
  <div className='pl-[30px] !pt-[59px]'>
    <Heading62 
      text={'Add your hangar and open your doors to Rental Income'} 
      customClass={'!mx-0 !leading-[44px] !text-start !text-[20px] md:!text-[36px] !pt-0 pb-[20px]'} 
    />
    <Button text={'Add Hangar'} customClass={'!mx-0'} />
  </div>
</div>


  
  )
}

export default AddHangar;