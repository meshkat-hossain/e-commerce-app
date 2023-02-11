import React, { useContext } from "react";
import Productdetails from "../Style/Productdetails.css";

import FooterSubscribe from "../Component/FooterSubscribe";
import FooterDetails from "../Component/FooterDetails";
// import useParams
import { useParams } from "react-router-dom";
// import cart context
import { CartContext } from "../contexts/CartContext";
// import product context
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  // get the product id from the url
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);

  // get the single product based on the id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // if product is not found
  if (!product) {
    return <section>Loading...</section>;
  }

  //distructure product
  const { title, price, description, image } = product;

  return (
    <>
      <div className="Home_container ">
        <h2 className="title">Product Details</h2>
      </div>

      {
        <div className="productDetails">
          <div className="div-1">
            <div className="productImage-1">
              <img src={image} />
            </div>
          </div>
          <div className="div-2">
            <div className="productTitle">
              <h2>{title}</h2>
            </div>
            <div className="productPrice">
              <p>${price}</p>
            </div>
            <div className="productDescription">
              <span>{description}</span>
            </div>
            <div className="addToCartBtn">
              <button onClick={addToCart}>Add to cart</button>
            </div>
          </div>
        </div>
      }

      <FooterSubscribe />
      <FooterDetails />
    </>
  );
};

export default ProductDetails;
