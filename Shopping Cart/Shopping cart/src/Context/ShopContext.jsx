import React, { createContext, useState } from "react";
import PRODUCTS from "../products.jsx";

export const Context = createContext(null); 

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i <= PRODUCTS.length - 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

function ShopContext({ children }) {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default ShopContext;
