/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { keyframes } from "@emotion/react";

const slideAnimation = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  15% {
    transform: translateX(0);
    opacity: 1;
  }
  85% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

const HeroSection = () => {
  const titles = ["IT JOB SUPPORT", "TRAINING CENTER", "INTERVIEW SUPPORT"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const theme = useTheme(); // Access Material-UI's theme for responsive breakpoints

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 4000); // Change title every 4 seconds

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <Box
      sx={{
        position: "relative",
        height: "45vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        backgroundImage: `url('hero.webp')`, // Replace with your image path
        backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundPosition: "mid",
        backgroundRepeat: "no-repeat",
        overflow: "hidden", // Hide text outside bounds
        [theme.breakpoints.down("sm")]: {
          height: "30vh", // Reduce height on small screens
        },
      }}
    >
      {/* Overlay for better text visibility */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      ></Box>

      {/* Animated Title */}
      <Typography
        variant="h3"
        sx={{
          mb: 4,
          fontFamily: "Roboto, sans-serif",
          fontWeight: 700,
          color: "#f1f1f1",
          position: "relative",
          display: "inline-block",
          whiteSpace: "nowrap",
          animation: `${slideAnimation} 4s ease-in-out infinite`,
          fontSize: "3rem", // Default font size
          [theme.breakpoints.down("md")]: {
            fontSize: "2rem", // Adjust font size for medium screens
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: "1.5rem", // Smaller font size for small screens
          },
        }}
      >
        {titles[currentIndex]}
      </Typography>
    </Box>
  );
};

export default HeroSection;
