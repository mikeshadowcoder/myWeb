import React from 'react';
import { Container, Grid2, Paper, Typography, Button, Box } from '@mui/material';

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
  <Box
      sx={{
        width: "100%",
        maxWidth: "1250px",
        margin: "auto",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        overflow: "hidden",
        border: "1px solid #ccc",
      }}
  >
      {/* macOS-style Window Header */}
      <Box
        sx={{
          backgroundColor: "#eee",
          padding: "8px",
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid #ccc",
        }}
      >
        <Box sx={{ display: "flex", gap: "8px", marginLeft: "10px" }}>
          <Box sx={{ width: "12px", height: "12px", backgroundColor: "#ff5f56", borderRadius: "50%" }} />
          <Box sx={{ width: "12px", height: "12px", backgroundColor: "#ffbd2e", borderRadius: "50%" }} />
          <Box sx={{ width: "12px", height: "12px", backgroundColor: "#27c93f", borderRadius: "50%" }} />
        </Box>
    </Box>
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
