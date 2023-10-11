import React from "react";
import { Box, Typography } from "@mui/material";
import AthletesBox from "./AthletesBox";
import BusinessBox from "./BusinessBox";
import HowItWorks from "./HowItWorks";
import featuresImg from "../../images/Features.png";
import Features from "./Features";

const Home = () => {
  return (
    <>
      {/* <Typography
        sx={{
          textAlign: "center",
          color: "black",
          fontSize: "4rem",
          fontFamily: "kalam",
          fontWeight: "700",
        }}
      >
        HHH
      </Typography> */}
      <Typography
        sx={{
          fontFamily: "Kalam",
          textAlign: "center",
          fontWeight: "bold",
          color: "#1A265A",
          fontSize: "1.4rem",
          width: "77%",
          margin: "auto auto",
        }}
      >
        Hometown Heroes Hub (HHH) is a platform for athletes of all levels and
        local businesses to discover and connect with one another.
      </Typography>
      <AthletesBox />
      <BusinessBox />
      <Typography
        sx={{
          fontFamily: "Kalam",
          fontSize: "3rem",
          fontWeight: "bold",
          textAlign: "center",
          fontStyle: "italic",
        }}
      >
        How it Works
      </Typography>
      <HowItWorks />
      <Typography
        sx={{
          fontFamily: "Kalam",
          fontSize: "3rem",
          fontWeight: "bold",
          textAlign: "center",
          fontStyle: "italic",
        }}
      >
        Features
      </Typography>
      <Box
        sx={{
          textAlign: "center",
          margin: "20px",
        }}
      >
        <img
          src={featuresImg}
          alt="Features"
          style={{
            width: "80%",
          }}
        />
        <Features />
      </Box>
    </>
  );
};

export default Home;
