import React from "react";
import styles from "./SideBar.module.css";

const SideBar = () => {
  return (
    <aside>
      <div className={styles.heading}>
        <h3>Filters</h3>
      </div>
      <div className={styles.Categories}>
        <div className={styles.Category}>
          <input type="checkbox" id="Cameras" />
          <label htmlFor="cameras">Cameras</label>
        </div>
        <div className={styles.Category}>
          <input type="checkbox" id="Smartphones" />
          <label htmlFor="smartphones">Smartphones</label>
        </div>
        <div className={styles.Category}>
          <input type="checkbox" id=" Games" />
          <label htmlFor="games"> Games</label>
        </div>
        <div className={styles.Category}>
          <input type="checkbox" id="Televisions" />
          <label htmlFor="televisions">Televisions</label>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
