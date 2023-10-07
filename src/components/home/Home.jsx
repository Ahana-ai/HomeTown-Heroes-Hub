import React from "react";
import Navbar2 from "../navbar/Navbar2";
import { Typography } from "@mui/material";
import AthletesBox from "./AthletesBox";
import BusinessBox from "./BusinessBox";
import HowItWorks from "./HowItWorks";

const Home = () => {
  return (
    <>
      <Navbar2 />
      <Typography
        sx={{
          textAlign: "center",
          // color: "#FEF6ED",
          color: "black",
          fontSize: "96px",
          fontFamily: "kalam",
          fontWeight: "700",
          // marginTop: "10%"
        }}
      >
        HHH
      </Typography>
      <Typography>
        Hometown Heroes Hub (HHH) is a platform for athletes of all levels and
        local businesses to discover and connect with one another.
      </Typography>
      <AthletesBox />
      <BusinessBox />
      <Typography 
        variant="h2"
      >
        How it Works
      </Typography>
      <HowItWorks />
    </>
  );
};

export default Home;
