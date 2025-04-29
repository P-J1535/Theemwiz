import React from "react";
import styles from "./HowWeWork.module.css";
import WeWork from "../../assets/Images/WeWork.png";
import Triangle from "../../assets/Images/Triangle.png";

const HowWeWork = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        {/* Top Section */}
        <div className={styles.introSection}>
          <div className={styles.textSection}>
            <p className={styles.label}>How We Work</p>
            <h2 className={styles.title}>
              Making Your Projects <br /> Look Awesome
            </h2>
            <p className={styles.description}>
              Technical skills, design, business understanding, ability to put
              themselves in the merchant's shoes.
            </p>
            <button className={styles.readMoreBtn}>Read More</button>
          </div>

          <div className={styles.stepsSection}>
            <div className={styles.stepItem}>
              <span className={styles.stepNumber}>1</span>
              <span className={styles.stepText}>
                Full service range including
              </span>
            </div>
            <div className={styles.stepItem}>
              <span className={styles.stepNumber}>2</span>
              <span className={styles.stepText}>
                Technical skills, design, business
              </span>
            </div>
            <div className={styles.stepItem}>
              <span className={styles.stepNumber}>3</span>
              <span className={styles.stepText}>
                Themselves in the merchant's
              </span>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        {/* Video Section */}
        <div className={styles.videoMain}>
          <div className={styles.videoImageWrapper}>
            <img
              src={WeWork}
              alt="Video Thumbnail"
              className={styles.videoImage}
            />
            <div className={styles.overlayWrapper}>
              <div className={styles.triangleCircle}>
                <img
                  src={Triangle}
                  alt="Play Triangle"
                  className={styles.triangleImage}
                />
              </div>
              <div className={styles.timestamp}>1:45</div>
            </div>
          </div>
          <div className={styles.videoTextSection}>
            <p className={styles.label}>Video Reel</p>
            <h2 className={styles.title}>
              Unlock The Greatest <br /> Value Possible
            </h2>
            <p className={styles.description}>
              Design, business understanding, ability to put themselves in the
              merchant's shoes meant to partner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
