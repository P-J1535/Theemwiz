import React from "react";
import styles from "./OurTeam.module.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import giftImage from "../../assets/Images/Gift.png";
import girlImage from "../../assets/Images/girl.png";
import blockImage from "../../assets/Images/block.png";
import carousel1 from "../../assets/Images/member1.png";
import carousel2 from "../../assets/Images/member2.png";
import carousel3 from "../../assets/Images/member3.png";
import carousel4 from "../../assets/Images/member4.png";

const teamMembers = [
  { name: "Azah Anyeni", role: "Designer", img: carousel1 },
  { name: "Roelof Bekkenenks", role: "React Developer", img: carousel2 },
  { name: "Leonardo Oliveira", role: "Illustrator", img: carousel3 },
  { name: "Izabella Tabakova", role: "Product Designer", img: carousel4 },
];

const OurTeam = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* Banner */}
        <div className={styles.banner}>
          <div className={styles.bannerText}>
            <img src={giftImage} alt="Gift" className={styles.giftTag} />
            <p className={styles.giftText}>Get Started</p>
            <h2 className={styles.title}>
              We Help Companies <br /> Move Faster
            </h2>
            <button className={styles.ctaButton}>Contact Us</button>
          </div>

          {/* Positioned absolutely */}
          <div>
            <img
              src={blockImage}
              alt="blockImage"
              className={styles.blockImage}
            />

            <img src={girlImage} alt="Girl" className={styles.bannerImage} />
          </div>
        </div>

        {/* Team */}
        <div className={styles.teamSection}>
          <p className={styles.sectionTag}>Our Team</p>
          <h2 className={styles.sectionTitle}>
            Team of Designers <br /> and Developers
          </h2>

          <div className={styles.carouselContainer}>
            <button className={styles.arrowButton}>
              <ArrowBackIos fontSize="small" />
            </button>

            <div className={styles.carouselTrack}>
              {teamMembers.map((member, index) => (
                <div key={index} className={styles.card}>
                  <img
                    src={member.img}
                    alt={member.name}
                    className={styles.cardImage}
                  />
                  <h3 className={styles.cardName}>{member.name}</h3>
                  <p className={styles.cardRole}>{member.role}</p>
                </div>
              ))}
            </div>

            <button className={styles.arrowButton}>
              <ArrowForwardIos fontSize="small" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
