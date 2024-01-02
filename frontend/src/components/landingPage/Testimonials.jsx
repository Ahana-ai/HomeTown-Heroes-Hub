import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Typography,
  Container,
  Avatar,
  Card,
  CardContent,
} from "@mui/material";
import testimonialData from "../constants/Testimonials";
import quoteIcon from "../../images/quoteIcon.jpeg";
import dummyFace from "../../images/dummyFace.jpeg";

const Testimonials = () => {
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
        padding: "5px",
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
        padding: "5px",
      }}
    >
      {" "}
      &#10094;
    </div>
  );


  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const companyTestimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
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
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 4,
            textTransform: "uppercase",
            fontFamily: "initial",
          }}
        >
          What Companies say about us
        </Typography>
        <Slider
          style={{
            alignSelf: "center",
          }}
          {...companyTestimonialSettings}
          centerMode
          centerPadding="60px"
        >
          {testimonialData.map((testimonial) => (
            <Card
              sx={{
                borderRadius: "6px",
                background:
                  "linear-gradient(180deg, rgba(241,239,239,1) 0%, rgba(20,30,70,1) 100%)",
                height: "450px",
                margin: "0 50px",
                maxWidth: {
                  md: "330px",
                  sm: "300px",
                  xs: "180px",
                },
              }}
              elevation={4}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={dummyFace}
                    sx={{
                      width: 90,
                      height: 90,
                      margin: "auto auto",
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      ml: 2,
                      mb: 2,
                      mt: 2,
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bolder",
                        color: "WindowFrame",
                        fontStyle: "italic",
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "bolder",
                        color: "black",
                      }}
                    >
                      {testimonial.position}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "bolder",
                        color: "black",
                      }}
                    >
                      {testimonial.company}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#F5F5F5",
                    padding: "10px",
                    borderRadius: 1,
                    margin: "5px",
                    height: "250px",
                  }}
                >
                  <img src={quoteIcon} alt="" width="30" />
                  <Typography
                    sx={{ color: "black", fontStyle: "italic" }}
                    variant="body1"
                  >
                    {testimonial.quote}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Slider>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 4,
            mt: 4,
            textTransform: "uppercase",
            fontFamily: "initial",
          }}
        >
          What Students say about us
        </Typography>
        <Slider
          style={{
            alignSelf: "center",
          }}
          {...testimonialSettings}
          centerMode
          centerPadding="60px"
        >
          {testimonialData.map((testimonial) => (
            <Card
              sx={{
                borderRadius: "6px",
                background:
                  "linear-gradient(180deg, rgba(241,239,239,1) 0%, rgba(20,30,70,1) 100%)",
                height: "450px",
                margin: "0 50px",
                maxWidth: {
                  md: "330px",
                  sm: "300px",
                  xs: "180px",
                },
              }}
              elevation={4}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={dummyFace}
                    sx={{
                      width: 90,
                      height: 90,
                      margin: "auto auto",
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      ml: 2,
                      mb: 2,
                      mt: 2,
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bolder",
                        color: "WindowFrame",
                        fontStyle: "italic",
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "bolder",
                        color: "black",
                      }}
                    >
                      {testimonial.position}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "bolder",
                        color: "black",
                      }}
                    >
                      {testimonial.company}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#F5F5F5",
                    padding: "10px",
                    borderRadius: 1,
                    margin: "5px",
                    height: "250px",
                  }}
                >
                  <img src={quoteIcon} alt="" width="30" />
                  <Typography
                    sx={{ color: "black", fontStyle: "italic" }}
                    variant="body1"
                  >
                    {testimonial.quote}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Testimonials;
