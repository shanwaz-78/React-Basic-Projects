import React, { useEffect, useState } from "react";
import axios from "axios";
import DrinkList from "./DrinkList";
import DotLoader from "react-spinners/DotLoader";

const loaderStyle = {
  display: "block",
  margin: "0 auto",
};

const Drinks = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [drinksData, setDrinksData] = useState([]);
  const [drinkName, setDrinkName] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const getDrinks = async (query) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
      );
      if (!response.data || response.status !== 200) {
        throw new Error({
          message: response.statusText,
          statusCode: response.status,
        });
      }
      const drinks = response.data.drinks;
      setDrinksData(drinks || []);
    } catch (error) {
      console.error("Error fetching drinks:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(drinkName);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [drinkName]);

  useEffect(() => {
    if (debouncedQuery.trim()) {
      getDrinks(debouncedQuery);
    } else {
      getDrinks("coffee");
    }
  }, [debouncedQuery]);

  return (
    <div className="wrapper">
      <div className="input-wrapper">
        <input
          type="search"
          placeholder="Search...."
          value={drinkName}
          onChange={(e) => setDrinkName(e.target.value)}
        />
        <button onClick={() => getDrinks(drinkName)}>Search</button>
      </div>

      <section className="drinks">
        {isLoading ? (
          <DotLoader
            color="#10b981"
            loading={isLoading}
            cssOverride={loaderStyle}
            size={60}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <DrinkList drinks={drinksData} />
        )}
      </section>
    </div>
  );
};

export default Drinks;
