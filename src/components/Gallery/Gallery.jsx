import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/career.png";
import img2 from "../../assets/gfg.png";
import img3 from "../../assets/unstop.jpeg";
import img4 from "../../assets/winzo.jpeg";

const images = [img1, img2, img3, img4];

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white px-4 ">
      <h1 className="text-6xl font-bold mb-12">gallery</h1>

      {/* Full-width 3D Carousel Container */}
      <div className="relative w-full overflow-hidden bg-black flex justify-center items-center">
        <motion.div
          className="flex gap-8 px-6 w-full items-center mt-10 mb-10"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          style={{ perspective: "1200px", display: "flex", width: "100%" }} // Ensures full width
        >
          {images.concat(images).map((src, index) => (
            <motion.div
              key={index}
              className="relative w-30 h-60 flex-shrink-0 rounded-lg overflow-hidden"
              style={{
                transform: `rotateY(${index % 2 === 0 ? "10deg" : "-10deg"}) translateY(10px)`,
                boxShadow: "0px 10px 40px rgba(255, 0, 0, 0.2)",
              }}
              whileHover={{ scale: 1.15 }}
            >
              <img src={src} alt="Gallery" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
