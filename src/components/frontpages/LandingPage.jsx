import React from 'react'
import UserNavbar from '../layouts/UserNavbar'
import '../../assets/css/Hero.css'
import Hero from './Hero'
import Services from './Services'
import Item from './Item'
import FirmCollections from './FirmCollections'
import WhyChooseUs from './WhyChooseUs'
import { Footer } from './Footer'

const LandingPage = () => {
  return (
    <div >
      {/* <div className="hero-container"> */}
      <UserNavbar />
      <Hero />
      {/* </div> */}
      <Services />  
      <Item />
      <WhyChooseUs />
      <FirmCollections />
      <Footer />

    </div>
  )
}

export default LandingPage