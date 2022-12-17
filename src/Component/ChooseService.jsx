import React from "react";
import Chooseservice from "../Style/Choose-Service.css";

const ChooseService = () => {
  return (
    <>



      <div className="description-flex ">
        <div className="first-two-description">
          <div className="description-1">
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

    </>
  );
};

export default ChooseService;
