import React from "react";
import {
  Avatar,
  Box,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CombinedComponent = () => {
  const navigate = useNavigate();

  const combinedData = [
    {
      name: "Alice", avatar: "avatarAlice.jpg",
    },
    { name: "Bob", avatar: "avatarBob.jpg" },
    { name: "John Doe", avatarUrl: "john_avatar.jpg" },
    { name: "Alice Twinkle", avatarUrl: "alice_avatar.jpg" },
  ];

  const handleProfileClick = (profileId) => {
    if (profileId)
      navigate(`../profile/${profileId}`);
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "User not found!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  return (
    <Box mt={2}>
      <Paper
        sx={{
          padding: 2,
          borderRadius: 5,
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        }}
        elevation={10}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "darkblue",
          }}
        >
          Suggested People For You
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    borderBottom: "2px solid #ccc",
                  }}
                >
                  Name
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {combinedData.map((data, index) => (
                <TableRow
                  key={index}
                  onClick={() => handleProfileClick(data.id)}
                  style={{ cursor: "pointer", borderBottom: "1px solid #eee" }}
                >
                  <TableCell
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      alt={data.name}
                      src={data.avatar || data.avatarUrl}
                      sx={{
                        marginRight: 2,
                        width: 40,
                        height: 40,
                      }}
                    />
                    {data.name}
                  </TableCell>
                  <TableCell>{"View Profile"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default CombinedComponent;
