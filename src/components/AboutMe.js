import React from 'react';
import { Container, Typography, Grid2, Paper } from '@mui/material';

const AboutMe = () => {
  
  return (
    <Container>
      <Grid2 container spacing={2}>
        <Grid2 item xs={12} sm={6}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h4" gutterBottom>About Me</Typography>
            <Typography>
              I'm a full-stack developer with experience in ReactJS, Node.js, and more.
              My goal is to build impactful web applications and provide solutions that
              help businesses grow.
            </Typography>
          </Paper>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default AboutMe;
