import React from "react";
import img1 from "../../assets/career.png";
import img2 from "../../assets/gfg.png";
import img3 from "../../assets/unstop.jpeg";
import img4 from "../../assets/winzo.jpeg";

const Gallery = () => {
  const imageUrls = [img1, img2, img3, img4];

  return (
    <div className="bg-black py-10">
      <div className="text-white font-mono text-center text-5xl font-bold mb-10">
        Gallery
      </div>

      <div className="relative overflow-hidden w-full h-[30vh] bg-[#111]">
        <div className="flex gap-8 p-5 min-w-max animate-scroll">
          {[...imageUrls, ...imageUrls].map((imageUrl, index) => (
            <div
              key={index}
              className="w-48 h-48 flex justify-center items-center bg-cover bg-center text-white font-bold shadow-lg transition-all duration-300"
              style={{
                backgroundImage: `url(${imageUrl})`,
                borderRadius: "20px",
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.4)",
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Tailwind CSS for smooth scrolling animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            display: flex;
            width: max-content;
            animation: scroll 10s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Gallery;
