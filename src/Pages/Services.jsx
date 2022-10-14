import React from 'react'
import Nav from '../Component/Nav'
import HomeAbout from '../Component/HomeAbout'
import ChooseSection from '../Component/ChooseSection'
import PopularProductSection from '../Component/PopularProductSection'
import Testimonial from '../Component/Testimonial'
import FooterSubscribe from '../Component/FooterSubscribe'
import FooterDetails from '../Component/FooterDetails'




const Services = () => {
  return (
    <>
     <div className="Home_container">
        <HomeAbout />
      </div>
      <ChooseSection />
      <PopularProductSection />
      <Testimonial />
      <FooterSubscribe />
      <FooterDetails />
    </>
  )
}

export default Services
