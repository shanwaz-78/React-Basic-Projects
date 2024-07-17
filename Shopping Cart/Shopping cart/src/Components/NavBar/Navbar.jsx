import "./css/navbar.css";
import { Link } from "react-router-dom";
import ROUTES from "../../Constants/routes.jsx";
import { ShoppingCart } from "phosphor-react";
import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <Link to={ROUTES.HOME}>Shop</Link>
        <Link to={ROUTES.CART}>
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
