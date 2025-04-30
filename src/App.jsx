import React from "react";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./pages/About/AboutUs";
import HowWeWork from "./pages/HowWeWork/HowWeWork";
import LatestWork from "./pages/LatestWork/LatestWork";
import Pricingplans from "./pages/Pricingplans/Pricingplans";
import FaqPage from "./pages/Faq/FaqPage";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import OurTeam from "./pages/OurTeam/OurTeam";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Home />
      <AboutUs />
      <HowWeWork />
      <LatestWork />
      <OurTeam />
      <Pricingplans />
      <FaqPage />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
