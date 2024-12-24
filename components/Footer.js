"use client";
import React from "react";
import { Box, Typography, Grid, IconButton, Divider, Link } from "@mui/material";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  YouTube,
  LocationOn,
  Mail,
  Phone,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#1e1e1e", // Dark background
        color: "#f5f5f5", // Light text
        width: "100%", // Full viewport width
        mt: 10,
        py: 4,
        px: 4,
        boxSizing: "border-box",
      }}
    >
      {/* Social Media Section */}
      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, md: 8 },
          pb: 3,
          width: "100%", // Ensure full width
          boxSizing: "border-box", // Include padding in width
          flexDirection: { xs: "column", md: "row" }, // Stack on small screens
          gap: { xs: 2, md: 0 }, // Space out social icons on mobile
        }}
      >
        <Typography variant="body1" sx={{ fontSize: "1rem", fontWeight: 600, textAlign: { xs: "center", md: "left" } }}>
          Get connected with us on social networks:
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
            gap: 1,
          }}
        >
          <IconButton component="a" href="#" sx={{ color: "#000", bgcolor: "#fff", mx: 0.5 }}>
            <Facebook />
          </IconButton>
          <IconButton component="a" href="#" sx={{ color: "#000", bgcolor: "#fff", mx: 0.5 }}>
            <Twitter />
          </IconButton>
          <IconButton component="a" href="#" sx={{ color: "#000", bgcolor: "#fff", mx: 0.5 }}>
            <LinkedIn />
          </IconButton>
          <IconButton component="a" href="#" sx={{ color: "#000", bgcolor: "#fff", mx: 0.5 }}>
            <Instagram />
          </IconButton>
          <IconButton component="a" href="#" sx={{ color: "#000", bgcolor: "#fff", mx: 0.5 }}>
            <YouTube />
          </IconButton>
        </Box>
      </Box>

      <Divider sx={{ bgcolor: "#444" }} />

      {/* Footer Content */}
      <Box
        sx={{
          bgcolor: "#1e1e1e",
          color: "#f5f5f5",
          px: { xs: 3, sm: 6, md: 10 }, // Padding for all screen sizes
          py: 6,
          boxSizing: "border-box",
        }}
      >
        <Grid
          container
          spacing={{ xs: 4, md: 6 }} // Responsive spacing
          justifyContent="space-between"
        >
          {/* Column 1: Online IT Job Support */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ textAlign: { xs: "center", md: "left" }, mb: { xs: 4, md: 0 } }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#90caf9",
                mb: 2,
                borderBottom: "2px solid #90caf9",
                display: "inline-block",
              }}
            >
              ONLINE IT JOB SUPPORT
            </Typography>
            <Typography variant="body2" sx={{ color: "#f5f5f5" }}>
              Online IT Job support helps you with Experienced Professionals.
            </Typography>
          </Grid>

          {/* Column 2: Services */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ textAlign: { xs: "center", md: "left" }, mb: { xs: 4, md: 0 } }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#90caf9",
                mb: 2,
                borderBottom: "2px solid #90caf9",
                display: "inline-block",
              }}
            >
              SERVICES
            </Typography>
            <Link
              href="/"
              sx={{
                color: "#f5f5f5",
                display: "block",
                mb: 1,
                textDecoration: "none",
              }}
            >
              Online IT Job Support
            </Link>
            <Link
              href="/"
              sx={{
                color: "#f5f5f5",
                display: "block",
                mb: 1,
                textDecoration: "none",
              }}
            >
              Trainings
            </Link>
            <Link
              href="/"
              sx={{
                color: "#f5f5f5",
                display: "block",
                mb: 1,
                textDecoration: "none",
              }}
            >
              Interview Support
            </Link>
            <Link
              href="/"
              sx={{
                color: "#f5f5f5",
                display: "block",
                textDecoration: "none",
              }}
            >
              Part Time Jobs
            </Link>
          </Grid>

          {/* Column 3: Popular Job Supports */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ textAlign: { xs: "center", md: "left" }, mb: { xs: 4, md: 0 } }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#90caf9",
                mb: 2,
                borderBottom: "2px solid #90caf9",
                display: "inline-block",
              }}
            >
              POPULAR JOB SUPPORTS
            </Typography>
            <Link
              href="/"
              sx={{
                color: "#f5f5f5",
                display: "block",
                mb: 1,
                textDecoration: "none",
              }}
            >
              Azure Data Engineer
            </Link>
            <Link
              href="/"
              sx={{
                color: "#f5f5f5",
                display: "block",
                mb: 1,
                textDecoration: "none",
              }}
            >
              AWS Data Engineer
            </Link>
            <Link
              href="/"
              sx={{
                color: "#f5f5f5",
                display: "block",
                mb: 1,
                textDecoration: "none",
              }}
            >
              Java Full Stack
            </Link>
            <Link
              href="/"
              sx={{
                color: "#f5f5f5",
                display: "block",
                textDecoration: "none",
              }}
            >
              GCP Data Engineer
            </Link>
          </Grid>

          {/* Column 4: Contact */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ textAlign: { xs: "center", md: "left" }, mb: { xs: 4, md: 0 } }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#90caf9",
                mb: 2,
                borderBottom: "2px solid #90caf9",
                display: "inline-block",
              }}
            >
              CONTACT
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent={{ xs: "center", md: "flex-start" }}
              mb={1}
            >
              <LocationOn sx={{ mr: 1, color: "#90caf9" }} />
              <Typography variant="body2">
                Hyderabad, Telangana, India
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent={{ xs: "center", md: "flex-start" }}
              mb={1}
            >
              <Mail sx={{ mr: 1, color: "#90caf9" }} />
              <Typography variant="body2">rasikagouraj135@gmail.com</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent={{ xs: "center", md: "flex-start" }}
              mb={1}
            >
              <Phone sx={{ mr: 1, color: "#90caf9" }} />
              <Typography variant="body2">+91 7972989925</Typography>
            </Box>
            {/* <Box
              display="flex"
              alignItems="center"
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <Phone sx={{ mr: 1, color: "#90caf9" }} />
              <Typography variant="body2">+91 7416255951</Typography>
            </Box> */}
          </Grid>
        </Grid>
      </Box>
      {/* Copyright */}
      <Box
        sx={{
          textAlign: "center",
          mt: 4,
          pb: 1,
          fontSize: "0.9rem",
          color: "#aaaaaa",
          width: "100%", // Full width
        }}
      >
        © {new Date().getFullYear()} IT Job Support. All Rights Reserved.
      </Box>
    </Box>
  );
};

export default Footer;
