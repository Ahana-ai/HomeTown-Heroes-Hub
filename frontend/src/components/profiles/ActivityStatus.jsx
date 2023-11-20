import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Divider,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import SuggestedPeople from "../feed/SuggestedPeople";

const ActivityStatus = ({ userData }) => {
  const navigate = useNavigate();

  const handleEditUser = () => {
    console.log(userData._id);
    navigate(`/edit/${userData._id}`);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        mt: {
          md: 15,
          sm: 0,
        },
        mb: 5,
        p: 2,
        borderRadius: "8px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bolder",
          marginBottom: 2,
          textAlign: "center",
        }}
      >
        Activity status
      </Typography>

      <Divider sx={{ width: "100%" }} />

      {/* Edit profile button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          startIcon={<EditIcon />}
          sx={{
            mb: 2,
            mt: 3,
            backgroundColor: "darkblue",
          }}
          onClick={handleEditUser}
        >
          Edit Profile
        </Button>
      </Box>

      {/* Profile completion status */}
      <Box sx={{ my: 2 }}>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
          Profile Completion
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CircularProgress
            variant="determinate"
            value={70}
            sx={{ width: "120px", height: "120px", mr: 1 }}
          />
          <Box>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              70%
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Suggested changes */}
      <Box sx={{ my: 2 }}>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
          Suggested Changes
        </Typography>
        <Chip label="Improve experience section" />
        {/* Add more chips as needed */}
      </Box>

      {/* Suggested people */}
      <SuggestedPeople />

      {/* Success rate */}
      <Box sx={{ my: 2 }}>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
          Success Rate
        </Typography>
        <CircularProgress
          variant="determinate"
          value={80}
          sx={{ width: "120px", height: "120px", mr: 1 }}
        />
        <Box>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            80%
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ActivityStatus;
