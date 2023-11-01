import React from "react";
import { Paper, Typography, Divider } from "@mui/material";
import SuggestedPeople from "./SuggestedPeople";

const RightSection = () => {
  // Sample data for news and suggested people
  const newsData = ["News 1", "News 2"];

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Personalized News
      </Typography>
      <Divider />
      {newsData.map((news, index) => (
        <Typography key={index} variant="body2">
          {news} : Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Provident quae asperiores, eos obcaecati dignissimos excepturi neque
          deserunt delectus maiores praesentium!
        </Typography>
      ))}
      <SuggestedPeople />
    </Paper>
  );
};

export default RightSection;
