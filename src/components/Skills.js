import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';

const Skills = () => {
  const skills = ['JavaScript', 'ReactJS', 'Node.js', 'HTML', 'CSS', 'MySQL'];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Skills/Tech Stack</Typography>
      <Grid container spacing={2}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h6">{skill}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;