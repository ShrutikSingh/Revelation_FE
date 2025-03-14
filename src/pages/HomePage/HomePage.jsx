import React from "react";
import Participants from "../../components/Participants/Participants";
import EventSlider from "../../components/EventSlider/EventSlider";
import Footer from "../../components/Footer/Footer"
import bgImage from "../../assets/grid.webp"; 
import Gallery from "../../components/Gallery/Gallery"
import Navbar from "../../components/Navbar/Navbar";
const HomePage = () => {
    return (
    <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat flex flex-col items-center gap-y-40"

      style={{ backgroundImage: `url(${bgImage})` }}
    >
            { <Navbar /> }
            <Participants/>

            <EventSlider />

            <Gallery />
          
          {/* { <Footer /> } */}
           
        </div>
    );
};

export default HomePage;
 