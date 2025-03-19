import React, { useEffect, useRef } from "react";
import event1 from "../../assets/Event_img/BrainDead.webp";
import event2 from "../../assets/Event_img/HackQuest.webp";
import event3 from "../../assets/Event_img/Ludo.webp";
import event4 from "../../assets/Event_img/CodeStorm.webp";
import event5 from "../../assets/Event_img/Fifa.webp";
import event6 from "../../assets/Event_img/Ganitam.webp";
import event7 from "../../assets/Event_img/MurderMystery.webp";
import event8 from "../../assets/Event_img/RootAccess.webp";
import event9 from "../../assets/Event_img/TechnoQuiz.webp";
import event10 from "../../assets/Event_img/Valorant.webp";
import event11 from "../../assets/Event_img/BloodDonation.webp";
import event12 from "../../assets/Event_img/Bgmi.webp";
import "./EventSlider2.css";

const events = [
  { id: 1, image: event1, title: "Brain Dead" },
  { id: 2, image: event2, title: "HackQuest" },
  { id: 3, image: event3, title: "Ludo" },
  { id: 4, image: event4, title: "Code Storm" },
  { id: 5, image: event5, title: "FIFA" },
  { id: 6, image: event6, title: "Ganitam" },
  { id: 7, image: event7, title: "Murder Mystery" },
  { id: 8, image: event8, title: "Root Access" },
  { id: 9, image: event9, title: "Techno Quiz" },
  { id: 10, image: event10, title: "Valorant" },
  { id: 11, image: event11, title: "BloodDonation" },
  { id: 12, image: event12, title: "Bgmi" }
];

function EventSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    slider.style.animation = "rotate 30s linear infinite";
  }, []);

  return (
    <div className="eventShowDown">
      {/* Title */}
      <div className="font-playfair text-2xl sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-[700]  bg-gradient-to-br from-gray-600 via-white to-black text-transparent bg-clip-text mb-12 sm:mb-10 text-center">

        TECH FEST EVENTS
      </div>

      <div className="event_slider">
        <div className="slider" ref={sliderRef}>
          {events.map((event, index) => (
            <span key={event.id} style={{ "--i": index }}>
              <img src={event.image} alt={event.title} />
              {/* <h4>{event.title}</h4> */}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventSlider;
