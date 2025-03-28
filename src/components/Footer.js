import React from 'react';
import { Box, Typography } from "@mui/material";


const Footer = () => {
    return (
        <Box 
            sx={{ 
                width: "100%",
                color: "white", 
                textAlign: "center",  
                mt: 4, 
                mb: 2
            }}
        >
            <Typography variant="body2">
                © {new Date().getFullYear()} Christain Rex Omongos. Built with React & Material-UI.
            </Typography>
        </Box>
    )
}

export default Footer;