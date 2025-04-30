import React from "react";
import styles from "./Contact.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import mapImage from "../../assets/Images/map.png";

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <img src={mapImage} alt="Map" className={styles.map} />
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>Get In Touch</h2>
        <input className={styles.input} type="email" placeholder="Your email" />
        <select className={styles.input}>
          <option>Subject</option>
          <option>General Inquiry</option>
          <option>Support</option>
        </select>
        <textarea className={styles.textarea} placeholder="Message"></textarea>
        <button className={styles.button}>Submit Now</button>
      </div>
      <div className={styles.icon}>
        <LocationOnIcon style={{ color: "white" }} />
      </div>
    </div>
  );
};

export default Contact;
