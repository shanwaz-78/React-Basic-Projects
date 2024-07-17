import React, { useEffect, useState } from "react";
import styles from "./Product.module.css";
import axios from "axios";
import ProductList from "./ProductList/ProductList";

const Product = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProducts = async (url) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
        setError(null);
      } catch (error) {
        setError("An error occurred while fetching the products.");
      } finally {
        setIsLoading(false);
      }
    };

    getProducts(`https://fakestoreapi.com/products/`);
  }, []);

  return (
    <div className={styles.ProductContainer}>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!isLoading && !error && (
        <div className={styles.ProductGrid}>
          {data.map((eachProduct) => (
            <ProductList productData={eachProduct} key={eachProduct.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
