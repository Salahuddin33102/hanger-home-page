import React from 'react'

function Button({text,customClass,onClick}) {
  return (
    <button onClick={onClick} className= {`flex justify-center  items-center mx-auto px-8 bg-[#00AEEF] font-Inter rounded-full  text-[15px] text-white py-3  font-medium ${customClass}`}>{text}</button>
  )
}

export default Button;