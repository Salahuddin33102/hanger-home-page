import React from 'react';
import Heading62 from '../../components/common/Heading62';
import Paragraph from '../../components/common/Paragraph';
import Button from '../../components/common/Button';
import PlatformFeature from '../../components/platformfeature/PlatformFeature';
import Effortless from '../../components/effortless/Effortless';
import Transparent from '../../components/transparent/Transparent';
import OurStory from '../../components/ourStory/OurStory';
import ListHanger from '../../components/listhanger/ListHanger';
import JoinHanger from '../../components/joinhanger/JoinHanger';

function AboutUs() {
  return (
    <div>
      <div
        className='h-[459px]'
        style={{
          backgroundImage: "url('/images/Rectangle 4454.png')"
        }}
      >
        <div>
          <Heading62 text={'The Online Hangar Marketplace'} customClass={'!text-[36px] !  w-[95%] !md:w-[82%] !leading-[44px]'} />
          <Paragraph text={'Hangar space just got easier'} customClass={'!pt-[10px] !pb-[45px]'} />
          <Button text={'Explore Hangars'} customClass={'!text-[#00AEEF] !bg-white'} />
        </div>

      </div>
      <Heading62 text={'Platform Features'} customClass={'!text-[#00AEEF] !text-[36px] !pt-0'} />
      <PlatformFeature />
      <Effortless />
      <OurStory/>
      <Transparent/>
      <ListHanger/>
      <JoinHanger/>



      
    </div>
  )
}

export default AboutUs;