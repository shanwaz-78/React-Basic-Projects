import React from "react";
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const SearchBar = () => {
  return (
    <header>
      <nav>
        <div className={styles.InputWrapper}>
          <FaSearch size={25} />
          <input type="search" placeholder="Search Products...." />
        </div>
        <div className={styles.CartIcon}>
          <FaShoppingCart size={25} color="#fff" />
        </div>
      </nav>
    </header>
  );
};

export default SearchBar;
