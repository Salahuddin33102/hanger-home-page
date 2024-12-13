import React from 'react'
import Paragraph from '../common/Paragraph';
import Button from '../common/Button';

function Blue() {
  return (
    <div className='my-16 py-10  border bg-[#00AEEF] flex flex-col md:flex-row md:justify-between justify-center  mx-auto w-[90%] xl:w-[85%] rounded-[10px] px-5 lg:px-14 !items-center'>
      
          <Paragraph text={'Members always get our best deals & prices when signed in'} customClass={'md:text-start text-[20px] md:!text-[22px] !mx-0 !pt-0 w-full md:w-[450px]'} />
          <Button text={'sign in'} customClass={'bg-white !text-[#00AEEF] !font-bold text-[16px] px-[23px] !mx-0   !py-[7px] text-center'}/>
      </div>
        
    
  )
}

export default Blue;