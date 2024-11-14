import React from 'react'

function Term({text}) {
  return (
    <div className='flex border  border-[#B1B1B1] px-[12px] py-[9px] rounded-full items-center justify-center '>
        <select className='  text-[14px] font-normal text-[#A7A7A7]  '>{text}
          <option value="">Term</option>
          <option value="">All</option>
          <option value="">Nightly</option>
          <option value="">Monthly</option>
          <option value="">Forsale</option>
        </select>
        {/* <img src="/images/Vector (5).png" alt="" className='w-[10px] h-[6px] ' /> */}

    </div>
  )
}

export default Term;