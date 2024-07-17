import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={`${styles.NavBarWrapper} container`}>
      <div className={styles.logo}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZxe_jVQ2gT6sZPaffnIxyvL0nmLWms7R-QA&s"
          alt="Nike Logo"
        />
      </div>
      <div className={styles.NavLinks}>
        <ul>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/location">Location</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <button aria-label="Login">Login</button>
    </nav>
  );
};

export default NavBar;
