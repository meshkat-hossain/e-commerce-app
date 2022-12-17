import React, { useState, useEffect } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Services from "./Pages/Services";
// import HomeAbout from "./Component/HomeAbout";
import AboutUs from "./Pages/AboutUs";
import Shop from "./Pages/Shop";
import Homepages from "./Pages/Homepages";
import Blog from "./Pages/Blog";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Nav from "./Component/Nav";
import ProductDetails from './Pages/ProductDetails'

const App = () => {


  //fetch data
  // useEffect(() => {
  //   storeData();
  // }, []);
  // const storeData = async () => {
  //   const response = await fetch("https://fakestoreapi.com/products");
  //   const jsonData = await response.json();
  //   setData(jsonData);
  // };

  //   // add to cart

  //   const addToCart = (data,id) => {
  //   const newItem= {...data, ammount: 1};
  // //if check the item is already in cart
  // const cartItem = cart.find((item) => {
  //   return item.id===id;
  // })

  // if (cartItem) {
  //   const newCart = [...cart].map((item) => {
  //     if (item.id===id) {
  //       return{
  //         ...item , ammount: cartItem.ammount +1
  //       }
  //     }else {
  //       return item
  //     }
  //   })
  //   setCart(newCart)
  // }
  // else{
  //   setCart([...cart, newItem])
  // }

  //   };

  // //removeFromCart
  // const removeFromCart = (id) => {
  //   const newCart = cart.filter((item) => {
  //     return item.id !== id;
  //   });
  //   setCart(newCart);
  // }

  //   //clear cart

  //   const clearCart = () => {
  //     setCart([]);
  //   };

  //   //total item value

  return (
    <>
      <Router>
        <div className="Home_container">
          <Nav />
         
        </div>

        <Routes>
          <Route path="/" element={<Homepages />} />

          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
