import React from "react";
import styles from "./Card.module.css";

const UserList = ({ users }) => {
  if (!users || users.length === 0) return <p>No users available</p>;

  return (
    <div className={styles.card}>
      {users.map((user) => {
        const { name, gender, phone, picture } = user;

        return (
          <div key={phone} className={styles.userCard}>
            <div className={styles.image}>
              <img src={picture.large} alt={`${name.first} ${name.last}`} />
            </div>
            <div className={styles.details}>
              <h2>{`${name.first} ${name.last}`}</h2>
              <p>
                <strong>Gender:</strong> {gender}
              </p>
              <p>
                <strong>Phone Number:</strong> {phone}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
