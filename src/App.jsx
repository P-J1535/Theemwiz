import React from "react";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./pages/About/AboutUs";
import HowWeWork from "./pages/HowWeWork/HowWeWork";
import LatestWork from "./pages/LatestWork/LatestWork";
import Pricingplans from "./pages/Pricingplans/Pricingplans";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Home />
      <AboutUs />
      <HowWeWork />
      <LatestWork />
      <Pricingplans />
    </div>
  );
};

export default App;
