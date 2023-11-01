import { Avatar, Box, Divider, Paper, Typography } from "@mui/material";

const SuggestedPeople = () => {
  const suggestedPeople = [
    { name: "Alice", avatar: "avatarAlice.jpg", endorsement: 75 },
    { name: "Bob", avatar: "avatarBob.jpg", endorsement: 85 },
  ];
  return (
    <Box>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ mt: 2 }} gutterBottom>
          Suggested People
        </Typography>
        <Divider />
        {suggestedPeople.map((person, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Avatar alt={person.name} src={person.avatar} />
            <Typography variant="body2">{person.name}</Typography>
            <Typography variant="body2">{person.endorsement}</Typography>
            <Divider />
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

export default SuggestedPeople;
