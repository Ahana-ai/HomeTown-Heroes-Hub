import React, { useEffect, useState } from "react";
import { Box, Chip, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { getUserDetails } from "../../store/slices/UserSlice";

const SuggestedProfileChanges = () => {
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    // Fetch user data from local storage
    const currentUser = JSON.parse(localStorage.getItem("user"));

    // Use the user's ID to dispatch getUserDetails action
    if (currentUser && currentUser._id) {
      dispatch(getUserDetails(currentUser._id))
        .then((response) => {
          setUserDetails(response.payload);
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });
    }
  }, [dispatch]);

  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
        Suggested Changes
      </Typography>
      {userDetails && (
        <Chip label={`Improve ${userDetails.experience} section`} />
        // Map through more suggested changes based on user details
        // Example:
        // {userDetails.skills.map((skill) => (
        //   <Chip key={skill} label={`Add ${skill} to skills`} />
        // ))}
      )}
    </Box>
  );
};

export default SuggestedProfileChanges;
