import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Modal,
  Typography,
  styled,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SuggestedPeople from "../feed/SuggestedPeople";
import SuggestedProfileChanges from "./SuggestedProfileChanges";
import { useState } from "react";
import EditForm from "../editForm/EditForm";

const ScrollableBox = styled(Box)(({ theme }) => ({
  overflowY: "auto",
  maxHeight: "80vh",
}));

const ActivityStatus = ({ userData }) => {

  const [openEditModal, setOpenEditModal] = useState(false);

  const handleEditUser = () => {
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
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
      <SuggestedProfileChanges />

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
      {/* Edit Profile Modal */}
      <Modal open={openEditModal} onClose={handleCloseEditModal}>
        <ScrollableBox
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <EditForm onClose={handleCloseEditModal} userData={userData} />
        </ScrollableBox>
      </Modal>
    </Box>
  );
};

export default ActivityStatus;
