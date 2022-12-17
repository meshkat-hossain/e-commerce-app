import React from 'react'
import HomeAbout from '../Component/HomeAbout'
import BlogSection from '../Component/BlogSection'
import Testimonial from '../Component/Testimonial'
import FooterSubscribe from '../Component/FooterSubscribe'
import FooterDetails from '../Component/FooterDetails'
import Nav from '../Component/Nav'
import PageName from './PageName'
import ourBlog from '../Style/ourBlog.css'








const Blog = () => {

  const title={
    name:"Blog"
  }

  return (<>
   <div className="Home_container">
      
        <PageName {...title}/>
      </div>
      
  <div className="our-blog" >
  <BlogSection />
      <BlogSection />
      <BlogSection />
  </div>
      <Testimonial />
      <FooterSubscribe />
      <FooterDetails />
  
  </>
    
  )
}

export default Blog