import React from 'react';
import Heading62 from '../common/Heading62';
import Button from '../common/Button';
import { useState } from 'react';





function Findhanger() {
  const [button, setButton] = useState(false);
  console.log('button: ', button);

  return (
    <div className='mb-20'>
      <Heading62 text={'Find Hangar Spaces that Suit Your Aircraft'} customClass={'!text-[#282828] w-[40%] !pt-0 lg:text-[40px] font-bold leading-[55px] pb-5  '} />
      <div className='w-[90%]  md:w-[50%] lg:w-[39%] xl:w-[23%] flex justify-between items-center gap-2 mx-auto border rounded-full py-2 px-4  '>
        <Button text={'Hangers for Rent'} customClass={`!text-start  !py-3 px-5 text-[14px] font-bold ${button ?"!bg-white !text-[#BAC3D2]":""} `}
          onClick={()=>setButton(false)} />
        <Button onClick={()=>setButton(true)} text={'Hangars for Sale'} customClass={`!text-start !text-[#BAC3D2] bg-white   !py-3 px-5 text-[14px] font-normal ${button ?"!bg-[#00AEEF] !text-white" : ""}`} />

      </div>


    </div>
  )
}

export default Findhanger;