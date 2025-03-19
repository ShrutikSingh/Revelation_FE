import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Event = ({ event, type }) => {
  const navigate = useNavigate();
  const [live, setLive] = useState(event.isLive);

  const handleEventClick = (e) => {
    e.stopPropagation();
    // console.log(event.isLive);
    if(event.flag!==undefined && event.flag===true){
      return;
    }
    // alert(`Wait for version Web2.0....`);
    navigate(`/event/${event.id}`);
  }
  const timeToMinutes = (time) => {
    const [hours, minute] = time.split(":").map(Number);
    return hours * 60 + minute;
  }
  useEffect(() => {
    const checkLiveStatus = () => {
        const today = new Date();
        const time = today.getHours() * 60 + today.getMinutes();
        const startTime = timeToMinutes(event.startTime);
        const endTime = timeToMinutes(event.endTime);

        if(endTime >= time && startTime <= time){
          event.isLive = true;
        }else{
          event.isLive = false;
        }
        setLive(event.isLive);
    };

    checkLiveStatus();

    const interval = setInterval(checkLiveStatus, 3600000);

    return () => clearInterval(interval);
}, [event]);
  const gifname = "/" +event.name + ".gif";

  return (
    <div
      className={`flex items-center rounded-full bg-gray-800 text-white p-2 transition duration-300 ease-in-out hover:bg-[#2E0000] hover:border-2 hover:border-red-600 ${event.isLive ? "border-2 border-red-500" : ""
        }`} onClick={(event) => { handleEventClick(event); }}
    >
      <img src={gifname} alt={event.name} className="h-8 w-8 mr-2" />
      <div>
        <p className={`${type.t === "1" ? "text-[11px]" : "text-[15px]"} font-semibold ${live ? "text-red-500" : ""}`}>
          {event.name}
        </p>
        <p className="text-xs">{event.startTime}</p>
      </div>
    </div>
  );
};

export default Event;
