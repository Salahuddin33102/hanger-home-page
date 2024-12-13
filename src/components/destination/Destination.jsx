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
    <div className='mx-auto max-w-[90%] mb-10  '>
        <Button text={'Popular'} customClass={'!text-start bg-white !mx-0  !text-[#00AEEF] !p-0 '}/>
        <Heading62 text={'Hangar Destinations'} customClass={'!text-[#282828] text-start mx-0 !w-full lg:text-[36px] !pt-0'}/>
        <div className='flex flex-wrap  lg:flex-nowrap gap-10 mx-0 lg:gap-8 justify-start lg:justify-center mt-5'>
          {  data.map((item,i)=>{
               return(
                <div key={i} className='mx-auto w-full md:w-[47%] '>
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