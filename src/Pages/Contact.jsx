import React from "react";
import HomeAbout from '../Component/HomeAbout'
import Form from '../Component/Form'
import FooterSubscribe from '../Component/FooterSubscribe'
import FooterDetails from '../Component/FooterDetails'

const Contact = () => {
  return (
    <>
      <div className="Home_container">
        <HomeAbout />
      </div>
      <Form />
      <FooterSubscribe />
      <FooterDetails />
    </>
  );
};

export default Contact;
