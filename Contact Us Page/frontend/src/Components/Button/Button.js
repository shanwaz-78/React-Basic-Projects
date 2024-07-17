import React from "react";
import styles from "./Button.module.css";

const Button = ({ btnText, icon, isOutline }) => {
  return (
    <button className={`${isOutline ? styles.outlineBtn : styles.primaryBtn}`}>
      {icon}
      {btnText}
    </button>
  );
};

export default Button;
