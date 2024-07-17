import React from "react";
import styles from "./CocktailList.module.css";

const CocktailList = ({ cocktailDetails }) => {
  const { strDrink, strDrinkThumb, strInstructions } = cocktailDetails;
  return (
    <div className={styles.drinksWrapper}>
      <div className={styles.imageWrapper}>
        <img src={strDrinkThumb} alt="Drink" loading="lazy" />
      </div>
      <h3>{strDrink}</h3>
      <span>{strInstructions}</span>
    </div>
  );
};

export default CocktailList;
