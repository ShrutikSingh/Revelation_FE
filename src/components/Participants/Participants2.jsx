import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const Element = ({ number, label }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 3000;
      const stepTime = duration / number;

      const counter = setInterval(() => {
        start += 1;
        if (start > number) {
          clearInterval(counter);
        } else {
          setCurrentNumber(start);
        }
      }, stepTime);

      return () => clearInterval(counter);
    }
  }, [isInView, number]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center bg-gradient-to-b from-[#111] to-black text-red-500 border-2 border-red-500 rounded-lg shadow-[0_4px_15px_rgba(255,0,0,0.7),0_0_40px_10px_rgba(255,0,0,0.3)] text-center transition-all duration-300 ease-in-out p-5 min-h-[180px] "
    >
      <div className="text-3xl font-bold">{currentNumber}</div>
      <div
        className="mt-2 text-xl"
        style={{ fontFamily: "'Big Shoulders Stencil', sans-serif" }}
      >
        {label}
      </div>
    </div>
  );
};

const Participants = () => {
  return (
    <div className="w-full bg-black grid grid-cols-2 md:grid-cols-4 gap-8 ">
      <Element number={25} label="TEAM MEMBERS" />
      <Element number={12} label="EVENTS" />
      <Element number={500} label="PARTICIPANTS" />
      <Element number={3} label="DAYS" />
    </div>
  );
};

export default Participants;
