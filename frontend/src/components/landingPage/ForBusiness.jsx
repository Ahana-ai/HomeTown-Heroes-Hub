import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InstagramIcon from "@mui/icons-material/Instagram";
import { SiThreads } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import Athletes from "../constants/HomeAthletes.js";

const ForBusiness = () => {
  const fontStyle = {
    fontWeight: "bold",
  };

  return (
    <Box sx={{ backgroundColor: "#FDE5D4", padding: "20px" }}>
      <Paper
        elevation={6}
        sx={{
          background:
            "linear-gradient(180deg, rgba(8,23,110,1) 0%, rgba(200,227,245,1) 82%, rgba(255,255,255,1) 96%)",
          padding: "50px",
          width: "70%",
          margin: "10px auto 0 auto",
        }}
      >
        <Box
          sx={{
            borderRadius: "30px",
            backgroundColor: "#F6EDED",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            margin: "0px auto 10px auto",
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
            Athletes Nearby
          </Typography>
          <SearchIcon
            sx={{
              color: "#675B5B",
              fontSize: "1.3rem",
            }}
          />
        </Box>

        <Grid container spacing={4}>
          {Athletes.map((details, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "20px",
                  textAlign: "center",
                  padding: "8px",
                  height: "100%",
                }}
              >
                <img
                  src={details.pic}
                  alt={details.name}
                  style={{
                    height: "80px",
                    marginTop: "10px",
                    borderRadius: "50%", // Make the image round
                  }}
                />
                <Typography
                  variant="h6" // Used variant for consistent typography
                  sx={{
                    ...fontStyle,
                    fontSize: "1.3rem",
                    marginTop: "10px",
                  }}
                >
                  {details.name}
                </Typography>
                <Box
                  sx={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <IconButton>
                    <InstagramIcon />
                  </IconButton>
                  <IconButton>
                    <SiThreads fontSize="1.4rem" />
                  </IconButton>
                  <IconButton>
                    <FaXTwitter fontSize="1.4rem" />
                  </IconButton>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default ForBusiness;
