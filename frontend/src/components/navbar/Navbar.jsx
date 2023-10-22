import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { addUser, loginUser, logoutUser } from "../../store/slices/UserSlice";

const pages = ["Home", "Connect", "Testimonials"];
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

// To delete later
const reg_data = {
  name: "B De",
  email: "b@gmail.com",
  password: "bc123",
  role: "business",
  age: 21,
  location: "Kolkata",
  acheivement: "Good",
  talents: "abc",
  bio: "abc",
  // profile_image: { Image },
  social_media_links: "instagram",
  profile_completion_score: "",
};

const log_data = {
  email: "abcd@gmail.com",
  password: "abcd",
};

function Navbar() {
  const dispatch = useDispatch();

  const [user, setUser] = useState(false);
  const userDetails = useSelector((state) => state.user);
  console.log(userDetails);

  const handleLogout = () => {
    try {
      // Dispatch the logoutUser thunk
      dispatch(logoutUser(null));
      setUser(false);
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  const handleMenuItemClick = (setting) => {
    handleCloseUserMenu(); // Close the menu when a menu item is clicked

    if (setting === "Logout") {
      handleLogout();
    } else {
      console.log(`Clicked on ${setting}`);
    }
  };

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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
            {/* Logo */}
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

            {/* Mobile Menu Button */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="open menu"
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
                    <Link
                      to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Typography textAlign="center">{page}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Desktop Menu */}
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

            {/* User Actions */}
            {!user ? (
              <Box
                sx={{
                  display: "flex",
                }}
              >
                {/* Sign Up Button */}
                <Button
                  sx={{
                    "&:hover": {
                      backgroundColor: "#12486B",
                      border: "1px solid white",
                    },
                  }}
                  onClick={() => {
                    dispatch(addUser(reg_data));
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
                    // to="/register"
                  >
                    SignUp
                  </Link>
                </Button>

                {/* Log In Button */}
                <Button
                  sx={{
                    "&:hover": {
                      backgroundColor: "#12486B",
                      border: "1px solid white",
                    },
                  }}
                  onClick={() => {
                    dispatch(loginUser(log_data));
                    setUser(true);
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
                    // to="/login"
                  >
                    LogIn
                  </Link>
                </Button>
              </Box>
            ) : (
              // User is logged in
              <Box sx={{ flexGrow: 0, display: "flex" }}>
                <Typography
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "5px",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    letterSpacing: "0.8px",
                    wordSpacing: "2px",
                  }}
                >
                  {/* Display User's Name */}
                  {userDetails.user.name}
                </Typography>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="User Avatar" src="/path/to/user-avatar.jpg" />
                  </IconButton>
                </Tooltip>
                {/* User Settings Menu */}
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
                    <MenuItem
                      key={setting}
                      onClick={() => handleMenuItemClick(setting)}
                      // onClick={handleCloseUserMenu}
                    >
                      <Link
                        // to={`/${setting.toLowerCase()}`}
                        to={
                          setting === "Logout"
                            ? `/`
                            : `/${setting.toLowerCase()}`
                        }
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <Typography textAlign="center">{setting}</Typography>
                      </Link>
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
