import React, { useEffect, useState } from "react";
import { Box, Paper, Typography, IconButton } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { getPosts, deletePost } from "../../../store/slices/PostSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import EditPost from "../posts/EditPost";
import { deleteObject, ref } from "firebase/storage";
import storage from "../../firebase";

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
  const [isEditPopupOpen, setEditPopupOpen] = useState(false);
  const [editPostData, setEditPostData] = useState(null);

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

  const handleEditPost = (post) => {
    setEditPostData(post);
    setEditPopupOpen(true);
  };

  const handleDeletePost = (postId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Call the function to delete the post
        dispatch(deletePost(postId))
          .then((response) => {
            if (response.payload) {
              toast.success("Post deleted successfully!");
              // Update the posts after deletion
              const updatedPosts = posts.filter((post) => post._id !== postId);
              setPosts(updatedPosts);
            } else {
              toast.error("Error deleting post. Please try again later.");
            }
          })
          .catch((error) => {
            console.error("Error deleting post:", error.message);
            toast.error("Error deleting post. Please try again later.");
          });
      }
    });
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditClick = (post) => {
    handleClose();
    handleEditPost(post);
  };

  const handleDeleteFromFirebase = (images) => {
    images.map((url, index) => {
      const desertRef = ref(storage, url);

      // Delete the file
      deleteObject(desertRef)
        .then(() => {
          console.log("Deleted File from Firebase!");
        })
        .catch((error) => {
          console.log(error.message);
        });
    });
  };

  const handleDeleteClick = (post) => {
    handleClose();
    handleDeletePost(post._id);
    handleDeleteFromFirebase(post.images);
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
            <Box
              sx={{
                padding: "20px",
                position: "relative",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  textAlign: "center",
                  pb: 2,
                  fontWeight: "bold",
                  letterSpacing: "2px",
                  fontStyle: "italic",
                }}
              >
                {post.caption}
              </Typography>
              <Slider {...postSliderSettings} sx={{ marginTop: "20px" }}>
                {post.images.map((image, index) => (
                  <img key={index} src={image} alt={`Post ${index}`} />
                ))}
              </Slider>

              {/* Three-dot icon and menu */}
              <IconButton
                aria-controls={`post-menu-${post._id}`}
                aria-haspopup="true"
                onClick={(event) => handleClick(event, post)}
                sx={{ position: "absolute", top: 0, right: 0, mt: 2 }}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id={`post-menu-${post._id}`}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => handleEditClick(post)}
                  sx={{ fontWeight: "bold", textTransform: "uppercase" }}
                >
                  <EditIcon sx={{ mr: 2, color: "green" }} /> Edit
                </MenuItem>
                <MenuItem
                  onClick={() => handleDeleteClick(post)}
                  sx={{ fontWeight: "bold", textTransform: "uppercase" }}
                >
                  <DeleteIcon sx={{ mr: 2, color: "maroon" }} /> Delete
                </MenuItem>
              </Menu>
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

      {/* Edit Post Popup */}
      {isEditPopupOpen && (
        <EditPost
          open={isEditPopupOpen}
          handleClose={() => setEditPopupOpen(false)}
          postData={editPostData}
        />
      )}
    </Box>
  );
};

export default MyPosts;
