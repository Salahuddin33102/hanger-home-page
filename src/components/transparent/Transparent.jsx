import React from 'react';
import Card from '../Card';

import Heading62 from '../common/Heading62';

function Transparent() {
    const data = [
        {
        

            title:"Nightly",
            paragraph:"A 15% service fee is collected from the pilot upon booking confirmation. Hangar owners settheir preferred rates, creating a dynamic marketplace.",
        },
        {
    
            title:"Monthly",
            paragraph:"For long term leases, a modest 5% servicefee is applied to the tenant, ensuring sustainable, cost-effective solutions for extended stays.",
        },
        {
            title:"For Sale",
            paragraph:"Listing a hangar for sale is always free. We offer premium advertising packages to accelerate your sale process and maximize visibility.",
        },
     ]
  return (
    <div className='bg-[#60CCF54D] mt-20 pb-[71px] pt-[30px]'>
    <Heading62 text={'Effortless Search'} customClass={'!text-[#00AEEF] !text-[36px] !pt-0'}/>
    <div className='flex mx-auto w-[90%]  flex-wrap lg:flex-nowrap gap-[54px] pt-[42px]  justify-center'>
        {data.map((item,i)=>{
            return(
               <Card key={i} item={item} imgStyle={'image? "image:"'} headingStyle={'!pt-0'} />

            )
        })}
    </div>
    
</div>
  )
}

export default Transparent;