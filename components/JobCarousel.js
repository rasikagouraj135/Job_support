import React from "react";
import Slider from "react-slick";
import {
  Card,
  CardContent,
  Typography,
  Box,
  CardMedia,
  Button,
  useTheme,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Job data
const jobs = [
  {
    id: 1,
    title: "Front-End Developer",
    description: "Specializes in building user interfaces and web designs.",
    skills:
      "HTML, CSS, JavaScript, React, Angular, Vue.js, UI/UX design principles.",
    image: "frontend.avif", // Adjust path if needed
  },
  {
    id: 2,
    title: "Back-End Developer",
    description: "Focuses on server-side logic, database management, and APIs.",
    skills: "Python, Java, Ruby, PHP, Node.js, SQL, MongoDB, REST APIs.",
    image: "backend.webp", // Adjust path if needed
  },
  {
    id: 3,
    title: "Full-Stack Developer",
    description: "Combines front-end and back-end development expertise.",
    skills:
      "A mix of front-end and back-end technologies, DevOps basics, version control.",
    image: "fullstack.jpg", // Adjust path if needed
  },
  {
    id: 4,
    title: "Mobile App Developer",
    description: "Builds applications for mobile platforms.",
    skills: "Swift, Kotlin, Flutter, React Native, iOS/Android SDKs.",
    image: "mobile.jpg", // Adjust path if needed
  },
  {
    id: 5,
    title: "DevOps Engineer",
    description:
      "Bridges the gap between development and operations to streamline software delivery.",
    skills:
      "Jenkins, Docker, Kubernetes, CI/CD pipelines, cloud platforms (AWS, GCP, Azure).",
    image: "devops.webp", // Adjust path if needed
  },
  {
    id: 6,
    title: "Data Engineer",
    description: "Designs and builds data systems and ETL pipelines.",
    skills: "SQL, Python, Spark, Hadoop, BigQuery, Kafka, Airflow.",
    image: "data.webp", // Adjust path if needed
  },
  {
    id: 7,
    title: "Machine Learning/AI Developer",
    description:
      "Develops systems for predictive models and intelligent systems.",
    skills: "Python, TensorFlow, PyTorch, R, NLP, deep learning frameworks.",
    image: "ml.jpg", // Adjust path if needed
  },
  {
    id: 8,
    title: "Game Developer",
    description: "Focuses on creating video games and interactive experiences.",
    skills: "Unity, Unreal Engine, C#, C++, Blender.",
    image: "game.png", // Adjust path if needed
  },
  {
    id: 9,
    title: "Embedded Systems Developer",
    description: "Works on software for devices with embedded systems.",
    skills: "C, C++, Assembly, IoT protocols, real-time operating systems.",
    image: "embedded.webp", // Adjust path if needed
  },
  {
    id: 10,
    title: "Security Software Developer",
    description:
      "Specializes in software that ensures data security and integrity.",
    skills: "Cryptography, ethical hacking, secure coding practices.",
    image: "security.webp", // Adjust path if needed
  },
  {
    id: 11,
    title: "Cloud Developer",
    description: "Focuses on cloud computing solutions and architecture.",
    skills: "AWS, Azure, GCP, serverless architecture, microservices.",
    image: "aws.png", // Adjust path if needed
  },
  {
    id: 12,
    title: "Blockchain Developer",
    description: "Works on blockchain applications and smart contracts.",
    skills: "Solidity, Ethereum, Hyperledger, cryptographic algorithms.",
    image: "blockchain.jpg", // Adjust path if needed
  },
  {
    id: 13,
    title: "API Developer",
    description: "Designs and develops APIs for software interaction.",
    skills: "RESTful APIs, GraphQL, JSON, XML.",
    image: "api.jpg", // Adjust path if needed
  },
  {
    id: 14,
    title: "Test Automation Engineer",
    description: "Specializes in creating automated testing frameworks.",
    skills: "Selenium, Appium, JUnit, pytest, CI/CD tools.",
    image: "testing.png", // Adjust path if needed
  },
  {
    id: 15,
    title: "Software Architect",
    description:
      "Focuses on high-level design and architecture of software systems.",
    skills:
      "System design, scalability, cloud architecture, technology leadership.",
    image: "sa.webp", // Adjust path if needed
  },
  {
    id: 16,
    title: "Systems Software Developer",
    description: "Develops operating systems, networking tools, or utilities.",
    skills: "C, C++, kernel programming, networking protocols.",
    image: "system.jpg", // Adjust path if needed
  },
  {
    id: 17,
    title: "Augmented/Virtual Reality Developer",
    description: "Creates immersive AR/VR experiences.",
    skills: "ARKit, ARCore, Unity, 3D modeling.",
    image: "arvr.jpg", // Adjust path if needed
  },
  {
    id: 18,
    title: "Database Developer",
    description: "Specializes in database management and optimization.",
    skills: "SQL, NoSQL, PostgreSQL, Oracle, MongoDB.",
    image: "db.jpg", // Adjust path if needed
  },
  {
    id: 19,
    title: "IoT Developer",
    description: "Focuses on Internet of Things devices and systems.",
    skills: "IoT frameworks, sensor integration, MQTT, CoAP.",
    image: "iot.jpg", // Adjust path if needed
  },
  {
    id: 20,
    title: "ERP Developer",
    description: "Customizes enterprise resource planning systems.",
    skills: "SAP, Oracle ERP, Microsoft Dynamics.",
    image: "erp.jpg", // Adjust path if needed
  },
];

const JobCarousel = () => {
  const theme = useTheme();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 5, // Show 5 cards on larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 3, // Show 3 cards on tablet
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Mobile
        settings: {
          slidesToShow: 1, // Show 1 card on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER; // Replace with your number
  const message =
    "Hello! I'm interested in learning more about your job support technology.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Box
      sx={{
        my: 6,
        mx: "auto",
        maxWidth: "90%",
        [theme.breakpoints.down("sm")]: {
          maxWidth: "100%",
        },
      }}
    >
      <Slider {...settings}>
        {jobs.map((job) => (
          <Card
            key={job.id}
            sx={{
              bgcolor: "#1e1e1e",
              color: "white",
              borderRadius: 2,
              mx: 1,
              textAlign: "center",
              overflow: "hidden",
              maxWidth: 240,
              height: 350,
              display: "flex",
              flexDirection: "column",
              position: "relative",
              [theme.breakpoints.down("sm")]: {
                maxWidth: "90%", // Adjust card width on mobile
                height: 300, // Reduce height for smaller screens
              },
            }}
          >
            <CardMedia
              component="img"
              image={job.image}
              alt={job.title}
              sx={{
                width: "100%",
                height: 120,
                objectFit: "cover",
                [theme.breakpoints.down("sm")]: {
                  height: 100, // Smaller image on mobile
                },
              }}
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
                p: 2,
                [theme.breakpoints.down("sm")]: {
                  p: 1, // Reduce padding for smaller screens
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: "1rem",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "0.9rem", // Smaller font size on mobile
                  },
                }}
                gutterBottom
              >
                {job.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mb: 1,
                  color: "#b0bec5",
                  flexGrow: 1,
                  fontSize: "0.85rem",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "0.75rem", // Smaller description text
                  },
                }}
              >
                {job.description}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "#90caf9",
                  mb: 2,
                  fontSize: "0.75rem",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "0.65rem", // Smaller key skills text
                  },
                }}
              >
                Key Skills: {job.skills}
              </Typography>
            </CardContent>
            <Box
              sx={{
                position: "absolute", // Absolutely position the button
                bottom: 0, // Align the button at the bottom of the card
                left: 0,
                right: 0,
                p: 2,
                [theme.breakpoints.down("sm")]: {
                  p: 1, // Reduce padding for mobile
                },
              }}
            >
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                size="small"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                Connect with us
              </Button>
            </Box>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default JobCarousel;
