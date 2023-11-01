import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Avatar,
} from "@mui/material";

const NotificationComponent = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "John Doe sent you a connection request",
      time: "2h ago",
      avatar: "URL_TO_AVATAR_IMAGE",
    },
    {
      id: 2,
      message: "Alice Johnson commented on your post",
      time: "5h ago",
      avatar: "URL_TO_AVATAR_IMAGE",
    },
    {
      id: 3,
      message: "John Doe sent you a connection request",
      time: "2h ago",
      avatar: "URL_TO_AVATAR_IMAGE",
    },
    {
      id: 4,
      message: "Alice Johnson commented on your post",
      time: "5h ago",
      avatar: "URL_TO_AVATAR_IMAGE",
    },
    {
      id: 5,
      message: "John Doe sent you a connection request",
      time: "2h ago",
      avatar: "URL_TO_AVATAR_IMAGE",
    },
    {
      id: 6,
      message: "Alice Johnson commented on your post",
      time: "5h ago",
      avatar: "URL_TO_AVATAR_IMAGE",
    },
  ]);

  return (
    <Box
      sx={{
        margin: "0 10%",
        textAlign: "center",
        mt: 15,
        backgroundColor: "#fff",
        p: 3,
        borderRadius: "10px",
        width: "60%",
        margin: "auto"
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="contained" color="primary">
          My Posts
        </Button>
        <Button variant="contained" color="primary">
          Mentions
        </Button>
        <Button variant="contained" color="primary">
          Notifications
        </Button>
      </Box>
      <Divider
        sx={{
          mt: 2,
        }}
      />
      <Box sx={{ mt: 3 }}>
        <Button variant="outlined" color="primary">
          Change Notification Settings
        </Button>
      </Box>
      <Divider
        sx={{
          mt: 2,
        }}
      />
      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" gutterBottom>
          Notifications
        </Typography>
        <List>
          {notifications.map((notification) => (
            <Box
              key={notification.id}
              sx={{
                textAlign: "center",
              }}
            >
              <ListItem
                sx={{
                  textAlign: "center",
                }}
              >
                <Avatar />
                <ListItemText
                  primary={notification.message}
                  secondary={notification.time}
                />
              </ListItem>
              <Divider />
            </Box>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default NotificationComponent;
