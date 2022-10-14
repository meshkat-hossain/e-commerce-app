import React from "react";
import FooterDetails from "../Component/FooterDetails";
import FooterSubscribe from "../Component/FooterSubscribe";
import Home_About from "../Component/HomeAbout";
import Nav from "../Component/Nav";

const Shop = () => {
  return (
    <>
      {/* Nav Bar start */}
      <div className="Home_container">
        
        <Home_About />
      </div>

      {/* product section  */}
      <div className="container mb-3 ">
        {/* <!-- product section start --> */}
        <div className="product-section ">
          <div className="container ">
            <div className="row">
              <div className="col-12 col-md-4 col-lg-3 mb-5">
                <a className="product-item" href="#">
                  <img className="img-fluid" src="../images/product-1.png" />
                  <h3 className="product-title">Nordic Chair</h3>
                  <strong className="product-price prices"> $50.00</strong>
                  {/* <!-- <span className="icon-cross"> 
                      <img  src="./images/cross.svg" className="img-fluid"/>
                    </span> --> */}
                </a>
              </div>
              <div className="col-12 col-md-4 col-lg-3 mb-5 text-center">
                <a className="product-item" href="#">
                  <img className="img-fluid" src="../images//product-3.png" />
                  <h3 className="product-title">Nordic Chair</h3>
                  <strong className="product-price"> $50.00</strong>
                  {/* <!-- <span className="icon-cross"> 
                      <img  src="./images/cross.svg" className="img-fluid"/>
                    </span> --> */}
                </a>
              </div>
              <div className="col-12 col-md-4 col-lg-3 mb-5 text-center">
                <a className="product-item" href="#">
                  <img className="img-fluid" src="./images//product-1.png" />
                  <h3 className="product-title">Nordic Chair</h3>
                  <strong className="product-price"> $50.00</strong>
                  {/* <!-- <span className="icon-cross"> 
                      <img  src="./images/cross.svg" className="img-fluid"/>
                    </span> --> */}
                </a>
              </div>
              <div className="col-12 col-md-4 col-lg-3 mb-5 text-center">
                <a className="product-item" href="#">
                  <img className="img-fluid" src="./images//product-2.png" />
                  <h3 className="product-title">Nordic Chair</h3>
                  <strong className="product-price"> $50.00</strong>
                  {/* <!-- <span className="icon-cross"> 
                      <img  src="./images/cross.svg" className="img-fluid"/>
                    </span> --> */}
                </a>
              </div>
              <div className="col-12 col-md-4 col-lg-3 mb-5 text-center">
                <a className="product-item" href="#">
                  <img className="img-fluid" src="./images//product-3.png" />
                  <h3 className="product-title">Nordic Chair</h3>
                  <strong className="product-price"> $50.00</strong>
                  {/* <!-- <span className="icon-cross"> 
                      <img  src="./images/cross.svg" className="img-fluid"/>
                    </span> --> */}
                </a>
              </div>
              <div className="col-12 col-md-4 col-lg-3 mb-5 text-center">
                <a className="product-item" href="#">
                  <img className="img-fluid" src="./images//product-2.png" />
                  <h3 className="product-title">Nordic Chair</h3>
                  <strong className="product-price"> $50.00</strong>
                  {/* <!-- <span className="icon-cross"> 
                      <img  src="./images/cross.svg" className="img-fluid"/>
                    </span> --> */}
                </a>
              </div>
              <div className="col-12 col-md-4 col-lg-3 mb-5 text-center">
                <a className="product-item" href="#">
                  <img className="img-fluid" src="./images//product-1.png" />
                  <h3 className="product-title">Nordic Chair</h3>
                  <strong className="product-price"> $50.00</strong>
                  {/* <!-- <span className="icon-cross"> 
                      <img  src="./images/cross.svg" className="img-fluid"/>
                    </span> --> */}
                </a>
              </div>
              <div className="col-12 col-md-4 col-lg-3 mb-5 text-center">
                <a className="product-item" href="#">
                  <img className="img-fluid" src="./images//product-3.png" />
                  <h3 className="product-title">Nordic Chair</h3>
                  <strong className="product-price"> $50.00</strong>
                  {/* <!-- <span className="icon-cross"> 
                      <img  src="./images/cross.svg" className="img-fluid"/>
                    </span> --> */}
                </a>
              </div>
            </div>
          </div>
        </div>

         {/* <!-- product section ends --> */}
</div>

      <FooterSubscribe />
      <FooterDetails />
      {/* Nav Bar ends */}
    </>
  );
};

export default Shop;
// 25 .10:45