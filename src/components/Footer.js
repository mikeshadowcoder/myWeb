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
                mb: 2,
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                pt: 2,
            }}
        >
            <Typography variant="body2" sx={{ color: " rgba(255, 255, 255, 0.5) "}}>
                © {new Date().getFullYear()} Christain Rex Omongos. All Rights Reserved.
            </Typography>
        </Box>
    )
}

export default Footer;