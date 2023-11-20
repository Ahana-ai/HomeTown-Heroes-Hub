import React from "react";
import {
  Avatar,
  Box,
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

const CombinedComponent = () => {
  const navigate = useNavigate();

  const combinedData = [
    {
      name: "Alice",
      avatar: "avatarAlice.jpg",
      endorsement: 75,
      id: "alice123",
    },
    { name: "Bob", avatar: "avatarBob.jpg", endorsement: 85, id: "bob456" },
    { name: "John Doe", avatarUrl: "john_avatar.jpg", id: "john789" },
    { name: "Alice Twinkle", avatarUrl: "alice_avatar.jpg", id: "alice456" },
  ];

  const handleProfileClick = (profileId) => {
    navigate(`../profile/${profileId}`);
  };

  return (
    <Box mt={2}>
      <Paper sx={{ p: 2 }} elevation={10}>
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
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  Avatar
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    wordBreak: "normal",
                  }}
                >
                  Endorsement
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {combinedData.map((data, index) => (
                <TableRow
                  key={index}
                  onClick={() => handleProfileClick(data.id)}
                  style={{ cursor: "pointer" }}
                >
                  <TableCell>{data.name}</TableCell>
                  <TableCell>
                    <Avatar
                      alt={data.name}
                      src={data.avatar || data.avatarUrl}
                    />
                  </TableCell>
                  <TableCell>{data.endorsement || "View Profile"}</TableCell>
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
