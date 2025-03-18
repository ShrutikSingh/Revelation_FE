import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const Element = ({ number, label }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500; // Animation duration
      const increment = Math.ceil(number / (duration / 30)); // Calculate smooth increment

      const counter = setInterval(() => {
        start += increment;
        if (start >= number) {
          setCurrentNumber(number);
          clearInterval(counter);
        } else {
          setCurrentNumber(start);
        }
      }, 30); // Updates every 30ms

      return () => clearInterval(counter);
    }
  }, [isInView, number]);

  return (
    <div
  ref={ref}
  className="flex flex-col items-center justify-center bg-black border-2 border-red-500 rounded-lg 
  shadow-[0_4px_15px_rgba(255,0,0,0.7),0_0_40px_10px_rgba(255,0,0,0.3)] text-center 
  w-[90%] max-w-[350px] xs:max-w-[180px] sm:w-[200px] md:w-[300px] lg:w-[370px] xl:w-[400px] 
  h-[100px] xs:h-[110px] sm:h-[130px] md:h-[180px] lg:h-[190px] 
  px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-2 xs:py-3 sm:py-4 md:py-6 gap-2 sm:gap-3"
>
      <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-red-500">
        {currentNumber}
      </div>
      <div className="font-stencil text-lg xs:text-lg sm:text-xl md:text-3xl lg:text-4xl uppercase tracking-wide text-red-700">
        {label}
      </div>
    </div>
  );
};

const Participants = () => {
  return (
    <div
      className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 
      bg-black py-12 sm:py-16 md:py-20 lg:py-36 rounded-lg justify-items-center "
    >
      <Element number={40} label="Years of Legacy" />
      <Element number={12} label="Events" />
      <Element number={5000} label="Participants" />
      <Element number={20} label="Colleges" />
    </div>
  );
};

export default Participants;
