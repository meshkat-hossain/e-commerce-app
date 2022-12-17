import React,{useContext} from "react";
// import link
import { Link } from "react-router-dom";

// import cart context
import { CartContext } from '../contexts/CartContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);



  // destructure product
  const { id, image, category, title, price } = product;

 
  return (
    <div className="cards">
      <img className="cardImage" variant="top" src={image} alt="" />

      <div className="cardBody">
        <div>
          <Link to={`/product/${id}`}>
            <h4>{title}</h4>
          </Link>
        </div>
        <div className="card-price-add">
          <span>Price : ${price}</span>

          <button className="add-item-btn" variant="primary" onClick={() => addToCart(product, id)}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
