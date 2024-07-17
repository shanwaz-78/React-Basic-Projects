import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ value, onChange }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.SearchContainer}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="drinkName">Search For Your Favorite Cocktail</label>
        <input
          type="text"
          id="drinkName"
          name="drinkName"
          value={value}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;
