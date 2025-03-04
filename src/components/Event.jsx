import React, { useState } from "react";

const Event = ({ event }) => {
  const [live, setLive] = useState(event.isLive);

  return (
    <div
      className={`flex items-center rounded-full bg-gray-800 text-white p-2 transition duration-300 ease-in-out hover:bg-[#2E0000] hover:border-2 hover:border-red-600 ${
        event.isLive ? "border-2 border-red-500" : ""
      }`}
    >
      <img src={event.gif} alt={event.name} className="h-8 w-8 mr-2" />
      <div>
        <p className={`text-sm font-semibold ${event.isLive ? "text-red-500" : ""}`}>
          {event.name}
        </p>
        <p className="text-xs">{event.time}</p>
      </div>
    </div>
  );
};

export default Event;
