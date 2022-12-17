import React, { useContext, useState, useEffect } from "react";
// import HomeAbout from "../Component/HomeAbout";
import FooterSubscribe from "../Component/FooterSubscribe";
import FooterDetails from "../Component/FooterDetails";
// import Nav from "../Component/Nav";
import PageName from "./PageName";
import cart from "../Style/Cart.css";
import { Link } from "react-router-dom";

//import cart context
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    clearCart,
    increaseCartItem,
    decreaseNumber,
    total,
  } = useContext(CartContext);

  const title = {
    name: "Cart",
  };

  return (
    <>
      <div className="Home_container">
        <PageName {...title} />
      </div>
      <div className="cart-heading">
        <h2>Shopping cart</h2>
        <h6>You Have Items In Shopping Cart</h6>
      </div>

      {/* cart section start */}
      <div className="containers">
        {cart.map((cartItem) => {
          const { id, image, title, price, amount } = cartItem;
          return (
            <React.Fragment key={id}>
              <div className="product-Cart">
                <div className="firstSection">
                  <div className="productImage">
                    <Link to={`/product/${id}`}>
                      <img alt="" src={image} />
                    </Link>
                  </div>
                  <div className="productTitle-1">
                    <Link to={`/product/${id}`}>
                      <span>{title}</span>
                    </Link>
                  </div>
                </div>

                <div className="secondSection">
                  <div className="productPrice">
                    <span>${price}</span>
                  </div>
                  <div className="productQuantity">
                    <div className="negative">
                      <button onClick={() => decreaseNumber(id)}>-</button>
                    </div>
                    <div className="qty">
                      <span>{amount}</span>
                    </div>
                    <div className="positive">
                      <button onClick={() => increaseCartItem(id)}>+</button>
                    </div>
                  </div>
                </div>
                <div className="thiredSection">
                  <div className="totalbtn">
                    <span>
                      <h5>Total:  {`$ ${parseFloat(price * amount).toFixed(2)}`}</h5>
                    </span>
                  </div>
                  <div className="removebtn" onClick={() => removeFromCart(id)}>
                    <button>X</button>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
        <div className="buttongroup">
          <button className="btn-1" onClick={() => clearCart()}>
            Clear Cart
          </button>
          <Link to={`/shop`}>
            <button className="continueShopping"> Continue Shopping</button>
          </Link>
        </div>
        <div className="cartcheckout">
          <div className="coupon">
            <div className="row">
              <div className="col-md-12">
                <label className="text-black h4" for="coupon">
                  Coupon
                </label>
                <p className="coupon-p">Enter your coupon code if you have one.</p>
              </div>
              <div className="col-md-8 mb-3 mb-md-0">
                <input
                  type="text"
                  className="form-control py-3"
                  id="coupon"
                  placeholder="Coupon Code"
                />
              </div>
              <div className="col-md-4">
                <button className="couponbtn">Apply Coupon</button>
              </div>
            </div>
          </div>

          <div className="cartTotal">
            <h1>Cart Totals</h1>
            <h4>Subtotal :</h4>
            <h6>$ {parseFloat(total).toFixed(2)}</h6>

            <h4 className="Ttl">Total :</h4>
            <h6>$ {parseFloat(total).toFixed(2)}</h6>
            <button>Proceed To CheckOut</button>
          </div>
        </div>
      </div>

      <FooterSubscribe />
      <FooterDetails />
    </>
  );
};

export default Cart;
