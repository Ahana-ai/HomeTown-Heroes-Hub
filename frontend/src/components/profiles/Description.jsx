import { Box, Avatar, Typography, Button, Divider, Modal } from "@mui/material";
import cover from "../../images/bg_img.png";
import { useNavigate, useParams } from "react-router-dom";
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
import MyFollowers from "../followers/MyFollowers";
import { useState } from "react";
import MyFollowing from "../followers/MyFollowing";
import MyConnections from "../connections/MyConnections";
import { addFollower } from "../../store/slices/FollowerSlice";
import { useDispatch } from "react-redux";
import { addConnection } from "../../store/slices/ConnectSlice";
import AddPost from "./posts/AddPost";

const Description = ({ userData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openAddPostModal, setOpenAddPostModal] = useState(false);
  const [openFollowersModal, setOpenFollowersModal] = useState(false);
  const [openFollowingModal, setOpenFollowingModal] = useState(false);
  const [openConnectionModal, setOpenConnectionModal] = useState(false);

  const currentUser = JSON.parse(localStorage.getItem("user"));
  const { id } = useParams();

  const userIdFromLocalStorage = currentUser._id;

  const isCurrentUser = userData._id === userIdFromLocalStorage;

  const handleAddPostClick = () => {
    setOpenAddPostModal(true);
  };

  const handleCloseAddPostModal = () => {
    setOpenAddPostModal(false);
  };

  const handleShareProfileClick = () => {
    Swal.fire({
      icon: "info",
      title: "Share Profile",
      text: "Feature under development!",
    });
  };

  const handleFollowClick = () => {
    const data = {
      userid: currentUser._id,
      followingId: id,
    };
    dispatch(addFollower(data)).then((response) => {
      console.log(response);
      if (response.meta.requestStatus === "fulfilled") {
        Swal.fire({
          icon: "info",
          title: "Add Follower",
          text: "Follower Added!",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Add Follower",
          text: "Already a Follower!",
        });
      }
    });
  };

  const handleConnectClick = () => {
    const data = {
      userid: currentUser._id,
      connectionId: id,
    };
    dispatch(addConnection(data)).then((response) => {
      if (response.status === 201) {
        Swal.fire({
          icon: "info",
          title: "Add Connection",
          text: "Connection Added!",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Add Connection",
          text: "Already a Connection!",
        });
      }
    });
  };

  const handleMyFollowersClick = () => {
    setOpenFollowersModal(true);
  };

  const handleCloseFollowersModal = () => {
    setOpenFollowersModal(false);
  };

  const handleMyFollowingClick = () => {
    setOpenFollowingModal(true);
  };

  const handleMyFollowingClose = () => {
    setOpenFollowingModal(false);
  };

  const handleMyConnectionsClick = () => {
    setOpenConnectionModal(true);
  };

  const handleMyConnectionClose = () => {
    setOpenConnectionModal(false);
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
              mt: 5,
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
            {userData.bio ? userData.bio : "Add Bio to make your profile attractive"}
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
            {userData.location ? userData.location : "Add Location to make your profile attractive"}
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
            {userData.connections ? userData.connections : "Add Connections"}
            <span style={{ margin: "15px" }}>.</span>
            {userData.followers ? userData.followers : "Add Followers"}
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
                  People who Follow Me
                </Button>

                <Button
                  variant="contained"
                  startIcon={<FaUserFriends />}
                  sx={{ marginTop: 2, backgroundColor: "darkblue", mr: 5 }}
                  onClick={handleMyFollowingClick}
                >
                  People I Follow
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
              sm: 100,
              xs: 140,
            },
            left: {
              lg: 500,
              md: 450,
              sm: 400,
              xs: 60,
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
              {userData.university ? userData.university : "Add University"}
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
                {userData.talents ? userData.talents : "Add your Talents"}
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
                {userData.achievements ? userData.achievements : "Add your achievements"}
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
                  textAlign: "center",
                }}
              >
                {userData.prod_services ? userData.prod_services : "Add your products & services to attract more people"}
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
                  textAlign: "center",
                }}
              >
                {userData.achievements ? userData.achievements : "Add your achievements"}
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
              {userData.email ? userData.email : "Add your email"}
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
              {userData.social_media_links}
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* Add Post Modal */}
      <Modal open={openAddPostModal} onClose={handleCloseAddPostModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            borderRadius: 8,
            boxShadow: 24,
            p: 4,
          }}
        >
          <AddPost />
        </Box>
      </Modal>

      <MyFollowers
        open={openFollowersModal}
        handleClose={handleCloseFollowersModal}
      />
      <MyFollowing
        open={openFollowingModal}
        handleClose={handleMyFollowingClose}
      />
      <MyConnections
        open={openConnectionModal}
        handleClose={handleMyConnectionClose}
      />
    </Box>
  );
};

export default Description;
