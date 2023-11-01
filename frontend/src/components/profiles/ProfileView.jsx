import React, { useEffect, useState } from "react";
import { Box, Avatar, Typography, Button, Divider, Grid } from "@mui/material";
import cover from "../../images/bg_img.png"; // Replace with your cover image URL
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../store/slices/UserSlice";
import { useParams } from "react-router-dom";

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
          xs: "0",
        },
      }}
    >
      <Grid container spacing={5}>
        <Grid item md={8}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: 14,
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              overflow: "hidden",
            }}
          >
            {/* Cover Photo */}
            <img
              src={cover}
              alt="cover photo"
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
                  alignItems: "center",
                  width: "50%",
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
                  variant="h5"
                  gutterBottom
                  sx={{
                    mt: 8,
                  }}
                >
                  {userData.name}
                </Typography>

                <Typography variant="body2" color="textSecondary">
                  {userData.title}
                </Typography>

                <Typography variant="body2" color="textSecondary">
                  {userData.location}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {userData.connections}
                </Typography>

                <Typography variant="body2" color="textSecondary">
                  {userData.followers}
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: 2 }}
                >
                  Connect
                </Button>
              </Box>

              {/* University and Connections */}
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

            <Typography variant="body1" sx={{ marginLeft: 2 }}>
              About Me
            </Typography>

            <Typography variant="body2" sx={{ marginLeft: 2 }}>
              {userData.about}
            </Typography>

            {/* Add more sections for displaying user data, skills, experience, etc. */}
          </Box>
        </Grid>
        <Grid item md={4} sm={12}>
          <Box
            sx={{
              backgroundColor: "#fff",
              mt: { md: 15, sm: 0 },
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

            {/* Add more content for the right sidebar */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileView;
