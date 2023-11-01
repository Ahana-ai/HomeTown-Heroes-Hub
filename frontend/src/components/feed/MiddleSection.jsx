import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Avatar,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import about from "../../images/about.jpg";

const MiddleSection = () => {
  // Sample data for feed posts
  const feedData = [
    {
      id: 1,
      author: "John Doe",
      avatar: "avatar1.jpg",
      image: about,
      content: "Sample post content.",
    },
    {
      id: 2,
      author: "John Doe",
      avatar: "avatar1.jpg",
      image: about,
      content: "Sample post content.",
    },
    {
      id: 3,
      author: "John Doe",
      avatar: "avatar1.jpg",
      image: about,
      content: "Sample post content.",
    },
  ];

  return (
    <Box
      sx={{
        p: 2,
        height: "100%",
      }}
    >
      {feedData.map((post) => (
        <Card
          key={post.id}
          sx={{
            mb: 2,
            borderRadius: "10px",
          }}
        >
          <CardHeader
            avatar={<Avatar alt={post.author} src={post.avatar} />}
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={post.author}
          />
          <CardMedia
            component="img"
            height="194"
            image={post.image}
            alt="Post Image"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {post.content}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="like">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="comment">
              <ChatBubbleIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default MiddleSection;
