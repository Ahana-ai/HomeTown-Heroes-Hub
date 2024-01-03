import { useEffect, useState } from "react";
import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  TextField,
  Typography,
  Avatar,
  Button,
} from "@mui/material";

const MessagingComponent = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [showHeader, setShowHeader] = useState(true);
  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    // Simulating an animation delay to hide the header after 3 seconds
    const timeoutId = setTimeout(() => {
      setShowHeader(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  // Dummy chat data
  const chats = [
    {
      id: 1,
      name: "John Doe",
      messages: [
        { id: 1, sender: "John Doe", content: "Hello there!" },
        { id: 2, sender: "You", content: "Hi John!" },
      ],
    },
    {
      id: 2,
      name: "Alice",
      messages: [
        { id: 1, sender: "Alice", content: "How are you?" },
        { id: 2, sender: "You", content: "I'm good, thanks!" },
      ],
    },
    {
      id: 3,
      name: "Bob",
      messages: [
        { id: 1, sender: "Bob", content: "Nice to meet you." },
        { id: 2, sender: "You", content: "Likewise!" },
      ],
    },
    {
      id: 4,
      name: "Jane",
      messages: [
        { id: 1, sender: "Jane", content: "What do you do?" },
        { id: 2, sender: "You", content: "I'm a software developer." },
      ],
    },
    {
      id: 5,
      name: "Michael",
      messages: [
        { id: 1, sender: "Michael", content: "Let's catch up!" },
        { id: 2, sender: "You", content: "Sure, when and where?" },
      ],
    },
    {
      id: 6,
      name: "Sophie",
      messages: [
        { id: 1, sender: "Sophie", content: "Hey, how's it going?" },
        { id: 2, sender: "You", content: "I'm doing well, thanks!" },
      ],
    },
    {
      id: 7,
      name: "David",
      messages: [
        { id: 1, sender: "David", content: "Hi, nice to chat with you." },
        { id: 2, sender: "You", content: "Likewise!" },
      ],
    },
    {
      id: 8,
      name: "Eva",
      messages: [
        { id: 1, sender: "Eva", content: "How's your day going?" },
        { id: 2, sender: "You", content: "It's going well, thanks for asking!" },
      ],
    },
  ];

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
  };

  const handleSendMessage = () => {
    // Implement logic to send the message
    if (selectedChat) {
      const newMessage = { id: selectedChat.messages.length + 1, sender: "You", content: messageInput };
      setSelectedChat((prevChat) => ({
        ...prevChat,
        messages: [...prevChat.messages, newMessage],
      }));
      setMessageInput("");
    }
  };

  return (
    <Box sx={{ display: "flex", mt: 15, ml: 20, mr: 20, mb: 5 }}>
      <Grid container>
        <Grid item md={4}>
          <List sx={{ backgroundColor: "#f0f0f0", height: "80vh", overflow: "auto" }}>
            {chats.map((chat) => (
              <ListItem
                key={chat.id}
                sx={{
                  backgroundColor: selectedChat === chat ? "#e0e0e0" : "inherit",
                  cursor: "pointer",
                }}
                onClick={() => handleChatSelect(chat)}
              >
                <ListItemAvatar>
                  <Avatar alt={chat.name} src={`https://placekitten.com/50/50?${chat.id}`} />
                </ListItemAvatar>
                <ListItemText primary={chat.name} secondary={chat.messages[chat.messages.length - 1]?.content || ""} />
                <Divider />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item md={8} sx={{ position: "relative" }}>
          {showHeader && (
            <Paper elevation={3} sx={{ border: "1px solid #ccc", padding: "20px", height: "75vh", overflow: "auto" }}>
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "#4CAF50" }}>
                Welcome! Open a chat to start messaging.
              </Typography>
            </Paper>
          )}
          {selectedChat && !showHeader && (
            <Paper elevation={3} sx={{ border: "1px solid #ccc", padding: "20px", height: "75vh", overflow: "auto" }}>
              <Typography variant="h5" sx={{ fontWeight: "bold", color: "#4CAF50", marginBottom: 2 }}>{selectedChat.name}</Typography>
              <Divider sx={{ mb: 3 }} />
              {selectedChat.messages.map((message) => (
                <Box key={message.id} sx={{ marginBottom: 8, textAlign: message.sender === "You" ? "right" : "left" }}>
                  <Typography variant="body1" sx={{ fontSize: "1rem", backgroundColor: message.sender === "You" ? "#DCF8C6" : "#ECE5DD", padding: 2, borderRadius: 8, display: "inline-block" }}>
                    {message.content}
                  </Typography>
                </Box>
              ))}
              <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", alignItems: "center", padding: "10px" }}>
                <TextField
                  label="Type a message"
                  variant="outlined"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  sx={{ flex: 1, marginRight: 1 }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSendMessage}
                  sx={{ backgroundColor: "#128C7E" }}
                >
                  Send
                </Button>
              </Box>
            </Paper>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default MessagingComponent;
