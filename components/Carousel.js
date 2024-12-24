import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Box, Typography, Avatar } from '@mui/material';

const reviews = [
  {
    name: "Harvy",
    review: "I’m thoroughly impressed with the level of support I received. The team was not only quick to respond but also highly knowledgeable, providing a solution to my problem in record time. They took the time to understand my concerns and made sure everything was working perfectly before closing the ticket. Their professionalism and attention to detail really set them apart. I couldn't have asked for better service, and I will definitely rely on their tech support for any future issues",
    avatar: "/images/avatar1.jpg",
  },
  {
    name: "Venkat",
    review: "Exceptional service from start to finish! The tech support team was incredibly professional, solving my issue with speed and precision. What really stood out was their friendly and approachable attitude, which made the whole experience stress-free. They kept me updated throughout the process, ensuring I was fully informed of what was happening. Their expertise and commitment to finding the best solution left me thoroughly satisfied. I highly recommend this team for any tech support needs",
    avatar: "/images/avatar2.jpg",
  },
  {
    name: "Roshan",
    review: "I had an outstanding experience with the tech support provided by Techie team. From the moment I reached out, they were highly responsive and professional, quickly understanding my needs and delivering solutions efficiently. Their expertise in resolving complex issues was remarkable, and they went above and beyond to ensure everything was functioning perfectly. What impressed me most was their clear communication throughout the process and their ability to adapt to my unique requirements. I highly recommend their tech support services for anyone looking for reliable, effective, and timely solutions!",
    avatar: "/images/avatar3.jpg",
  },
  {
    name: "Swetha",
    review: "The tech support team has been incredibly helpful and patient throughout the entire process. They resolved my issue in no time and explained every step in a way that was easy to understand. What stood out was their willingness to follow up and ensure that everything continued to work smoothly after the issue was fixed. Their dedication to customer satisfaction is truly commendable, and I would recommend their services to anyone in need of reliable and knowledgeable tech support",
    avatar: "/images/avatar3.jpg",
  },
];

const Carousel = () => {
  return (
    <Box
      sx={{
        maxWidth: 900, // Increased width of the overall container
        mx: "auto",
        my: 12, // Increased top and bottom margins
        borderRadius: 3,
        overflow: "hidden",
        textAlign: "center", // Center text for the header
      }}
    >
      {/* Heading */}
      <Typography
        variant="h5" // Changed to h6 for smaller size
        sx={{
          color: "#90caf9", // Soft light blue color related to carousel theme
          fontFamily: "'Roboto', sans-serif", // Same font family as carousel for consistency
          fontWeight: 500, // Lighter font weight
          mb: 3, // Margin bottom for spacing from carousel
          textAlign: "center", // Center the heading text
        }}
      >
        What Says Our Customers
      </Typography>

      <Swiper
        modules={[Pagination, Autoplay]} // Removed Navigation module
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        style={{ borderRadius: "12px" }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                height: 400,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#2c2c2c", // Slightly lighter dark for slides
                textAlign: "center",
                px: 5,
                py: 4,
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Avatar
                src={review.avatar}
                alt={review.name}
                sx={{
                  width: 80,
                  height: 80,
                  mb: 2,
                  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.5)",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  mb: 1,
                  color: "#ffffff",
                  fontWeight: 600,
                }}
              >
                {review.name}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#cccccc",
                  fontStyle: "italic",
                  maxWidth: 600, // Limits the width of the review text
                  mx: "auto", // Centers the text within the card
                }}
              >
                "{review.review}"
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
