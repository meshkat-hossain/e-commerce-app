import React from 'react'

const ProductSection = () => {
  return (
    <div className="product-section">
    <div className="product-container">
      <div className="flex-1">
        <div className="col-one">
          <h1>Crafted with excellent material.</h1>
          <p>
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <button className="button-explore">Explore</button>
        </div>
      </div>

      <div className="flex-2">
        <div className="col-two">
          <div className="image">
            <img
              alt=""
              src="https://untree.co/demos/furni/images/product-1.png"
            ></img>
          </div>
          <div className="p-tag">
            <p className="product-name">Nordic Chair</p>
            <p className="product-price">$50.00</p>
          </div>
        </div>
        <div className="col-three">
          <div className="image">
            <img
              alt=""
              src="https://untree.co/demos/furni/images/product-2.png"
            ></img>
          </div>
          <div className="p-tag">
            <p className="product-name">Nordic Chair</p>
            <p className="product-price">$50.00</p>
          </div>
        </div>
        <div className="col-four">
          <div className="image">
            <img
              alt=""
              src="https://untree.co/demos/furni/images/product-3.png"
            ></img>
          </div>
          <div className="p-tag">
            <p className="product-name">Nordic Chair</p>
            <p className="product-price">$50.00</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductSection