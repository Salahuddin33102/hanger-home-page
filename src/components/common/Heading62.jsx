import React from 'react'


function Heading62({ text, customClass }) {
  return (
      <h1 className={`text-[#ffffff] font-semibold lg:font-bold text-[22px] md-[32px] lg:text-[3.875rem]  mx-auto w-[82%]  lg:w-[60%] pt-[5rem] lg:pt-[15rem] xl:pt-[5rem] text-center leading-[50px] lg:leading-[75px] font-Inter ${customClass}`}>
        {text}
      </h1>

  )
}

export default Heading62