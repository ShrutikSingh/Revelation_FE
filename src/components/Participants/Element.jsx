import React, { useState, useEffect, useRef } from "react";
import "./Participants.css";

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
      { threshold: 0.5 }
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
    <div ref={elementRef} className="parti-card">
      <div className="parti-number">{currentNumber}</div>
      <div className="parti-label">{label}</div>
    </div>
  );
};

export default Element;
