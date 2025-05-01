import React from "react";

import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import AboutUs from "../About/AboutUs";
import HowWeWork from "../HowWeWork/HowWeWork";
import LatestWork from "../LatestWork/LatestWork";
import OurTeam from "../OurTeam/OurTeam";
import Pricingplans from "../Pricingplans/Pricingplans";
import FaqPage from "../Faq/FaqPage";

const LandingPage = () => {
  return (
    <>
      <Home />
      <AboutUs />
      <HowWeWork />
      <LatestWork />
      <OurTeam />
      <Pricingplans />
      <FaqPage />
      <Contact />
    </>
  );
};

export default LandingPage;
