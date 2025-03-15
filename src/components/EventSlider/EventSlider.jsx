import React, { useEffect, useRef, useState } from "react";
import event1 from "../../assets/Event_img/BrainDead.webp";
import event2 from "../../assets/Event_img/buildWithUs.webp";
import event3 from "../../assets/Event_img/Chess.webp";
import event4 from "../../assets/Event_img/codeStorm.webp";
import event5 from "../../assets/Event_img/Fifa.webp";
import event6 from "../../assets/Event_img/Ganitam.webp";
import event7 from "../../assets/Event_img/MurderMysstery.webp";
import event8 from "../../assets/Event_img/RootAccess.webp";
import event9 from "../../assets/Event_img/Techno_Quiz.webp";
import event10 from "../../assets/Event_img/Valorant.webp";

const events = [
  { id: 1, image: event1, title: "Event 1" },
  { id: 2, image: event2, title: "Event 2" },
  { id: 3, image: event3, title: "Event 3" },
  { id: 4, image: event4, title: "Event 4" },
  { id: 5, image: event5, title: "Event 5" },
  { id: 6, image: event6, title: "Event 6" },
  { id: 7, image: event7, title: "Event 7" },
  { id: 8, image: event8, title: "Event 8" },
  { id: 9, image: event9, title: "Event 9" },
  { id: 10, image: event10, title: "Event 10" },
];

const EventSlider = () => {
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const requestRef = useRef(null);

  useEffect(() => {
    const rotateCarousel = () => {
      if (!isPaused) {
        // Subtract instead of add to reverse the direction
        setRotation((prevRotation) => prevRotation - 0.2);
      }
      requestRef.current = requestAnimationFrame(rotateCarousel);
    };

    requestRef.current = requestAnimationFrame(rotateCarousel);

    return () => cancelAnimationFrame(requestRef.current);
  }, [isPaused]);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Title */}
      <div className="font-serif text-2xl sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-4 mb-10
  bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text">
  TECH FEST EVENTS
</div>

      {/* 3D Rotating Carousel */}
      <div className="w-[250px] h-[250px] perspective-1000 mt-[100px]">
        <div
          className="absolute inset-0 w-full h-full transform-style-3d transition-transform duration-1000 ease-out"
          style={{ transform: `rotateY(${rotation}deg)` }}
        >
          {events.map((event, index) => (
            <div
              key={event.id}
              style={{
                transform: `rotateY(${index * (360 / events.length)}deg) translateZ(400px) ${
                  hoveredIndex === index ? "scale(1.2) translateZ(15px)" : ""
                }`,
                transition: "transform 0.5s ease-out",
              }}
              className="absolute w-40 h-44 md:w-48 md:h-54 lg:w-52 lg:h-56 transition-transform duration-500 shadow-[10px_12px_30px_rgba(250,0,0,0.8)]"
              onMouseEnter={() => {
                setHoveredIndex(index);
                setIsPaused(true);
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setIsPaused(false);
              }}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 ease-out"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventSlider;
