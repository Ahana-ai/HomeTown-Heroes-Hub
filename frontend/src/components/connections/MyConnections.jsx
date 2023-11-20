import React, { useState, useEffect } from "react";
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
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { getUserDetails } from "../../store/slices/UserSlice";
import {
  getConnections,
  deleteConnection,
} from "../../store/slices/ConnectSlice";

const MyConnections = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const [connectionsDetails, setConnectionsDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const currentUser = JSON.parse(localStorage.getItem("user"));

  const fetchConnections = async () => {
    try {
      const response = await dispatch(getConnections(currentUser._id));

      if (response.payload) {
        const connectionIds = response.payload.map(
          (connection) => connection._id
        );

        if (Array.isArray(connectionIds) && connectionIds.length > 0) {
          const updatedDetails = await Promise.all(
            response.payload?.map(async (connection, index) => {
              const userResponse = await dispatch(
                getUserDetails(connection.connectionId)
              );
              if (userResponse.payload) {
                return {
                  id: connection._id,
                  name: userResponse.payload.name,
                };
              }
              return {
                id: connection._id,
                name: `Connection ${index + 1}`,
              };
            })
          );

          setConnectionsDetails(updatedDetails);
        } else {
          setConnectionsDetails([]);
        }
      }
    } catch (error) {
      console.error("Error fetching connections: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, [currentUser._id, dispatch]);

  const handleDeleteClick = async (connectionId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await dispatch(deleteConnection(connectionId));
        console.log(response);

        if (response.payload && response.meta.requestStatus === "fulfilled") {
          // Fetch connections again after successful deletion
          await fetchConnections();
          Swal.fire("Removed!", "The connection has been removed.", "success");
        } else {
          Swal.fire("Error", "Failed to remove the connection.", "error");
        }
      } catch (error) {
        console.error("Error deleting connection:", error);
      }
    }
  };

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
          My connections
        </Typography>
        <Divider />

        <List>
          {loading ? (
            <Typography variant="body1">Loading...</Typography>
          ) : connectionsDetails.length === 0 ? (
            <Typography variant="body1">No connections yet.</Typography>
          ) : (
            connectionsDetails?.map((connection) => (
              <Box key={connection.id}>
                <ListItem
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <ListItemText primary={connection.name} />
                  <Box>
                    <IconButton
                      color="error"
                      onClick={() => handleDeleteClick(connection.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </ListItem>
                <Divider sx={{ mt: 0 }} />
              </Box>
            ))
          )}
        </List>
      </Box>
    </Modal>
  );
};

export default MyConnections;
