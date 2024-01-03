import { Paper, Typography, Divider } from "@mui/material";
import SuggestedPeople from "../feed/SuggestedPeople";


const RightSection = () => {
  const newsData = [
    {
      title: "Breaking Records: University Sprinter Sets New 100m Dash Record",
      content:
        "John Doe, a Computer Science Major, shocked the campus by breaking a long-standing record in the 100m dash...",
    },
    {
      title: "Basketball Sensation: Engineering Student Named MVP of National Tournament",
      content:
        "Emily Smith, an Engineering Marvel, emerged as a basketball prodigy, leading her university team to victory...",
    },
  ];

  return (
    <Paper
      sx={{
        p: 2,
        mb: 2,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Personalized News
      </Typography>
      <Divider sx={{ mb: 2 }} />

      {newsData.map((news, index) => (
        <div
          key={index}
          sx={{
            mb: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              marginBottom: 1,
            }}
          >
            {news.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              marginBottom: 1,
            }}
          >
            {news.content}
          </Typography>
        </div>
      ))}

      <SuggestedPeople />
    </Paper>
  );
};

export default RightSection;
