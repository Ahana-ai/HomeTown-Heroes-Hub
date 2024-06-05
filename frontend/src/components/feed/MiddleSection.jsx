import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getFollowing } from "../../store/slices/FollowerSlice";
import { getPosts, editPost } from "../../store/slices/PostSlice";
import { getUserDetails } from "../../store/slices/UserSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Avatar,
  Box,
  Modal,
  TextField,
  Button,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { FaPlus } from "react-icons/fa";
import AddPost from "../profiles/posts/AddPost";

const MiddleSection = () => {
  const dispatch = useDispatch();
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const userId = currentUser._id;
  const [like, setLike] = useState(0);
  const [authors, setAuthors] = useState({});
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const followersResponse = await dispatch(getFollowing(userId));

        if (
          followersResponse.payload &&
          Array.isArray(followersResponse.payload)
        ) {
          const followingIds = Array.from(
            new Set(
              followersResponse?.payload?.map((follower) => follower.userId)
            )
          );

          const accumulatedPosts = []; // Accumulate posts here

          for (const followingId of followingIds) {
            const postsResponse = await dispatch(getPosts(followingId));

            if (!postsResponse.payload) {
              toast.error(`No Posts Found for user ${followingId}!`);
            } else {
              // Accumulate posts from each response
              accumulatedPosts.push(...postsResponse.payload);
            }
          }

          setPosts(accumulatedPosts); // Set the accumulated posts

          const authorsData = {};
          for (const followingId of followingIds) {
            const userDetailsResponse = await dispatch(
              getUserDetails(followingId)
            );
            authorsData[followingId] = userDetailsResponse.payload;
          }
          setAuthors(authorsData);
        } else {
          // toast.error("No followers Yet!");
          console.log("No Followers Yet!");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // toast.error("No Posts Found!");
      }
    };

    fetchData();
  }, [dispatch, userId]);

  const handleLike = async (postId) => {
    try {
      if (like == 0) setLike(1);
      else setLike(0);
      // Dispatch action to edit post likes
      await dispatch(editPost({ id: postId, data: { action: "like" } }));
    } catch (error) {
      console.error("Error liking post:", error);
      toast.error("Error liking post!");
    }
  };

  const handleEditComment = async () => {
    try {
      // Dispatch action to edit post comments
      await dispatch(
        editPost({
          id: selectedPost._id,
          data: { action: "comment", comment: selectedPost.comment },
        })
      );
      setOpenEditModal(false);
    } catch (error) {
      console.error("Error editing comment:", error);
      toast.error("Error editing comment!");
    }
  };

  const handleComment = (post) => {
    setSelectedPost(post);
    setOpenEditModal(true);
  };

  // Slick settings for the slider
  const CustomPrevArrow = (props) => (
    <IconButton
      {...props}
      sx={{
        position: "absolute",
        left: "0",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
      }}
    >
      <KeyboardArrowLeft />
    </IconButton>
  );

  const CustomNextArrow = (props) => (
    <IconButton
      {...props}
      sx={{
        position: "absolute",
        right: "0",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
      }}
    >
      <KeyboardArrowRight />
    </IconButton>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const [openAddPostModal, setOpenAddPostModal] = useState(false);

  const handleAddPostClick = () => {
    setOpenAddPostModal(true);
  };

  const handleCloseAddPostModal = () => {
    setOpenAddPostModal(false);
  };

  return (
    <Box
      sx={{
        height: "100%",
      }}
    >
      <Box>
        <Button
          variant="contained"
          startIcon={<FaPlus />}
          sx={{
            ml: 4,
            mb: 2,
            backgroundColor: "darkblue",
          }}
          onClick={handleAddPostClick}
        >
          Add Post
        </Button>
      </Box>
      {posts.length === 0 ? (
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: "1.5em",
            fontStyle: "italic",
          }}
        >
          Follow people to see their posts in the feed.
        </Typography>
      ) : (
        posts?.map((post, index) => (
          <Card
            key={index}
            sx={{
              mb: 2,
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <CardHeader
              avatar={
                <Avatar
                  alt={authors[post.userId]?.name}
                  src={authors[post.userId]?.profile_image}
                />
              }
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              title={
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {authors[post.userId]?.name}
                  </Typography>
                </Box>
              }
            />
            <Slider {...sliderSettings}>
              {post?.images?.map((image, imgIndex) => (
                <CardMedia
                  key={imgIndex}
                  component="img"
                  height="300"
                  width="100%"
                  image={image}
                  alt={`Post Image ${imgIndex + 1}`}
                />
              ))}
            </Slider>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {post.caption}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                aria-label="like"
                onClick={() => handleLike(post._id)}
                sx={{ color: like === 0 ? "inherit" : "red" }}
              >
                <FavoriteIcon />
                {/* {post.likes} */}
                {like}
              </IconButton>
              <IconButton
                aria-label="comment"
                onClick={() => handleComment(post)}
              >
                <ChatBubbleIcon />
                {post.comments}
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
                {post.shares}
              </IconButton>
            </CardActions>
          </Card>
        ))
      )}

      {/* Modal for editing comments */}
      <Modal
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Comment
          </Typography>
          <TextField
            id="outlined-multiline-flexible"
            label="Comment"
            multiline
            maxRows={4}
            fullWidth
            value={selectedPost?.comment}
            onChange={(e) =>
              setSelectedPost((prev) => ({ ...prev, comment: e.target.value }))
            }
          />
          <Button onClick={handleEditComment}>Save Comment</Button>
        </Box>
      </Modal>

      {/* Add Post Modal */}
      <Modal open={openAddPostModal} onClose={handleCloseAddPostModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            borderRadius: 3,
            boxShadow: 24,
            p: 4,
          }}
        >
          <AddPost />
        </Box>
      </Modal>

      <ToastContainer />
    </Box>
  );
};

export default MiddleSection;
