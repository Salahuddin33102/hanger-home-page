import React from 'react'
import Heading62 from '../components/common/Heading62';
import Paragraph from '../components/common/Paragraph';
import Search from '../components/seachinput/Search';
import Term from '../components/seachinput/Term';



function Section() {
  return (
    <div>
      <div className='h-[865px] bg-cover flex justify-center xl:items-center bg-no-repeat xl:bg-repeat '
        style={{
          backgroundImage: "url('/images/white-plane.png')", overflow: "s"
        }}
      >
        <div>
          <Heading62 text={' Airplane Hangars for Sale & Rent'} />
          <Paragraph text={'Hangar Direct is a community-driven hangar marketplace, offering simple, direct solutions for short-term rentals, long-term rentals, and hangar sales.'} />
          <Search />


        </div>



      </div>
    </div>
  )
}

export default Section
