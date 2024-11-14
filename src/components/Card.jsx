import React from 'react'

function Card({item,customClass,paragraphStyle,headingStyle,imgStyle}) {
  return (
    <div className={`rounded-md p-[50px] bg-white   md:w-[45%] max-w-[390px] shadow-2xl border ${customClass}`}>
      <img src={item?.svg} alt="" className={`mx-auto ${imgStyle}`} />
      <h2 className={`text-center text-[#00AEEF] text-[20px] font-bold  pt-[15px] pb-[6px] ${headingStyle}`}>{item?.title}</h2>
      <p className={`text-center text-[16px] ${paragraphStyle}`}>{item?.paragraph}</p>
    </div>
  )
}

export default Card;  