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
  useScrollTrigger,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../images/Logo.png";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const pages = ["Home", "Connect with Us", "Testimonials"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

// Function to hide/show app bar on scroll
function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

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

  const ImgStyle = styled("img")(({ theme }) => ({
    height: "80px",
    display: "flex",
    justifyContent: "center",
    margin: "10px",
    width: "auto",
    maxWidth: "100%",
  }));

  return (
    <HideOnScroll>
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
                display: { xs: "none", md: "flex" },
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
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {pages.map((page) => (
                <Link
                  key={page}
                  to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                  style={{ textDecoration: "none" }}
                >
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

                      "&:hover": {
                        backgroundColor: "#12486B",
                        border: "1px solid white",
                      },
                    }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>
            {account ? (
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Button
                  sx={{
                    "&:hover": {
                      backgroundColor: "#12486B",
                      border: "1px solid white",
                    },
                  }}
                >
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
                <Button
                  sx={{
                    "&:hover": {
                      backgroundColor: "#12486B",
                      border: "1px solid white",
                    },
                  }}
                >
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
            ) : (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}

export default Navbar;
