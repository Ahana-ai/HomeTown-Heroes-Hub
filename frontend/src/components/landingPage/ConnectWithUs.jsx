import React from "react";
import { Box, Typography, TextField, Button, Container } from "@mui/material";

const ConnectWithUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // logic to handle form submission here
  };

  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, rgba(234,219,200,1) 15%, rgba(252,253,255,1) 95%)",
        py: { xs: 3, md: 5 },
        textAlign: "center",
        mt: 15,
      }}
    >
      <Container>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
          Connect With Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, // Responsive grid columns
              gridGap: "20px",
            }}
          >
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              required
              sx={{
                mb: 2,
                input: {
                  "&:focus": {
                    backgroundColor: "#F1EFEF",
                  },
                },
              }}
            />
            <TextField
              label="Your Email"
              variant="outlined"
              fullWidth
              required
              type="email"
              sx={{
                mb: 2,
                input: {
                  "&:focus": {
                    backgroundColor: "#F1EFEF",
                  },
                },
              }}
            />
            <TextField
              label="Your Mobile (optional)"
              variant="outlined"
              fullWidth
              type="mobile"
              sx={{
                mb: 2,
                input: {
                  "&:focus": {
                    backgroundColor: "#F1EFEF",
                  },
                },
              }}
            />
            <TextField
              label="Subject"
              variant="outlined"
              fullWidth
              required
              sx={{
                mb: 2,
                input: {
                  "&:focus": {
                    backgroundColor: "#F1EFEF",
                  },
                },
              }}
            />
          </Box>
          <TextField
            label="Your Queries"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            required
            sx={{
              mb: 2,
              display: "flex",
              alignContent: "center",
              input: {
                "&:focus": {
                  backgroundColor: "#F1EFEF",
                },
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
          >
            Submit
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default ConnectWithUs;
