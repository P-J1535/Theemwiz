import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/About/AboutUs";
import HowWeWork from "./pages/HowWeWork/HowWeWork";
import LatestWork from "./pages/LatestWork/LatestWork";
import Pricingplans from "./pages/Pricingplans/Pricingplans";
import FaqPage from "./pages/Faq/FaqPage";
import Contact from "./pages/Contact/Contact";
import OurTeam from "./pages/OurTeam/OurTeam";
import LandingPage from "./pages/LandingPage/LandingPage";
import styles from "./App.module.css";
import Home from "./pages/Home/Home";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <div className={styles.mainContent}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/latest-work" element={<LatestWork />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/pricing" element={<Pricingplans />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
