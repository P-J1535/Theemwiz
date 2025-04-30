import React from "react";
import styles from "./AboutUs.module.css";

import Bitmap from "../../assets/Images/Bitmap.png";
import Bitmap1 from "../../assets/Images/Bitmap1.png";
import Bitmap2 from "../../assets/Images/Bitmap2.png";
import Bitmap3 from "../../assets/Images/Bitmap3.png";
import Bitmap5 from "../../assets/Images/Bitmap5.png";
import Office from "../../assets/Images/Office.png";

const AboutUs = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.about}>
        <div className={styles.logoRow}>
          <img src={Bitmap} alt="DigitalSide" />
          <img src={Bitmap1} alt="Vortex" />
          <img src={Bitmap2} alt="Travel Explorer" />
          <img src={Bitmap3} alt="Fuzion" />
          <img src={Bitmap5} alt="MediaFury" />
        </div>

        <div className={styles.underline}></div>

        <div className={styles.contentSection}>
          <div className={styles.imageBlock}>
            <img src={Office} alt="Office" />
          </div>

          <div className={styles.textBlock}>
            <h5 className={styles.aboutLabel}>About</h5>
            <h1 className={styles.mainHeading}>
              An Experience <br /> Design Agency
            </h1>
            <h3 className={styles.subheading}>Provides a full service range</h3>
            <p className={styles.description}>
              Ability to put themselves in the merchant's shoes. It is meant to
              partner on the long run, and work as an extension of the
              merchant's team.
            </p>
            <button className={styles.aboutButton}>About Us</button>
          </div>
        </div>

        <div className={styles.statsSection}>
          <div className={styles.statBox}>
            <h2>42%</h2>
            <p>Years of experience</p>
          </div>
          <div className={styles.statBox}>
            <h2>73+</h2>
            <p>Agency members</p>
          </div>
          <div className={styles.statBox}>
            <h2>5,000</h2>
            <p>Projects complete</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
