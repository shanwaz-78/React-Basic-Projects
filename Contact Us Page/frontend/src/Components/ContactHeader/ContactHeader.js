import React from "react";
import styles from "./ContactHeader.module.css";

const ContactHeader = () => {
  return (
    <div className={`container ${styles.contactWrapper}`}>
      <div className={styles.headings}>
        <h3>CONTACT US </h3>
        <p>
          If you have a specific question about our products or services, please
          include that information in your message
        </p>
      </div>
    </div>
  );
};

export default ContactHeader;
