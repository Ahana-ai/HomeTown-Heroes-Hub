import { Box, Button, Paper, Typography } from "@mui/material";

const Options = () => {
  return (
    <Paper
      elevation={5}
      sx={{
        backgroundColor: "#fff",
        margin: "130px auto 10px auto",
        width: "60%",
        p: 4,
        borderRadius: "20px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bolder",
          textTransform: "uppercase",
          //   color: "darkblue",
        }}
      >
        What Best Describes You?
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Button
          sx={{
            backgroundColor: "darkblue",
            color: "#fff",
            mb: 2,
            width: "50%",
            "&:hover": {
              border: "2px solid black",
              fontWeight: "bold",
              backgroundColor: "green",
            },
          }}
        >
          Athlete
        </Button>

        <Button
          sx={{
            backgroundColor: "darkblue",
            color: "#fff",
            mb: 2,
            width: "50%",
            "&:hover": {
              border: "2px solid black",
              fontWeight: "bold",
              backgroundColor: "green",
            },
          }}
        >
          Business
        </Button>
      </Box>
    </Paper>
  );
};

export default Options;
