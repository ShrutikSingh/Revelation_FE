import React, { useState, useEffect } from "react";
import NormalDayLeft from "./NormalDayLeft";
import NormalDayRight from "./NormalDayRight";
import HighlightedDay from "./HighlightedDay";

const eventSchedule = [
    {
        day: "DAY-1",
        date: "March 21st, 2025",
        events: [
            { name: "Inauguration", time: "09:00 AM - 10:00 AM", isLive: false, gif: "vite.svg" },
            { name: "Ganitam", time: "09:00 AM - 10:00 AM", isLive: true, gif: "vite.svg" },
            { name: "Hackathon", time: "09:00 AM - 10:00 AM", isLive: false, gif: "vite.svg" }
        ]
    },
    {
        day: "DAY-2",
        date: "March 22nd, 2025",
        events: [
            { name: "Root Access", time: "09:00 AM - 10:00 AM", isLive: false, gif: "vite.svg" },
            { name: "BLOOD DONATION CAMP", time: "09:00 AM - 10:00 AM", isLive: false, gif: "vite.svg" },
            { name: "BrainDead", time: "09:00 AM - 10:00 AM", isLive: false, gif: "vite.svg" }
        ]
    },
    {
        day: "DAY-3",
        date: "March 23rd, 2025",
        events: [
            { name: "BLOOD DONATION CAMP", time: "09:00 AM - 10:00 AM", isLive: false, gif: "vite.svg" },
            { name: "Valedictory", time: "09:00 AM - 10:00 AM", isLive: false, gif: "vite.svg" },
            { name: "Codestorm", time: "09:00 AM - 10:00 AM", isLive: false, gif: "vite.svg" }
        ]
    }
];

const EventList = () => {
    const [highlighted, setHighlighted] = useState(eventSchedule[0]);
    const [liveEvent, setLiveEvent] = useState(null);
    const [normalDays, setNormalDays] = useState([eventSchedule[1], eventSchedule[2]]);

    useEffect(() => {
        let foundLiveEvent = null;
        for (const day of eventSchedule) {
            for (const event of day.events) {
                if (event.isLive) {
                    foundLiveEvent = event;
                    break;
                }
            }
            if (foundLiveEvent) break;
        }
        setLiveEvent(foundLiveEvent);
    }, []);

    const handleHighlighting = (selectedDay) => {
        setHighlighted(selectedDay);
        const dayToBeNormalised = eventSchedule.filter(d => d.day !== selectedDay.day);
        setNormalDays(dayToBeNormalised);
    };

    return (
      <div className="relative w-full h-screen bg-[url('public/grid.png')] bg-cover bg-center flex flex-col items-center justify-center overflow-y-auto">

      {/* Title Section */}
      <h2 className="text-white text-[31.5px] font-bold tracking-wide uppercase text-center font-title mt-2">
          Explore the Marvellous
      </h2>
      <h1 className="text-red-500 text-[74px] font-title">EVENTS</h1>
  
      {/* Download Button & Live Announcement */}
      <div className="flex flex-col items-center mt-1">
          <button className="px-6 py-2 border-2 border-red-500 text-white text-lg font-bold rounded-md hover:bg-red-500 transition">
              DOWNLOAD SCHEDULE
          </button>
          <div className="mt-2 text-red-500 text-sm font-bold px-4 py-2 rounded-md">
              LIVE <span className="text-white">Blood Donation Camp is live now!</span>
          </div>
      </div>
  
      {/* Centered Event Cards Section */}
      <div className="grid grid-cols-12 gap-8 w-full max-w-[1300px] px-6 mx-auto mt-8 place-items-center">
  
          {/* Left Normal Day */}
          <div className="col-span-3 flex justify-center cursor-pointer" onClick={() => handleHighlighting(normalDays[0])}>
              <NormalDayLeft inday={normalDays[0]} key={normalDays[0].day} />
          </div>
  
          {/* Center Highlighted Day (Larger) */}
          <div className="col-span-6 relative flex justify-center items-center w-[475px]">
              <div className="absolute inset-0 bg-red-500 rounded-lg blur-xl"></div>
              <HighlightedDay inday={highlighted} />
          </div>
  
          {/* Right Normal Day */}
          <div className="col-span-3 flex justify-center cursor-pointer" onClick={() => handleHighlighting(normalDays[1])}>
              <NormalDayRight inday={normalDays[1]} key={normalDays[1].day} />
          </div>
  
      </div>
  </div>
  
    );
};

export default EventList;
