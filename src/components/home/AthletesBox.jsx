import { Box, Typography } from "@mui/material";
import React from "react";

const AthletesBox = () => {
  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(180deg, rgba(63.86, 28.01, 140.04, 0.75) 10%, rgba(102.85, 82.36, 146.41, 0.75) 23%, rgba(0, 17.72, 80.55, 0.75) 57%)",
          borderRadius: "20px",
          border: "1px #1A265A solid",
          padding: "100px",
        }}
      >
        <Box
          sx={{
            borderRadius: "30px",
            backgroundColor: "#F6EDED",
            display: "flex"
          }}
        >
          <Typography
            sx={{
              letterSpacing: "4.32px",
              color: "#675B5B",
              alignContent: "flex-start",
              marginLeft: "20px",
            }}
          >
            Athletes Nearby
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default AthletesBox;
