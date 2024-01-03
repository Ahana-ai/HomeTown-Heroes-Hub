import { Fragment, useState } from "react";
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
        margin: "auto",
        textAlign: "center",
        mt: 14,
        mb: 5,
        backgroundColor: "#fff",
        p: 3,
        borderRadius: 5,
        width: "60%",
        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 2,
        }}
      >
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
      <Divider />
      <Box sx={{ mt: 2 }}>
        <Button variant="outlined" color="primary">
          Change Notification Settings
        </Button>
      </Box>
      <Divider sx={{ mt: 2 }} />
      <Box sx={{ mt: 2 }}>
        <Typography variant="h5" gutterBottom>
          Notifications
        </Typography>
        <List sx={{ margin: "auto" }}>
          {notifications.map((notification) => (
            <Fragment key={notification.id}>
              <ListItem>
                <Avatar
                  src={notification.avatar}
                  alt="Avatar"
                  sx={{ marginLeft: "10%", marginRight: 7 }}
                />
                <ListItemText
                  primary={notification.message}
                  secondary={notification.time}
                  sx={{ textAlign: "left" }}
                />
              </ListItem>
              <Divider />
            </Fragment>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default NotificationComponent;
