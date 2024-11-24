import React from "react";
import styles from "./FormFields.module.css";
import Button from "../Button/Button";

const FormFields = ({ onChange, handleSubmit, userDetails }) => {
  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputField}>
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            value={userDetails.userName}
            name="userName"
            onChange={onChange}
          />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={userDetails.password}
            name="password"
            onChange={onChange}
          />
        </div>
        <div className={styles.buttons}>
          <Button text="Login" type="submit" />
          <Button text="Register" type="button" />
        </div>
      </form>
    </div>
  );
};

export default FormFields;
