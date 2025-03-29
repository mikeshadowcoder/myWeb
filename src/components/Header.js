import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import "../styles/header.css";
//import { Link } from 'react-router-dom';

const Header = ({onScrollToSection}) => {
  return (
    <AppBar className="header">
      <Toolbar>
        <Typography variant="h6" sx={{flexGrow:1}}>
          Christian Rex
        </Typography>
        <Button color="inherit" onClick={onScrollToSection.home}>Home</Button>
        <Button color="inherit" onClick={onScrollToSection.about}>About</Button>
        <Button color="inherit" onClick={onScrollToSection.content}>Projects</Button>
        <Button color="inherit" onClick={onScrollToSection.skills}>Skills</Button>
        <Button color="inherit" onClick={onScrollToSection.contact}>Contact</Button>
      </Toolbar>
    </AppBar>
  )
};

export default Header;
