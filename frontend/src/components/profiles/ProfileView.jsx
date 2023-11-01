import React, { useEffect, useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  Button,
  Divider,
  Grid,
  Chip,
  CircularProgress,
} from "@mui/material";
import cover from "../../images/bg_img.png"; // Replace with your cover image URL
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../store/slices/UserSlice";
import { useParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

const ProfileView = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);
  const [userData, setUserData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    // Fetch user details and store them in Redux
    dispatch(getUserDetails(id)).then((response) => {
      const userD = response.payload;
      setUserData(userD);
      console.log(userD);
    });
  }, [dispatch, id]);

  return (
    <Box
      sx={{
        margin: {
          md: "0 10%",
          sm: "0 6%",
          xs: "5%",
        },
      }}
    >
      <Grid container spacing={5}>
        <Grid item md={8} sm={6} xs={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: 15,
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              overflow: "hidden",
            }}
          >
            {/* Cover Photo */}
            <img
              src={cover}
              alt="cover"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "fill",
              }}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                padding: 2,
                position: "relative",
              }}
            >
              {/* Profile Picture and Info */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  //   alignItems: "center",
                  width: "100%",
                }}
              >
                {/* Profile Picture */}
                <Avatar
                  alt="Profile Picture"
                  // src={userData.profile_image} // Use user data for the profile picture URL
                  sx={{
                    width: 120,
                    height: 120,
                    border: "2px solid #fff",
                    position: "absolute",
                    top: -60,
                  }}
                />

                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    mt: 8,
                  }}
                >
                  {userData.name}
                </Typography>

                <Typography variant="body2" color="textSecondary">
                  {/* {userData.bio} */}
                  BIO : Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos eos consequatur voluptate magnam fugiat officiis
                  incidunt debitis expedita commodi. Perferendis!
                </Typography>

                <Typography variant="body2" color="textSecondary">
                  {userData.location}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {/* {userData.connections} */}
                  500+ connections
                </Typography>

                <Typography variant="body2" color="textSecondary">
                  {/* {userData.followers} */}
                  1k followers
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: 2, mr: 5 }}
                  >
                    Add Post
                  </Button>

                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: 2 }}
                  >
                    Share Profile
                  </Button>
                </Box>
              </Box>

              {/* University and Connections*/}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  marginLeft: 2,
                }}
              >
                <Typography variant="body2" color="textSecondary">
                  {userData.university}
                </Typography>
              </Box>
            </Box>
            <Divider sx={{ width: "100%" }} />

            <Box
              sx={{
                margin: "10px",
              }}
            >
              <Typography
                variant="h4"
                sx={{ marginLeft: 2, textAlign: "center" }}
              >
                About Me
              </Typography>

              <Box
                sx={{
                  pl: 3,
                  pr: 3,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    mt: 2,
                  }}
                >
                  EXPERIENCE: Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Sapiente ut ipsa laborum excepturi ducimus. Dolore
                  consequuntur vero cumque doloribus nulla?
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    mt: 2,
                  }}
                >
                  ACHIEVEMENTS: Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Sapiente ut ipsa laborum excepturi ducimus.
                  Dolore consequuntur vero cumque doloribus nulla?
                </Typography>
              </Box>
            </Box>

            <Typography variant="body2" sx={{ marginLeft: 2 }}>
              {userData.about}
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Box
            sx={{
              backgroundColor: "#fff",
              mt: { md: 15, sm: 15 },
              p: 2,
              borderRadius: "8px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "bolder", marginBottom: 2 }}
            >
              Activity status
            </Typography>
            <Divider sx={{ width: "100%" }} />

            {/* Profile completion status */}
            {/* Edit profile button */}
            <Button
              variant="contained"
              color="primary"
              startIcon={<EditIcon />}
              sx={{ mb: 2, mt: 3 }}
            >
              Edit Profile
            </Button>

            <Box sx={{ my: 2 }}>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mb: 1 }}
              >
                Profile Completion
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CircularProgress
                  variant="determinate"
                  value={70}
                  sx={{ width: "120px", height: "120px", mr: 1 }}
                />
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    70%
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Suggested changes */}
            <Box sx={{ my: 2 }}>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mb: 1 }}
              >
                Suggested Changes
              </Typography>
              <Chip label="Improve experience section" />
              {/* Add more chips as needed */}
            </Box>

            {/* Suggested people */}
            <Box sx={{ my: 2 }}>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mb: 1 }}
              >
                Suggested People
              </Typography>
              <Chip label="John Doe" />
              {/* Add more chips as needed */}
            </Box>

            {/* Success rate */}
            <Box sx={{ my: 2 }}>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mb: 1 }}
              >
                Success Rate
              </Typography>
              <CircularProgress
                variant="determinate"
                value={80}
                sx={{ width: "120px", height: "120px", mr: 1 }}
              />
              <Box>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  80%
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileView;
