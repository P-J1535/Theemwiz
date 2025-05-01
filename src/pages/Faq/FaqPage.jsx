import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./FaqPage.module.css";
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "A digital agency is a business",
    answer:
      "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.",
  },
  {
    question: "Hire to outsource your digital",
    answer:
      "Hiring a digital agency helps reduce internal overhead and brings expertise for optimized marketing campaigns.",
  },
  {
    question: "Marketing efforts",
    answer:
      "Marketing efforts involve strategic planning, execution, and analysis to boost visibility and engagement.",
  },
  {
    question: "Can provide your business",
    answer:
      "Agencies can support your business through branding, social media, paid ads, SEO, and content strategies.",
  },
];

const FaqPage = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <div className={styles.faqWrapper}>
      <div className={styles.faq}>
        <div className={styles.faqLeft}>
          <p className={styles.faqLabel}>Faq</p>
          <h2 className={styles.faqTitle}>
            Frequently Asked <br /> Questions
          </h2>
          <p className={styles.faqDescription}>
            A digital agency is a business you hire to outsource your digital
            marketing efforts, instead of handling in-house.
          </p>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <p className={styles.contactLink}>Contact Us</p>
          </Link>
        </div>

        <div className={styles.faqRight}>
          {faqData.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={handleChange(index)}
              disableGutters
              elevation={0}
              square
              className={`${styles.accordion} ${
                expanded === index ? styles.expandedAccordion : ""
              }`}
              sx={{ bgcolor: "#fff1ec" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "#EF6D58" }} />}
                className={styles.summary}
              >
                <span className={styles.question}>{item.question}</span>
              </AccordionSummary>
              <AccordionDetails className={styles.details}>
                <span className={styles.answer}>{item.answer}</span>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FaqPage;
