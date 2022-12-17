import React from "react";
import PopularProduct from "../Style/PopularProduct.css";

const PopularProductSection = () => {
  return (
    <div className="popular-product">
      <div className="popular-product-1">
        <div className="popular-image-1">
          <img
            alt=""
            src="https://untree.co/demos/furni/images/product-1.png"
          ></img>
        </div>
        <div className="popular-image-1-text">
          <h5>Nordic Chair</h5>
          <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
          <a href="/e-commerce-app/src/Component/Navbar/Homepages.jsx">
            Read More...
          </a>
        </div>
      </div>

      <div className="popular-product-2">
        <div className="popular-image-2">
          <img
            alt=""
            src="https://untree.co/demos/furni/images/product-2.png"
          ></img>
        </div>
        <div className="popular-image-2-text">
          <h5>Kruzo Aero Chair</h5>
          <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
          <a href="/e-commerce-app/src/Component/Navbar/Homepages.jsx">
            Read More
          </a>
        </div>
      </div>

      <div className="popular-product-3">
        <div className="popular-image-3">
          <img
            alt=""
            src="https://untree.co/demos/furni/images/product-3.png"
          ></img>
        </div>
        <div className="popular-image-3-text">
          <h5>Ergonomic Chair</h5>
          <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
          <a href="/e-commerce-app/src/Component/Navbar/Homepages.jsx">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopularProductSection;
