import React from 'react'
import Heading62 from '../common/Heading62';
import Paragraph from '../common/Paragraph';
import Card from '../Card';

function Effortless() {
 const data = [
    {
        svg:"/images/basil_location-outline.svg",
        title:"Location",
        paragraph:"Pinpoint hangars near specific airport sor within desired areas.",
    },
    {
        svg:"/images/formkit_date.svg",
        title:"Duration",
        paragraph:"Easily tailor your stay, whether it’s for a night, a month, or something long-term.",
    },
    {
        svg:"/images/Vector (3).svg",
        title:"Size",
        paragraph:"Filter hangars based on your aircraft’s specifications for a perfect fit.",
    },
 ]
  return (
    <div className='bg-[#60CCF54D] mt-20 pb-[71px] pt-[30px]'>
        <Heading62 text={'Effortless Search'} customClass={'!text-[#00AEEF] !text-[36px] !pt-0'}/>
        <Paragraph text={'Experience the ease of finding and booking a hangar with Hangar Direct’sadvanced search capabilities.'} customClass={'!text-black '}/>
        <div className='flex mx-auto w-[90%] flex-wrap lg:flex-nowrap    gap-[54px] pt-[42px] justify-center'>
            {data.map((item,i)=>{
                return(
                   <Card key={i} item={item} />
                
                )
            })}
        

        </div>
        
    </div>
  )
}

export default Effortless;