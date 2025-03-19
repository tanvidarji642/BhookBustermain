import React from 'react'
import UserNavbar from '../layouts/UserNavbar'
import '../../assets/css/Hero.css'
import Hero from './Hero'
import Services from './Services'
import Item from './Item'
import FirmCollections from './FirmCollections'

const LandingPage = () => {
  return (
    <div>
      <UserNavbar />
      <Hero />
      <Services />
      <Item />
      <FirmCollections />
     
      
    </div>
  )
}

export default LandingPage