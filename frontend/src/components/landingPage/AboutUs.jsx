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
        paddingTop: 4,
      }}
    >
      <Container>
        {/* Section Title */}
        <Typography
          variant="h4"
          align="center"
          sx={{
            marginBottom: 4,
            fontWeight: "bolder",
            textTransform: "uppercase",
            color: "darkblue",
          }}
        >
          About Us
        </Typography>

        {/* Two-Column Layout */}
        <Grid container spacing={4}>
          {/* Section 1 */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                padding: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
                background:
                  "linear-gradient(180deg, rgba(46,67,116,1) 3%, rgba(158,221,255,1) 49%, rgba(252,253,255,1) 100%)",
                borderRadius: 4,
              }}
            >
              {/* Image */}
              <img
                src={Image1}
                alt="About Us"
                style={{
                  width: "100%",
                  height: "100%",
                  maxHeight: 500,
                  borderRadius: 3,
                  marginBottom: 2,
                }}
              />

              {/* Section Title */}
              <Typography
                variant="h6"
                sx={{ marginBottom: 2, fontWeight: "bold", fontSize: "1.8rem" }}
              >
                Our Mission
              </Typography>

              {/* Section Content */}
              <Typography variant="body1">
                Connecting local athletes and businesses through a streamlined
                endorsement process. Our platform prioritizes safe and direct
                communication to foster transparent and mutually beneficial
                relationships.
              </Typography>
            </Paper>
          </Grid>

          {/* Section 2 */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                padding: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
                background:
                  "linear-gradient(180deg, rgba(46,67,116,1) 3%, rgba(158,221,255,1) 49%, rgba(252,253,255,1) 100%)",
                borderRadius: 4,
              }}
            >
              {/* Image */}
              <img
                src={Image2}
                alt="About Us"
                style={{
                  width: "100%",
                  height: "100%",
                  maxHeight: 500,
                  borderRadius: 3,
                  marginBottom: 2,
                }}
              />

              {/* Section Title */}
              <Typography
                variant="h6"
                sx={{
                  marginTop: 3,
                  marginBottom: 2,
                  fontWeight: "bold",
                  fontSize: "1.8rem",
                }}
              >
                Core Values
              </Typography>

              {/* Section Content */}
              <Typography variant="body1">
                Celebrating local connections, prioritizing simplicity and
                safety, and embracing innovation through AI. Our platform is
                designed to strengthen bonds, provide a secure user experience,
                and stay at the forefront of technology.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Additional Features Section */}
      <Features />
    </Box>
  );
};

export default AboutUs;
