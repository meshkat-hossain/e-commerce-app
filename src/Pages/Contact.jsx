import React from "react";
import HomeAbout from '../Component/HomeAbout'
import Form from '../Component/Form'
import FooterSubscribe from '../Component/FooterSubscribe'
import FooterDetails from '../Component/FooterDetails'
import Nav from "../Component/Nav";
import PageName from "./PageName";
import contact from '../Style/contact.css'


const Contact = () => {
  const title = {
    name: "Contact"
  }
  return (
    <>
      <div className="Home_container " >
       
        <PageName {...title} />
      </div>
  
      <Form />
 

      <FooterSubscribe />
      <FooterDetails />
    </>
  );
};

export default Contact;
