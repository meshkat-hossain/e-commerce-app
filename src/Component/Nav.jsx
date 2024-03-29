import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import style from "../Style/Nav.css";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";



const Nav = () => {
  
  const [hambargur, setHambargur] = useState(false);
  const { itemAmmount } = useContext(CartContext);

  const navLinkStyle = ({isActive}) => {
return{
  color: isActive ? '#fff' : '' ,
  fontWeight:isActive ? "bolder" : "bold",
}
  } 
  return (
    <div className="Navbar-section">
      <div className="Nav-logo">
        <Link  to={`/`}>
          <h1>
            Furni <span className="logo-dot">.</span>
          </h1>
        </Link>
      </div>

      <div className={hambargur ? " mobileVersion" : "Nav-item"}>
        <ul className="ul">
          <li>
            <NavLink  style={navLinkStyle} to="/" end className="Home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyle} to="/shop" className="Shop">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyle} to="/about" className="about-us">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyle} to="/services" className="Services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyle} to="/blog" className="Blog">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyle} to="/contact" className="Contact-Us">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>

      <div className={hambargur ? " mobileVersion" : "Nav-signUp"}>
        <div className="user">
          <img
            alt="icon"
            src="https://untree.co/demos/furni/images/user.svg"
          ></img>
        </div>

        <div className="cart">
          <NavLink to="/cart">
            <img alt="" src="https://untree.co/demos/furni/images/cart.svg" />
            <span className="count">{itemAmmount}</span>
          </NavLink>
        </div>
      </div>

      {/* hambarger manu */}
      <div className="hamburger-menu">
        <a href="#" onClick={() => setHambargur(!hambargur)}>
        <span className="fabarsIcon"><i className="fa-solid fa-bars"></i></span>
        </a>
      </div>
    </div>
  );
};

export default Nav;


