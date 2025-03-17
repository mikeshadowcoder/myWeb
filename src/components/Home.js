import React from "react";
import { Box, Typography, Button } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
// import FacebookIcon from "@mui/icons-material/Facebook";
import profilePic from "../assets/images/profilePic.jpg";
// import { LinkedIn, GitHub, Facebook } from "@mui/icons-material";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // flexDirection: "column",
        minHeight: "100vh",
        color: "white",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px", // Space between image and text
          flexWrap: "wrap", // Ensures responsiveness
        }}
      >
      {/* Profile Image */}
      <Box
        component="img"
        src={profilePic} // Replace with actual image URL
        alt="Profile"
        sx={{
          width: "200px",
          height: "200px",
          borderRadius: "15px",
          boxShadow: "0 0 20px rgba(0, 123, 255, 0.5)",
          marginBottom: "20px",
          objectFit: "cover"
        }}
      />

      {/* Text Section */}
      <Box sx={{ textAlign: "left"}}>
        <Typography variant="h3">
          Hi! I'm{" "} 
          <Typography variant="h3" component="span" sx={{ color: "#2196F3", fontWeight: "bold" }}>Christian Rex Omongos</Typography>
        </Typography>

        <Typography variant="h6" sx={{ marginTop: "10px", opacity: 0.8 }}>
          Web Developer | Virtual Assistant
        </Typography>

        {/* Social Media Icons */}
        <Box sx={{ display: "flex",}}>
          <Button href="https://linkedin.com/in/christianrex/" target="_blank" sx={{ color: "white" }}>
            <LinkedInIcon fontSize="large" />
          </Button>
          <Button href="https://github.com" target="_blank" sx={{ color: "white" }}>
            <GitHubIcon fontSize="large" />
          </Button>
        </Box>
      </Box>
    </Box>
  </Box>
  );
};

export default Home;
