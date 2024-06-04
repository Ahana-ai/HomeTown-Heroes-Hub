import React from "react";
import Slider from "react-slick";
import { Box, Typography, Paper, Container } from "@mui/material";
import FeaturesList from "../constants/Features";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    style={{
      position: "absolute",
      top: "50%",
      right: "10px",
      transform: "translateY(-50%)",
      cursor: "pointer",
      fontSize: "50px",
      color: "#fff",
      zIndex: "1",
      backgroundColor: "#141e46",
      borderRadius: "10%",
      padding: "10px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    }}
  >
    {" "}
    &#10095;
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    style={{
      position: "absolute",
      top: "50%",
      left: "10px",
      transform: "translateY(-50%)",
      cursor: "pointer",
      fontSize: "50px",
      color: "#fff",
      zIndex: "1",
      backgroundColor: "#141e46",
      borderRadius: "10%",
      padding: "10px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    }}
  >
    {" "}
    &#10094;
  </div>
);

const Features = () => {
  const sliderSettings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, rgba(46,67,116,1) 4%, rgba(252,253,255,1) 97%)",
        py: 5,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 4,
          mt: 5,
          color: "#fff",
          textShadow: "2px 2px 4px black",
        }}
      >
        Features We Offer
        <span
          style={{
            fontSize: "1rem",
            fontWeight: "normal",
            marginLeft: "10px",
            fontStyle: "italic",
          }}
        >
          (Coming Soon)
        </span>
      </Typography>
      <Container>
        <Slider {...sliderSettings} centerMode centerPadding="60px">
          {FeaturesList.map((feature, index) => (
            <Box key={feature.num}>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  mr: 3,
                  borderRadius: "12px",
                  height: "340px",
                  backgroundColor: "#F1EFEF",
                  mb: 6,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    style={{
                      width: "90%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      marginTop: "14px",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      mb: 2,
                      mt: 2,
                      fontSize: "1.2rem",
                      color: "#141e46",
                      fontStyle: "italic",
                      textShadow: "1px 1px 1px grey",
                    }}
                  >
                    {feature.title}
                  </Typography>
                </Box>
              </Paper>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Features;
