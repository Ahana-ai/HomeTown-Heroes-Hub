import { Box, Avatar, Typography, Button, Divider } from "@mui/material";
import cover from "../../images/bg_img.png";
import { useNavigate } from "react-router-dom";

const Description = ({ userData }) => {
  const navigate = useNavigate();

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
            <Button
              variant="contained"
              sx={{
                marginTop: 2,
                mr: 5,
                backgroundColor: "darkblue",
              }}
              onClick={() => {
                navigate("/add-post");
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
