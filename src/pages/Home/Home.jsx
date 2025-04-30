import React from "react";
import styles from "./Home.module.css";
import { Button } from "@mui/material";
import HomeImg from "../../assets/Images/Home.png";
import Profile from "../../assets/Images/Profile.png";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.home}>
        <div className={styles.textSection}>
          <p className={styles.label}>Modern Studio</p>
          <h1 className={styles.heading}>
            We’re <span className={styles.helpWithIcon}>Help</span>
            <br />
            To Build Your Dream Project
          </h1>

          <p className={styles.subText}>
            Agency provides a full service range including technical skills,
            design, business understanding.
          </p>
          <div className={styles.actions}>
            <Button variant="contained" className={styles.primaryButton}>
              How We Work
            </Button>
            <a className={styles.contactLink} href="#">
              Contact Us
            </a>
          </div>
          <div className={styles.testimonial}>
            <img src={Profile} alt="user" />
            <div>
              <p>"Put themselves in the merchant's shoes"</p>
              <span>Meta Inc.</span>
            </div>
          </div>
        </div>

        <div className={styles.visualSection}>
          <img src={HomeImg} alt="Illustration" />
        </div>
      </div>
    </div>
  );
}
