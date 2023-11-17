import { Box, Avatar, Typography, Button, Divider } from "@mui/material";
import cover from "../../images/bg_img.png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  FaPlus,
  FaShare,
  FaUserPlus,
  FaLink,
  FaUsers,
  FaUserFriends,
  FaUserCheck,
} from "react-icons/fa";

const Description = ({ userData }) => {
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("user"));

  const userIdFromLocalStorage = currentUser._id;

  const isCurrentUser = userData._id === userIdFromLocalStorage;

  const handleAddPostClick = () => {
    navigate("/add-post");
  };

  const handleShareProfileClick = () => {
    // Replace this with your actual logic for sharing the profile
    Swal.fire({
      icon: "info",
      title: "Share Profile",
      text: "Feature under development!",
    });
  };

  const handleFollowClick = () => {
    // Replace this with your actual logic for following the user
    Swal.fire({
      icon: "info",
      title: "Follow",
      text: "Feature under development!",
    });
  };

  const handleConnectClick = () => {
    // Replace this with your actual logic for connecting with the user
    Swal.fire({
      icon: "info",
      title: "Connect",
      text: "Feature under development!",
    });
  };

  const handleMyFollowersClick = () => {
    // Replace this with your actual logic for "My Followers"
    Swal.fire({
      icon: "info",
      title: "My Followers",
      text: "Feature under development!",
    });
  };

  const handleMyFollowingClick = () => {
    // Replace this with your actual logic for "My Following"
    Swal.fire({
      icon: "info",
      title: "My Following",
      text: "Feature under development!",
    });
  };

  const handleMyConnectionsClick = () => {
    // Replace this with your actual logic for "My Connections"
    Swal.fire({
      icon: "info",
      title: "My Connections",
      text: "Feature under development!",
    });
  };

  return (
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
          padding: 8,
          paddingBottom: 2,
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            eos consequatur voluptate magnam fugiat officiis incidunt debitis
            expedita commodi. Perferendis!
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
            {isCurrentUser ? (
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  startIcon={<FaPlus />}
                  sx={{
                    marginTop: 2,
                    mr: 5,
                    backgroundColor: "darkblue",
                  }}
                  onClick={handleAddPostClick}
                >
                  Add Post
                </Button>

                <Button
                  variant="contained"
                  startIcon={<FaShare />}
                  sx={{ marginTop: 2, backgroundColor: "darkblue", mr: 5 }}
                  onClick={handleShareProfileClick}
                >
                  Share Profile
                </Button>

                <Button
                  variant="contained"
                  startIcon={<FaUsers />}
                  sx={{
                    marginTop: 2,
                    mr: 5,
                    backgroundColor: "darkblue",
                  }}
                  onClick={handleMyFollowersClick}
                >
                  My Followers
                </Button>

                <Button
                  variant="contained"
                  startIcon={<FaUserFriends />}
                  sx={{ marginTop: 2, backgroundColor: "darkblue", mr: 5 }}
                  onClick={handleMyFollowingClick}
                >
                  My Following
                </Button>

                <Button
                  variant="contained"
                  startIcon={<FaUserCheck />}
                  sx={{ marginTop: 2, backgroundColor: "darkblue" }}
                  onClick={handleMyConnectionsClick}
                >
                  My Connections
                </Button>
              </Box>
            ) : (
              <>
                <Button
                  variant="contained"
                  startIcon={<FaUserPlus />}
                  sx={{
                    marginTop: 2,
                    mr: 5,
                    backgroundColor: "darkblue",
                  }}
                  onClick={handleFollowClick}
                >
                  Follow
                </Button>

                <Button
                  variant="contained"
                  startIcon={<FaLink />}
                  sx={{ marginTop: 2, backgroundColor: "darkblue" }}
                  onClick={handleConnectClick}
                >
                  Connect
                </Button>
              </>
            )}
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
              lg: 650,
              md: 600,
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
            mt: 2,
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
            pl: 5,
            pr: 5,
          }}
        >
          {userData.role === "Athlete" ? (
            <Box>
              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  mb: 2,
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                deserunt similique consectetur voluptate eum sed expedita
                praesentium dolorem eius voluptas alias fugiat porro dolore
                consequuntur fuga nam blanditiis ad incidunt voluptatem facere
                numquam excepturi, modi aspernatur culpa? Quaerat.
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  mb: 2,
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                deserunt similique consectetur voluptate eum sed expedita
                praesentium dolorem eius voluptas alias fugiat porro dolore
                consequuntur fuga nam blanditiis ad incidunt voluptatem facere
                numquam excepturi, modi aspernatur culpa? Quaerat.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                deserunt similique consectetur voluptate eum sed expedita
                praesentium dolorem eius voluptas alias fugiat porro dolore
                consequuntur fuga nam blanditiis ad incidunt voluptatem facere
                numquam excepturi, modi aspernatur culpa? Quaerat.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                deserunt similique consectetur voluptate eum sed expedita
                praesentium dolorem eius voluptas alias fugiat porro dolore
                consequuntur fuga nam blanditiis ad incidunt voluptatem facere
                numquam excepturi, modi aspernatur culpa? Quaerat.
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
  );
};

export default Description;
