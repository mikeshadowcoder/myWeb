import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Contact = () => {
  return (
    <Box
    sx={{ 
      backgroundColor: "#25233b", // Darker shade to contrast with the main background
      padding: "2rem",
      borderRadius: "12px",
      boxShadow: "0px 0px 15px rgba(0, 0, 255, 0.3)", // Adds a subtle glow effect
      maxWidth: "89%",
      margin: "auto",
      mt: 4
    }}
    >
      <Container>
        <Typography variant="h4" gutterBottom>Contact Me</Typography>

        <form action="https://formsubmit.co/bufferingupbruh1994@gmail.com" method="POST">

          <input type="hidden" name="_captcha" value="false" />

          {/*Subject*/}
          <TextField
          label="Subject"
          name="Subject"
          fullWidth
          margin="normal"
          required
          slotProps={{inputLabel: { style: { color: "white" } } }} // Make label white
          sx={{
            input: { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "white" }, // Border color
              "&:hover fieldset": { borderColor: "#ccc" }, // Hover effect
              },
            }}
          />

          {/*Email*/}
          <TextField label="Your Email"
          name="Email"
          type="email"
          fullWidth
          margin="normal"
          required
          slotProps={{inputLabel: { style: { color: "white" } } }} // Make label white
          sx={{
            input: { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "white" }, // Border color
              "&:hover fieldset": { borderColor: "#ccc" }, // Hover effect
              },
            }}
          />

          {/*Message*/}
          <TextField label="Your Message"
          name="Message"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          slotProps={{inputLabel: { style: { color: "white" } } }} // Make label white
          sx={{
            "& textarea": {color: "white"},
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "white" }, // Border color
              "&:hover fieldset": { borderColor: "#ccc" }, // Hover effect
              },
            }}
          />

          <Button type="submit" variant="contained" sx={{ mt: 2 }}>Send Message</Button>
          
        </form>
      </Container>
    </Box>
  );
};

export default Contact;