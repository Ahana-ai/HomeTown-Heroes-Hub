import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Switch,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SecurityIcon from "@mui/icons-material/Security";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LockIcon from "@mui/icons-material/Lock";
import CampaignIcon from "@mui/icons-material/Campaign";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Settings = () => {
  const [selectedOption, setSelectedOption] = useState("account");

  const renderContent = () => {
    switch (selectedOption) {
      case "account":
        return (
          <>
            <Typography variant="h5" mb={3} textAlign="center">
              Account Preferences
            </Typography>
            <Divider mb={3} />
            <List>
              <ListItem>
                <ListItemText primary="Profile Information" />
                <List>
                  <ListItem>
                    <ListItemText primary="Account Information" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Analytics Data" />
                  </ListItem>
                </List>
              </ListItem>
              <ListItem>
                <ListItemText primary="Display" />
                <List>
                  <ListItem>
                    <ListItemText primary="Dark Mode" />
                    <Switch /* Add switch state and onChange handler */ />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Language Preference" />
                    <Select /* Add select state and onChange handler */>
                      <MenuItem value="english">English</MenuItem>
                      <MenuItem value="spanish">Spanish</MenuItem>
                    </Select>
                  </ListItem>
                </List>
              </ListItem>
              <ListItem>
                <ListItemText primary="General Preferences" />
                <List>
                  <ListItem>
                    <ListItemText primary="Autoplay Videos" />
                    <Switch /* Add switch state and onChange handler */ />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Sound effects" />
                    <Switch /* Add switch state and onChange handler */ />
                  </ListItem>
                  {/* Add more general preferences */}
                </List>
              </ListItem>
              <ListItem>
                <ListItemText primary="Deactivated Account" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Delete Account" />
              </ListItem>
            </List>
          </>
        );
      case "security":
        return (
          <>
            {/* Sign in & Security content */}
            {/* ... */}
          </>
        );
      case "visibility":
        return (
          <>
            {/* Visibility content */}
            {/* ... */}
          </>
        );
      case "privacy":
        return (
          <>
            {/* Data Privacy content */}
            {/* ... */}
          </>
        );
      case "advertising":
        return (
          <>
            {/* Advertising Data content */}
            {/* ... */}
          </>
        );
      case "notifications":
        return (
          <>
            {/* Notifications content */}
            {/* ... */}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Box display="flex" minHeight="100vh" bgcolor="#f0f2f5">
      {/* Left Sidebar */}
      <Box width={250} bgcolor="#fff" p={2} boxShadow={2}>
        <List>
          <ListItem button onClick={() => setSelectedOption("account")}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Account Preferences" />
            <IconButton edge="end" onClick={() => setSelectedOption("account")}>
              <ArrowForwardIcon />
            </IconButton>
          </ListItem>
          <ListItem button onClick={() => setSelectedOption("security")}>
            <ListItemIcon>
              <SecurityIcon />
            </ListItemIcon>
            <ListItemText primary="Sign in & Security" />
            <IconButton
              edge="end"
              onClick={() => setSelectedOption("security")}
            >
              <ArrowForwardIcon />
            </IconButton>
          </ListItem>
          <ListItem button onClick={() => setSelectedOption("visibility")}>
            <ListItemIcon>
              <VisibilityIcon />
            </ListItemIcon>
            <ListItemText primary="Visibility" />
            <IconButton
              edge="end"
              onClick={() => setSelectedOption("visibility")}
            >
              <ArrowForwardIcon />
            </IconButton>
          </ListItem>
          <ListItem button onClick={() => setSelectedOption("privacy")}>
            <ListItemIcon>
              <LockIcon />
            </ListItemIcon>
            <ListItemText primary="Data Privacy" />
            <IconButton edge="end" onClick={() => setSelectedOption("privacy")}>
              <ArrowForwardIcon />
            </IconButton>
          </ListItem>
          <ListItem button onClick={() => setSelectedOption("advertising")}>
            <ListItemIcon>
              <CampaignIcon />
            </ListItemIcon>
            <ListItemText primary="Advertising Data" />
            <IconButton
              edge="end"
              onClick={() => setSelectedOption("advertising")}
            >
              <ArrowForwardIcon />
            </IconButton>
          </ListItem>
          <ListItem button onClick={() => setSelectedOption("notifications")}>
            <ListItemIcon>
              <NotificationsIcon />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
            <IconButton
              edge="end"
              onClick={() => setSelectedOption("notifications")}
            >
              <ArrowForwardIcon />
            </IconButton>
          </ListItem>
        </List>
      </Box>

      {/* Right Box */}
      <Box p={4} flexGrow={1}>
        <Paper elevation={3} sx={{ p: 4, minHeight: 400 }}>
          {renderContent()}
        </Paper>
      </Box>
    </Box>
  );
};

export default Settings;
