import React, { useRef } from "react";
import styles from "./OurTeam.module.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import giftImage from "../../assets/Images/Gift.png";
import girlImage from "../../assets/Images/girl.png";
import blockImage from "../../assets/Images/block.png";
import carousel1 from "../../assets/Images/member1.png";
import carousel2 from "../../assets/Images/member2.png";
import carousel3 from "../../assets/Images/member3.png";
import carousel4 from "../../assets/Images/member4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
};

const teamMembers = [
  { name: "Azah Anyeni", role: "Designer", img: carousel1 },
  { name: "Roelof Bekkenenks", role: "React Developer", img: carousel2 },
  { name: "Leonardo Oliveira", role: "Illustrator", img: carousel3 },
  { name: "Izabella Tabakova", role: "Product Designer", img: carousel4 },
];

const OurTeam = () => {
  const sliderRef = useRef(null);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.bannerText}>
            <img src={giftImage} alt="Gift" className={styles.giftTag} />
            <p className={styles.giftText}>Get Started</p>
            <h2 className={styles.title}>We Help Companies Move Faster</h2>

            <Link to="/contact">
              <button className={styles.ctaButton}>Contact Us</button>
            </Link>
          </div>

          <div>
            <img
              src={blockImage}
              alt="blockImage"
              className={styles.blockImage}
            />
            <img src={girlImage} alt="Girl" className={styles.bannerImage} />
          </div>
        </div>

        <div className={styles.teamSection}>
          <p className={styles.sectionTag}>Our Team</p>
          <h2 className={styles.sectionTitle}>
            Team of Designers and Developers
          </h2>

          <div className={styles.carouselContainer}>
            <button
              className={styles.arrowButton}
              onClick={() => sliderRef.current.slickPrev()}
            >
              <ArrowBackIos fontSize="small" />
            </button>

            <Slider
              {...sliderSettings}
              ref={sliderRef}
              className={styles.carouselTrack}
            >
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
            </Slider>

            <button
              className={styles.arrowButton}
              onClick={() => sliderRef.current.slickNext()}
            >
              <ArrowForwardIos fontSize="small" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
