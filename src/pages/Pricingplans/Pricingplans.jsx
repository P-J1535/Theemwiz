import React from "react";
import styles from "./Pricingplans.module.css";

const PricingPlans = [
  {
    title: "CONSULTATION",
    price: "Free",
    description:
      "Your digital marketing efforts, instead of handling in-house.",
    features: [
      { text: "Brand Design", active: true },
      { text: "Market Analysis", active: false },
      { text: "Production", active: false },
    ],
    buttonColor: "#ffffff",
    isPopular: false,
  },
  {
    title: "DESIGN",
    price: "$1500",
    description:
      "Provide your business with a variety of digital solutions to promote.",
    features: [
      { text: "Brand Design", active: true },
      { text: "Market Analysis", active: true },
      { text: "Production", active: false },
    ],
    buttonColor: "#EF6D58",
    isPopular: true,
  },
  {
    title: "DESIGN+CODE",
    price: "$2900",
    description: "Help you hit your marketing goals and grow your business.",
    features: [
      { text: "Brand Design", active: true },
      { text: "Market Analysis", active: true },
      { text: "Production", active: true },
    ],
    buttonColor: "#ffffff",
    isPopular: false,
  },
];

const Pricingplans = () => {
  return (
    <div className={styles.pricingSection}>
      <div className={styles.pricingPlans}>
        <p className={styles.headingLabel}>Pricing</p>
        <h2 className={styles.headingTitle}>
          Check Our <br /> Pricing Plans
        </h2>

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
              <div>
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
                      + {feature.text}
                    </li>
                  ))}
                </ul>

                <button
                  className={`${styles.contactButton} ${
                    plan.buttonColor === "#ffffff" ? styles.white : ""
                  }`}
                >
                  Contact Us
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricingplans;
