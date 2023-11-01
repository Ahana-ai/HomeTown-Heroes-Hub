import { useState } from "react";
import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const MessagingComponent = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  // Dummy chat data
  const chats = [
    { id: 1, name: "John Doe", message: "Hello there!" },
    { id: 2, name: "Alice", message: "How are you?" },
    { id: 3, name: "Bob", message: "Nice to meet you." },
    { id: 4, name: "Jane", message: "What do you do?" },
    { id: 5, name: "Michael", message: "Lets catch up!" },
  ];

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <Box
      sx={{
        display: "flex",
        mt: 15,
        ml: 20,
        mr: 20,
      }}
    >
      <Grid container>
        <Grid
          item
          md={4}
          sx={{
            backgroundColor: "#fff",
          }}
        >
          <List>
            {chats.map((chat) => (
              <ListItem
                key={chat.id}
                sx={{
                  backgroundColor:
                    selectedChat === chat ? "#f0f0f0" : "inherit",
                }}
                onClick={() => handleChatSelect(chat)}
              >
                <ListItemText primary={chat.name} secondary={chat.message} />
                <Divider />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item md={8}>
          {selectedChat && (
            <Paper
              elevation={3}
              sx={{
                border: "1px solid #ccc",
                padding: "20px",
                height: "80vh",
                overflow: "auto",
              }}
            >
              <h3>{selectedChat.name}</h3>
              {selectedChat.messages.map((message, index) => (
                <Typography key={index}>{message}</Typography>
              ))}
              <Box
                sx={{
                  backgroundColor: "#fff",
                  height: "100%",
                }}
              >
                <Typography>hii</Typography>
              </Box>
              <TextField
                label="Type a message"
                variant="outlined"
                sx={{ width: "100%", marginTop: 2 }}
              />
            </Paper>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default MessagingComponent;
