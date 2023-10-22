import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Container, Grid, Paper, Avatar } from "@mui/material";
import testimonialData from "../constants/Testimonials";

const Testimonials = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Box
      sx={{
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
        <Slider {...settings}>
          {testimonialData.map((testimonial) => (
            <Paper
              key={testimonial.id}
              sx={{ p: 3, borderRadius: "12px", minHeight: "200px" }}
            >
              <Typography variant="body1">{testimonial.quote}</Typography>
              <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                <Avatar
                  sx={{ width: 100, height: 100, borderRadius: "50%", mr: 2 }}
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="h6">{testimonial.name}</Typography>
                  <Typography color="text.secondary">
                    {testimonial.position}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Testimonials;
