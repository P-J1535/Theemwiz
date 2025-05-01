import React from "react";
import styles from "./Pricingplans.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";

const PricingPlans = [
  {
    title: "Consultation",
    price: "Free",
    description:
      "Your digital marketing efforts, instead of handling in-house.",
    features: [
      { text: "Brand Design", active: true },
      { text: "Market Analysis", active: false },
      { text: "Production", active: false },
    ],
    buttonColor: "white",
    isPopular: false,
  },
  {
    title: "Design",
    price: "$1500",
    description:
      "Provide your business with a variety of digital solutions to promote.",
    features: [
      { text: "Brand Design", active: true },
      { text: "Market Analysis", active: true },
      { text: "Production", active: false },
    ],
    buttonColor: "orange",
    isPopular: true,
  },
  {
    title: "Design+Code",
    price: "$2900",
    description: "Help you hit your marketing goals and grow your business.",
    features: [
      { text: "Brand Design", active: true },
      { text: "Market Analysis", active: true },
      { text: "Production", active: true },
    ],
    buttonColor: "white",
    isPopular: false,
  },
];

const Pricingplans = () => {
  return (
    <div className={styles.pricingSection}>
      <div className={styles.pricingPlans}>
        <p className={styles.headingLabel}>Pricing</p>
        <h2 className={styles.headingTitle}>Check Our Pricing Plans</h2>

        <div className={styles.cardContainer}>
          {PricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`${styles.card} ${
                plan.isPopular ? styles.popular : ""
              } ${idx === 2 ? styles.highlight : ""}`}
            >
              {plan.isPopular && (
                <span className={styles.popularBadge}>Popular</span>
              )}

              <p className={styles.cardTitle}>{plan.title}</p>
              <h3 className={styles.price}>{plan.price}</h3>
              <p className={styles.cardDescription}>{plan.description}</p>

              <ul className={styles.features}>
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`${styles.featureItem} ${
                      !feature.active ? styles.inactive : ""
                    }`}
                  >
                    <div className={styles.featureIconWrapper}>
                      {feature.active ? (
                        <AddIcon className={styles.featureIcon} />
                      ) : (
                        <RemoveIcon className={styles.featureIcon} />
                      )}
                      <span>{feature.text}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <Link to="/contact">
                <button
                  className={`${styles.contactButton} ${
                    plan.buttonColor === "white" ? styles.white : ""
                  }`}
                >
                  Contact Us
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricingplans;
