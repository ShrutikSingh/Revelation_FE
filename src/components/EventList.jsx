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
        // console.log(hello);
        const dayToBeNormalised = [];

        eventSchedule.forEach((d) => {
            if(d.day !== selectedDay.day){
                dayToBeNormalised.push(d);
            }
        })

        setNormalDays(dayToBeNormalised);
        console.log(highlighted);
        console.log(normalDays);
    }

    return (
      <div className="relative w-full h-[100vh] bg-[url('public/grid.png')] bg-cover bg-center flex flex-col items-center justify-center overflow-hidden">

      
        
        <h2 className="text-white text-[31.5px] h-[25px]font-bold tracking-wide uppercase text-center font-title">
          Explore the Marvellous </h2>
        <h1 className="text-red-500 text-[74px] font-title">EVENTS</h1>
      
        {/* Download Button & Live Announcement */}
        <div className="flex flex-col items-center">
          <button className="px-6 py-2 border-2 border-red-500 text-white text-lg font-bold rounded-md hover:bg-red-500 transition">
            DOWNLOAD SCHEDULE
          </button>
          <div className="mt-1 text-red-500 text-sm font-bold px-4 py-2 rounded-md">
            LIVE <span className="text-white">Blood Donation Camp is live now!</span>
          </div>
        </div>
      
        {/* Event Cards Section*/}
        <div className="flex w-full max-w-[1200px] px-6 mx-auto justify-between items-start mt-2">



          {/* Left Normal Day */}
          
          <div className="w-[30%] flex justify-center h-full relative p-[30px]" onClick={() => handleHighlighting(normalDays[0])}>
          
          <div className="relative" >
            <NormalDayLeft inday={normalDays[0]} key={normalDays[0].day}/>
          </div>  
          </div>
          
      
          {/* Center Highlighted Day */}
          <div className="w-[38%] relative">
            <div className="absolute h-[465px] inset-0 bg-red-500 rounded-lg blur-xl"></div>
            <div className="w-full flex justify-center items-center relative ">
                <HighlightedDay inday={highlighted}/>
            </div>
          </div>
          
      
          {/* Right Normal Day*/}
          <div className="w-full h-[400px] flex justify-center w-[30%] flex p-[30px]" onClick={() => handleHighlighting(normalDays[1])}>
          <div className="relative" >
            <NormalDayRight inday={normalDays[1]} key={normalDays[1].day} />         
          </div>
          </div>
        </div>
      </div>
      
    );
};

export default EventList;