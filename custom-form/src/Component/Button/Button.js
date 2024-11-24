import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, type }) => {
  return (
    <div>
      <button className={styles.button} type={type}>
        {text}
      </button>
    </div>
  );
};

export default Button;
