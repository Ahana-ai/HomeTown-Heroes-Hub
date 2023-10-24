import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import Image1 from "../../images/about.jpg";
import Image2 from "../../images/about2.jpg";
import Features from "./Features";

const AboutUs = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f4f4f4",
        // py: 5,
      }}
    >
      <Container>
        <Typography
          variant="h4"
          align="center"
          sx={{ mb: 4, fontWeight: "bold", pt: 4 }}
        >
          About Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
                background:
                  "linear-gradient(180deg, rgba(46,67,116,1) 3%, rgba(158,221,255,1) 49%, rgba(252,253,255,1) 100%)",
                borderRadius: "10px",
              }}
            >
              <img
                src={Image1}
                alt="About Us"
                style={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "500px",
                  borderRadius: "8px",
                  mb: 2,
                }}
              />
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
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
                background:
                  "linear-gradient(180deg, rgba(46,67,116,1) 3%, rgba(158,221,255,1) 49%, rgba(252,253,255,1) 100%)",
                borderRadius: "10px",
              }}
            >
              <img
                src={Image2}
                alt="About Us"
                style={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "500px",
                  borderRadius: "8px",
                  mb: 2,
                }}
              />
              
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
