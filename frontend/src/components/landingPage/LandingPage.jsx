import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import bg_img from "../../images/bg_img.png";
import bg_img_2 from "../../images/bg_img_2.png";
import cover_image from "../../images/cover_image.jpg";
import ForAthletes from "./ForAthletes";
import ForBusiness from "./ForBusiness";
import AboutUs from "./AboutUs";

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState("about us");

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
          backgroundColor: "#141e46"
        }}
      >
        {(() => {
          if (activeTab === "athletes") {
            return (
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
            );
          } else if (activeTab === "business") {
            return (
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
            );
          } else {
            return (
              <img
                src={cover_image}
                alt="bg-img"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  opacity: "0.5",
                }}
              />
            );
          }
        })()}
        <Box
          sx={{
            position: "relative",
            margin: "auto auto",
            width: {
              lg: "70%",
              md: "100%",
            },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
              marginBottom: "30px",
              margin: "auto auto",
              textAlign: "center",
              fontFamily: "serif",
              fontStyle: "oblique",
            }}
          >
            This is a platform for athletes of all levels and local businesses
            to discover and connect with one another.
          </Typography>
          <Grid
            container
            sx={{
              margin: "auto auto",
              justifyContent: "space-evenly",
            }}
          >
            <Grid item sx={12} md={3}>
              <Button
                sx={{
                  backgroundColor:
                    activeTab === "about us" ? "#186F65" : "#213555",
                  color: "#fff",
                  fontWeight: "bolder",
                  fontSize: "1.01rem",
                  margin: "10px",
                  border: "2px solid #fff",
                  padding: "10px 40px",
                  minWidth: "250px",

                  "&:hover": {
                    backgroundColor: "#186F65",
                  },
                }}
                onClick={() => handleTabChange("about us")}
              >
                About Us
              </Button>
            </Grid>
            <Grid item sx={12} md={3}>
              <Button
                sx={{
                  backgroundColor:
                    activeTab === "athletes" ? "#186F65" : "#213555",
                  color: "#fff",
                  fontWeight: "bolder",
                  fontSize: "1.01rem",
                  margin: "10px",
                  border: "2px solid #fff",
                  padding: "10px 40px",
                  minWidth: "250px",

                  "&:hover": {
                    backgroundColor: "#186F65",
                  },
                }}
                onClick={() => handleTabChange("athletes")}
              >
                For Athletes
              </Button>
            </Grid>
            <Grid item sx={12} md={3}>
              <Button
                sx={{
                  backgroundColor:
                    activeTab === "business" ? "#186F65" : "#213555",
                  color: "#fff",
                  fontSize: "1.01rem",
                  fontWeight: "bolder",
                  margin: "10px",
                  border: "2px solid #fff",
                  padding: "10px 40px",
                  minWidth: "250px",
                  wordWrap: "normal",

                  "&:hover": {
                    backgroundColor: "#186F65",
                  },
                }}
                onClick={() => handleTabChange("business")}
              >
                For Business
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box>
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
        {activeTab === "about us" && (
          <div>
            <AboutUs />
          </div>
        )}
      </Box>
    </>
  );
};

export default LandingPage;
