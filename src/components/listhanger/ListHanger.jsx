import React from 'react'
import Heading62 from '../common/Heading62';
import Paragraph from '../common/Paragraph';
import Button from '../common/Button';

function ListHanger() {
  return (
    <div className='bg-[#00AEEF] pb-[66px]'>
        <Heading62 text={'List Your Hangar'} customClass={'!text-[36px] !pt-[60px]'}/>
        <Paragraph text={'Showcase your hanger to a wide audience with just 5 photos and 5 minutes. Join our thriving aviation community to connect with potential tenants or buyers effortlessly.'} customClass={'!leading-[31px] !pb-[60px] !text-[26px]'}/>
        <Button text={'Start Listing'} customClass={'!text-[#00AEEF] !bg-white'}/>
    </div>
  )
}

export default ListHanger;