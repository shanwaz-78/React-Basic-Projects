import React, { useContext } from "react";
import { Context } from "../../Context/ShopContext.jsx";

function Product({ data }) {
  const { id, productName, price, productImage } = data;
  const { addToCart, cartItmes } = useContext(Context);
  const cartItmeAmount = cartItmes[id];
  return (
    <article className="product">
      <img src={productImage} alt={productName} className="productImage" />
      <div className="description">
        <p>
          <strong>{productName}</strong>
        </p>
        <p className="price">${price}</p>
      </div>
      <button className="addToCartBtn" onClick={() => addToCart(id)}>
        Add To Cart {cartItmeAmount > 0 && <>({cartItmeAmount})</>};
      </button>
    </article>
  );
}

export default Product;
