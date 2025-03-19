import React from "react";
import Event from "./Event";

const HighlightedDay = ({ inday }) => {
    return (
        <div className="relative w-full h-full bg-[#250505] text-white p-8 border-4 border-[#FF0000]
      transform transition duration-300 cursor-pointer overflow-visible"
            style={{
                clipPath: "polygon(0% 0%, 80% 0%, 100% 20%, 100% 100%, 20% 100%, 0% 80%)",
            }}
        >
            {/* Day Header */}
            <h3 className="text-lg font-bold text-[#FF0000] text-center">{inday.day}</h3>
            <p className="text-sm text-gray-300 text-center">{inday.date}</p>

            {/* Events List */}
            <div className="mt-6 flex flex-col items-center space-y-8 relative">
                {inday.events.map((e, index) => (
                    <div key={e.name} className="relative flex flex-col items-center w-full h-[60px]">

                        {/* Event Component */}
                        <div className="relative w-[90%] ">
                            {/* "LIVE" Indicator */}
                            {e.isLive && (
                                <div className="absolute -top-4 -right-4 bg-red-600 text-white text-sm font-bold px-3 py-1.5 
      rounded-lg shadow-lg"
                                    style={{
                                        filter: "drop-shadow(0px 0px 10px rgba(255, 0, 0, 0.8))", // Red glow effect
                                    }}
                                >
                                    LIVE
                                </div>
                            )}

                            <Event event={e} type={{t: "2"}}/>
                        </div>

                        {/*  Dashed Line + Arrow */}
                        {index < inday.events.length - 1 && (
                            <div className="flex flex-col items-center">
                                {/* Dashed Line */}
                                <div className="w-0.5 h-2 border-l-2 border-dashed border-gray-500"></div>

                                {/*  Curved SVG Arrow */}
                                <svg className="w-6 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HighlightedDay;
