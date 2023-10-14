import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import bg_img from "../../images/bg_img.png";
import bg_img_2 from "../../images/bg_img_2.png";
import ForAthletes from "./ForAthletes";
import ForBusiness from "./ForBusiness";

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState("athletes");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {activeTab === "business" ? (
          <img
            src={bg_img}
            alt="bg-img"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              opacity: "0.5",
            }}
          />
        ) : (
          <img
            src={bg_img_2}
            alt="bg-img"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              opacity: "0.5",
            }}
          />
        )}
        <Box
          sx={{
            position: "relative",
            marginRight: "30%",
            marginLeft: "30%",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              marginBottom: "20px",
            }}
          >
            Hometown Heroes Hub (HHH)
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
              marginBottom: "30px",
            }}
          >
            This is a platform for athletes of all levels and local businesses
            to discover and connect with one another.
          </Typography>
          <Button
            sx={{
              backgroundColor: activeTab === "athletes" ? "#186F65" : "#213555",
              color: "#fff",
              fontWeight: "bolder",
              fontSize: "1.01rem",
              margin: "10px",
              border: "2px solid #fff",
              padding: "10px 40px",

              "&:hover": {
                backgroundColor: "#186F65",
              },
            }}
            onClick={() => handleTabChange("athletes")}
          >
            For Athletes
          </Button>
          <Button
            sx={{
              backgroundColor: activeTab === "business" ? "#186F65" : "#213555",
              color: "#fff",
              fontSize: "1.01rem",
              fontWeight: "bolder",
              margin: "10px",
              border: "2px solid #fff",
              padding: "10px 40px",

              "&:hover": {
                backgroundColor: "#186F65",
              },
            }}
            onClick={() => handleTabChange("business")}
          >
            For Business
          </Button>
        </Box>
      </Box>
      {activeTab === "athletes" && (
        <div>
          <ForAthletes />
        </div>
      )}
      {activeTab === "business" && (
        <div>
          <ForBusiness />
        </div>
      )}
    </>
  );
};

export default LandingPage;
