import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <div className="product">
      <div className="product__info">
        <p>
          The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation
          to Create Radically Successful Businesses
        </p>
        <p className="product__price">
          <small>€</small>
          <strong>200</strong>
        </p>
        <div className="product__rating">
          <p></p>
        </div>
      </div>
      <img
        className="product__image"
        src="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UL320_.jpg"
        alt=""
      />
      <button>Add to basket</button>
    </div>
  );
};

export default Product;
