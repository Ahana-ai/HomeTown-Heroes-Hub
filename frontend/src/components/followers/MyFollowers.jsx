import React, { useState, useEffect } from "react";
import {
  Box,
  Modal,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { getUserDetails } from "../../store/slices/UserSlice";
import { getFollowers, deleteFollower } from "../../store/slices/FollowerSlice";

const MyFollowers = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const [followersDetails, setFollowersDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentUser = JSON.parse(localStorage.getItem("user"));

  const fetchFollowers = async () => {
    try {
      const response = await dispatch(getFollowers(currentUser._id));

      if (response.payload) {
        const followerIds = response.payload.map((follower) => follower._id);

        if (Array.isArray(followerIds) && followerIds.length > 0) {
          const updatedDetails = await Promise.all(
            response.payload?.map(async (follower, index) => {
              const userResponse = await dispatch(
                getUserDetails(follower.followingId)
              );
              if (userResponse.payload) {
                return {
                  id: follower._id,
                  name: userResponse.payload.name,
                };
              }
              return {
                id: follower._id,
                name: `Follower ${index + 1}`,
              };
            })
          );

          setFollowersDetails(updatedDetails);
        } else {
          setFollowersDetails([]);
        }
      }
    } catch (error) {
      console.error("Error fetching followers: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFollowers();
  }, [currentUser._id, dispatch]);

  const handleRemoveClick = async (followerId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await dispatch(deleteFollower(followerId)); 
        console.log(response);

        if (response.payload && response.meta.requestStatus === "fulfilled") {
          // Fetch followers again after successful removal
          await fetchFollowers();
          Swal.fire("Removed!", "The follower has been removed.", "success");
        } else {
          Swal.fire("Error", "Failed to remove the follower.", "error");
        }
      } catch (error) {
        console.error("Error removing follower:", error);
      }
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "white",
          boxShadow: 24,
          p: 4,
          width: "35%",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            marginBottom: 3,
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          People Who Follow Me
        </Typography>
        <Divider />

        <List>
          {loading ? (
            <Typography variant="body1">Loading...</Typography>
          ) : followersDetails.length === 0 ? (
            <Typography variant="body1">No followers yet.</Typography>
          ) : (
            followersDetails?.map((follower) => (
              <Box key={follower.id}>
                <ListItem
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <ListItemText primary={follower.name} />
                  <Box>
                    <IconButton
                      color="error"
                      onClick={() => handleRemoveClick(follower.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </ListItem>
                <Divider sx={{ mt: 0 }} />
              </Box>
            ))
          )}
        </List>
      </Box>
    </Modal>
  );
};

export default MyFollowers;
