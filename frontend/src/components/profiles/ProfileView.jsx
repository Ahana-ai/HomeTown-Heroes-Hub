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
import { editUser, getUserDetails } from "../../store/slices/UserSlice";
import { useNavigate, useParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

const ProfileView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [userData, setUserData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    dispatch(getUserDetails(id)).then((response) => {
      const userD = response.payload;
      setUserData(userD);
    });
  }, [dispatch, id]);

  const handleEditUser = () => {
    console.log(userData._id);
    dispatch(editUser(userData._id)).then((response) => {
      navigate(`/edit/${response.payload.user._id}`);
    });
  };

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
        <Grid item md={8} sm={12} xs={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: 15,
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              overflow: "hidden",
              mb: { md: 5, sm: 0 },
            }}
          >
            {/* Cover Photo */}
            <img
              src={cover}
              alt="cover"
              style={{
                height: "350px",
                objectFit: "cover",
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
                  width: "100%",
                }}
              >
                {/* Profile Picture */}
                <Avatar
                  alt="Profile Picture"
                  src={userData.profile_image} // Use user data for the profile picture URL
                  sx={{
                    width: 120,
                    height: 120,
                    border: "3px solid #fff",
                    position: "absolute",
                    top: -60,
                  }}
                />

                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    mt: 8,
                    fontWeight: "700",
                    fontStyle: "italic",
                  }}
                >
                  {userData.name}
                </Typography>

                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{
                    fontSize: "1.02rem",
                    fontStyle: "italic",
                    fontWeight: "800",
                    marginTop: { sm: "10px", xs: "20px" },
                  }}
                >
                  {/* {userData.bio} */}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos eos consequatur voluptate magnam fugiat officiis
                  incidunt debitis expedita commodi. Perferendis!
                </Typography>

                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{
                    mt: 1,
                    color: "darkblue",
                    fontStyle: "italic",
                    fontWeight: "600",
                  }}
                >
                  {/* {userData.location} */}
                  Kolkata, West Bengal, India
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{
                    mt: 1,
                    color: "darkblue",
                    fontStyle: "italic",
                    fontWeight: "600",
                  }}
                >
                  {/* {userData.connections} */}
                  500+ connections
                  <span style={{ margin: "15px" }}>.</span>
                  {/* {userData.followers} */}
                  1k followers
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      marginTop: 2,
                      mr: 5,
                      backgroundColor: "darkblue",
                    }}
                  >
                    Add Post
                  </Button>

                  <Button
                    variant="contained"
                    sx={{ marginTop: 2, backgroundColor: "darkblue" }}
                  >
                    Share Profile
                  </Button>
                </Box>
              </Box>

              {/* University and Connections*/}
              <Box
                sx={{
                  marginRight: 5,
                  position: "absolute",
                  top: {
                    sm: 90,
                    xs: 120,
                  },
                  left: {
                    sm: 400,
                    xs: 15,
                  },
                }}
              >
                {userData.role === "Athlete" ? (
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "bolder",
                      fontSize: "1.05rem",
                      fontStyle: "italic",
                      color: "darkblue",
                    }}
                  >
                    {/* {userData.university} */}
                    Mexican University
                  </Typography>
                ) : (
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "bolder",
                      fontSize: "1.05rem",
                      fontStyle: "italic",
                      color: "darkblue",
                    }}
                  >
                    Business
                  </Typography>
                )}
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
                sx={{
                  marginLeft: 2,
                  marginBottom: 2,
                  textAlign: "center",
                  textTransform: "uppercase",
                  fontWeight: "bolder",
                }}
              >
                About
              </Typography>

              <Box
                sx={{
                  pl: 3,
                  pr: 3,
                }}
              >
                {userData.role === "Athlete" ? (
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        mt: 2,
                        textTransform: "uppercase",
                        fontWeight: "700",
                        color: "darkblue",
                        textAlign: "center",
                      }}
                    >
                      Talents:
                    </Typography>

                    <Typography
                      sx={{
                        color: "#6C5F5B",
                      }}
                    >
                      {/* {userData.talents} */}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorum deserunt similique consectetur voluptate eum sed
                      expedita praesentium dolorem eius voluptas alias fugiat
                      porro dolore consequuntur fuga nam blanditiis ad incidunt
                      voluptatem facere numquam excepturi, modi aspernatur
                      culpa? Quaerat.
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{
                        mt: 2,
                        textTransform: "uppercase",
                        fontWeight: "700",
                        color: "darkblue",
                        textAlign: "center",
                      }}
                    >
                      Acheivements:
                    </Typography>

                    <Typography
                      sx={{
                        color: "#6C5F5B",
                      }}
                    >
                      {/* {userData.acheivements} */}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorum deserunt similique consectetur voluptate eum sed
                      expedita praesentium dolorem eius voluptas alias fugiat
                      porro dolore consequuntur fuga nam blanditiis ad incidunt
                      voluptatem facere numquam excepturi, modi aspernatur
                      culpa? Quaerat.
                    </Typography>
                  </Box>
                ) : (
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        mt: 2,
                        textTransform: "uppercase",
                        fontWeight: "700",
                        color: "darkblue",
                        textAlign: "center",
                      }}
                    >
                      Products & Services:
                    </Typography>

                    <Typography
                      sx={{
                        color: "#6C5F5B",
                      }}
                    >
                      {/* {userData.prod_services} */}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorum deserunt similique consectetur voluptate eum sed
                      expedita praesentium dolorem eius voluptas alias fugiat
                      porro dolore consequuntur fuga nam blanditiis ad incidunt
                      voluptatem facere numquam excepturi, modi aspernatur
                      culpa? Quaerat.
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{
                        mt: 2,
                        textTransform: "uppercase",
                        fontWeight: "700",
                        color: "darkblue",
                        textAlign: "center",
                      }}
                    >
                      Acheivements:
                    </Typography>

                    <Typography
                      sx={{
                        color: "#6C5F5B",
                      }}
                    >
                      {/* {userData.acheivements} */}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorum deserunt similique consectetur voluptate eum sed
                      expedita praesentium dolorem eius voluptas alias fugiat
                      porro dolore consequuntur fuga nam blanditiis ad incidunt
                      voluptatem facere numquam excepturi, modi aspernatur
                      culpa? Quaerat.
                    </Typography>
                  </Box>
                )}
              </Box>

              <Divider sx={{ width: "100%", margin: "30px 0px" }} />

              <Box
                sx={{
                  margin: "10px",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    marginLeft: 2,
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontWeight: "bolder",
                  }}
                >
                  Contact Information
                </Typography>

                <Box
                  sx={{
                    pl: 3,
                    pr: 3,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      mt: 2,
                      textTransform: "uppercase",
                      fontWeight: "700",
                      color: "darkblue",
                      textAlign: "center",
                    }}
                  >
                    Email:
                  </Typography>

                  <Typography
                    sx={{
                      color: "#6C5F5B",
                      textAlign: "center",
                    }}
                  >
                    {/* {userData.email} */}
                    Lorem ipsum dolor sit amet.
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      mt: 2,
                      textTransform: "uppercase",
                      fontWeight: "700",
                      color: "darkblue",
                      textAlign: "center",
                    }}
                  >
                    Social Media Links:
                  </Typography>

                  <Typography
                    sx={{
                      color: "#6C5F5B",
                      textAlign: "center",
                    }}
                  >
                    {/* {userData.social_media_links} */}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Box
            sx={{
              backgroundColor: "#fff",
              mt: {
                md: 15,
                sm: 0,
              },
              mb: 5,
              p: 2,
              borderRadius: "8px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bolder",
                marginBottom: 2,
                textAlign: "center",
              }}
            >
              Activity status
            </Typography>

            <Divider sx={{ width: "100%" }} />

            {/* Edit profile button */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                startIcon={<EditIcon />}
                sx={{
                  mb: 2,
                  mt: 3,
                  backgroundColor: "darkblue",
                }}
                onClick={handleEditUser}
              >
                Edit Profile
              </Button>
            </Box>

            {/* Profile completion status */}
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Chip label="John Doe" sx={{ mb: 2 }} />
                <Chip label="Alice Twinkle" />
              </Box>
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
