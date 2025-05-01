import React, { useState } from "react";
import styles from "./Contact.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import mapImage from "../../assets/Images/map.png";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    const newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required.";
    if (!subject.trim()) newErrors.subject = "Subject is required.";
    if (!message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setShowThankYou(false);
      return;
    }

    // Clear form and show thank you
    setShowThankYou(true);
    setEmail("");
    setSubject("");
    setMessage("");
    setErrors({});

    setTimeout(() => {
      setShowThankYou(false);
    }, 3000);
  };

  return (
    <div className={styles.wrapper}>
      <img src={mapImage} alt="Map" className={styles.map} />

      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h2 className={styles.heading}>Get In Touch</h2>

        <input
          className={styles.input}
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className={styles.errorWrapper}>
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>

        <select
          className={styles.input}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="">Subject</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Support">Support</option>
        </select>
        <div className={styles.errorWrapper}>
          {errors.subject && <p className={styles.error}>{errors.subject}</p>}
        </div>
        <textarea
          className={styles.textarea}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <div className={styles.errorWrapper}>
          {errors.message && <p className={styles.error}>{errors.message}</p>}
        </div>
        <button className={styles.button} type="submit">
          Submit Now
        </button>

        {showThankYou && (
          <div className={styles.thankYou}>
            Thank you! We’ll get in touch soon.
          </div>
        )}
      </form>

      <div className={styles.icon}>
        <LocationOnIcon style={{ color: "white" }} />
      </div>
    </div>
  );
};

export default Contact;
