import React, { useState, useEffect,useContext } from "react";
import shop from "../Style/shop.css";

import FooterDetails from "../Component/FooterDetails";
import FooterSubscribe from "../Component/FooterSubscribe";
import Home_About from "../Component/HomeAbout";
import Nav from "../Component/Nav";

import Button from "react-bootstrap/Button";
import PageName from "./PageName";
import Product from "../Component/Product";

// import product context
import { ProductContext } from '../contexts/ProductContext';


const Shop = ({ Data}) => {

  // get products from product context
  const { products } = useContext(ProductContext);



  const data = {
    name: "SHOP",
  };

  return (
    <>
      {/* Nav Bar start */}
      <div className="Home_container">
        <PageName className="pages" {...data} />
      </div>

      {/* product section  */}
      {/* <!-- product section start --> */}
      <div className="card__body">
        {products.map((product) => {
          
          return (
            <>
             <Product product={product} key={product.id}/>
            </>
          );
        })}
      </div>
      {/* 
      <div className="container ">
        
          {Data.map((values, index) => {
            return (
              <>
                <div className="Card">
                  <img
                    src={values.image}
                    alt=""
                    className="Card_image"
                  />
                  <h5 className="product-title">{values.title}</h5>
                  <strong className="product-price">
                    Price :{values.price}
                  </strong>
                  <div>
                    <button
                      className="AddToCart"
                      onClick={() => addCart(values)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </>
            );
          })}
       
      </div> */}

      {/* <!-- product section ends --> */}

      <FooterSubscribe />
      <FooterDetails />
    </>
  );
};

export default Shop;
