import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const AboutUs = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  return (
    <Box sx={{ position: "relative", width: "100%", height: isSmallScreen ? "auto" : "670px", p: isSmallScreen ? 2 : 0, mb: "-120px" }}>
      <Paper
        elevation={4}
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          backdropFilter: "blur(4px) brightness(100%)",
          bgcolor: "transparent",
        }}
      >
        <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: isSmallScreen ? "auto" : "732px",
              top: isSmallScreen ? "10px" : "59px",
              left: 0,
              bgcolor: "#000",
              borderRadius: "8px",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              width: isSmallScreen ? "95%" : "calc(100% - 60px)",
              height: isSmallScreen ? "auto" : "600px",
              top: isSmallScreen ? "30px" : "91px",
              left: isSmallScreen ? "2.5%" : "30px",
              bgcolor: "#0a0a0a",
              borderRadius: "8px",
              p: isSmallScreen ? 2 : 0,
            }}
          />

          <Typography
            variant={isSmallScreen ? "body2" : "body1"}
            sx={{
              position: "absolute",
              width: "86%",
              top: isSmallScreen ? "100px" : "185px",
              left: "7%",
              fontFamily: "'Kode Mono', monospace",
              color: "#b0b0b0",
              fontSize: isSmallScreen ? "1rem" : "1.9rem",
              textAlign: "center",
              lineHeight: "normal",
            }}
          >
            Welcome to the spectacular return of REVELATION, the premier technical fest crafted by the Academic Society of Computer Engineers, Department of Computer Science and Technology at IIEST Shibpur. With an electric atmosphere pulsing with innovation, REVELATION 2k23 enchanted more than 5,000 attendees. Join us on this exhilarating journey of intellect, creativity, and technological advancement! Here, we transcend traditional learning boundaries, offering a melting pot of ideas and a celebration of brilliance. From fostering technical interests to showcasing innovative prowess, REVELATION stands as a beacon of inspiration. So, brace yourself for an unforgettable experience where every moment sparks creativity and innovation.
          </Typography>

          <Box
            sx={{
              position: "absolute",
              width: isSmallScreen ? "90%" : "480px",
              height: "131px",
              top: 0,
              left: isSmallScreen ? "5%" : "48px",
            }}
          >
            <Box sx={{ position: "relative", width: "100%", height: "131px" }}>
              <Paper
                elevation={0}
                sx={{
                  position: "absolute",
                  width: "90%",
                  height: "110px",
                  top: 0,
                  left: 0,
                  bgcolor: "#0f0f0f",
                  borderRadius: "30px",
                  border: "2.24px solid #b60000",
                }}
              />
              <Typography
                variant={isSmallScreen ? "h4" : "h1"}
                sx={{
                  position: "absolute",
                  width: "100%",
                  top: "22px",
                  left: "43%",
                  transform: "translateX(-50%)",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: isSmallScreen ? "40px" : "60px",
                  background:
                    "linear-gradient(180deg, rgb(255,255,255) 0%, rgb(153,153,153) 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  textFillColor: "transparent",
                  WebkitTextFillColor: "transparent",
                  textAlign: "center",
                }}
              >
                ABOUT US
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default AboutUs;