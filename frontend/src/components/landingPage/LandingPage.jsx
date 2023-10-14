import { Box, Button } from "@mui/material";
import bg_img from "../../images/bg_img.png";

const LandingPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh" /* 100% of the viewport height */,
        overflow: "hidden",
      }}
    >
      <img
        src={bg_img}
        alt="bg-img"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
        }}
      />
      <Box
        sx={{
          position: "relative",
          marginRight: "30%",
        }}
      >
        <Button>For Athletes</Button>
        <Button>For Business</Button>
      </Box>
    </Box>
  );
};

export default LandingPage;
