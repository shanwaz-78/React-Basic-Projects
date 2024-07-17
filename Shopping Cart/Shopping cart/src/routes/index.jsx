import React from "react";
import { useRoutes } from "react-router-dom";
import ROUTES from '../Constants/routes.jsx';
import Cart from '../pages/cart/Cart.jsx'
import Shop from '../pages/shop/Shop.jsx';

function AppRoutes() {
  return useRoutes([
    {
      path : ROUTES.HOME,
      element : <Shop/>
    },
    {
      path : ROUTES.CART,
      element : <Cart />
    },
  ]);
}

export default AppRoutes;