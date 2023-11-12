import React from "react";
import { Paper } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MyPosts = ({ posts }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Paper
      elevation={5}
      sx={{
        margin: {
          md: "0 10%",
          sm: "0 6%",
          xs: "5%",
        },
      }}
    >
      <Slider {...settings}>
        {posts.map((post) => (
          <div key={post.id}>
            {/* Render your post content here */}
            <h3>{post.title}</h3>
          </div>
        ))}
      </Slider>
    </Paper>
  );
};

export default MyPosts;
