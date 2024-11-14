import React from 'react';
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
        paragraph:"Private taxiway access, lounge area area",
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
    <div className='flex justify-center gap-8 flex-wrap mx-auto max-w-[82%] pt-10'>
        {data.map((item,i)=>(
            <div  key={i} className='w-full  md:w-[47%]  lg:w-[30%]   xl:w-[22%] relative'>
                <img className='rounded-tr-[20px] rounded-tl-[20px] w-full '  src={item.image} alt="" />
                <p className='bg-[#00AEEF] w-[27%] py-2 pl-2 absolute top-[33px] rounded-tr-[10px] text-[12px] font-normal text-[#ffffff] '>Weekly Deal</p>
                <div className='border rounded-br-[20px]  rounded-bl-[20px] p-3 '>
                <h2 className='text-[#282828E0] font-bold text-[16px] pb-3 font-Inter'>{item.title}</h2>
                    <p className='text-[11px] font-normal pb-1 text-[#9D9D9DE0] font-Inter '>
                        <span className='font-bold text-[#00AEEF] font-Inter pr-[2px]'>{item.keyfeature}</span>
                        {item.paragraph}
                    </p>
                    <p className='text-[11px] font-normal pb-1 text-[#9D9D9DE0] font-Inter '>
                        <span  className='font-bold text-[#00AEEF] font-Inter pr-[2px]'>{item.price}</span>
                        {item.paragraph2}
                    </p>
                    <p className='text-[11px] font-normal text-[#9D9D9DE0] font-Inter '>
                        <span  className='font-bold text-[#00AEEF] font-Inter pr-[2px]'>{item.capacity}</span>
                        {item.paragraph4}
                    </p>
                    <p className='text-[11px] font-normal text-[#9D9D9DE0] font-Inter '>
                        <span  className='font-bold text-[#00AEEF] font-Inter pr-[2px]'>{item.availbility}</span>
                        {item.paragraph3}
                    </p>
                    <div className='flex  justify-center items-center pt-2'>

<Button text={item.button} customClass={' !py-1  border-[#00AEEF] text-[12px] font-normal    !text-[#00AEEF] border  !px-5 bg-white'} />
    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Rent_Image;