import React from "react";
import { motion } from "framer-motion";
import Unstop from "./sponsors/unstop.png";
import splitkaro from "./sponsors/splitkaro.jpg";
import blankbox from "./sponsors/grid.webp";
import techno from "./sponsors/techno1.png";
import winzo from "./sponsors/winzo.png";
import smartplanet from "./sponsors/smartplanet.jpg";
import "./Sponsorship.css";

const sponsorsRow1 = [techno, Unstop, winzo];
const sponsorsRow2 = [splitkaro,smartplanet];

const Sponsorship = () => {
  return (
    <div className="min-h-screen text-white text-center flex flex-col justify-center items-center px-4 sponsors-container">
      {/* Title Section */}
      {/* <p
        className="font-playfair text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-bold 
        bg-gradient-to-br from-gray-600 via-white to-black text-transparent bg-clip-text"
      >
        Have a Look at our Past
      </p> */}

      <h1
        className="font-playfair text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-6 
        bg-gradient-to-br from-gray-600 via-white to-black text-transparent bg-clip-text"
      >
        SPONSORS
      </h1>
      {/* Sponsor Grid Container */}
      <div className="container mx-auto flex flex-col justify-center items-center gap-8 md:gap-16 mt-16">
        {/* Row 1 - 3 Sponsors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-[80px] lg:gap-[120px] place-items-center">
          {sponsorsRow1.map((image, index) => (
            <SponsorCard key={index} image={image} index={index} />
          ))}
        </div>

        {/* Row 2 - 2 Sponsors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[80px] lg:gap-[120px] place-items-center">
          {sponsorsRow2.map((image, index) => (
            <SponsorCard
              key={index}
              image={image}
              index={index + sponsorsRow1.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Sponsor Card Component with Scroll-Triggered Animation
const SponsorCard = ({ image, index }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
        y: index % 2 === 0 ? -100 : 100,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: index * 0.3 }}
      className="size-40 p-4 md:hover:p-2 transition-all flex items-center justify-center bg-transparent border-2 border-red-600 rounded-xl shadow-[0_0_40px_rgba(255,0,0,1)] hover:shadow-[0_0_60px_rgba(255,0,0,1)] ease-linear duration-200"
    >
      <img
        src={image}
        alt="sponsor-logo"
        className="rounded-lg w-full h-full transition-all duration-300"
      />
    </motion.div>
  );
};

export default Sponsorship;
