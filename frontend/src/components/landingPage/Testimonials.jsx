import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import testimonialData from "../constants/Testimonials";

const Testimonials = () => {
  return (
    <Box
      sx={{
        // backgroundColor: "#F8F8F8",
        background:
          "linear-gradient(180deg, rgba(234,219,200,1) 15%, rgba(252,253,255,1) 95%)",
        py: 5,
        textAlign: "center",
        mt: 15,
      }}
    >
      <Container>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
          Testimonials
        </Typography>
        <Grid container spacing={3}>
          {testimonialData.map((testimonial) => (
            <Grid key={testimonial.id} item xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{ p: 3, borderRadius: "12px", minHeight: "200px" }}
              >
                <Typography variant="body1">{testimonial.quote}</Typography>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  {testimonial.name}
                </Typography>
                <Typography color="text.secondary">
                  {testimonial.position}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
