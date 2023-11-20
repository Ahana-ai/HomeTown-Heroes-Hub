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
import { getFollowing, deleteFollower } from "../../store/slices/FollowerSlice";
import Swal from "sweetalert2";
import { getUserDetails } from "../../store/slices/UserSlice";

const MyFollowing = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const [followerDetails, setFollowerDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    dispatch(getFollowing(currentUser._id))
      .then((response) => {
        // Ensure the payload is an array before setting the state
        if (Array.isArray(response.payload)) {
          setFollowerDetails(response.payload);
        } else {
          setFollowerDetails([]);
        }
      })
      .finally(() => setLoading(false));
  }, [currentUser._id, dispatch]);

  const handleDeleteClick = async (followerId) => {
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
      dispatch(deleteFollower(followerId)).then((response) => {
        if (response.payload && response.meta.requestStatus === "fulfilled") {
          setFollowerDetails((prevDetails) =>
            prevDetails.filter((follower) => follower._id !== followerId)
          );
          Swal.fire("Removed!", "The user has been removed.", "success");
        } else {
          Swal.fire("Error", "Failed to remove the user.", "error");
        }
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!loading) {
        const updatedDetails = await Promise.all(
          followerDetails.map(async (follower) => {
            const userResponse = await dispatch(
              getUserDetails(follower.userId)
            );
            if (userResponse.payload) {
              return { ...follower, name: userResponse.payload.name };
            }
            return follower;
          })
        );
        setFollowerDetails(updatedDetails);
      }
    };

    fetchData();
  }, [followerDetails, loading, dispatch]);

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
          People I Follow
        </Typography>
        <Divider />

        <List>
          {loading ? (
            <Typography variant="body1">Loading...</Typography>
          ) : followerDetails.length === 0 ? (
            <Typography variant="body1">You follow no one yet.</Typography>
          ) : (
            followerDetails.map((follower, index) => (
              <Box key={index}>
                <ListItem
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <ListItemText primary={follower.name} />
                  <Box>
                    <IconButton
                      color="error"
                      onClick={() => handleDeleteClick(follower._id)}
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

export default MyFollowing;
