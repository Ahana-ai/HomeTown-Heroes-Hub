import { Box, Grid, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InstagramIcon from "@mui/icons-material/Instagram";
import { SiThreads } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import Business from "../constants/HomeBusiness.js";

const AthletesBox = () => {
  const fontStyle = {
    fontFamily: "Kalam",
    fontWeight: "bold",
  };

  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(180deg, rgba(63.86, 28.01, 140.04, 0.75) 10%, rgba(102.85, 82.36, 146.41, 0.75) 23%, rgba(0, 17.72, 80.55, 0.75) 57%)",
          borderRadius: "20px",
          border: "1px #1A265A solid",
          padding: "50px",
          width: "70%",
          margin: " 10px auto 0 auto",
        }}
      >
        <Box
          sx={{
            borderRadius: "30px",
            backgroundColor: "#F6EDED",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "50%",
            margin: "0px auto 0 auto",
          }}
        >
          <Typography
            sx={{
              letterSpacing: "4.32px",
              color: "#675B5B",
              marginLeft: "20px",
              fontStyle,
            }}
          >
            Business Nearby
          </Typography>
          <SearchIcon
            sx={{
              color: "#675B5B",
              fontSize: "1.3rem",
            }}
          />
        </Box>

        <Box
          sx={{
            marginTop: "10px",
            fontStyle,
          }}
        >
          <Grid container spacing={2}>
            {Business.map((details, index) => (
              <Grid item xs={6} md={4} key={index}>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    height: "200px",
                    width: "200px",
                    border: "2px solid black",
                    borderRadius: "20%",
                    textAlign: "center",
                    margin: "auto auto",
                  }}
                >
                  <img
                    src={details.pic}
                    alt={details.name}
                    style={{
                      height: "80px",
                      marginTop: "10px",
                    }}
                  />
                  <Typography
                    sx={{
                      fontStyle,
                      fontSize: "1.3rem",
                    }}
                  >
                    {details.name}
                  </Typography>
                  <Box
                    sx={{
                      marginTop: "20px",
                    }}
                  >
                    <InstagramIcon sx={{ margin: "0 10px 0 10px" }} />
                    <SiThreads
                      style={{ margin: "0 10px 0 10px", fontSize: "1.4rem" }}
                    />
                    <FaXTwitter
                      style={{ margin: "0 10px 0 10px", fontSize: "1.4rem" }}
                    />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default AthletesBox;
