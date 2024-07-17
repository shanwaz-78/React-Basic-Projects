import React from "react";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Button from "../Button/Button";

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contactForm}>
        <div className={styles.topBtn}>
          <Button btnText="VIA CHAT SUPPORT" icon={<MdMessage />} />
          <Button btnText="VIA CALL" icon={<FaPhoneAlt />} />
        </div>
        <Button btnText="VIA EMAIL" icon={<HiMail />} isOutline={true} />

        <form>
          <div className={styles.formController}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.formController}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.formController}>
            <label htmlFor="text">Text</label>
            <textarea name="name" cols="30" rows="10"></textarea>
          </div>
          <div style={{display : 'flex', justifyContent : 'end'}}>
            <Button btnText="Submit"/>
          </div>
        </form>
      </div>
      <div className={styles.contactImage}></div>
    </section>
  );
};

export default ContactForm;
