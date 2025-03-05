import React, { useState } from "react";

const Event = ({ event, type }) => {
  const [live, setLive] = useState(event.isLive);


  const handleEventClick = (e) => {
    e.stopPropagation();
    console.log("Button Click");
    alert(event.name);
  }

  
  return (
    <div
      className={`flex items-center rounded-full bg-gray-800 text-white p-2 transition duration-300 ease-in-out hover:bg-[#2E0000] hover:border-2 hover:border-red-600 ${
        event.isLive ? "border-2 border-red-500" : ""
      }`} onClick = {(event) => {handleEventClick(event);}}
    >
      <img src={event.gif} alt={event.name} className="h-8 w-8 mr-2" />
      <div>
        <p className={`${type.t === "1" ? "text-[11px]" : "text-[15px]"} font-semibold ${event.isLive ? "text-red-500" : ""}`}>
          {event.name}
        </p>
        <p className="text-xs">{event.time}</p>
      </div>
    </div>
  );
};

export default Event;
