import React, { useEffect, useState, useCallback, useMemo } from "react";
import axios from "axios";
import SearchBar from "./SearchBar/SearchBar";
import styles from "./Cocktails.module.css";
import CocktailList from "./CocktailsList/CocktailList";

const Cocktails = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCocktails = async (url) => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${url}?s=${searchTerm}`);
        setData(response.data.drinks);
      } catch (err) {
        setError("Failed to fetch cocktails. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        getCocktails(`https://www.thecocktaildb.com/api/json/v1/1/search.php`);
      } else {
        setData([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleChange = useCallback((e) => {
    setSearchTerm(e.target.value.trim());
  }, []);

  const cocktailList = useMemo(() => {
    return data ? (
      data.map((cocktail) => (
        <CocktailList cocktailDetails={cocktail} key={cocktail.idDrink} />
      ))
    ) : (
      <p>No cocktails found.</p>
    );
  }, [data]);

  return (
    <div className={styles.CocktailContainer}>
      <SearchBar onChange={handleChange} value={searchTerm} />
      <h2 className={styles.heading}>Your Cocktails</h2>
      {loading && <p>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.gridContainer}>{cocktailList}</div>
    </div>
  );
};

export default Cocktails;
