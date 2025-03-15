import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import heroImage from "../../assets/Hero.jpeg";

console.log(heroImage)

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
  width: 188,
  height: 57,
  textTransform: "none",
  "&:hover": {
    backgroundColor: "red",
  },
  "& .buttonBorder": {
    position: "absolute",
    width: "95%",
    height: "85%",
    top: 0,
    left: 10,
    border: "2.24px solid #d01515",
  },
  "& .buttonShadow": {
    position: "absolute",
    width: "93%",
    height: "82%",
    top: 9,
    left: 0,
  },
  "& .buttonText": {
    position: "absolute",
    top: "15%",
    left: "20%",
    fontFamily: "'Kode Mono', monospace",
    fontWeight: 700,
    color: "white",
    fontSize: "clamp(18px, 2vw, 24px)", // Responsive
  },
  "& .buttonIcon": {
    position: "absolute",
    top: "30%",
    right: "10%",
    width: "clamp(20px, 2vw, 30px)", // Responsive
    height: "clamp(15px, 1.5vw, 20px)", // Responsive
    color: "white",
  },
});

const RevealText = styled(Typography)(({ theme }) => ({
  width: "100%",
  textShadow: "0px 0px 4px #000000",
  background:
    // "linear-gradient(180deg, rgb(255,172.83,172.83) 0%, rgb(210, 0, 0) 100%)",
    "red",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "red",
  WebkitTextFillColor: "transparent",
  fontFamily: "'Bodoni Moda', serif",
  fontSize: "clamp(48px, 10vw, 190px)", // Responsive
  lineHeight: "normal",
}));


const HeroSection = () => {
  return (
    <Box sx={{ position: "relative", width: "100%", height: 638, maxWidth: 1523, marginTop: 6, marginBottom:"-215px" , paddingBottom:16  ,backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <Box sx={{ width: "100%", height: 638, position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            width: "90%",
            maxWidth: 1362,
            top: 115,
            left:25,
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Grandstander', cursive",
              fontWeight: "normal",
              color: "#acacac",
              fontSize: { xs: 28, sm: 36, md: 48 }, // Responsive
              lineHeight: "normal",
            }}
          >
            Unleash the
          </Typography>

          <Box sx={{ position: "relative", mt: 3.5 }}>
            <Typography
              sx={{
                fontFamily: "'Grandstander', cursive",
                fontWeight: "normal",
                color: "#d9d9d9",
                fontSize: { xs: 28, sm: 36, md: 48 }, // Responsive
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
                  fontSize: { xs: 16, sm: 18, md: 20.2 }, // Responsive
                }}
              >
                REVELATION has started!
              </Typography>
            </Stack>

            <EventButton onClick={() => window.location.href = "/events"}>
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
            top: 70,
            right: 10,
            maxWidth: 593,
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            color: "#dadada",
            fontSize: { xs: 16, sm: 20, md: 25 }, // Responsive
            textAlign: "right",
            lineHeight: "normal",
          }}
        >
          The annual tech-fest of the department of computer science and
          technology, IIEST Shibpur
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;
