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
  Avatar,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../images/Logo.png";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const pages = ["Athletes", "Business", "About Us", "Connect with Us"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar({ account }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const ImgStyle = styled("img")({
    height: "100px",
    display: "flex",
    justifyContent: "center",
    margin: "10px",
  });

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "rgba(20, 30, 70, 0.4)",
        padding: "10px 0 0 0",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            variant="h6"
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
            }}
            to="/"
          >
            <ImgStyle src={Logo} alt="HHH" />
          </Link>

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
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
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
                  fontWeight: "bold",
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
            <Button>
              <Link
                variant=""
                style={{
                  margin: "auto auto",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  color: "#fff",
                  textDecoration: "none",
                }}
                to="/register"
              >
                SignUp
              </Link>
            </Button>
            <Button>
              <Link
                variant=""
                style={{
                  margin: "auto 10px",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  color: "#fff",
                  textDecoration: "none",
                }}
                to="/login"
              >
                LogIn
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
