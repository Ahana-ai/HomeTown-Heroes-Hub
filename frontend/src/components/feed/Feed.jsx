import { useState } from "react";
import {
  Box,
  Grid,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Divider,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LeftSection from "./LeftSection";
import MiddleSection from "./MiddleSection";
import RightSection from "./RightSection";

const Feed = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ mt: 15, ml: 20 }}>
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{ display: { sm: "block", md: "none" }, mb: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Grid container spacing={5}>
        <Grid item md={4} sm={8} sx={{ mr: 2, mb: 2 }}>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <List>
              <ListItem>
                <ListItemIcon></ListItemIcon>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: 2 }}
                  onClick={() => toggleDrawer(false)}
                >
                  Analytics
                </Button>
              </ListItem>
              <ListItem>
                <ListItemIcon></ListItemIcon>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: 2 }}
                  onClick={() => toggleDrawer(false)}
                >
                  News
                </Button>
              </ListItem>
              <ListItem>
                <ListItemIcon></ListItemIcon>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: 2 }}
                  onClick={() => toggleDrawer(false)}
                >
                  Suggested People
                </Button>
              </ListItem>
            </List>
          </Drawer>
          <Box
            sx={{
              display: {
                md: "none",
                lg: "inline",
              },
            }}
          >
            <LeftSection />
            <Divider
              sx={{
                m: 2,
              }}
            />
            <RightSection />
          </Box>
        </Grid>
        <Grid item md={6} sm={8} sx={{ mr: 2, mb: 2 }}>
          <MiddleSection />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Feed;
