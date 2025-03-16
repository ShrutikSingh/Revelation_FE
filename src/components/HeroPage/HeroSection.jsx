import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

// Styled components
const LiveBadge = styled(Box)({
  position: "relative",
  width: 64,
  height: 28,
  "& .badge": {
    position: "absolute",
    width: 60,
    height: 24,
    top: 0,
    left: 4,
    backgroundColor: "#d01515",
    border: "1.1px solid white",
  },
  "& .shadow": {
    position: "absolute",
    width: 60,
    height: 24,
    top: 5,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  "& .text": {
    position: "absolute",
    top: 5,
    left: 19,
    fontFamily: "'Kode Mono', monospace",
    fontWeight: 700,
    color: "black",
    fontSize: "clamp(10px, 1.2vw, 12px)", // Responsive
  },
});

const EventButton = styled(Button)({
  position: "relative",
  width: "clamp(100px, 18vw, 160px)", // Smaller min size for mobile
  height: "clamp(35px, 7vh, 50px)",  // Smaller height for mobile
  textTransform: "none",

  "&:hover": {
    backgroundColor: "red",
  },

  "& .buttonBorder": {
    position: "absolute",
    width: "90%",
    height: "70%",
    top: 0,
    left: "4%", // Adjusted for mobile layout
    border: "2px solid #d01515",
  },

  "& .buttonShadow": {
    position: "absolute",
    width: "90%",
    height: "75%",
    top: 9,
    left: 0,
  },

  "& .buttonText": {
    position: "absolute",
    top: "15%",
    left: "18%",
    fontFamily: "'Kode Mono', monospace",
    fontWeight: 700,
    color: "white",
    fontSize: "clamp(14px, 1.8vw, 18px)", // Reduced for mobile
  },

  "& .buttonIcon": {
    position: "absolute",
    top: "30%",
    right: "8%",
    width: "clamp(18px, 1.8vw, 25px)", // Smaller icon for mobile
    height: "clamp(12px, 1.5vw, 18px)", 
    color: "white",
  },

  "@media (max-width: 480px)": {
    width: "90px",  // Fixed width for smaller screens
    height: "32px", 
    "& .buttonText": {
      fontSize: "12px", // Further reduced text size for mobile
      left: "10%",
    },
    "& .buttonIcon": {
      width: "16px",
      height: "12px",
    },
  },
});


const RevealText = styled(Typography)({
  width: "100%",
  textShadow: "4px 4px 6px rgba(0, 0, 0, 0.4)",
  background: "linear-gradient(180deg, #FFADAD 0%, #FFFFFF 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "transparent",
  WebkitTextFillColor: "transparent",
  fontFamily: "'Bodoni Moda', serif",
  fontSize: "clamp(48px, 10vw, 190px)", // Responsive
  lineHeight: "normal",
  filter: "drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.5))",
});

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: 480, sm: 550, md: 638 }, // Responsive height
        maxWidth: 1523,
        marginTop: 5,
        marginBottom: "-215px",
        // paddingBottom: 30,
        // backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            width: "90%",
            maxWidth: 1362,
            top: { xs: 145, sm: 100, md: 130 }, // Responsive position
            left: 25,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Abhaya Libre, serif",
              fontWeight: "normal",
              color: "#acacac",
              fontSize: { xs: 24, sm: 32, md: 48 },
              lineHeight: "normal",
            }}
          >
            Unleash the
          </Typography>

          <Box sx={{ position: "relative", mt: -1 }}>
            <Typography
              sx={{
                fontFamily: "Abhaya Libre, serif",
                fontWeight: "normal",
                color: "#d9d9d9",
                fontSize: { xs: 24, sm: 32, md: 48 },
                lineHeight: "normal",
              }}
            >
              Extraordinary with
            </Typography>

            <RevealText>REVELATION</RevealText>
          </Box>

        </Box>

        <Box sx={{ position: "absolute", bottom: 1, left: 25 }}>
          <Stack spacing={1}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <LiveBadge>
                <Box className="badge" />
                <Box className="shadow" />
                <Typography className="text">LIVE</Typography>
              </LiveBadge>
              <Typography
                sx={{
                  fontFamily: "'Kode Mono', monospace",
                  fontWeight: "normal",
                  color: "white",
                  fontSize: { xs: 14, sm: 16, md: 20 }, // Responsive
                }}
              >
                REVELATION has started!
              </Typography>
            </Stack>

            <EventButton onClick={() => (window.location.href = "/events")}>
              <Box className="buttonBorder" />
              <Box className="buttonShadow" />
              <Typography className="buttonText">EVENTS</Typography>
              <ArrowForwardIcon className="buttonIcon" />
            </EventButton>
          </Stack>
        </Box>

        <Typography
  sx={{
    position: "absolute",
    top: { xs: 50, sm: 70, lg: 90 }, // Adjusted for large screens
    right: { xs: "30px", lg: "50px" }, // More spacing on large screens
    maxWidth: { xs: 593, lg: 750 }, // Increased max width
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    color: "#dadada",
    fontSize: { xs: 14, sm: 18, md: 25, lg: 32 }, // Increased size for large screens
    textAlign: "right",
    lineHeight: "normal",
  }}
>
  The annual tech-fest of the department of computer science and technology, IIEST Shibpur
</Typography>

      </Box>
    </Box>
  );
};

export default HeroSection;
