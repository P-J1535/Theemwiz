import React from "react";
import styles from "./LatestWork.module.css";
import Portfolio1 from "../../assets/Images/Portfolio1.png";
import Portfolio2 from "../../assets/Images/Portfolio2.png";
import Portfolio3 from "../../assets/Images/Portfolio3.png";
import Portfolio4 from "../../assets/Images/Portfolio4.png";

const LatestWork = () => {
  return (
    <section className={styles.container}>
      <div className={styles.portfoliomain}>
        <p className={styles.portfolio}>Portfolio</p>
        <h2 className={styles.heading}>Latest Work</h2>

        <div className={styles.filterBar}>
          <span className={styles.filter}>
            Show All <span className={styles.count}>14</span>
          </span>

          <div className={styles.desktopFilters}>
            <span className={styles.filter}>
              Design <span className={styles.count}>6</span>
            </span>
            <span className={styles.filter}>
              Branding <span className={styles.count}>4</span>
            </span>
            <span className={styles.filter}>
              Illustration <span className={styles.count}>3</span>
            </span>
            <span className={styles.filter}>
              Motion <span className={styles.count}>1</span>
            </span>
          </div>

          <div className={styles.mobileDropdown}>
            <select className={styles.dropdown}>
              <option value="">Show All</option>
              <option value="design">Design (6)</option>
              <option value="branding">Branding (4)</option>
              <option value="illustration">Illustration (3)</option>
              <option value="motion">Motion (1)</option>
            </select>
          </div>
        </div>

        <div className={styles.imageGrid}>
          <div className={styles.card}>
            <img src={Portfolio1} alt="SOFA" className={styles.image} />
            <span className={styles.tag}>Design</span>
            <h3 className={styles.title}>SOFA</h3>
          </div>
          <div className={styles.cardLarge}>
            <img src={Portfolio2} alt="KeyBoard" className={styles.image} />
            <span className={styles.tagDark}>Branding</span>
            <h3 className={styles.title}>KeyBoard</h3>
          </div>
          <div className={styles.cardLargeFade}>
            <img src={Portfolio3} alt="Work Media" className={styles.image} />
            <span className={styles.tag}>Illustration</span>
            <h3 className={styles.title}>Work Media</h3>
          </div>
          <div className={styles.card}>
            <img src={Portfolio4} alt="DDDone" className={styles.image} />
            <span className={styles.tag}>Motion</span>
            <h3 className={styles.title}>DDDone</h3>
          </div>
        </div>

        <button className={styles.exploreBtn}>Explore More</button>
      </div>
    </section>
  );
};

export default LatestWork;
