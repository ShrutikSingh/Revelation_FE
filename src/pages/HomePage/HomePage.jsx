import React from "react";
import Participants from "../../components/Participants/Participants2";
// import EventSlider from "../../components/EventSlider/EventSlider";
import EventSlider2 from "../../components/EventSlider/EventSlider2";
import Footer from "../../components/Footer/Footer";
import bgImage from "../../assets/grid.webp";
import Sponsorship from "../../components/Sponsors/Sponsorship";
import Gallery from "../../components/Gallery/Gallery";
import Navbar from "../../components/Navbar/Navbar";
import AboutUs from "../../components/HeroPage/AboutUs";
import HeroSection from "../../components/HeroPage/HeroSection";
import HeroFinal from "../../components/HeroPage/HeroFinal";
import Faqs from "../FAQs/Faqs";
const HomePage = ({ Token, setToken }) => {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center gap-y-[120px] overflow-x-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Navbar Token={Token} setToken={setToken} />

      {/* Apply a smaller gap between HeroFinal and Participants */}
      <div className="w-full flex flex-col items-center">
        <HeroFinal />
        <Participants />
      </div>

      <EventSlider2 />
      <Gallery />
      
      <div id="sponsors-section">
        <Sponsorship />
      </div>

      <Faqs />
      <Footer />
    </div>
  );
};

export default HomePage;
