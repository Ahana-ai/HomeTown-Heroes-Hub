import React from "react";
import Slider from "react-slick";
import { Box, Typography, Paper } from "@mui/material";
import { CheckCircle as CheckCircleIcon } from "@mui/icons-material";
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
      color: "#0802A3", // Set the color for the next arrow
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
      color: "#0802A3", // Set the color for the previous arrow
      zIndex: "1",
      //   border: "2px solid black",
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
        backgroundColor: "#EADBC8",
        py: 5,
        textAlign: "center",
        // maxWidth: "1200px",
        // margin: "auto",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4, mt: 5 }}>
        Features We Offer
      </Typography>
      <Slider {...sliderSettings} centerMode centerPadding="60px">
        {FeaturesList.map((feature, index) => (
          <div key={feature.num}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                mr: 3,
                borderRadius: "12px",
                height: "230px",
                backgroundColor: "#F1EFEF",
                mb: 6,
                // background:
                //   "linear-gradient(180deg, rgba(255,255,255,1) 28%, rgba(250,242,211,1) 50%, rgba(20,30,70,1) 100%)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                }}
              >
                <CheckCircleIcon
                  sx={{ color: "#4CAF50", fontSize: 40, mb: 2 }}
                />
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                  {feature.title}
                </Typography>
              </Box>
              <Typography color="text.secondary" align="center">
                {feature.description}
              </Typography>
            </Paper>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default Features;
