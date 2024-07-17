import React from "react";
import styles from "./Hero.module.css";
import { FaAmazon } from "react-icons/fa";
import FlipkartIcon from "./FlipCartIconSVG";

const Hero = () => {
  return (
    <main className={`${styles.Hero} container`}>
      <div className={styles.HeroContent}>
        <h3>
          your feet <br /> deserve <br /> the best
        </h3>
        <p>
          your feet deserve the best. and we're here to help you with our shoes.
        </p>

        <div className={styles.HeroButton}>
          <button>Shop Now</button>
          <button className={styles.SecondaryBtn}>Category</button>
        </div>

        <div className={styles.Shopping}>Also Available on</div>

        <div className={styles.BrandImages}>
          <FaAmazon width={10} height={10} color="#FF9900" />
          <FlipkartIcon size={60} color="#2874F0" />
        </div>
      </div>
      <div className={styles.HeroImage}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXvpDJxiiFnJwrBqnGph5A2mYePQoHfR6alg&s"
          alt="Sports Shoes"
        />
      </div>
    </main>
  );
};

export default Hero;
