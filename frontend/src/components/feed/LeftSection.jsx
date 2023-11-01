import React from "react";
import { Paper, Typography, Divider, Button } from "@mui/material";
import ChatBotIcon from "@mui/icons-material/Chat";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const LeftSection = () => {
  // Sample data for each section
  const analyticsData = {
    chatbot: { label: "Chatbot for Queries", icon: <ChatBotIcon /> },
    successRate: { label: "Success Rate Predictor", icon: <TrendingUpIcon /> },
    recentlyVisited: {
      label: "Recently Visited Pages",
      icon: <RecentActorsIcon />,
    },
    myItems: { label: "My Items", icon: <LocalOfferIcon /> },
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          textAlign: "center",
        }}
      >
        Analytics
      </Typography>
      <Divider />
      {Object.values(analyticsData).map((item, index) => (
        <Button key={index} fullWidth startIcon={item.icon}>
          {item.label}
        </Button>
      ))}
    </Paper>
  );
};

export default LeftSection;
