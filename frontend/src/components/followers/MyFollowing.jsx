import {
  Box,
  Modal,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const MyFollowing = ({ open, handleClose }) => {
  // Sample followers data
  const followers = ["Follower 1", "Follower 2", "Follower 3"];

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "white",
          boxShadow: 24,
          p: 4,
          width: "35%",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            marginBottom: 3,
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          People I Follow
        </Typography>
        <Divider />

        <List>
          {followers.map((follower, index) => (
            <Box>
              <ListItem
                key={index}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <ListItemText primary={follower} />
                <Box>
                  <IconButton color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error">
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </ListItem>
              <Divider sx={{ mt: 0 }} />
            </Box>
          ))}
        </List>
      </Box>
    </Modal>
  );
};

export default MyFollowing;
