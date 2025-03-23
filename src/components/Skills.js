import React from 'react';
import { Grid2, Paper, Typography, Box } from '@mui/material';

const Skills = () => {
  const skills = ['JavaScript', 'ReactJS', 'Node.js', 'HTML', 'CSS', 'MySQL'];

  return (
    <Box sx={{ mt: 25, width: "100%", }}>
      <Typography variant="h4" gutterBottom >Skills/Tech Stack</Typography>
      <Grid2 container spacing={2} >
        {skills.map((skill, index) => (
          <Grid2 item xs={12} sm={6} md={4} key={index}>
            <Paper sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h6">{skill}</Typography>
            </Paper>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Skills;