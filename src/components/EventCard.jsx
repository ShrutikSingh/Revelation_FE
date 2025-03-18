import { useState, useEffect } from "react";

const EventCard = ({imageUrl,dayText}) => {
  // Hardcoded demo data (Replace with API call when backend is ready)
  const demoData = {
    imageUrl: imageUrl, // Replace with actual image URL
    dayText
  };

  const [eventData, setEventData] = useState({ imageUrl: "", dayText: "" });

  useEffect(() => {
    // Simulating API delay
    setTimeout(() => {
      setEventData(demoData);
    }, 1000);
  }, []);

  return (
    <div className="relative w-[220px] h-[280px] mx-auto">
      <svg className="absolute top-0 left-0 w-full h-full">
        <polygon points="0,40 40,0 220,0 220,220 160,280 0,280" className="fill-red-600" stroke="#8D8D8D" strokeWidth="1"/>
      </svg>


      <svg className="absolute top-2 left-2 w-[100%] h-[100%]">
        <defs>
          <clipPath id="eventClip">
            <polygon points="0,40 40,0 220,0 220,220 160,280 0,280" />
          </clipPath>
        </defs>
        <image
          href={eventData.imageUrl}
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#eventClip)"
        />
        <polygon
          points="0,41 41,0 220,0 220,220 160,280 0,280"
          className="fill-none"
          stroke="#8D8D8D"
          strokeWidth="2"
          />
      </svg>

      <div className="absolute top-10 right-2 text-white text-xs font-bold tracking-widest rotate-[-90deg]">
        day {eventData.dayText}
      </div>
    </div>
  );
};

export default EventCard;
