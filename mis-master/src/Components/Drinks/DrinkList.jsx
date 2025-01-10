import React from "react";

const DrinkList = ({ drinks }) => {
  if (!drinks || drinks.length === 0) {
    return <p>No drinks found. Please try a different search.</p>;
  }

  return (
    <div className="drink-list">
      {drinks.map((drink) => (
        <div key={drink.idDrink} className="drink-item">
          <img
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            className="drink-image"
          />
          <h3 className="drink-title">{drink.strDrink}</h3>
        </div>
      ))}
    </div>
  );
};

export default DrinkList;
