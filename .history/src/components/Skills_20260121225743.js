import React from 'react';
import { Grid2, Paper, Typography, Box } from '@mui/material';
import "../styles/boxStyling.css"

const Skills = () => {
  const skills = ['JavaScript', 'ReactJS', 'Node.js', 'HTML', 'CSS', 'MySQL'];

  return (
    <Box className="box-container" sx={{ mt: 25, width: "100%", }}>
      <Typography variant="h4" gutterBottom >Tech Stack</Typography>
      <Box> {/* REDUNDANT might remove later*/} 
      <Grid2 container spacing={2} >
        {skills.map((skill, index) => (
          <Grid2 item xs={12} sm={6} md={4} key={index}>
            <Paper className="box-container" sx={{ padding: 2, textAlign: 'center', bgcolor: 'rgba(26, 26, 46, 0.6)', color: 'rgba(255, 255, 255, 1)' }}>
              <Typography variant="h6">{skill}</Typography>
            </Paper>
          </Grid2>
        ))}
      </Grid2>
      </Box>

    </Box>
  );
};

export default Skills;