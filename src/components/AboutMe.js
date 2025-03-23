import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

const AboutMe = () => {
  
  return (
    <Box sx={{ mt: 25, mb: 25, width: "100%",}}>
      <Paper sx={{ width: "100%", padding: 2 }}>
        <Typography variant="h4" gutterBottom>About Me</Typography>
          <Typography>
            I'm a full-stack developer with experience in ReactJS, Node.js, and more.
            My goal is to build impactful web applications and provide solutions that
            help businesses grow.
          </Typography>
      </Paper>
    </Box>
  );
};

export default AboutMe;
