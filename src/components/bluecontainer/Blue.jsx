import React from 'react'
import Paragraph from '../common/Paragraph';
import Button from '../common/Button';

function Blue() {
  return (
    <div className='my-16 py-10  bg-blue flex flex-col gap-2 md:gap-0 md:flex-row justify-between w-[90%] mx-auto  rounded-[10px] px-3 lg:px-14 !items-center'>
      
          <Paragraph text={'Members always get our best deals & prices when signed in'} customClass={'md:text-start !mx-0 text-[20px] md:!text-[22px] !mx-0 !pt-0 w-[83%]'} />
          <Button text={'sign in'} customClass={'!bg-white !text-[#00AEEF]  !font-bold text-[14px] px-[30px]   !py-[7px] text-center'}/>
      </div>
        
    
  )
}

export default Blue;