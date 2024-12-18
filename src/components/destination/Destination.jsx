import React from 'react'
import Button from '../common/Button';
import Heading62 from '../common/Heading62';
function Destination() {

 const data =[
    {
        text:"Prairie Winds Aviation Park",
        image:"/images/image (4).png"
    },
    {
        text:"Maplewood",
        image:"/images/image (1).png"
    },
    {
        text:"Midwest AeroPark",
        image:"/images/image (3).png"
    }
 ]
return (
    <div className='mx-auto container mb-10  '>
        <div className='mx-auto w-[85%]'>
            
        <Button text={'Popular'} customClass={' !bg-white !justify-start !mx-0  !text-blue !p-0 '}/>
        <Heading62 text={'Hangar Destinations'} customClass={'!text-[#282828] !mx-0   text-start    lg:text-[36px] !pt-0'}/>
        </div>

        <div className='flex flex-wrap  lg:flex-nowrap justify-center  gap-5    mt-5'>
          {  data.map((item,index)=>{
               return(
                <div key={index} className='w-[90%]  md:w-[42%] lg:w-[30%]'>
                    <img className='rounded-tr-[20px] rounded-tl-[20px] w-full ' src={item.image} alt="" />
                    <div className='border py-8 text-[24px] font-normal text-[#282828E0] text-center rounded-br-[20px] h-[150px] rounded-bl-[20px]'>{item.text}</div>
                </div>
               ) 
            })}
        </div>
       
    
    </div>
  )
}

export default Destination;