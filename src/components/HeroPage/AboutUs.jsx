import React from "react";
import Img from "../../assets/about-us.png";

const AboutUs = () => {
  return (
    <div className="w-full flex justify-center items-center text-center p-5">
      <div className="relative w-full max-w-[1400px] flex flex-col items-center justify-center">
        <img
          className="w-full h-full lg:h-[120%] absolute top-0 left-0 z-[1] opacity-70  max-w-[96%] transform "
          alt="Background"
          src={Img}
        />
        <img
          className="w-full h-full lg:h-[120%] absolute top-2.5 left-2.5 z-[2]   max-w-[96%] transform  "
          alt="Foreground"
          src={Img}
        />
        <div
          className="absolute top-0 left-10 z-[3] font-bold text-white bg-[rgba(220,3,3,1)] rounded-[10px]"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 2rem)",
            padding: "clamp(5px, 1vw, 10px) clamp(10px, 2vw, 20px)",
          }}
        >
          About Us
        </div>
        <p
          className="relative z-[3] text-white max-w-[90%] break-words"
          style={{
            fontSize: "clamp(.45rem, 1.7vw, 2rem)",
            padding: "clamp(6px, 1vw, 10px)",
            marginTop: "clamp(30px, 8vw, 60px)",
          }}
        >
          Welcome to the grand return of REVELATION, the premier tech fest by
          the Academic Society of Computer Engineers, Department of Computer
          Science and Technology, IIEST Shibpur. With an electric atmosphere
          pulsing with innovation, REVELATION 2k25 is set to captivate over
          5,000 attendees. Join us on this exhilarating journey of intellect,
          creativity, and technology! We transcend traditional learning,
          offering a melting pot of ideas and a celebration of brilliance. From
          fostering technical interests to showcasing innovation, REVELATION is
          a beacon of inspiration. Brace yourself for an unforgettable
          experience where every moment sparks creativity.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
