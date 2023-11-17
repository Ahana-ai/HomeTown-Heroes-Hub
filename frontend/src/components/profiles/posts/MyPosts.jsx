import React, { useEffect, useState } from "react";
import { Box, Paper } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { getPosts } from "../../../store/slices/PostSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

const MyPosts = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); // Extract the "id" from the URL params

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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

    const fetchUserPosts = () => {
      try {
        dispatch(getPosts(id)).then((response) => {
          console.log("Response:", response);

          if (response.payload) {
            console.log("Posts found:", response.payload);
            setPosts(response.payload);
          } else {
            console.error("Posts not found in the response payload");
            toast.error("No Posts Found");
          }
        });
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
          {posts?.map((post) => (
            <Box key={post._id}>
              {/* Log images array to console */}
              {console.log("Images:", post.images)}

              <h3>{post.caption}</h3>
              <div>
                {post.images.map((image, index) => (
                  <img key={index} src={image} alt={`Post ${index}`} />
                ))}
              </div>
            </Box>
          ))}
        </Slider>
      </Paper>
    </Box>
  );
};

export default MyPosts;
