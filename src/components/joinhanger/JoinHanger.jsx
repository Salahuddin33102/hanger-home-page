import React from 'react'
import Heading62 from '../common/Heading62';
import Button from '../common/Button';

function JoinHanger() {
  const data =[
    {
      svg:"/images/mdi_tick.svg",
      paragraph:"Receive alerts for new hangar listings matching your criteria",
    },{
      svg:"/images/mdi_tick.svg",
      paragraph:"Access our exclusive monthly aviation insight newsletters",
},{
      svg:"/images/mdi_tick.svg",
      paragraph:"Get personalized recommendations based on your aircraft", 
}
  ]
  return (
    <div>
        <Heading62 text={'Join Hangar Direct Today'} customClass={'!text-[#00AEEF] !text-[36px] !max-w-lg'}/>
  
   <div className='mx-auto max-w-[19rem] sm:max-w-[30rem]'>
   {data.map((item,i)=>{
      return(
      <div key={i} className='flex items-center gap-3 '>
         <img src={item.svg} alt="" />
         <h4 className='text-[12px] sm:text-[16px]'>{item.paragraph}</h4>
         
      </div>
      )
    })}
    <Button text={'Create Free Account '} customClass={' w-full !mx-0 !rounded-md !text-[12px] sm:!text-[16px]'}/>
   </div>

    </div>
  )
}

export default JoinHanger;