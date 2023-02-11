import React from "react";
import ChooseSections from "../Style/ChooseSections.css";
import ChooseService from "../Component/ChooseService";
const ChooseSection = () => {
  return (
    <div className="why-choose-section">
      {/* start description section */}
      <div className="chooseable-description">
        <div className="chooseable-heading">
          <h1>Why Choose Us</h1>
          <p className="choosable-p">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor.
          </p>
        </div>

        <div className="description-flex forHomePage ">
          <div className="first-two-description">
            <div className="description-1">
              <div className="round"></div>
              <img
                alt=""
                src="https://untree.co/demos/furni/images/truck.svg"
              ></img>
              <h5>Fast & Free Shipping</h5>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
            <div className="description-2">
            <div className="round"></div>
              <img
                alt=""
                src="https://untree.co/demos/furni/images/bag.svg"
              ></img>
              <h5>Easy to Shop</h5>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
          </div>

          <div className="last-two-description">
            <div className="description-3">
            <div className="round"></div>
              <img
                alt=""
                src="https://untree.co/demos/furni/images/support.svg"
              ></img>
              <h5>24/7 Support</h5>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
            <div className="description-4">
            <div className="round"></div>
              <img
                alt=""
                src="https://untree.co/demos/furni/images/return.svg"
              ></img>
              <h5>Hassle Free Returns</h5>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end description section */}

      {/* start image section  */}
      <div className="chooseable-image">
        <div className="image1">
          <img
            className="description-image"
            alt="img"
            src="https://untree.co/demos/furni/images/why-choose-us-img.jpg"
          ></img>
        </div>
        <div className="image2">
          <img
            alt="background_image"
            src="https://untree.co/demos/furni/images/dots-yellow.svg"
          ></img>
        </div>
      </div>

      {/* ends image section */}
    </div>
  );
};

export default ChooseSection;
