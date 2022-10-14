import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Navbar-section">
      <div className="Nav-logo">
        <h1>
          Furni <span className="logo-dot">.</span>
        </h1>
      </div>

      <div className="Nav-item">
        <ul className="ul">
          <li>
            <NavLink to="/" className="Home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" className="Shop">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="about-us">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className="Services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="Blog">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="Contact-Us">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="Nav-signUp">
        <div className="user">
          <img
            alt="icon"
            src="https://untree.co/demos/furni/images/user.svg"
          ></img>
        </div>

        <div className="cart">
          <NavLink to="/cart">
            <img
              alt=""
              src="https://untree.co/demos/furni/images/cart.svg"
            ></img>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
