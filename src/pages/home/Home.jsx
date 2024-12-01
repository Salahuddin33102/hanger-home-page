import React from 'react';
import Section from '../../components/Section';
import Blue from '../../components/bluecontainer/Blue';
import Destination from '../../components/destination/Destination';
import Findhanger from '../../components/findhanger/Findhanger'
import Find_Image from '../../components/findhanger/Find_Image';
import Map from '../../components/map/Map';
import Rent_Heading from '../../components/hanger_rent/Rent_Heading';
import Rent_Image from '../../components/hanger_rent/Rent_Image';
import Time_Offer from '../../components/time_offer/Time_Offer';
import Client_Testimoinal from '../../components/client_testimoinal/Client_Testimoinal';
import AllAbout from '../../components/allabout/AllAbout';
import OurPartner from '../../components/ourpartner/OurPartner';
import AddHangar from '../../components/addhangar/AddHangar';
function Home() {
return (
    <>
  <div>
  <Section/>
  </div>
    <Blue/>
     <Destination/>
     <Findhanger/>
     <Find_Image />
     <Map/>
     <Rent_Heading/>
     <Rent_Image/>
     <Time_Offer/>
     <Client_Testimoinal/>
     <AllAbout/>
     <OurPartner/>
     <AddHangar/>
     </>
  )
}
export default Home;
