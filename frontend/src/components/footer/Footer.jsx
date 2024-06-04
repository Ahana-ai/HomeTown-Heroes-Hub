import { Box, Button, Typography } from "@mui/material";
import Logo from "../../images/Logo.png";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          background: "#141E46",
          color: "white",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          height: "200px",
        }}
      >
        <Box>
          <img
            src={Logo}
            alt=""
            style={{
              height: "100px",
            }}
          />
        </Box>
        <Box>
          <Button sx={{ color: "white", textTransform: "capitalize" }}>
            Instagram
          </Button>
          <Button sx={{ color: "white", textTransform: "capitalize" }}>
            LinkedIn
          </Button>
          <Button sx={{ color: "white", textTransform: "capitalize" }}>
            Twitter
          </Button>
        </Box>
        <Typography>Copyright ©2024, HHH. All rights reserved.</Typography>
      </Box>
    </>
  );
};

export default Footer;
