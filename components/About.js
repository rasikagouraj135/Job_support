// components/AboutUs.js
import { Box, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <Box
      id="about-us"
      sx={{
        my: 2,
        py: 6,
        px: 3,
        textAlign: "center",
        // Use media queries to adjust padding and margins for responsiveness
        "@media (max-width:600px)": {
          py: 4, // Adjust padding for smaller screens
          px: 2, // Reduce horizontal padding on mobile
        },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: 700,
          color: "#90caf9",
          mb: 2,
          fontSize: { xs: "1.5rem", sm: "2rem" }, // Adjust font size for mobile
        }}
      >
        About Us
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontSize: { xs: "1rem", sm: "1.125rem" }, // Adjust font size for mobile
          lineHeight: 1.6,
          maxWidth: 800,
          mx: "auto",
          // Reduce max width for smaller screens
          "@media (max-width:600px)": {
            maxWidth: "100%", // Allow text to take full width on mobile
          },
        }}
      >
        If you're a newcomer to a particular technology or even an experienced
        professional who needs assistance with completing tasks, our team of
        seasoned experts is here to help. We offer timely support to help you
        meet your deadlines, and we also provide training to empower you to
        tackle future challenges independently.
        <br />
        <br />
        Based in India, we specialize in offering remote job support through
        online platforms like net meeting, Skype, or TeamViewer, assisting
        clients in the USA, UK, Canada, Australia, and other countries. Our
        services are available at highly competitive prices.
      </Typography>
    </Box>
  );
};

export default AboutUs;
