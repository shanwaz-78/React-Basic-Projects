import "./css/product.css";
import React from "react";
import PRODUCTS from "../../products.jsx";
import Product from "./Product.jsx";

function Shop() {
  return (
    <>
      <div className="shopTitle">
        <h2>Shop</h2>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </>
  );
}

export default Shop;
