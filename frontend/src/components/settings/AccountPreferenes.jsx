import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Switch,
  Select,
  MenuItem,
} from "@mui/material";
import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import LaptopIcon from "@mui/icons-material/Laptop";
import PersonIcon from "@mui/icons-material/Person";
import FastForwardIcon from "@mui/icons-material/FastForward";
import TimelineIcon from "@mui/icons-material/Timeline";
import { deleteUser, logoutUser } from "../../store/slices/UserSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const AccountPreferenes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteUser(user._id)).then((response) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your profile has been deleted.",
            icon: "success",
          });
          const delay = (ms) => new Promise((res) => setTimeout(res, ms));
          delay(5000);
          dispatch(logoutUser()).then(navigate("/login"));
        }
      });
    });
  };

  const [user, setUserData] = useState({});

  useEffect(() => {
    const getUserData = () => {
      const userData = localStorage.getItem("user");
      if (userData) {
        setUserData(JSON.parse(userData));
      }
    };

    getUserData();
  }, [dispatch, user._id]);

  return (
    <Box>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Typography
        variant="h5"
        mb={3}
        textAlign="center"
        sx={{
          fontWeight: "bold",
          textTransform: "uppercase",
          color: "darkblue",
        }}
      >
        Account Preferences
      </Typography>
      <Divider mb={3} />
      <List
        sx={{
          width: "70%",
          margin: "auto",
        }}
      >
        {/* Profile Information */}
        <ListItem
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {/* <SettingsAccessibilityIcon
            sx={{ color: "grey", mb: 2, fontSize: "2rem" }}
          />
          <ListItemText
            primary="Profile Information"
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "darkblue",
              mb: 1,
            }}
          /> */}
          {/* Account Information */}
          <List sx={{ width: "80%" }}>
            <ListItem>
              <PersonIcon sx={{ color: "grey", mr: 2, fontSize: "2rem" }} />
              <ListItemText primary="Account Information" />
            </ListItem>
            {/* Analytics Data */}
            <ListItem>
              <TimelineIcon sx={{ color: "grey", mr: 2, fontSize: "2rem" }} />
              <ListItemText primary="Analytics Data" />
            </ListItem>
          </List>
        </ListItem>
        <Divider mb={3} />

        {/* Display */}
        <ListItem
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {/* <LaptopIcon sx={{ color: "grey", mb: 2, fontSize: "2rem" }} />
          <ListItemText
            primary="Display"
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "darkblue",
              mb: 1,
            }}
          /> */}
          {/* Dark Mode and Language Preference */}
          <List sx={{ width: "80%" }}>
            <ListItem>
              <ListItemText primary="Dark Mode" />
              <Switch /* Add switch state and onChange handler */ />
            </ListItem>
            <ListItem>
              <ListItemText primary="Language Preference" />
              <Select
                defaultValue={"english"}
              /* Add select state and onChange handler */
              >
                <MenuItem value="english">English</MenuItem>
                <MenuItem value="spanish">Spanish</MenuItem>
              </Select>
            </ListItem>
          </List>
        </ListItem>
        <Divider mb={3} />

        {/* General Preferences */}
        <ListItem
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {/* <FastForwardIcon sx={{ color: "grey", mb: 2, fontSize: "2rem" }} />
          <ListItemText
            primary="General Preferences"
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "darkblue",
              mb: 1,
            }}
          /> */}
          {/* Autoplay Videos, Sound Effects, and more */}
          <List sx={{ width: "80%" }}>
            <ListItem>
              <ListItemText primary="Autoplay Videos" />
              <Switch /* Add switch state and onChange handler */ />
            </ListItem>
            <ListItem>
              <ListItemText primary="Sound Effects" />
              <Switch /* Add switch state and onChange handler */ />
            </ListItem>
            {/* Add more general preferences */}
          </List>
        </ListItem>
        <Divider mb={3} />

        {/* Deactivated Account */}
        <ListItem button>
          <CancelIcon sx={{ color: "darkred", mr: 2 }} />
          <ListItemText
            primary="Deactivated Account"
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "darkblue",
            }}
          />
        </ListItem>
        <Divider mb={3} />

        {/* Delete Account */}
        <ListItem button onClick={handleDelete}>
          <DeleteIcon sx={{ color: "darkred", mr: 2 }} />
          <ListItemText
            primary="Delete Account"
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "darkblue",
            }}
          />
        </ListItem>
        <Divider mb={3} />
      </List>
    </Box>
  );
};

export default AccountPreferenes;