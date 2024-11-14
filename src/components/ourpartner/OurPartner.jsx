import React from 'react'
import Heading62 from '../common/Heading62';

function OurPartner() {
    const data = [
        {
            Image: '/images/image (22).png',
            title: 'iFlight Planner',
            description: 'The easy-to-use flight planning, platform that helps the pilots save fuel, time and money on every flight.',
        },
        {
            Image: ' /images/image (23).png',
            title: 'Smoke House Pilot',
            description: 'Smoke house pilot club. Incis a a social pilots club made up of individuals that share a passion of aviation.',
        },
        {
            Image: '/images/image (24).png',
            title: 'NATA',
            description: 'NATA is leading national trade associationrepresenting the interests of generalaviation service provider.',
        },
    ]
    return (
  <div className='pt-[190px]'>



    <Heading62 text={'Our Partners'} customClass={'!text-black !text-[40px] !pb-[39px] !pt-0'}/>
          <div className='flex flex-wrap md:flex-nowrap mx-auto max-w-[70%] gap-10  md:gap-[45px]  '>
            {data.map((item,i)=>(
                
                    <div key={i} className=' w-full  md:w-[34%] text-center '>
                        <img src={item.Image} alt="" className='mx-auto' />
                    
                            <h2 className='text-center text-[18px] font-bold xl:pt-[20px]'>{item.title}</h2>
                            <p className='text-[14px] font-normal text-center xl:px-[30px]'>{item.description}</p>
                    
                    </div>
                
            ))}
        </div>
  </div>
    )
}

export default OurPartner;