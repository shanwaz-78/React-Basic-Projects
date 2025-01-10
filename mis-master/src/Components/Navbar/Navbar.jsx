import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="wrapper">
      <nav>
        <h2>MixMaster</h2>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/news-letter">NewsLetter</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
