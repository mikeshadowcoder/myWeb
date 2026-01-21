import React, { useState } from 'react';
import { Typography, TextField, Button, Box, Alert } from '@mui/material';
import "../styles/boxStyling.css"

const Contact = () => {
  const [success, setSuccess] = useState(false); 
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(false);
    setSuccess(false);

    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://formsubmit.co/bufferingupbruh1994@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSuccess(true);
        event.target.reset(); // Reset the form after success
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(true);
        setTimeout(() => setError(false), 5000);

      }
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 5000);
    }
  }


  return (
    <Box className="box-container" sx={{p: 4, mt: 25, mb: 10}}>
      <Typography variant="h4" gutterBottom>Contact Me</Typography>
      <Box className="box-container" >
        {/* Success Message */}
        {success && <Alert severity="success">Message sent</Alert>}
        {error && <Alert severity="error">Failed to send message. Please try again.</Alert>}
        <form onSubmit={handleSubmit}>

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
        </Box>
    </Box>
  );
};

export default Contact;