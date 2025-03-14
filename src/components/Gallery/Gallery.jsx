

import React, { useEffect, useRef, useState } from "react";
import img1 from "../../assets/career.png";
import img2 from "../../assets/gfg.png";
import img3 from "../../assets/unstop.jpeg";
import img4 from "../../assets/winzo.jpeg";

const Gallery = () => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Image list (duplicated for seamless scrolling)
  const imageUrls = [img1, img2, img3, img4, img1, img2, img3, img4];
  const totalBoxes = [...imageUrls, ...imageUrls];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let speed = 1;
    let animationFrame;

    const scroll = () => {
      if (!isDragging) {
        container.scrollLeft += speed;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="h-screen bg-black px-10">
      <div className="text-white font-mono text-center text-7xl font-extrabold py-20">
        Gallary
      </div>

      {/* Scrollable container */}
      <div
        className="flex justify-center items-center h-[45vh] overflow-x-scroll relative mt-20 px-10 cursor-grab"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          borderRadius: "50px",
          overflow: "hidden",
          padding: "15px",
          backgroundColor: "#111",
          clipPath: "ellipse(100% 60% at center 50%)", // Curved edges
        }}
      >
        {/* Image boxes with 3D effect */}
        <div className="flex gap-10 p-5 min-w-max">
          {totalBoxes.map((imageUrl, index) => (
            <div
              key={index}
              className="w-60 h-60 flex justify-center items-center bg-cover bg-center text-white font-bold shadow-lg transition-all duration-300"
              style={{
                backgroundImage: `url(${imageUrl})`,
                borderRadius: "30px",
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)", // 3D shadow
                transform: "perspective(1000px) rotateX(10deg)", // 3D tilt effect
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "perspective(1000px) rotateX(0deg) scale(1.1)"; // Lift effect on hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "perspective(1000px) rotateX(10deg) scale(1)"; // Reset effect
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;



