import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Check if screen size is mobile

  // Function to scroll to a section with smooth scrolling after a delay
  const scrollToSection = (id) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 10); // 10ms delay
  };

  // Menu items for navigation
  const menuItems = [
    { label: "Home", id: "home" },
    { label: "Job Support", id: "job-support" },
    { label: "About", id: "about" },
    { label: "Trainings", id: "trainings" },
    { label: "Reviews", id: "reviews" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <AppBar position="relative" sx={{ backgroundColor: "#000000" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: 65,
          }}
        >
          {/* Responsive Logo */}
          <IconButton
            sx={{
              p: 0, // Remove padding around the button
              display: "flex", // Use flexbox
              flexDirection: "column", // Stack logo and text vertically
              alignItems: "center", // Center align logo and text
            }}
          >
            <img
              src="/logo.png"
              alt="Logo"
              style={{
                height: isMobile ? "80px" : "100px",// Adjust height for mobile vs. desktop
                width: "auto", // Maintain aspect ratio
              }}
            />
           
          </IconButton>

          {/* Mobile Menu */}
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                onClick={() => setDrawerOpen(true)}
                sx={{ color: "#90caf9" }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <Box
                  sx={{
                    width: 250,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: 2,
                  }}
                >
                  <List>
                    {menuItems.map((item) => (
                      <ListItem key={item.id} disablePadding>
                        <ListItemButton
                          onClick={() => {
                            scrollToSection(item.id);
                          }}
                        >
                          <ListItemText
                            primary={item.label}
                            sx={{
                              textAlign: "center",
                              fontWeight: 700,
                              fontFamily: "'Roboto', sans-serif",
                              color: "#90caf9",
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            // Desktop Menu
            <Box sx={{ display: "flex", gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} // Scroll to section with delay
                  sx={{
                    color: "#90caf9",
                    fontWeight: 700,
                    fontSize: 15,
                    fontFamily: "'Roboto', sans-serif",
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
