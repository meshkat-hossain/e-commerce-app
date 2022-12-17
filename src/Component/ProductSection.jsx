import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductSections from "../Style/ProductSection.css";

const ProductSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fakeData();
  }, []);

  const fakeData = async () => {
    const response = await fetch("https://fakestoreapi.com/products?limit=3");
    const jsonData = await response.json();
    setData(jsonData);
  };

  return (
    <>
      <div className="card_body">
        <div className="col-one">
          <h1>Crafted with excellent material.</h1>
          <p>
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <button className="button-explore">Explore</button>
        </div>
        {data.map((product) => {
          return (
            <>
            
              <div className="card">
                <img className="card__img" alt="" src={product.image} />
                <div className="">
                  <Link to={"/shop"}>
                  <h4>{product.title}</h4>
                  </Link>
                </div>
                <div className="card-price-add">
                  <span className="price">${product.price}</span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProductSection;
