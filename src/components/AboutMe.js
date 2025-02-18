import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';

const AboutMe = () => {
  
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h4" gutterBottom>About Me</Typography>
            <Typography>
              I'm a full-stack developer with experience in ReactJS, Node.js, and more.
              My goal is to build impactful web applications and provide solutions that
              help businesses grow.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMe;
