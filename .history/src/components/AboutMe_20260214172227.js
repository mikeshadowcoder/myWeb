import React from 'react';
import { Typography, Box } from '@mui/material';
import "../styles/boxStyling.css"

const AboutMe = () => {
  
  return (
    <Box sx={{ mt: 25, mb: 25, width: "100%" }}>
      <Box className="box-container">
        <Typography variant="h4" gutterBottom>About Me</Typography>
          <Typography>
            I'm a web developer with verious experiences in front-end and back-end development.
            My goal is to build impactful web applications and provide solutions that
            help businesses grow.
          </Typography>
      </Box>
    </Box>
  );
};

export default AboutMe;
