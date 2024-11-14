import React from 'react'
import Term from './Term';
import Button from '../common/Button';

function Search() {
  return (
    <div className=' border mx-auto w-[90%] lg:w-[50%] mt-14 bg-white px-7 md:px-2 py-3 rounded-full md:flex  items-center gap-2 outline outline-8 outline-[#ffffff40]'>
        <input type="text" placeholder='Location' className=' border mb-3 md:mb-0  py-3 px-3 w-full md:flex-1 rounded-full border-[#B1B1B1] text-[#A7A7A7] text-[14px] font-normal' />
   <div className='flex gap-2 justify-center '>
   <Term text={'Term'} />
   <Button text={'Search'}/>
   </div>
      
         </div>
  )
}

export default Search;  