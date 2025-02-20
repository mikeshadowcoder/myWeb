import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
//import { Link } from 'react-router-dom';

const Header = ({onScrollToSection}) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{flexGrow:1}}>
          Christian Rex Omongos
        </Typography>
        <Button color="inherit" onClick={onScrollToSection.home}>Home</Button>
        <Button color="inherit" onClick={onScrollToSection.about}>About</Button>
        <Button color="inherit" onClick={onScrollToSection.content}>Projects</Button>
        <Button color="inherit" onClick={onScrollToSection.skills}>Skills</Button>
        <Button color="inherit" onClick={onScrollToSection.contact}>Contact</Button>
      </Toolbar>
    </AppBar>
  )
  // return (
  //   <AppBar position="sticky">
  //     <Toolbar>
  //       <Typography variant="h6" sx={{ flexGrow: 1 }}>
  //         Christian Rex Omongos
  //       </Typography>
  //       <Button color="inherit" component={Link} to="/">Home</Button>
  //       <Button color="inherit" component={Link} to="/about">About</Button>
  //       <Button color="inherit" component={Link} to="/content">Portfolio</Button>
  //       <Button color="inherit" component={Link} to="/contact">Contact</Button>
  //     </Toolbar>
  //   </AppBar>
  // );
};

export default Header;
