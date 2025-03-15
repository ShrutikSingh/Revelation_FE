import React, { useState, useEffect, useRef } from "react";

const Element = ({ number, label }) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1500; // Animation duration in milliseconds
          const stepTime = duration / number;

          const counter = setInterval(() => {
            start += 1;
            if (start > number) {
              clearInterval(counter);
            } else {
              setCurrentNumber(start);
            }
          }, stepTime);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [number]);

  return (
    <div
      ref={elementRef}
      className="relative mt-10 mb-10 w-[300px] h-[155px] flex flex-col items-center justify-center mb-[100px]
      bg-gradient-to-b from-gray-900 to-black text-red-500 
      rounded-lg border border-red-700 
      shadow-[0_4px_15px_rgba(255,0,0,0.7),0_0_40px_10px_rgba(255,0,0,0.3)] 
      before:absolute before:inset-0 before:rounded-lg 
      before:shadow-[inset_0_4px_6px_rgba(255,0,0,0.4)]"
    >
      <div className="text-4xl font-bold text-red-500">
        {currentNumber}
      </div>
      <div className="text-xl font-medium text-gray-200">{label}</div>
    </div>
  );
};

export default Element;
