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

const CombinedComponent = () => {
  const navigate = useNavigate();

  const combinedData = [
    {
      name: "Alice",
      avatar: "avatarAlice.jpg",
      id: "alice123",
    },
    { name: "Bob", avatar: "avatarBob.jpg", id: "bob456" },
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
              </TableRow>
            </TableHead>
            <Divider sx={{ width: "100%" }} />
            <TableBody>
              {combinedData.map((data, index) => (
                <TableRow
                  key={index}
                  onClick={() => handleProfileClick(data.id)}
                  style={{ cursor: "pointer" }}
                >
                  <TableCell
                    sx={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      alt={data.name}
                      src={data.avatar || data.avatarUrl}
                      sx={{
                        mr: 2,
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
