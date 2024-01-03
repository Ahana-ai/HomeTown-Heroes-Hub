import { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { CheckCircle, Cancel } from "@mui/icons-material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Network = () => {
  const [invitations, setInvitations] = useState([
    {
      id: 1,
      name: "John Doe",
      title: "Software Engineer",
    },
    {
      id: 2,
      name: "Alice Johnson",
      title: "Product Manager",
    },
    {
      id: 3,
      name: "John Doe",
      title: "Software Engineer",
    },
    {
      id: 4,
      name: "Alice Johnson",
      title: "Product Manager",
    },
    {
      id: 5,
      name: "John Doe",
      title: "Software Engineer",
    },
    {
      id: 6,
      name: "Alice Johnson",
      title: "Product Manager",
    },
  ]);

  const [recentlyVisited, setRecentlyVisited] = useState([
    {
      id: 1,
      name: "LinkedIn Page 1",
      type: "Page",
    },
    {
      id: 2,
      name: "John Doe's Profile",
      type: "Account",
    },
    {
      id: 3,
      name: "LinkedIn Page 2",
      type: "Page",
    },
    {
      id: 4,
      name: "Alice's Profile",
      type: "Account",
    },
  ]);

  const handleAccept = (invitationId) => {
    // Handle accepting the invitation
    toast.success(`Accepted invitation ${invitationId}`, { position: "top-right" });
    // You can add your logic here to update state or make an API call
  };

  const handleDecline = (invitationId) => {
    // Handle declining the invitation
    toast.error(`Declined invitation ${invitationId}`, { position: "top-right" });
    // You can add your logic here to update state or make an API call
  };

  return (
    <Box
      sx={{
        mt: 14,
        ml: 5,
        mr: 5,
        mb: 5,
        display: "flex",
        backgroundColor: "#fff",
        p: 3,
        textAlign: "center",
        borderRadius: 5,
        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box
        sx={{
          mr: 5,
          width: "25%",
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 2 }}>Recently Visited</Typography>
        <List>
          {recentlyVisited.map((visited) => (
            <ListItem key={visited.id} sx={{ padding: 1 }}>
              <ListItemText primary={visited.name} secondary={visited.type} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ width: "75%" }}>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>Invitations</Typography>
        <List>
          {invitations.map((invitation) => (
            <div key={invitation.id}>
              <ListItem alignItems="flex-start" sx={{ padding: 2, alignItems: "center" }}>
                <Avatar sx={{ mr: 2 }} />
                <ListItemText
                  primary={invitation.name}
                  secondary={invitation.title}
                  sx={{ flexGrow: 1 }}
                />
                <IconButton
                  color="primary"
                  onClick={() => handleAccept(invitation.id)}
                  sx={{ marginLeft: "auto" }}
                >
                  <CheckCircle />
                </IconButton>
                <IconButton
                  color="secondary"
                  onClick={() => handleDecline(invitation.id)}
                >
                  <Cancel />
                </IconButton>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default Network;