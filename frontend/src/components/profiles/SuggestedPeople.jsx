import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const profiles = [
  {
    name: "John Doe",
    id: "654e161c167c96d3b1e86115",
    avatarUrl: "john_avatar.jpg",
  },
  { name: "Alice Twinkle", id: 2, avatarUrl: "alice_avatar.jpg" },
];

const ProfileList = () => {
  const navigate = useNavigate();

  const handleProfileClick = (profileId) => {
    if (window.location.pathname.includes("profile")) {
      // If on a profile page, replace the current entry
      navigate(`../profile/${profileId}`);
    } else {
      // If not on a profile page, navigate normally
      navigate(`profile/${profileId}`);
    }
  };

  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
        Suggested People
      </Typography>
      <Box>
        {profiles.map((profile) => (
          <Button
            key={profile.id}
            onClick={() => handleProfileClick(profile.id)}
            sx={{
              mb: 2,
              backgroundColor: "#D8D9DA",
              borderRadius: "30px",
              padding: "5px 20px",
              color: "#000",

              ":hover": {
                backgroundColor: "#D8D9DA",
                border: "1px solid black",
              },
            }}
          >
            <Avatar
              alt={profile.name}
              src={profile.avatarUrl}
              sx={{
                width: 40,
                height: 40,
                marginRight: 2,
                border: "1px solid white",
              }}
            />
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              {profile.name}
            </Typography>
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default ProfileList;
