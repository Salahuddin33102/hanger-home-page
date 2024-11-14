import React from 'react'
import Button from '../common/Button';


function Find_Image() {
    const data =[
        {
            image:"/images/image (5).png",
            title:"Skyport Executive Hangar",
            keyfeature:"Key Features:",
            paragraph:" 10,000 sq. ft., accommodates large jets, climate-controlled, 24/7 security.",
            price:"Price:",
            paragraph2:"$1.5 Million",
            availbility:"Availability:",
            paragraph3:"Available for immediate purchase",
            button:"View  Details",

        },
        {
            image:"/images/image (6).png",
            title:"Skyport Executive Hangar",
            keyfeature:"Key Features:",
            paragraph:" 10,000 sq. ft., accommodates large jets, climate-controlled, 24/7 security.",
            price:"Price:",
            paragraph2:"$1.5 Million",
            availbility:"Availability:",
            paragraph3:"Available for immediate purchase",
            button:"View  Details",

        },
        {
            image:"/images/image (7).png",
            title:"Skyport Executive Hangar",
            keyfeature:"Key Features:",
            paragraph:" 10,000 sq. ft., accommodates large jets, climate-controlled, 24/7 security.",
            price:"Price:",
            paragraph2:"$1.5 Million",
            availbility:"Availability:",
            paragraph3:"Available for immediate purchase",
            button:"View  Details",

        },
        {
            image:"/images/image (8).png",
            title:"Skyport Executive Hangar",
            keyfeature:"Key Features:",
            paragraph:" 10,000 sq. ft., accommodates large jets, climate-controlled, 24/7 security.",
            price:"Price:",
            paragraph2:"$1.5 Million",
            availbility:"Availability:",
            paragraph3:"Available for immediate purchase",
            button:"View  Details",

        },
        {
            image:"/images/image (9).png",
            title:"Skyport Executive Hangar",
            keyfeature:"Key Features:",
            paragraph:" 10,000 sq. ft., accommodates large jets, climate-controlled, 24/7 security.",
            price:"Price:",
            paragraph2:"$1.5 Million",
            availbility:"Availability:",
            paragraph3:"Available for immediate purchase",
            button:"View  Details",

        },
        {
            image:"/images/image (10).png",
            title:"Skyport Executive Hangar",
            keyfeature:"Key Features:",
            paragraph:" 10,000 sq. ft., accommodates large jets, climate-controlled, 24/7 security.",
            price:"Price:",
            paragraph2:"$1.5 Million",
            availbility:"Availability:",
            paragraph3:"Available for immediate purchase",
            button:"View  Details",

        },
        {
            image:"/images/image (11).png",
            title:"Skyport Executive Hangar",
            keyfeature:"Key Features:",
            paragraph:" 10,000 sq. ft., accommodates large jets, climate-controlled, 24/7 security.",
            price:"Price:",
            paragraph2:"$1.5 Million",
            availbility:"Availability:",
            paragraph3:"Available for immediate purchase",
            button:"View  Details",

        },
        {
            image:"/images/image (12).png",
            title:"Skyport Executive Hangar",
            keyfeature:"Key Features:",
            paragraph:" 10,000 sq. ft., accommodates large jets, climate-controlled, 24/7 security.",
            price:"Price:",
            paragraph2:"$1.5 Million",
            availbility:"Availability:",
            paragraph3:"Available for immediate purchase",
            button:"View  Details",

        },
        {
            image:"/images/image (13).png",
            title:"Skyport Executive Hangar",
            keyfeature:"Key Features:",
            paragraph:" 10,000 sq. ft., accommodates large jets, climate-controlled, 24/7 security.",
            price:"Price:",
            paragraph2:"$1.5 Million",
            availbility:"Availability:",
            paragraph3:"Available for immediate purchase",
            button:"View  Details",

        },
        {
            image:"/images/image (14).png",
            title:"Skyport Executive Hangar",
            keyfeature:"Key Features:",
            paragraph:" 10,000 sq. ft., accommodates large jets, climate-controlled, 24/7 security.",
            price:"Price:",
            paragraph2:"$1.5 Million",
            availbility:"Availability:",
            paragraph3:"Available for immediate purchase",
            button:"View  Details",

        },
        {
            image:"/images/image (15).png",
            title:"Skyport Executive Hangar",
            keyfeature:"Key Features:",
            paragraph:" 10,000 sq. ft., accommodates large jets, climate-controlled, 24/7 security.",
            price:"Price:",
            paragraph2:"$1.5 Million",
            availbility:"Availability:",
            paragraph3:"Available for immediate purchase",
            button:"View  Details",

        },
        {
            image:"/images/image (16).png",
            title:"Skyport Executive Hangar",
            keyfeature:"Key Features:",
            paragraph:" 10,000 sq. ft., accommodates large jets, climate-controlled, 24/7 security.",
            price:"Price:",
            paragraph2:"$1.5 Million",
            availbility:"Availability:",
            paragraph3:"Available for immediate purchase",
            button:"View  Details",     
                 
        },
 
     ]
  return (
    <div className='flex justify-center items-center gap-8 flex-wrap mx-auto max-w-[90%] '>
        {data.map((item,i)=>(
            <div key={i} className=' w-[90%] md:w-[47%]  lg:w-[30%] xl:w-[23%]'>
                <img className='rounded-tr-[20px] rounded-tl-[20px] w-full ' src={item.image} alt="" />
                <div className='border rounded-br-[20px] rounded-bl-[20px] p-3 '>
                    <h2 className='text-[#282828E0] font-bold text-[16px] pb-3 font-Inter pr-[2px]'>{item.title}</h2>
                    <p className='text-[11px] font-normal pb-1 text-[#9D9D9DE0] font-Inter '>
                        <span className='font-bold text-[#00AEEF] font-Inter pr-[2px]'>{item.keyfeature}</span>
                        {item.paragraph}
                    </p>
                    <p className='text-[11px] font-normal pb-1 text-[#9D9D9DE0] font-Inter '>
                        <span  className='font-bold text-[#00AEEF] font-Inter pr-[2px]'>{item.price}</span>
                        {item.paragraph2}
                    </p>
                    <p className='text-[11px] font-normal text-[#9D9D9DE0] font-Inter '>
                        <span  className='font-bold text-[#00AEEF] font-Inter pr-[2px]'>{item.availbility}</span>
                        {item.paragraph3}
                    </p>
                    <div className='flex items-center justify-center pt-2'>

                <Button text={item.button} customClass={' !py-1 !text-start border-[#00AEEF]  text-[12px] font-normal     !text-[#00AEEF] border  !px-4 bg-white'} />
                    </div>
                </div>
            </div>
        ))}
    </div>

  )
}

export default Find_Image;