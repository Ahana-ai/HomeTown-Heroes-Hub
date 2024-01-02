import {
  Box,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InstagramIcon from "@mui/icons-material/Instagram";
import { SiThreads } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import Athletes from "../constants/HomeAthletes.js";

const stepStyle = {
  marginTop: "20px",
  color: "#675B5B",
  textAlign: "center",
  lineHeight: "1.6",
};

const ForBusiness = () => {
  const fontStyle = {
    fontWeight: "bold",
  };

  return (
    <Box sx={{ backgroundColor: "#FDE5D4", padding: "20px" }}>
      <Box
        sx={{
          borderRadius: "30px",
          backgroundColor: "#F6EDED",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "80%",
          margin: "0px auto 20px auto",
          padding: "30px",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            letterSpacing: "4.32px",
            color: "#675B5B",
            marginBottom: "20px",
            fontStyle,
            display: "flex",
            justifyContent: "center",
          }}
        >
          How It Works?
        </Typography>
        <Divider sx={{ width: "30%", backgroundColor: "#675B5B" }} />
        <Typography sx={stepStyle}>
          1. Craft an engaging athlete profile that highlights your skills,
          achievements, and personal brand.
        </Typography>
        <Typography sx={stepStyle}>
          2. Showcase your athletic prowess with a dynamic portfolio featuring
          high-quality pictures and videos.
        </Typography>
        <Typography sx={stepStyle}>
          3. Fill in your profile details to provide a comprehensive overview of
          your strengths, interests, and values.
        </Typography>
        <Typography sx={stepStyle}>
          4. Connect with businesses actively seeking athletes for endorsements
          to explore potential partnerships.
        </Typography>
        <Typography sx={stepStyle}>
          5. Negotiate endorsement terms, ensuring they align with your brand
          and values.
        </Typography>
        <Typography sx={stepStyle}>
          6. Collaborate seamlessly with businesses through the platform,
          keeping communication clear and efficient.
        </Typography>
        <Typography sx={stepStyle}>
          7. Regularly update your profile and portfolio to reflect your latest
          achievements and activities.
        </Typography>
        <Typography sx={stepStyle}>
          8. Actively engage with your audience, sharing insights into your
          athletic journey and fostering a strong online presence.
        </Typography>
        <Typography sx={stepStyle}>
          9. Build connections with fellow athletes to exchange experiences,
          advice, and potential collaboration opportunities.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            letterSpacing: "4.32px",
            color: "#675B5B",
            marginBottom: "20px",
            fontStyle,
          }}
        >
          How It Will Look?
        </Typography>
        <Divider sx={{ width: "30%", backgroundColor: "#675B5B" }} />
      </Box>
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
