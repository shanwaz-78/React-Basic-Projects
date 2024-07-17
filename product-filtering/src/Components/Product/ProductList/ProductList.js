import React from "react";
import styles from "./ProductList.module.css";

const ProductList = ({ productData }) => {
  const { title, price, image } = productData;
  return (
    <div className={styles.ProductItem}>
      <img src={image} alt={title} className={styles.ProductImage} />
      <div className={styles.ProductDesc}>
        <h3>{title}</h3>
        <span>${price}</span>
      </div>
    </div>
  );
};

export default ProductList;
