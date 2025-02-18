import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Contact Me</Typography>
      <TextField label="Your Name" fullWidth margin="normal" />
      <TextField label="Your Email" fullWidth margin="normal" />
      <TextField label="Your Message" fullWidth multiline rows={4} margin="normal" />
      <Button variant="contained" sx={{ mt: 2 }}>Send Message</Button>
    </Container>
  );
};

export default Contact;