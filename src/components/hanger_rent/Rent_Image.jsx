import React from 'react';
import Heading62 from '../common/Heading62';
import Paragraph from '../common/Paragraph';
import Button from '../common/Button';


function Rent_Image() {

 const data =[
    {
        image:"/images/image (17).png",
        title:"Skyport Executive Hangar",
        keyfeature:"Key Features:",
        paragraph:" Climate-controlled, private lounge, security services",
        price:"Price:",
        paragraph2:"Price: $1,200/weekend",
        capacity:"Capacity:",
        paragraph4:" Accommodates large jets",
        availbility:"Availability:",
        paragraph3:" Available for Rent",
        button:"Rent Now",

    },
    {
        image:"/images/image (18).png",
        title:"Harbor Bay Hangar",
        keyfeature:"Key Features:",
        paragraph:"Private taxiway access, lounge area area yghjhkyghjk",
        price:"Price:",
        paragraph2:"$900/weekend",
        capacity:"Capacity:",
        paragraph4:" Private taxiway access, lounge ",
        availbility:"Availability:",
        paragraph3:"Available for Rent",
        button:"Rent Now",

    },
    {
        image:"/images/image (19).png",
        title:"Skyport Executive Hangar",
        keyfeature:"Key Features:",
        paragraph:" Climate-controlled, private lounge, security services",
        price:"Price:",
        paragraph2:"Price: $1,200/weekend",
        capacity:"Capacity:",
        paragraph4:" Accommodates large jets",
        availbility:"Availability:",
        paragraph3:" Available for Rent",
        button:"Rent Now",

    },
    {
        image:"/images/image (20).png",
        title:"Skyport Executive Hangar",
        keyfeature:"Key Features:",
        paragraph:" Climate-controlled, private lounge, security services",
        price:"Price:",
        paragraph2:"Price: $1,200/weekend",
        capacity:"Capacity:",
        paragraph4:" Accommodates large jets",
        availbility:"Availability:",
        paragraph3:" Available for Rent",
        button:" Rent Now",

    },
 ]



  return (
  <>
   <div className='mx-auto w-[90%]'>
 <Paragraph text={'Deals from Oct 21 - Oct 28'} customClass={'!text-[#00AEEF] text-start !mx-[0px] !pt-0 text-[18px] font-normal'}/>
 <Heading62 text={'Exclusive Weekend Hangar Rentals'} customClass={'text-black text-start !pt-2 w-full xl:!w-[81%] !text-[#282828] !leading-[43px] !mx-[0px] lg:text-[36px] '}/>
</div>
    <div className='flex justify-center gap-5 flex-wrap mx-auto container pt-10'>
        {data.map((item,i)=>(
            <div  key={i} className=' w-[90%] md:w-[42%]  lg:w-[22%]   xl:w-[23%] relative'>
                <img className='rounded-tr-[20px] rounded-tl-[20px] w-full '  src={item.image} alt="" />
                <p className='bg-blue w-[27%] py-2 pl-2 absolute top-[33px] rounded-tr-[10px] text-[12px] font-normal text-[#ffffff] '>Weekly Deal</p>
                <div className='border rounded-br-[20px]  rounded-bl-[20px] p-3 '>
                <h2 className='text-[#282828E0] font-bold text-[16px] pb-3 font-Inter'>{item.title}</h2>
                    <p className='text-[11px] font-normal pb-1 text-grey font-Inter '>
                        <span className='font-bold text-blue font-Inter pr-[2px]'>{item.keyfeature}</span>
                        {item.paragraph}
                    </p>
                    <p className='text-[11px] font-normal pb-1 text-grey font-Inter '>
                        <span  className='font-bold text-blue font-Inter pr-[2px]'>{item.price}</span>
                        {item.paragraph2}
                    </p>
                    <p className='text-[11px] font-normal text-grey font-Inter '>
                        <span  className='font-bold text-blue font-Inter pr-[2px]'>{item.capacity}</span>
                        {item.paragraph4}
                    </p>
                    <p className='text-[11px] font-normal text-grey font-Inter '>
                        <span  className='font-bold text-blue font-Inter pr-[2px]'>{item.availbility}</span>
                        {item.paragraph3}
                    </p>
                    <div className='flex  justify-center items-center pt-2'>

<Button text={item.button} customClass={' !py-1  border-blue text-[12px] font-normal    !text-[#00AEEF] !text-blue !bg-white border !border-blue    !px-5 '} />
    </div>
                </div>
            </div>
        ))}
    </div>
  </>
  )
}

export default Rent_Image;