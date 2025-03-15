import React from "react";
import { motion } from "framer-motion";
import Unstop from "../../assets/unstop.jpeg";
import Duet from "../../assets/duet_logo.jpg";
import Career from "../../assets/career.png";
import Lawfarm from "../../assets/lawfarm_logo.jpeg";
import GFG from "../../assets/gfg.png";

const sponsorsRow1 = [Unstop, Duet, Lawfarm];
const sponsorsRow2 = [Career, GFG];

const Sponsorship = () => {
  return (
    <div className="min-h-screen text-white text-center flex flex-col justify-center items-center px-4">
      {/* Title Section */}
      <p className="font-mono text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
        Have a Look at our Past
      </p>
      <h1 className="font-serif text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-4">
        SPONSORS
      </h1>

      {/* Sponsor Grid Container */}
      <div className="container mx-auto flex flex-col justify-center items-center gap-16 mt-16">
        {/* Row 1 - 3 Sponsors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[120px] place-items-center">
          {sponsorsRow1.map((image, index) => (
            <SponsorCard key={index} image={image} index={index} />
          ))}
        </div>

        {/* Row 2 - 2 Sponsors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[120px] place-items-center">
          {sponsorsRow2.map((image, index) => (
            <SponsorCard key={index} image={image} index={index + sponsorsRow1.length} />
          ))}
        </div>
      </div>
    </div>
  );
};

// **Sponsor Card Component with Scroll-Triggered Animation**
const SponsorCard = ({ image, index }) => {
  return (
    <motion.div
      key={index} // Forces re-render on viewport re-entry
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, y: index % 2 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 1, delay: index * 0.3 }}
      viewport={{ amount: 0.3, once: false }} // Re-triggers animation every time it enters the viewport
      className="size-56 flex items-center justify-center bg-transparent border-2 border-red-600 rounded-xl shadow-[0_0_40px_rgba(255,0,0,1)] 
        hover:shadow-[0_0_60px_rgba(255,0,0,1)] transition-shadow duration-300"
    >
      <img
        src={image}
        alt="sponsor-logo"
        className="rounded-lg size-40 hover:size-48 transition-all duration-300"
      />
    </motion.div>
  );
};

export default Sponsorship;
