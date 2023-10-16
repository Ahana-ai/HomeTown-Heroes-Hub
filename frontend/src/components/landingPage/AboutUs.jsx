import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import Image from "../../images/about_us.jpg";
import Features from "./Features";

const AboutUs = () => {
  return (
    <Box sx={{ backgroundColor: "#f4f4f4", py: 5 }}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          sx={{ mb: 4, fontWeight: "bold" }}
        >
          About Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
                background:
                  "linear-gradient(180deg, rgba(214,212,109,1) 0%, rgba(245,238,200,1) 70%, rgba(255,255,255,1) 100%)",
              }}
            >
              <img
                src={Image}
                alt="About Us"
                style={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "500px",
                  borderRadius: "8px",
                  mb: 2,
                }}
              />
              <Typography variant="body1" align="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
                background:
                  "linear-gradient(180deg, rgba(214,212,109,1) 0%, rgba(245,238,200,1) 70%, rgba(255,255,255,1) 100%)",
              }}
            >
              <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: "bold", fontSize: "1.8rem" }}
              >
                Our Mission
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </Typography>
              <Typography
                variant="h6"
                sx={{ mt: 3, mb: 2, fontWeight: "bold", fontSize: "1.8rem" }}
              >
                Core Values
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Features />
    </Box>
  );
};

export default AboutUs;
