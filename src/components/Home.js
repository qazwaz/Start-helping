import React from "react";
import Header from "./header/Header";
import Columns from "./threeColumns/ThreeColumns";
import FourSteps from "../components/fourSteps/FourSteps";
import AboutUs from "./aboutUs/AboutUs";
import WhoWeHelp from "./WhoWeHelp";
import ContactForm from "./Contact";

function Home() {
  return (
    <div className="container">
      <Header />
      <Columns />
      <FourSteps />
      <AboutUs />
      <WhoWeHelp />
      <ContactForm />
    </div>
  );
}
export default Home;
