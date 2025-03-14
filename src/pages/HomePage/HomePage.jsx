import React from "react";
import Participants from "../../components/Participants/Participants";
import EventSlider from "../../components/EventSlider/EventSlider";
import Footer from "../../components/Footer/Footer";
import bgImage from "../../assets/grid.webp"; 
import Sponsorship from "../../components/Sponsors/Sponsorship";
import Gallery from "../../components/Gallery/Gallery";
import Navbar from "../../components/Navbar/Navbar";

const HomePage = () => {
    return (
        <div
            className="w-full min-h-screen flex flex-col items-center gap-y-40"
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
            <Participants />
            <EventSlider />
            <Gallery />
            <Sponsorship />
            <Footer />
        </div>
    );
};

export default HomePage;
