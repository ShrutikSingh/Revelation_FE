import { Box as MUIBox } from "@mui/material";
import React from "react";
import Img from "../../assets/about-us.png";

const AboutUs = () => {
  return (
    <MUIBox
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1002px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "auto",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            opacity: 0.7,
          }}
          alt="Background"
          src={Img}
        />
        <img
          style={{
            width: "100%",
            height: "auto",
            position: "absolute",
            top: 10,
            left: 10,
            zIndex: 2,
          }}
          alt="Foreground"
          src={Img}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "2.7rem",
            zIndex: 3,
            fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            fontWeight: "bold",
            color: "white",
            backgroundColor: "rgba(220, 3, 3, 1)",
            padding: "clamp(5px, 1vw, 10px) clamp(10px, 2vw, 20px)",
            borderRadius: "10px",
          }}
        >
          About Us
        </div>
        <p
          style={{
            position: "relative",
            zIndex: 3,
            fontSize: "clamp(.7rem, 1.7vw, 2rem)",
            color: "white",
            maxWidth: "90%",
            wordWrap: "break-word",
            padding: "clamp(10px, 1vw, 10px)",
            marginTop: "clamp(30px, 8vw, 60px)",
          }}
        >
          Welcome to the spectacular return of REVELATION, the premier technical fest crafted by the Academic Society of Computer Engineers, Department of Computer Science and Technology at IIEST Shibpur. With an electric atmosphere pulsing with innovation, REVELATION 2k23 enchanted more than 5,000 attendees. Join us on this exhilarating journey of intellect, creativity, and technological advancement! Here, we transcend traditional learning boundaries, offering a melting pot of ideas and a celebration of brilliance. From fostering technical interests to showcasing innovative prowess, REVELATION stands as a beacon of inspiration. So, brace yourself for an unforgettable experience where every moment sparks creativity and innovation.
        </p>
      </div>
    </MUIBox>
  );
};

export default AboutUs;
