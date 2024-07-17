import React from "react";
import { Link } from "react-router-dom";
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <img
          src="https://yt3.googleusercontent.com/ytc/AIdro_mBuq6-S9sYjiQx5FrfF6SANdllGEJ8pyJgxePBJUoE0w=s900-c-k-c0x00ffffff-no-rj"
          width={80}
          height={80}
          alt="Do some coding logo"
        />
      </div>
      <div className={styles.NavLinks}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
