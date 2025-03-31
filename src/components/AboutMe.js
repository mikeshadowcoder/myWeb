import React from 'react';
import { Typography, Box } from '@mui/material';
import "../styles/boxStyling.css"

const AboutMe = () => {
  
  return (
    <Box className="box-container" sx={{ mt: 25, mb: 25, width: "100%" }} >
      {/* <Paper sx={{ width: "100%", padding: 2, }}> */}
        <Typography variant="h4" gutterBottom>About Me</Typography>
          <Typography>
            I'm a web developer with verious experience in front-end and back-end development.
            My goal is to build impactful web applications and provide solutions that
            help businesses grow.
          </Typography>
      {/* </Paper> */}
    </Box>
  );
};

export default AboutMe;
