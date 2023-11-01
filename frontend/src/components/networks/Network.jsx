import { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Divider,
  IconButton,
} from "@mui/material";
import { CheckCircle, Cancel } from "@mui/icons-material";

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
    console.log(`Accepted invitation ${invitationId}`);
  };

  const handleDecline = (invitationId) => {
    // Handle declining the invitation
    console.log(`Declined invitation ${invitationId}`);
  };

  return (
    <Box
      sx={{
        mt: 15,
        ml: 10,
        mr: 10,
        display: "flex",
        backgroundColor: "#fff",
        p: 3,
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          mr: 5,
          width: "25%",
        }}
      >
        <h2>Recently Visited</h2>
        <List>
          {recentlyVisited.map((visited) => (
            <ListItem key={visited.id}>
              <ListItemText primary={visited.name} secondary={visited.type} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ width: "75%" }}>
        <h2>Invitations</h2>
        <List>
          {invitations.map((invitation) => (
            <div key={invitation.id}>
              <ListItem alignItems="flex-start">
                <Avatar sx={{ mr: 2 }} />
                <ListItemText
                  primary={invitation.name}
                  secondary={invitation.title}
                />
                <IconButton
                  color="primary"
                  onClick={() => handleAccept(invitation.id)}
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
    </Box>
  );
};

export default Network;
