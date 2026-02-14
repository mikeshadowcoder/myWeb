import React from 'react';
import { Grid2, Paper, Typography, Box } from '@mui/material';
import "../styles/boxStyling.css"
import htmlLogo from "../assets/images/html.svg";
import cssLogo from '../assets/images/css.svg';
import jsLogo from '../assets/images/javascript.svg';
import reactLogo from '../assets/images/reactjs.svg';
import materialuiLogo from '../assets/images/MUI.svg';
import bootstrapLogo from '../assets/images/bootstrap.svg';
import pythonLogo from '../assets/images/python.svg';
import mysqlLogo from '../assets/images/mysql.svg';
import firebaseLogo from '../assets/images/firebase.svg';
// import djangoLogo from '../assets/images/django.svg';
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
    {skill:'Python', logo: pythonLogo}, 
    {skill:'MySQL', logo: mysqlLogo}, 
    {skill:'Firebase', logo: firebaseLogo}, 
    // {skill:'Django', logo: djangoLogo}, 
    {skill:'PHP', logo: phpLogo}, 
    {skill:'GitHub', logo: githubLogo}, 
    {skill:'NodeJS', logo: nodejsLogo}
  ];

  return (
    <Box className="box-container" sx={{ mt: 25, width: "100%", }}>
      <Typography variant="h4" gutterBottom >Tech Stack</Typography>
      <Grid2 container spacing={3} sx={{ alignItems: 'center', justifyContent: 'center' }} >
        {skills.map((skill, index) => (
          <Grid2 key={index} size={{ 
              xs: 6,      // 2 columns on mobile
              sm: 4,      // 3 columns ~≥600px
              md: 3,      // 4 columns ~≥900px
              lg: 2,      // 6 columns on very wide screens (optional)
            }}>
            <Paper elevation={3}
              sx={{ 
                p: 3, 
                height: '100%',           // fill grid cell height
                textAlign: 'center',
                bgcolor: 'rgba(26, 26, 46, 0.6)',
                color: 'white',
                borderRadius: 2,
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  bgcolor: 'rgba(40, 40, 60, 0.8)',
                }
              }}>
              <Box component="img" 
                src={skill.logo} 
                alt={`${skill.skill} logo`} 
                sx={{ width: 70,          
                  height: 70,
                  objectFit: 'contain',
                  mb: 1.5,
                }} 
              />
              <Typography variant="h6" 
                  sx={{ 
                    fontSize: { 
                      xs: '0.9rem',     // ~14.4px on mobile
                      sm: '1rem',       // ~16px
                      md: '1.125rem'    // back to roughly h6 default
                    },
                    fontWeight: 500,
                    whiteSpace: 'normal',
                    overflowWrap: 'break-word',
                  }}
                  > {skill.skill}
              </Typography>
            </Paper>
          </Grid2>
        ))}
      </Grid2>

    </Box>
  );
};

export default Skills;