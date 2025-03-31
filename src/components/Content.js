import React from 'react';
import { Container, Grid2, Paper, Typography, Button, Box } from '@mui/material';
// import MacWindowHeader from './UI/MacWindowHeader';
import "../styles/boxStyling.css";

const Content = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A short description of the project.',
      link: 'https://github.com/your-repo/project-one',
    },
    {
      title: 'Project Two',
      description: 'A short description of the project.',
      link: 'https://github.com/your-repo/project-two',
    },
    // Add more projects here
  ];

  return (
  <Box className="box-container">
    {/* <MacWindowHeader/> */}
    <Box sx={{ padding: "20px"}}>
      <Container>
        <Typography variant="h4" gutterBottom>Projects</Typography>
        <Grid2 container spacing={3}>
          {projects.map((project, index) => (
            <Grid2 item xs={12} sm={6} key={index}>
              <Paper sx={{ padding: 2 }}>
                <Typography variant="h6">{project.title}</Typography>
                <Typography>{project.description}</Typography>
                <Button variant="contained" href={project.link} target="_blank">
                  View Project
                </Button>
              </Paper>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  </Box>
  );
};

export default Content;
