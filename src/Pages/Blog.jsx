import React from 'react'
import HomeAbout from '../Component/HomeAbout'
import BlogSection from '../Component/BlogSection'
import Testimonial from '../Component/Testimonial'
import FooterSubscribe from '../Component/FooterSubscribe'
import FooterDetails from '../Component/FooterDetails'





const Blog = () => {
  return (<>
   <div className="Home_container">
       
        <HomeAbout />
      </div>
      <BlogSection />
      <BlogSection />
      <BlogSection />
      <Testimonial />
      <FooterSubscribe />
      <FooterDetails />
  
  </>
    
  )
}

export default Blog