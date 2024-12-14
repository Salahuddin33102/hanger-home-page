import React from 'react';
import Heading62 from '../common/Heading62';
import Paragraph from '../common/Paragraph';
import Button from '../common/Button';

function Time_Offer() {
    return (
        <div
            className='h-[316px] rounded-[20px] mt-8  mx-auto w-[90%]'
            style={{
                backgroundImage: "url('/images/image 14.png')"
            }}
        >
            <Heading62 text={'Limited-Time Offer on  Hangar Purchase'} customClass={'lg:text-[30px] !text-[1.87rem]  md:text-[36px] w-full xl:!w-[60%] 2xl:!w-[44%] !leading-[43px] !pt-[8px]'} />
            <Paragraph customClass={' !text-[16px]  md:text-[18px] md:!pt-[10px] !w-full'}>
                <h2>Discount: Save <span className='font-bold' >$1,000</span>  on your purchase!</h2>
            </Paragraph>
            <Paragraph customClass={'   !text-[16px] md:text-[18px] !pt-0 md:pt-[23px] xl:pt-[8px] !w-full '}>
                <h2>Price: Now   <span className='font-bold' >$1.5 million</span> (Regularly $2.5 million)</h2>
            </Paragraph>
            <Paragraph text={'Features: 15,000 sq. ft., luxury amenities, prime location'}  customClass={'  !text-[16px]  md:text-[18px] !w-[60%] !w-full  !pt-0'}/>
            <Paragraph text={'Location: Miami International Airport'}  customClass={'  !text-[16px] md:text-[18px] !pt-0 md:pb-5'}/>
            <Button text={'Offer End Soon!'} customClass={'mx-auto  '}/>


        </div>
    )
}

export default Time_Offer;