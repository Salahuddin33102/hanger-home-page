import React from 'react'

function PlatformFeature() {
    const data = [{
        icon:"/images/map_sheild.svg",
        title:"Secure Payments",
        paragraph:"All transactions are processed directly through our platform with full supporteliminating third-party risks."
    },{
        icon:"/images/Vector.svg",
        title:"Custom Alerts",
        paragraph:"Receive instant notificationsfor new hanger listings thatmatch your specific criteria.",
    },{
        icon:"/images/Group.svg",
        title:"Direct Communication",
        paragraph:"Seamless connect with hangar owners and potentialclients through our integrated system."
    },{
        icon:"/images/Vector (1).svg",
        title:"Transparent Pricing ",
        paragraph:"Enjoy clear, upfront pricing on all hangers listings, ensuring you know exactly what to expect."
    }]
  return (
    <div>
        <div className='flex justify-center  gap-5 flex-wrap lg:flex-nowrap  mx-auto max-w-[90%] '>
            {data.map((item,i)=>{
                return(
                    <div key={i} className='border pb-[26px] pt-[19px] px-[53px] max-w-lg md:w-[45%]'>
                        <img src={item.icon} alt="" className='h-[33px] w-[30px] mx-auto' />
                        <h2 className='text-lg font-bold text-[#00AEEF] text-center py-[18px]'>{item.title}</h2>
                        <p className='text-sm font-normal leading-[17px] text-center'>{item.paragraph}</p>
                    </div>
                )
            })

            }
        </div>

    </div>
  )
}

export default PlatformFeature;