import React from 'react';
import { Grid2, Paper, Typography, Box } from '@mui/material';
import "../styles/boxStyling.css"
import htmlLogo from '../assets/images/html.svg';
import cssLogo from '../assets/images/css.svg';
import jsLogo from '../assets/images/javascript.svg';
import reactLogo from '../assets/images/react.svg';
import materialuiLogo from '../assets/images/materialui.svg';
import bootstrapLogo from '../assets/images/bootstrap.svg';
import pythonLogo from '../assets/images/python.svg';
import mysqlLogo from '../assets/images/mysql.svg';
import firebaseLogo from '../assets/images/firebase.svg';
import djangoLogo from '../assets/images/django.svg';
import phpLogo from '../assets/images/php.svg';
import githubLogo from '../assets/images/github.svg';
import nodejsLogo from '../assets/images/nodejs.svg';

const Skills = () => {
  const skills = [
    {skill:'HTML', logo: htmlLogo}, 
    {skill:'CSS', logo: cssLogo}, 
    {skill:'JavaScript', logo: jsLogo}, 
    {skill:'ReactJS', logo: reactLogo}, 
    {skill:'MaterialUI', logo: materialuiLogo}, 
    {skill:'Bootstrap', logo: bootstrapLogo}, 
    {skill:'Python', logo: pythonLogo}, {skill:'MySQL', logo: mysqlLogo}, 
    {skill:'Firebase', logo: firebaseLogo}, 
    {skill:'Django', logo: djangoLogo}, 
    {skill:'PHP', logo: phpLogo}, 
    {skill:'GitHub', logo: githubLogo}, 
    {skill:'NodeJS', logo: nodejsLogo}
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