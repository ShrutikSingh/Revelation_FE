import React from "react";
import Participants from "../../components/Participants/Participants";
import EventSlider from "../../components/EventSlider/EventSlider";
import Footer from "../../components/Footer/Footer";
import bgImage from "../../assets/grid.webp"; 
import Sponsorship from "../../components/Sponsors/Sponsorship";
import Gallery from "../../components/Gallery/Gallery";
import Navbar from "../../components/Navbar/Navbar";
import TopBox from "../../components/HeroPage/HeroSection";
import AboutUs from "../../components/HeroPage/AboutUs";
import HeroSection from "../../components/HeroPage/HeroSection";
import Faqs from "../FAQs/Faqs";
const HomePage = () => {
    return (
        <div
            className="w-full min-h-screen flex flex-col items-center gap-y-[200px]"
            style={{ 
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed", // Keeps the background fixed while scrolling
                minHeight: "100vh", 
                width: "100%",
            }}
        >
            <Navbar />
            <HeroSection  />
            <AboutUs />
            <Participants  />
            <EventSlider />
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
