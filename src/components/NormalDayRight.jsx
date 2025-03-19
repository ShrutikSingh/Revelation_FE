import React from "react";
import Event from "./Event";

const NormalDayRight = ({ inday }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-white rounded-lg blur"></div>
    <div
      className="relative w-72 bg-[#200707] text-white p-4 shadow-lg border-4 border-white
       transform hover:scale-105 hover:bg-[#A10000] transition duration-300 cursor-pointer"
      style={{
        boxShadow: "0px 0px 20px 10px rgb(255, 255, 255)",
        clipPath: "polygon(0% 0%, 80% 0%, 100% 20%, 100% 100%, 20% 100%, 0% 80%)",
        
      }}
    >
      {/* Day Header */}
      <h3 className="text-lg font-bold text-[#FF0000] text-center">{inday.day}</h3>
      <p className="text-sm text-gray-300 text-center">{inday.date}</p>

      {/* Events List */}
      <div className="mt-4 flex flex-col items-center space-y-6">
        {inday.events.map((e, index) => (
          <div key={e.name} className="relative flex flex-col h-[50px] items-center w-full">
            {/* Event Component */}
            <div className="relative w-[80%]">
            <Event event={e} type={{t: "1"}}/>
            </div>

            {/* Dashed Line + Arrow */}
            {index < inday.events.length - 1 && (
              <div className="flex flex-col items-center">
                {/* Dashed Line */}
                <div className="w-0.5 h-2 bg-gray-500 border-l-1 border-dashed"></div>

                {/* Downward Arrow */}
                <svg className="w-5 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default NormalDayRight;
