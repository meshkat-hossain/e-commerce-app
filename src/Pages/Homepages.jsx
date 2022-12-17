import React from "react";
import HomeAbout from "../Component/HomeAbout";
import ProductSection from "../Component/ProductSection";
import ChooseSection from "../Component/ChooseSection";
import HelpSection from "../Component/HelpSection";
import PopularProductSection from "../Component/PopularProductSection";
import Testimonial from "../Component/Testimonial";
import BlogSection from "../Component/BlogSection";
import FooterSubscribe from "../Component/FooterSubscribe";
import FooterDetails from "../Component/FooterDetails";

const Homepages = () => {
  const title = {
    name: "Modern Interior Design Studio",
  };

  return (
    <>
      {/* ----------------*------------ */}
      {/* start Home section */}
      <div className="Home_container">
        {/* start Home about */}
        <HomeAbout myData={title} />
        {/* end Home Image */}
      </div>

      {/* end Home section */}
      {/* ----------------*------------ */}

      {/* ----------------*------------ */}
      {/* start second section */}
      <ProductSection />
      {/* start second section */}

      {/* ----------------*------------ */}

      {/* ----------------*------------ */}
      {/* start 3rd section */}
      <ChooseSection />
      {/* end 3rd section */}
      {/* ----------------*------------ */}

      {/* ----------------*------------ */}
      {/* help section start */}
      <HelpSection />
      {/* help section ends */}
      {/* ----------------*------------ */}

      {/* ----------------*------------ */}
      {/* popular-product section start */}
      <PopularProductSection />
      {/* popular-product section ends */}
      {/* ----------------*------------ */}
      {/* ----------------*------------ */}
      {/* start testimonials part */}

      <Testimonial />

      {/* ends testimonials part */}
      {/* ----------------*------------ */}
      {/* ----------------*------------ */}
      {/* blog section start */}
      <div className="recent-blog">
        <div>
          <h2>Recent Blog</h2>
        </div>
        <div>
          <h5>View All Product</h5>
        </div>
      </div>
      <BlogSection />
      {/* blog section ends */}
      {/* ----------------*------------ */}
      {/* <div className="svg-wave">
        <img alt="" src={svg}></img>
      </div> */}
      {/* ----------------*------------ */}
      {/* footer section start */}

      {/* footer subscribe part start */}
      <FooterSubscribe />
      {/* footer subscribe part ends */}

      <FooterDetails />
      {/* footer section ends */}
      {/* ----------------*------------ */}
    </>
  );
};
export default Homepages;
