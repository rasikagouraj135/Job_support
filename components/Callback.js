import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import emailjs from "emailjs-com";

const RequestCallback = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
    captchaInput: "",
  });

  const [captcha, setCaptcha] = useState("");

  // Generate captcha only on the client after component mounts
  useEffect(() => {
    setCaptcha(Math.floor(1000 + Math.random() * 9000).toString());
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.captchaInput !== captcha) {
      alert("Captcha is incorrect. Please try again.");
      return;
    }

    emailjs
      .send(
        "service_j7kd3qb",
        "template_29b440r",
        formData,
        "ckDJJDj5jdDaNSK-j" // Replace with your EmailJS user ID
      )
      .then(
        () => {
          alert("Your request has been sent successfully!");
          setFormData({
            name: "",
            mobile: "",
            email: "",
            message: "",
            captchaInput: "",
          });
          setCaptcha(Math.floor(1000 + Math.random() * 9000).toString()); // Regenerate captcha
        },
        (err) => {
          alert("Failed to send your request. Please try again.");
          console.error(err);
        }
      );
  };

  return (
    <Box
      sx={{
        maxWidth: "1000px",
        mx: "auto",
        my: 4, // Margin top and bottom
        p: 3,
        display: "flex",
        flexDirection: { xs: "column", sm: "row" }, // Stack on mobile, side-by-side on larger screens
        gap: 3,
        bgcolor: "#1e1e1e", // Dark background
        color: "#f5f5f5", // Light text color
        borderRadius: 2,
      }}
    >
      {/* Form Section */}
      <Paper
        elevation={4}
        sx={{
          flex: { xs: 1, sm: 3 },
          p: 4,
          borderRadius: 2,
          bgcolor: "#1e1e1e", // Darker background for the form
          color: "#f5f5f5",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            mb: 3,
            textAlign: "center",
            color: "#90caf9",
            fontSize: { xs: "h6", sm: "h5" }, // Adjust font size for smaller screens
          }}
        >
          Request a Call Back
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            sx={{
              mb: 2,
              input: { color: "#f5f5f5" },
              label: { color: "#cccccc" },
            }}
          />
          <TextField
            fullWidth
            label="Mobile"
            name="mobile"
            type="tel"
            value={formData.mobile}
            onChange={handleChange}
            required
            sx={{
              mb: 2,
              input: { color: "#f5f5f5" },
              label: { color: "#cccccc" },
            }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            sx={{
              mb: 2,
              input: { color: "#f5f5f5" },
              label: { color: "#cccccc" },
            }}
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
            sx={{
              mb: 2,
              textarea: { color: "#f5f5f5" },
              label: { color: "#cccccc" },
            }}
          />
          <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 2 }}>
            <TextField
              fullWidth
              label="Enter Captcha"
              name="captchaInput"
              value={formData.captchaInput}
              onChange={handleChange}
              required
              sx={{
                input: { color: "#f5f5f5" },
                label: { color: "#cccccc" },
              }}
            />
            <Box
              sx={{
                p: 2,
                bgcolor: "#282828", // Slightly lighter dark for captcha box
                border: "1px solid #444", // Subtle border
                borderRadius: 1,
                color: "#f5f5f5",
              }}
            >
              {captcha}
            </Box>
          </Box>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              py: 1.5,
              bgcolor: "#90caf9",
              color: "#121212",
              "&:hover": {
                bgcolor: "#64b5f6",
              },
            }}
          >
            Submit
          </Button>
        </form>
      </Paper>

      {/* Points Section */}
      <Box
        sx={{
          flex: { xs: 1, sm: 2 },
          p: 3,
          bgcolor: "#1e1e1e", // Matching the form background
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            textAlign: "left",
            color: "#90caf9",
            fontSize: { xs: "h6", sm: "h5" },
          }}
        >
          Why Choose Us?
        </Typography>
        <Typography variant="body1" sx={{ color: "#f5f5f5" }}>
          ✅ Upon receiving your inquiry, we will organize a call with one of
          our consultants, where you can share the details of your project.
        </Typography>
        <Typography variant="body1" sx={{ color: "#f5f5f5" }}>
          ✅ If you feel assured and at ease with the consultant, you can
          proceed with the engagement.
        </Typography>
        <Typography variant="body1" sx={{ color: "#f5f5f5" }}>
          ✅ For any questions about our online technical job support, you can
          contact us at +91 7972989925.
        </Typography>
        <Typography variant="body1" sx={{ color: "#f5f5f5" }}>
          ✅ Our usual working hours are Monday to Friday, but if needed,
          weekend support can be arranged based on the consultant's availability
          and your project deadlines.
        </Typography>
      </Box>
    </Box>
  );
};

export default RequestCallback;
