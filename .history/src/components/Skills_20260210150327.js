import React from 'react';
import { Grid2, Paper, Typography, Box } from '@mui/material';
import "../styles/boxStyling.css"

const Skills = () => {
  const skills = [
    {skill:'HTML', logo: '../assets/images/html.svg'}, 
    {skill:'CSS', logo: '../images/css.svg'}, 
    {skill:'JavaScript', logo: '../images/javascript.svg'}, 
    {skill:'ReactJS', logo: '../images/react.svg'}, 
    {skill:'MaterialUI', logo: '../images/materialui.svg'}, 
    {skill:'Bootstrap', logo: '../images/bootstrap.svg'}, 
    {skill:'Python', logo: '../images/python.svg'}, {skill:'MySQL', logo: '../images/mysql.svg'}, 
    {skill:'Firebase', logo: '../images/firebase.svg'}, 
    {skill:'Django', logo: '../images/django.svg'}, 
    {skill:'PHP', logo: '../images/php.svg'}, 
    {skill:'GitHub', logo: '../images/github.svg'}, 
    {skill:'NodeJS', logo: '../images/nodejs.svg'}
  ];

  return (
    <Box className="box-container" sx={{ mt: 25, width: "100%", }}>
      <Typography variant="h4" gutterBottom >Tech Stack</Typography>
      <Box> {/* REDUNDANT might remove later*/} 
      <Grid2 container spacing={2} >
        {skills.map((skill, index) => (
          <Grid2 item xs={12} sm={6} md={4} key={index}>
            <Paper className="box-container" sx={{ padding: 2, textAlign: 'center', bgcolor: 'rgba(26, 26, 46, 0.6)', color: 'rgba(255, 255, 255, 1)' }}>
              <Box component="img" 
                src={skill.logo} 
                alt={`${skill.skill} logo`} 
                sx={{ width: '50px', height: '50px', marginBottom: '10px' }} 
              />
              <Typography variant="h6">{skill.skill}</Typography>
            </Paper>
          </Grid2>
        ))}
      </Grid2>
      </Box>

    </Box>
  );
};

export default Skills;