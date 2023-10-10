import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../images/Logo.png";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const pages = ["Home", "Company", "FAQ"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const ImgStyle = styled("img")({
    height: "100px",
    display: "flex",
    justifyContent: "center",
    margin: "10px",
  });

  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(180deg, #257A95 37%, #664C9D 100%)",
        padding: "10px 0 0 0",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ImgStyle src={Logo} alt="HHH" />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={Logo} alt="HHH" />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Kalam",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  fontSize: "1rem",
                  margin: "20px",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
            }}
          >
            <Link
              variant=""
              style={{
                margin: "auto auto",
                textTransform: "capitalize",
                fontFamily: "Kalam",
                fontWeight: "bold",
                color: "#fff",
                textDecoration: "none",
              }}
              to="/Register"
            >
              SignUp
            </Link>
            <Link
              variant=""
              style={{
                margin: "auto 10px",
                textTransform: "capitalize",
                fontFamily: "Kalam",
                fontWeight: "bold",
                color: "#fff",
                textDecoration: "none",
              }}
              to="/Login"
            >
              LogIn
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
