import React from 'react'
import Button from '../common/Button';
import { useState } from 'react';



function Find_Image() {
    const data =[
        {
            image:"/images/image (5).png",
            title:"Skyport Executive Hangar 1111",
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
    const data2 =[
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
    
 
     ]
     const [button, setButton] = useState(false);
     const [active ,setActive] = useState(null);
     const [tab,setTab] = useState(1)
     console.log('button: ', button);
     


  return (
<div >
<div className='mb-20 w-[90%]  md:w-[50%] lg:w-[39%] xl:w-[23%] flex justify-between items-center gap-2 mx-auto border rounded-full py-2 px-4  '>
        <Button text={'Hangers for Rent'} customClass={`!text-start  !py-3 px-5 text-[14px] font-bold ${button ?"!bg-white !text-[#BAC3D2]":""} `}
          onClick={()=>{setButton(false)
            setActive(data)
            setTab(1)
          }} />
        <Button onClick={()=>{
            setButton(true)
            setActive(data2)
            setTab(2)

        }} text={'Hangars for Sale'} customClass={`!text-start !text-[#BAC3D2] bg-white   !py-3 px-5 text-[14px] font-normal ${button ?"!bg-[#00AEEF] !text-white" : ""}`} />

      </div>
{tab == 1 && <div className='flex justify-center items-center gap-8 flex-wrap mx-auto max-w-[90%] '>
        {active?.map((item,i)=>(
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
    </div>}
{tab == 2 && <div className='flex justify-center items-center gap-8 flex-wrap mx-auto max-w-[90%] '>
        {active?.map((item,i)=>(
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
    </div>}
</div>

  )
}

export default Find_Image;