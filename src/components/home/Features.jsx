import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturesList from "../constants/Features";

const Features = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
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
    <Box>
      <Slider {...settings}>
        {FeaturesList.map((feature, index) => (
          <Box
            key={index}
            sx={{
              background:
                "linear-gradient(180deg, rgba(26, 38, 90, 0) 0%, rgba(5.07, 11.25, 38.04, 0.76) 9%, #1A265A 51%)",
              color: "#fff",
              padding: "20px",
              width: "250px",
              height: "300px",
            }}
          >
            <Box
              sx={{
                border: "4px solid white",
                width: "20px",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <Typography sx={{ fontSize: "1.5rem" }}>{feature.num}</Typography>
            </Box>
            <Typography
              sx={{
                margin: "10px",
                fontWeight: "800",
              }}
            >
              {feature.title}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Kalam",
                fontWeight: "200",
                marginTop: "30px",
              }}
            >
              {feature.description}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Features;
