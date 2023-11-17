import React, { useEffect, useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { getPosts } from "../../../store/slices/PostSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

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

const MyPosts = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [posts, setPosts] = useState([]);
  const [user, setUserData] = useState({});

  useEffect(() => {
    const getUserData = () => {
      const userData = localStorage.getItem("user");
      if (userData) {
        setUserData(JSON.parse(userData));
      }
    };

    getUserData();

    const fetchUserPosts = async () => {
      try {
        let userIdToFetchPosts = id;

        if (user?._id === id) {
          userIdToFetchPosts = user?._id;
        }

        const response = await dispatch(getPosts(userIdToFetchPosts));
        console.log("Response:", response);

        if (response.payload) {
          console.log("Posts found:", response.payload);
          setPosts(response.payload);
        } else {
          console.error("Posts not found in the response payload");
        }
      } catch (error) {
        console.error("Error fetching posts:", error.message);
        if (error.response && error.response.status === 404) {
          toast.error("No posts found yet!");
        } else {
          toast.error("Error collecting data. Please try again later.");
        }
      }
    };

    if (id) {
      fetchUserPosts();
    }
  }, [dispatch, id]);

  const postSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box>
      <ToastContainer
        position="top-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {posts.length > 0 ? (
        posts.map((post) => (
          <Paper
            key={post._id}
            elevation={5}
            sx={{
              margin: {
                md: "20px 10%",
                sm: "20px 6%",
                xs: "5%",
              },
              position: "relative",
              width: "80%",
            }}
          >
            <Box sx={{ padding: "20px" }}>
              <Typography variant="h5">{post.caption}</Typography>
              <Slider {...postSliderSettings} sx={{ marginTop: "20px" }}>
                {post.images.map((image, index) => (
                  <img key={index} src={image} alt={`Post ${index}`} />
                ))}
              </Slider>
            </Box>
          </Paper>
        ))
      ) : (
        <Paper
          elevation={5}
          sx={{
            margin: {
              md: "20px 10%",
              sm: "20px 6%",
              xs: "5%",
            },
            position: "relative",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <Typography variant="h5">No posts yet</Typography>
        </Paper>
      )}
    </Box>
  );
};

export default MyPosts;
