import { Box, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import FeaturesList from "../constants/Features";

const Features = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 5000000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <Box>
        {FeaturesList.map((feature, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor:
                "linear-gradient(180deg, rgba(26, 38, 90, 0) 0%, rgba(5.07, 11.25, 38.04, 0.76) 9%, #1A265A 51%)",
            }}
          >
            <Typography>{feature.num}</Typography>
            <Typography>{feature.title}</Typography>
            <Typography>{feature.description}</Typography>
          </Box>
        ))}
      </Box>
    </Slider>
  );
};

export default Features;
