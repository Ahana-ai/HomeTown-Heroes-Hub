import React from "react";
import Navbar2 from "../navbar/Navbar2";
import { Typography } from "@mui/material";
import AthletesBox from "./AthletesBox";
import BusinessBox from "./BusinessBox";
import HowItWorks2 from "./HowItWorks2";

const Home = () => {
  return (
    <>
      <Navbar2 />
      <Typography
        sx={{
          textAlign: "center",
          color: "black",
          fontSize: "4rem",
          fontFamily: "kalam",
          fontWeight: "700",
        }}
      >
        HHH
      </Typography>
      <Typography
        sx={{
          fontFamily: "Kalam",
          textAlign: "center",
          fontWeight: "bold",
          color: "#1A265A",
          fontSize: "1.2rem",
        }}
      >
        Hometown Heroes Hub (HHH) is a platform for athletes of all levels and
        local businesses to discover and connect with one another.
      </Typography>
      <AthletesBox />
      <BusinessBox />
      <Typography
        // variant="h1"
        sx={{
          fontFamily: "Kalam",
          fontSize: "40px",
          fontWeight: "bold",
          textAlign: "center",
          fontStyle: "italic",
        }}
      >
        How it Works
      </Typography>
      <HowItWorks2 />
    </>
  );
};

export default Home;
