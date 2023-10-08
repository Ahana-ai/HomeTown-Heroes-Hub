import { Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const BusinessBox = () => {
  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(180deg, rgba(63.86, 28.01, 140.04, 0.75) 10%, rgba(102.85, 82.36, 146.41, 0.75) 23%, rgba(0, 17.72, 80.55, 0.75) 57%)",
          borderRadius: "20px",
          border: "1px #1A265A solid",
          padding: "100px",
          marginTop: "20px",
        }}
      >
        <Box
          sx={{
            borderRadius: "30px",
            backgroundColor: "#F6EDED",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Typography
            sx={{
              letterSpacing: "4.32px",
              color: "#675B5B",
              marginLeft: "20px",
              font: "Kalam",
            }}
          >
            Business Nearby
          </Typography>
          <SearchIcon
            sx={{
              color: "#675B5B",
              fontSize: "1.3rem",
              alignItems: "center",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default BusinessBox;
