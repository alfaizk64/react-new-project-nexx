import React from 'react'
import Navbar from "./Navbar.jsx";
import HeroSection from "./HeroSection";
import bgimage from "/mesh.svg";
import {partnerLogo} from '../data/partner.js'
import Slider from "./Slider.jsx";
import RoadMapSection from "./RoadMapSection.jsx";
import PricingTable from "./PricingTable.jsx";
import FeaturesSection from "./FeaturesSection.jsx";
import TestimonialSection from "./TestimonialSection.jsx";
import Footer from "./Footer.jsx";


function Home() {
  return (
    <>
       <div className="w-screen min-h-screen fixed z-0 flex justify-center px-6 py-40 pointer-events-none">
        <div className='bg-[url("/grid.svg")] absolute inset-0 opacity-15'></div>
        <img src={bgimage}
         className="opacity-15 absolute bottom-1 z-20 h-[600px]"
         />
         <div className="bg-gradient-to-c from-transparent via-transparent to-white absolute inset-0 z-20">

         </div>
      </div>
      <div className="relative z-20">
        <Navbar />
        <div className="container mx-auto ">
          <HeroSection />
          <Slider images={partnerLogo}/>
          <RoadMapSection/>
          <PricingTable/>
          <FeaturesSection/>
          <TestimonialSection/>
          <Footer/>
       
        </div>
      </div>
    </>
  )
}

export default Home
