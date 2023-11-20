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
    <Box sx={{ mt: 15, ml: 2, mr: 2 }}>
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{ display: { md: "none" }, mb: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={3}>
          {/* Drawer for small screens */}
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            sx={{ display: { xs: "block", md: "none" } }}
          >
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
          {/* LeftSection and RightSection for medium and large screens */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
              marginLeft: "20px",
              width: "100%",
              height: "100%",
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
        <Grid item xs={12} md={6} sx={{ margin: "auto" }}>
          {/* MiddleSection for all screens */}
          <MiddleSection />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Feed;
