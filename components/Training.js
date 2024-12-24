import React, { useRef } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material"; // Arrow icons

const trainings = [
  {
    id: 1,
    image: "/azure.png",
    date: "Dec 2024",
    instructor: "Rahul Charla",
    description:
      "We are planning to start training for Azure Data Engineering Course. Those who are interested, please register.",
  },
  {
    id: 2,
    image: "/aws.png",
    date: "Jan 2025",
    instructor: "Priya Sharma",
    description:
      "We are planning to start training for Azure Data Engineering Course. Those who are interested, please register.",
  },
  {
    id: 3,
    image: "/gcp.png",
    date: "Feb 2025",
    instructor: "Amit Kulkarni",
    description:
      "We are planning to start Google Cloud Training. Those who are interested, please register.",
  },
];

const TrainingCards = () => {
  const scrollContainerRef = useRef(null);

  // Function to scroll the container
  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -500 : 500;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER; // Replace with your number
  const message =
    "Hello! I'm interested in learning more about your job support technology.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", my: 6, textAlign: "center" }}>
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          color: "#90caf9",
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 500,
          mb: 4,
        }}
      >
        Upcoming Training Batches
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "#cccccc",
          fontStyle: "italic",
          maxWidth: 800,
          mx: "auto",
          mb: 4,
        }}
      >
        We are planning to start training batches in upcoming months. Stay tuned
        for more details on these exciting opportunities!
      </Typography>

      {/* Scrollable Container */}
      <Box
        ref={scrollContainerRef}
        sx={{
          display: "flex",
          overflowX: "auto", // Enable horizontal scrolling
          flexWrap: "nowrap", // Keep cards in a single row
          gap: 13, // Increased gap between cards
          "&::-webkit-scrollbar": {
            display: "none", // Hide scrollbar
          },
          justifyContent: "flex-start", // Align items to the left
          mb: 2,
          mx: 1,
        }}
      >
        {trainings.map((training) => (
          <Card
            key={training.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              bgcolor: "#2c2c2c",
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.5)",
              borderRadius: 2,
              overflow: "hidden",
              width: { xs: "100%", sm: 300 }, // 100% width on mobile and fixed width on desktop
              flexShrink: 0, // Prevent cards from shrinking
              height: 400,
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.7)",
              },
            }}
          >
            <CardMedia
              component="img"
              image={training.image}
              alt={training.instructor}
              sx={{
                objectFit: "cover",
                width: "100%",
                height: 160,
                borderBottom: "1px solid #444",
              }}
            />
            <CardContent sx={{ p: 3, textAlign: "left" }}>
              <Typography
                variant="h6"
                color="primary"
                sx={{ fontWeight: "bold", mb: 1 }}
              >
                {training.date}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.primary"
                sx={{ fontWeight: "medium", mb: 1 }}
              >
                {training.instructor}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {training.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2, borderRadius: 2 }}
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                Register
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Arrows for Mobile Scrolling */}
      <Box
        sx={{
          display: { xs: "flex", sm: "none" }, // Arrows only visible on mobile
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton
          onClick={() => handleScroll("left")}
          sx={{
            color: "#90caf9",
            bgcolor: "transparent",
            "&:hover": { bgcolor: "transparent" },
          }}
        >
          <ChevronLeft />
        </IconButton>
        <IconButton
          onClick={() => handleScroll("right")}
          sx={{
            color: "#90caf9",
            bgcolor: "transparent",
            "&:hover": { bgcolor: "transparent" },
          }}
        >
          <ChevronRight />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TrainingCards;
