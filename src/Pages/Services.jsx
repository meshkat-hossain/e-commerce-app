import React from 'react'
import Nav from '../Component/Nav'
import HomeAbout from '../Component/HomeAbout'
import ChooseSection from '../Component/ChooseSection'
import PopularProductSection from '../Component/PopularProductSection'
import Testimonial from '../Component/Testimonial'
import FooterSubscribe from '../Component/FooterSubscribe'
import FooterDetails from '../Component/FooterDetails'
import PageName from './PageName'
import ChooseService from '../Component/ChooseService'




const Services = () => {
  const title = {
    name: "Services"
  }
  return (
    <>
     <div className="Home_container">
      
       <PageName {...title}/>
      </div>
      <div className="main-container">

      <ChooseService />
      <ChooseService />
      </div>
      <PopularProductSection  />
      <Testimonial />
      <FooterSubscribe />
      <FooterDetails />
    </>
  )
}

export default Services
