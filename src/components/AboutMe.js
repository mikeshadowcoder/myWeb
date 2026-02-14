import React from 'react';
import { Typography, Box } from '@mui/material';
import "../styles/boxStyling.css"

const AboutMe = () => {
  
  return (
    <Box sx={{ mt: 25, mb: 25, width: "100%" }}>
      <Box className="box-container">
        <Typography variant="h4" gutterBottom>About Me</Typography>
          <Typography>
            A front-end web developer with a passion for creating visually appealing and user-friendly websites. 
            With a strong foundation in HTML, CSS, and JavaScript, I specialize in building responsive and interactive web applications. 
            I am dedicated to continuous learning and staying up-to-date with the latest web development trends and technologies. 
            My goal is to create seamless digital experiences that engage users and drive results.
          </Typography>
      </Box>
    </Box>
  );
};

export default AboutMe;
