import React from 'react'
import Heading62 from '../common/Heading62';
import Paragraph from '../common/Paragraph';

function OurStory() {
  return (
    <div className='mx-auto w-[80%]'>
        <Heading62 text={'Our Story'} customClass={'!text-[#00AEEF] !text-[36px] !pt-[100px]'}/>
        <Paragraph text={'Hangar Direct was born from real-world challenge faced by our CEO, Trenton Ray. As a dedicated pilot of a Phenom 300, Trenton experienced the frustration of trying to secure hanger space during unexpected weather conditions.'} customClass={'!text-black !text-start  !w-full'}/>
        <Paragraph text={'After enduring countless phone calls and facing inflated prices with limited options, he knew there had tobe a better way. This led to the creation of Hangar Direct - a platform built to revolutionize how pilots access hangar space.'} customClass={'!text-black !text-start !w-full'}/>
        <Paragraph text={'Today, Hangar Direct stands as the go-to solution for buying, renting, and managing hangar space. Whether, you need short-term storage or are looking for a long-term investment, our mission is to make hangar space accessible and seamless, solving a persistent challenge within the aviation community.'} customClass={'!text-black !text-start  !w-full'}/>
    </div>
  )
}

export default OurStory;