import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.topSection}>
          <div className={styles.leftColumn}>
            <h2 className={styles.logo}>Agency</h2>
          </div>

          <div className={styles.centerColumn}>
            <div className={styles.column}>
              <p className={styles.heading}>Menu</p>
              <p className={styles.link}>About</p>
              <p className={styles.link}>Services</p>
              <p className={styles.link}>Blog</p>
              <p className={styles.link}>Contact</p>
            </div>
            <div className={styles.column}>
              <p className={styles.heading}>Service</p>
              <p className={styles.link}>Design</p>
              <p className={styles.link}>Development</p>
              <p className={styles.link}>Marketing</p>
              <p className={styles.link}>See More</p>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.icon}>
              <FacebookIcon />
            </div>
            <div className={styles.icon}>
              <TwitterIcon />
            </div>
            <div className={styles.icon}>
              <InstagramIcon />
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.copy}>
            Copyright © 2022 Laaqiq. All Rights Reserved.
          </p>
          <div className={styles.policyLinks}>
            <p className={styles.policy}>Terms of Use</p>
            <p className={styles.policy}>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
