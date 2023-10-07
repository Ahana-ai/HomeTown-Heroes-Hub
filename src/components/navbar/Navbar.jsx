import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const drawerWidth = 240;
const navItems = ["Home", "Company", "FAQ"];

const Navbar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        background: "linear-gradient(180deg, #462A7F 22%, #1C2B6B 56%)",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          my: 2,
          color: "#fef6ed",
        }}
      >
        HHH
      </Typography>
      <Divider />
      <List
        sx={{
          background: "linear-gradient(180deg, #462A7F 22%, #1C2B6B 56%)",
        }}
      >
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center", color: "#fef6ed" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        position: "static",
      }}
    >
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background: "linear-gradient(180deg, #462A7F 22%, #1C2B6B 56%)",
          padding: "50px 0 0 0",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ 
              mr: 2, 
              display: { 
                sm: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            HHH
          </Typography>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
              // margin: {
              //   xl: "5% 33% 0 0",
              //   lg: "5% 30% 0 0",
              //   md: "5% 25% 0 0",
              //   sm: "5% 20% 0 0",
              // },
              fontSize: "24px",
              fontFamily: "Kalam",
              fontWeight: "700",
              wordWrap: "break-word",
              justifyContent: "start",
            }}
          >
            {navItems.map((item) => (
              <Button key={item} 
              sx={{ 
                color: "#fff" 
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Box
          // sx={{ margin: "5% 0 0 0" }}
          >
            <Button sx={{ color: "#fff" }}>SignUp</Button>
            <Button sx={{ color: "#fff" }}>Login</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;
