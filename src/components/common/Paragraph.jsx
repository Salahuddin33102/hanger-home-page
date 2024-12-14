import React from 'react'

function Paragraph({text, customClass,children}) {
  return (
  
    <p className={`text-white mx-auto w-[85%] lg:w-[49%] text-[16px] md:text-[24px] font-normal text-center font-Inter leading-[24px] md:leading-[30px] pt-4 ${customClass}`}>{text}{children}</p>
  
  )
}

export default Paragraph;